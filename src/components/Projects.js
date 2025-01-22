import React from "react";
import projects from "../data/projects.json";

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
