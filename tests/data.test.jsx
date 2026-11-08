import { describe, expect, it } from "vitest";
import { links, projects, skills } from "../src/data.jsx";

describe("projects", () => {
  it("have the required fields", () => {
    for (const p of projects) {
      expect(p.title, "title").toBeTruthy();
      expect(p.text, `${p.title} text`).toBeTruthy();
      expect(p.url || p.github, `${p.title} needs a live or code link`).toBeTruthy();
    }
  });

  it("use https links, and GitHub links point at this account", () => {
    for (const p of projects) {
      if (p.url) expect(p.url, `${p.title} url`).toMatch(/^https:\/\//);
      if (p.github) expect(p.github, `${p.title} github`).toMatch(/^https:\/\/github\.com\/yan00126\/[\w.-]+$/);
    }
  });

  it("never links to Vercel preview URLs that sit behind a login", () => {
    for (const p of projects) {
      expect(p.url, p.title).not.toMatch(/-[a-z0-9]{9}-[a-z0-9-]+-projects\.vercel\.app/);
    }
  });

  it("give featured projects a screenshot, a kind and tags", () => {
    for (const p of projects.filter((x) => !x.compact)) {
      expect(p.img, `${p.title} img`).toBeTruthy();
      expect(p.kind, `${p.title} kind`).toBeTruthy();
      expect(p.tags.length, `${p.title} tags`).toBeGreaterThan(0);
    }
  });

  it("have unique titles and ids", () => {
    expect(new Set(projects.map((p) => p.title)).size).toBe(projects.length);
    expect(new Set(projects.map((p) => p.id)).size).toBe(projects.length);
  });
});

describe("skills and navigation", () => {
  it("skills have a known level", () => {
    for (const s of skills) expect(["Daily", "Solid", "Working"]).toContain(s.level);
  });

  it("every nav link targets a section that exists", () => {
    const sections = ["home", "projects", "skills", "about"];
    for (const l of links) expect(sections).toContain(l.href.replace("#", ""));
  });
});
