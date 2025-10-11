import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Giyas.</h1>
        <p className={styles.description}>
          I'm an adaptive full stack developer and data enthusiast passionate
          about creating responsive, accessible, and data-driven web tools. I
          love turning ideas into clean, functional designs that make a real
          difference. Whether it’s building educational platforms, analyzing
          data for insights, or designing intuitive interfaces, I combine
          creativity and logic to craft engaging, user-friendly experiences that
          connect data, design, and impact. With experience in JavaScript,
          React, Node.js, and Python, I build solutions that are both
          human-centered and technically sound. My goal is to design technology
          that empowers education, community growth, artistic expression, and
          social impact. Reach out if you'd like to collaborate on a project —
          or just want to say hi!
        </p>
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
