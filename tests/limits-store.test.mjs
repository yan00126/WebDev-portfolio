import { beforeEach, describe, expect, it, vi } from "vitest";

// Netlify Blobs is eventually consistent unless asked otherwise: a plain read can
// return an older value than the one just written. This fake store reproduces that
// (a plain read never sees writes), so the rate limit only works if the code
// asks for strong consistency.
const state = { data: new Map(), getOptions: [], storeOptions: [] };

vi.mock("@netlify/blobs", () => ({
  getStore: (options) => {
    state.storeOptions.push(options);
    return {
      get: async (key, opts = {}) => {
        state.getOptions.push(opts);
        return opts.consistency === "strong" ? state.data.get(key) ?? null : null;
      },
      setJSON: async (key, value) => {
        state.data.set(key, value);
      },
    };
  },
}));

process.env.OPENAI_API_KEY = "sk-test-not-a-real-key";
process.env.RATE_SALT = "test-salt";
const { default: handler } = await import("../netlify/functions/chat/index.mjs");

const ask = () =>
  handler(
    new Request("https://yanfei.dev/api/chat", {
      method: "POST",
      headers: { origin: "https://yanfei.dev", "content-type": "application/json" },
      body: JSON.stringify({ message: "hi" }),
    }),
    { ip: "198.51.100.7" }
  );

beforeEach(() => {
  state.data.clear();
  state.getOptions.length = 0;
  state.storeOptions.length = 0;
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => new Response(JSON.stringify({ choices: [{ finish_reason: "stop", message: { content: "ok" } }] }), { status: 200 }))
  );
});

describe("rate limit on Netlify Blobs", () => {
  it("asks for a strongly consistent store and strongly consistent reads", async () => {
    await ask();
    expect(state.storeOptions[0]).toMatchObject({ name: "chat-limits", consistency: "strong" });
    expect(state.getOptions.length).toBeGreaterThan(0);
    expect(state.getOptions.every((o) => o.consistency === "strong")).toBe(true);
  });

  it("still blocks the 6th question in a minute when plain reads would be stale", async () => {
    const statuses = [];
    for (let i = 0; i < 7; i++) statuses.push((await ask()).status);
    expect(statuses).toEqual([200, 200, 200, 200, 200, 429, 429]);
  });
});
