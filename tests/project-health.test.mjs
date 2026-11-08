import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { buildReference } from "../scripts/build-reference.mjs";
import reference from "../netlify/functions/chat/reference.mjs";

const root = new URL("..", import.meta.url).pathname;

function walk(dir, skip) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (skip.has(name)) return [];
    return statSync(path).isDirectory() ? walk(path, skip) : [path];
  });
}

describe("chat reference", () => {
  it("generated reference.mjs matches chat-reference/ (run `npm run build` to regenerate)", () => {
    expect(reference).toBe(buildReference());
  });

  it("is a sensible size for a per-question prompt", () => {
    expect(reference.length).toBeGreaterThan(2000);
    expect(reference.length).toBeLessThan(30_000);
  });
});

describe("repository hygiene", () => {
  const skip = new Set(["node_modules", "dist", ".git", "package-lock.json", "tests", ".netlify"]);
  const files = walk(root, skip).filter((f) => !/\.(webp|png|jpg|ico|svg)$/i.test(f));

  it("contains no API keys or tokens", () => {
    const patterns = [/sk-[A-Za-z0-9_-]{32,}/, /hf_[A-Za-z0-9]{30,}/, /ghp_[A-Za-z0-9]{30,}/, /-----BEGIN [A-Z ]*PRIVATE KEY-----/];
    const hits = files.flatMap((f) => {
      const text = readFileSync(f, "utf8");
      return patterns.filter((p) => p.test(text)).map((p) => `${relative(root, f)} matches ${p}`);
    });
    expect(hits).toEqual([]);
  });

  it("does not commit .env files", () => {
    expect(files.filter((f) => /(^|\/)\.env(\..*)?$/.test(f) && !f.endsWith(".example"))).toEqual([]);
  });

  it("has no leftover Gradio or Hugging Face calls in the site code", () => {
    const code = walk(join(root, "src"), skip).map((f) => readFileSync(f, "utf8")).join("\n");
    expect(code).not.toMatch(/gradio|hf\.space/i);
  });

  it("keeps removed wording out of the page", () => {
    const page = [...walk(join(root, "src"), skip), join(root, "index.html")].map((f) => readFileSync(f, "utf8")).join("\n");
    expect(page).not.toMatch(/algonquin/i);
    expect(page).not.toMatch(/software engineering student/i);
  });
});

describe("deploy config", () => {
  it("netlify.toml builds with tests first and registers the functions folder", () => {
    const toml = readFileSync(join(root, "netlify.toml"), "utf8");
    expect(toml).toMatch(/command\s*=\s*"npm test && npm run build"/);
    expect(toml).toMatch(/publish\s*=\s*"dist"/);
    expect(toml).toMatch(/directory\s*=\s*"netlify\/functions"/);
  });

  it("index.html has the metadata and favicons the site relies on", () => {
    const html = readFileSync(join(root, "index.html"), "utf8");
    expect(html).toMatch(/<title>[^<]+<\/title>/);
    expect(html).toMatch(/name="description"/);
    for (const href of ["/favicon.svg", "/favicon-32.png", "/apple-touch-icon.png"]) {
      expect(html).toContain(href);
      expect(statSync(join(root, "public", href)).size).toBeGreaterThan(100);
    }
  });
});
