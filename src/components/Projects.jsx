import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="align-element border-t border-line py-14" id="projects">
      <SectionTitle text="Selected work" aside={`${projects.length} projects · live demos`} />
      <div className="mt-8 divide-y divide-line">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
