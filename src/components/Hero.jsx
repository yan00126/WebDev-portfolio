import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const log = [
  ["Code", "Software engineering student at Algonquin College, focused on web and internet apps"],
  ["Now", "Building with Next.js and exploring practical AI features"],
  ["Run", "Miles before the first commit"],
  ["Fight", "Rounds that teach me to take feedback and keep going"],
];

const Hero = () => {
  return (
    <section id="home" className="align-element grid items-end gap-12 py-16 md:grid-cols-[1.25fr_1fr] md:py-24">
      <div>
        <p className="label flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-soft" />
          Full stack developer · Ottawa
        </p>
        <h1 className="mt-6 text-7xl font-extrabold leading-[0.9] sm:text-8xl lg:text-9xl">
          Fei <br />
          <span className="text-accent">Yan.</span>
        </h1>
        <p className="mt-6 max-w-[34ch] text-xl text-muted sm:text-2xl">
          I build web apps with Next.js and TypeScript, and I look for where AI
          actually helps.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn">
            See my work →
          </a>
          <a href="#about" className="btn btn-ghost">
            Ask my AI assistant
          </a>
          <span className="ml-2 flex gap-3">
            <a href="https://github.com/yan00126" aria-label="GitHub">
              <FaGithubSquare className="h-8 w-8 text-muted duration-200 hover:text-ink" />
            </a>
            <a href="https://www.linkedin.com/in/fei-yan-86331a45/" aria-label="LinkedIn">
              <FaLinkedin className="h-8 w-8 text-muted duration-200 hover:text-ink" />
            </a>
          </span>
        </div>
      </div>

      <aside
        aria-label="Quick facts"
        className="min-w-0 rounded-2xl border border-line bg-surface p-6"
      >
        <p className="label mb-4 flex justify-between gap-4">
          <span>Daily log</span>
          <span>Algonquin College</span>
        </p>
        <dl>
          {log.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[72px_1fr] gap-3 border-t border-line py-3 first:border-t-0 first:pt-0"
            >
              <dt className="label pt-0.5">{k}</dt>
              <dd className="text-[15px]">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-2 flex gap-1.5" aria-hidden="true">
          <i className="h-1.5 flex-1 rounded-full bg-accent" />
          <i className="h-1.5 flex-1 rounded-full bg-accent" />
          <i className="h-1.5 flex-1 rounded-full bg-accent" />
          <i className="h-1.5 flex-1 rounded-full bg-hot" />
          <i className="h-1.5 flex-1 rounded-full bg-line" />
        </div>
      </aside>
    </section>
  );
};

export default Hero;
