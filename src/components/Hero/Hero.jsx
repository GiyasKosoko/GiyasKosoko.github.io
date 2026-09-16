import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Giyas.</h1>
        <h2 className={styles.subtitle}>
          GRC Analyst | Data Enthusiast | Web Developer
        </h2>
        <div className={styles.description}>
          <p>
            I’m a technology professional building my career in cybersecurity
            governance, risk, and compliance, supported by a foundation in
            software development and data analysis. I identify risks, assess
            security controls, organize evidence, and translate complex
            technical and business information into clear, practical
            recommendations. My experience with JavaScript, Python, SQL,
            reporting, and data visualization strengthens my ability to analyze
            details, recognize patterns, and communicate findings. I’m focused
            on helping organizations make informed security, compliance, and
            risk decisions while continuing to build accessible, data-informed
            technical solutions.
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
