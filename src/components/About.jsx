import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
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
      </div>
    </section>
  );
};

export default About;
