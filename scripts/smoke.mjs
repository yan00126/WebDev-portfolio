// Post-deploy smoke test. Usage:
//   npm run smoke -- https://deploy-preview-5--your-site.netlify.app
//   npm run smoke -- https://yanfei.dev --chat     (also asks one real question; costs a fraction of a cent)
// Without --chat nothing here reaches OpenAI, so it is free and does not use rate-limit slots.

const args = process.argv.slice(2);
const base = (args.find((a) => a.startsWith("http")) || "").replace(/\/$/, "");
const withChat = args.includes("--chat");
if (!base) {
  console.error("Usage: node scripts/smoke.mjs <base-url> [--chat]");
  process.exit(2);
}

const origin = new URL(base).origin;
const results = [];
const bodies = [];

async function check(name, fn) {
  try {
    const detail = await fn();
    results.push({ name, ok: true, detail: detail || "" });
  } catch (error) {
    results.push({ name, ok: false, detail: error.message });
  }
}

function expectStatus(res, status, hint = "") {
  if (res.status !== status) throw new Error(`expected ${status}, got ${res.status}${hint ? ` (${hint})` : ""}`);
}

async function post(body, headers = {}) {
  const res = await fetch(`${base}/api/chat`, {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body,
    redirect: "manual",
  });
  const text = await res.text();
  bodies.push(text);
  return { status: res.status, text };
}

await check("home page loads with the right title", async () => {
  const res = await fetch(`${base}/`);
  expectStatus(res, 200);
  const html = await res.text();
  if (!/<title>[^<]*Fei Yan[^<]*<\/title>/.test(html)) throw new Error("title does not contain 'Fei Yan'");
  const script = html.match(/src="(\/assets\/index-[^"]+\.js)"/)?.[1];
  if (!script) throw new Error("no app bundle referenced");
  expectStatus(await fetch(`${base}${script}`), 200, "app bundle");
});

for (const path of ["/favicon.svg", "/favicon-32.png", "/apple-touch-icon.png"]) {
  await check(`${path} is served`, async () => expectStatus(await fetch(`${base}${path}`), 200));
}

await check("GET /api/chat is rejected (405)", async () => {
  const res = await fetch(`${base}/api/chat`);
  bodies.push(await res.text());
  expectStatus(res, 405);
});

await check("POST without Origin is rejected (403)", async () => {
  expectStatus(await post(JSON.stringify({ message: "hi" })), 403);
});

await check("POST from another site is rejected (403)", async () => {
  expectStatus(await post(JSON.stringify({ message: "hi" }), { origin: "https://evil.example" }), 403);
});

await check("function is configured (OPENAI_API_KEY is set)", async () => {
  // Invalid JSON is rejected before any model call, so this costs nothing.
  const res = await post("{", { origin });
  if (res.status === 503) throw new Error("503: OPENAI_API_KEY is missing in this deploy's environment variables");
  expectStatus(res, 400);
});

await check("over-long message is rejected (400)", async () => {
  expectStatus(await post(JSON.stringify({ message: "x".repeat(1001) }), { origin }), 400);
});

await check("oversized body is rejected (413)", async () => {
  expectStatus(await post("x".repeat(20_000), { origin }), 413);
});

if (withChat) {
  await check("real question gets an answer", async () => {
    const started = Date.now();
    const res = await post(JSON.stringify({ message: "In one sentence, what does Fei do?" }), { origin });
    expectStatus(res, 200, res.text.slice(0, 120));
    const reply = JSON.parse(res.text).reply;
    if (typeof reply !== "string" || reply.length < 10) throw new Error("empty reply");
    return `${Date.now() - started} ms: ${reply.slice(0, 80)}`;
  });
}

await check("no response leaks an API key", async () => {
  const leaked = bodies.find((b) => /sk-[A-Za-z0-9_-]{8,}/.test(b));
  if (leaked) throw new Error("a response contains something that looks like an API key");
});

const width = Math.max(...results.map((r) => r.name.length));
for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.name.padEnd(width)}  ${r.detail}`);
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} passed against ${base}`);
process.exit(failed ? 1 : 0);
