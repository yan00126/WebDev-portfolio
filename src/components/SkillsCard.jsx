import React from "react";

const SkillsCard = ({ icon, title, level, text }) => {
  return (
    <article className="min-w-0 border-b border-r border-line p-6 [&:nth-child(3n)]:lg:border-r-0 [&:nth-last-child(-n+3)]:lg:border-b-0">
      <div className="flex items-center justify-between">
        <span>{icon}</span>
        <span className="label text-accent">{level}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted">{text}</p>
    </article>
  );
};

export default SkillsCard;
