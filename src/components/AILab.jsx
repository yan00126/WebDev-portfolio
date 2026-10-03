import React from "react";
import SectionTitle from "./SectionTitle";
import { experiments } from "../data";

const AILab = () => {
  return (
    <section className="align-element border-t border-line py-14" id="ai-lab">
      <SectionTitle text="AI Lab" aside="Small experiments · updated as I learn" />
      <p className="mt-4 max-w-[52ch] text-muted">
        Short builds where I test what AI is good for in a real product. Each
        one will list the problem, the setup and what I learned.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {experiments.map(({ id, status, title, text, tags, href, cta }) => (
          <article
            key={id}
            className="grid min-w-0 content-start gap-4 rounded-2xl border border-line bg-surface p-6"
          >
            <span
              className={`label w-fit rounded-full px-3 py-1 ${
                status === "live"
                  ? "bg-soft text-accent"
                  : "border border-line"
              }`}
            >
              {status === "live" ? "● Live on this site" : "◐ Planned"}
            </span>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-[15px] text-muted">{text}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            {href && (
              <a
                href={href}
                className="w-fit border-b-2 border-accent pb-0.5 text-[15px] font-semibold"
              >
                {cta}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AILab;
