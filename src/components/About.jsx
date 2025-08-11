import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import GradioEmbed from "./GradioEmbed";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="aboutSVG" className="w-full h-64" />
        <article>
          <SectionTitle text="code, coffee, running and fighting" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            saepe quas aliquid assumenda molestias. Veniam magni facere non
            soluta sed eveniet deleniti voluptas, recusandae provident
            asperiores in blanditiis dolore culpa.
          </p>
        </article>

        {/* Full-width Gradio app below the two columns */}
        <div className="md:col-span-2">
          <GradioEmbed
            src="https://felixpek-alterego.hf.space"
            minHeight={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
