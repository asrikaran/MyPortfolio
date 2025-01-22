import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./styles/index.css";

const App = () => {
  console.log("App is rendering");  // Add this log to check
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;
