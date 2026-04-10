import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Giyas.</h1>
        <h2 className={styles.subtitle}>
          Full Stack Developer | Data Enthusiast | Problem Solver
        </h2>
        <div className={styles.description}>
          <p>
            I’m an adaptive full-stack developer and data enthusiast who builds
            responsive, accessible, and data-driven web tools. I turn ideas into
            clean, functional designs that make an impact—combining creativity
            and logic to craft user-friendly experiences that bridge data,
            design, and purpose. With experience in JavaScript, React, Node.js,
            and Python, I create human-centered solutions that empower
            education, community growth, and social impact.
          </p>
        </div>
        <a href="mailto:atandagk@outlook.com" className={styles.contactBtn}>
          Email Me?
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="My Profile Picture"
        className={styles.heroImg}
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
