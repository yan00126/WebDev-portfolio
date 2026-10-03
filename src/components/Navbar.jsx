import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="align-element flex items-center justify-between gap-4 py-4">
        <a href="#home" className="font-display text-xl font-extrabold">
          Fei<span className="text-accent">.</span>dev
        </a>
        <div className="flex gap-x-4 text-sm font-medium sm:gap-x-6">
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className="text-muted duration-200 hover:text-ink"
            >
              {text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
