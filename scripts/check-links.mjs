// Checks that every project link on the site really opens for a visitor.
// Catches pages that crash (5xx), disappear (404) or redirect to a login wall.
// Usage: npm run check:links   (needs internet; not part of `npm test` so a client site being down never blocks a deploy)
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/data.jsx", import.meta.url), "utf8");
const urls = [...new Set([...source.matchAll(/(?:url|github):\s*"(https:\/\/[^"]+)"/g)].map((m) => m[1]))];

async function check(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20_000),
      headers: { "user-agent": "portfolio-link-check" },
    });
    const final = new URL(res.url);
    if (!res.ok) return { url, ok: false, detail: `HTTP ${res.status}` };
    if (/login|sign-?in|sso/i.test(final.pathname + final.hostname) && final.host !== new URL(url).host) {
      return { url, ok: false, detail: `redirects to a login page (${final.host})` };
    }
    return { url, ok: true, detail: `HTTP ${res.status}` };
  } catch (error) {
    return { url, ok: false, detail: error.name === "TimeoutError" ? "timed out" : error.message };
  }
}

const results = await Promise.all(urls.map(check));
const width = Math.max(...results.map((r) => r.url.length));
for (const r of results) console.log(`${r.ok ? "OK  " : "FAIL"}  ${r.url.padEnd(width)}  ${r.detail}`);
const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} links open`);
process.exit(failed.length ? 1 : 0);
