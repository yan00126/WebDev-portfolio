import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import AILab from "./components/AILab";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AILab />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default App;
