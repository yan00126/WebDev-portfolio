import React from "react";

const SectionTitle = ({ text, aside }) => {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 className="text-4xl font-bold sm:text-5xl">{text}</h2>
      {aside && <span className="label">{aside}</span>}
    </div>
  );
};

export default SectionTitle;
