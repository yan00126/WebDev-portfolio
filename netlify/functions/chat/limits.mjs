import { createHash } from "node:crypto";

export const LIMITS = { perMinute: 5, perDay: 20, globalPerDay: 300 };

export const LIMIT_MESSAGES = {
  global: "The assistant has reached its daily limit. Please try again tomorrow.",
  daily: "You have reached today's question limit. Please try again tomorrow.",
  minute: "You're sending questions too quickly. Please wait a minute and try again.",
};

// Raw IPs are never stored: only a salted hash is used as the counter key.
export function hashIp(ip, salt) {
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

export function dayKey(now) {
  return new Date(now).toISOString().slice(0, 10);
}

export function memoryStore() {
  const data = new Map();
  return {
    async get(key) {
      return data.get(key) ?? null;
    },
    async setJSON(key, value) {
      data.set(key, value);
    },
  };
}

// Adapts a Netlify Blobs store to the small interface used below.
export function blobsStore(store) {
  return {
    get: (key) => store.get(key, { type: "json" }),
    setJSON: (key, value) => store.setJSON(key, value),
  };
}

// Reserves one question before the model is called. Not atomic across
// concurrent function instances, so the OpenAI project budget is the hard cap.
export async function checkLimits({ store, ipHash, now = Date.now(), limits = LIMITS }) {
  const day = dayKey(now);
  const totalKey = `${day}/total`;
  const ipKey = `${day}/ip/${ipHash}`;

  const total = (await store.get(totalKey)) || { n: 0 };
  if (total.n >= limits.globalPerDay) return { ok: false, reason: "global" };

  const record = (await store.get(ipKey)) || { n: 0, recent: [] };
  const recent = record.recent.filter((t) => now - t < 60_000);
  if (record.n >= limits.perDay) return { ok: false, reason: "daily" };
  if (recent.length >= limits.perMinute) return { ok: false, reason: "minute" };

  recent.push(now);
  await store.setJSON(ipKey, { n: record.n + 1, recent });
  await store.setJSON(totalKey, { n: total.n + 1 });
  return { ok: true };
}
