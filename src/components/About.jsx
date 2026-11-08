import React from "react";
import SectionTitle from "./SectionTitle";
import Chat from "./Chat";

const facts = [
  ["Work", "Moguland Tech Solutions"],
  ["Focus", "Web apps, applied AI"],
  ["Based in", "Ottawa"],
  ["Languages", "English, Chinese"],
];

const About = () => {
  return (
    <section className="align-element border-t border-line py-14" id="about">
      <SectionTitle text="Code, coffee, running and fighting" />
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
        <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
          I'm Fei Yan, a software engineer in Ottawa. At Moguland Tech
          Solutions I build business websites and web apps, from a trilingual
          WordPress site to a bilingual Next.js site for a restaurant. Before
          moving into software I spent six years at Ericsson planning and
          troubleshooting carrier networks, which taught me to trace a problem
          to its root cause. I'm interested in AI for what it does inside real
          products. Running and Muay Thai gave me the same habit I use at the
          keyboard: show up, take the feedback, go another round.
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
          <li className="flex justify-between gap-4 border-t border-line py-3.5 text-[15px]">
            <span className="text-muted">Email</span>
            <a className="break-all underline" href="mailto:yanfei.bupt@gmail.com">yanfei.bupt@gmail.com</a>
          </li>
        </ul>
      </div>

      <div id="chat" className="mt-14">
        <Chat />
      </div>
    </section>
  );
};

export default About;
