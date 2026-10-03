import React from "react";

const Footer = () => (
  <footer className="align-element flex flex-wrap justify-between gap-4 border-t border-line py-10">
    <span className="label">© {new Date().getFullYear()} Fei Yan</span>
    <span className="label">Built with React and Tailwind CSS</span>
  </footer>
);

export default Footer;
