import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="An image of me doing something"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemTxt}>
              <h3>Full Stack Developer</h3>
              <p>I build full-stack web applications that are fast, scalable, and user-focused. From clean front-end interfaces to efficient back-end systems, I focus on writing reliable code and turning ideas into real, working products.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemTxt}>
              <h3>Data Analyst</h3>
              <p>I analyze data to find patterns, track performance, and support better decisions. I turn raw data into clear insights using tools like Python, SQL, and Excel.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemTxt}>
              <h3>Coding Instructor</h3>
              <p>I teach coding through hands-on, project-based learning. I help students understand how to think like developers, solve problems, and build real applications.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
