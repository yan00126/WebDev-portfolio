import React from "react";
import SectionTitle from "./SectionTitle";
import { skillGroups, alsoUsed } from "../data";

const Skills = () => {
  return (
    <section className="align-element border-t border-line py-14" id="skills">
      <SectionTitle text="Tech stack" aside="What I reach for" />
      <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface">
        {skillGroups.map(({ id, label, items }) => (
          <div key={id} className="grid gap-3 p-5 sm:grid-cols-[190px_1fr] sm:items-center sm:p-6">
            <dt className="label">{label}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-[15px] font-medium"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-muted">Also used: {alsoUsed.join(", ")}.</p>
    </section>
  );
};

export default Skills;
