import React from "react";
import Navbar from "./components/Navbar";
import BasicInfo from "./sections/Hero-section";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <BasicInfo />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};