import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="align-element border-t border-line py-14" id="skills">
      <SectionTitle text="Tech stack" aside="What I reach for" />
      <div className="mt-8 grid overflow-hidden rounded-2xl border-l border-t border-line bg-surface sm:grid-cols-2 lg:grid-cols-3 [&>*]:border-r [&>*]:border-b">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
