import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="home" className="min-h-screen bg-gray-100 pt-16">
          <Hero />
        </section>
        <section id="projects" className="min-h-screen bg-white pt-16">
          <Projects />
        </section>
        <section id="skills" className="min-h-screen bg-gray-50 pt-16">
          <Skills />
        </section>
        <section id="contact" className="min-h-screen bg-gray-100 pt-16">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
