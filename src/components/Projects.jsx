import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const featured = projects.filter((p) => !p.compact);
  const more = projects.filter((p) => p.compact);

  return (
    <section className="align-element border-t border-line py-14" id="projects">
      <SectionTitle text="Selected work" aside="Client sites and apps I built" />
      <div className="mt-8 divide-y divide-line">
        {featured.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>

      <h3 className="mb-4 mt-12 label">Smaller projects</h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {more.map(({ id, title, text, url, github }) => (
          <li key={id} className="rounded-2xl border border-line bg-surface p-5">
            <h4 className="font-display text-xl font-bold">{title}</h4>
            <p className="mb-3 mt-1 text-[15px] text-muted">{text}</p>
            <div className="flex gap-5 text-[15px] font-semibold">
              {url && (
                <a href={url} className="border-b-2 border-accent pb-0.5">
                  Live site
                </a>
              )}
              {github && (
                <a href={github} className="border-b-2 border-accent pb-0.5">
                  Code
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
