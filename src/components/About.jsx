import React from "react";
import SectionTitle from "./SectionTitle";
import GradioEmbed from "./GradioEmbed";

const facts = [
  ["School", "Algonquin College"],
  ["Focus", "Web apps, applied AI"],
  ["Based in", "Ottawa"],
];

const About = () => {
  return (
    <section className="align-element border-t border-line py-14" id="about">
      <SectionTitle text="Code, coffee, running and fighting" />
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
        <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
          I'm Fei Yan, a software engineering student at Algonquin College
          focused on web development and internet applications. I'm interested
          in AI for what it does inside real products. Running and fighting
          taught me the same habit I use at the keyboard: show up, take the
          feedback, go another round.
        </p>
        <ul>
          {facts.map(([k, v]) => (
            <li
              key={k}
              className="flex justify-between gap-4 border-t border-line py-3.5 text-[15px]"
            >
              <span className="text-muted">{k}</span>
              <span>{v}</span>
            </li>
          ))}
          <li className="flex justify-between gap-4 border-t border-line py-3.5 text-[15px]">
            <span className="text-muted">Elsewhere</span>
            <span>
              <a className="underline" href="https://github.com/yan00126">GitHub</a>
              {" · "}
              <a className="underline" href="https://www.linkedin.com/in/fei-yan-86331a45/">LinkedIn</a>
            </span>
          </li>
        </ul>
      </div>

      <div id="chat" className="mt-14 rounded-3xl bg-ink p-5 text-bg sm:p-10">
        <p className="label !text-bg/60">Fei's AI assistant</p>
        <h3 className="mb-2 mt-2 text-3xl font-bold sm:text-4xl">Ask before you email.</h3>
        <p className="mb-6 max-w-[40ch] text-bg/70">
          Questions about my skills, projects or availability get an answer
          right away.
        </p>
        <div className="overflow-hidden rounded-2xl bg-white">
          <GradioEmbed src="https://felixpek-alterego.hf.space" minHeight={500} />
        </div>
      </div>
    </section>
  );
};

export default About;
