import React, { useState, useRef } from "react";
import { Grid } from "react-awesome-spinners";
import Projects from "./components/Projects/Projects";
import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import AboutSection from "./components/AboutMe/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
  const linkedInRef = useRef();
  const projectsRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <section id="hero" className="section">
        <Hero />
      </section>
      <div className="main-body">
        <section id="about" className="section">
          <AboutSection />
        </section>
        <section className="section" id="experience">
          <Experience />
        </section>
        <section className="section" id="skills">
          <Skills />
        </section>
        <section className="section" id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
