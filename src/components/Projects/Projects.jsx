import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title} id="projects-heading">Projects</h2>
      <p className={styles.scrollHint} id="projects-scroll-hint">Scroll sideways to explore projects.</p>
      <div className={styles.projects} tabIndex={0} role="region" aria-labelledby="projects-heading" aria-describedby="projects-scroll-hint">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
