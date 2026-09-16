import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const capabilityIcons = [
  "M12 3 2 21h20L12 3Zm0 6v5m0 3v1",
  "M8 4H5v17h14V4h-3M8 3h8v4H8V3Zm0 8h8m-8 4h8",
  "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-4 9 3 3 5-6",
  "M9 5H4v16h16V5h-5M9 3h6v4H9V3Zm-2 11 3 3 7-7",
  "M9 3h6v6H9V3Zm-6 12h6v6H3v-6Zm12 0h6v6h-6v-6ZM12 9v3m-6 3v-3h12v3",
  "M14 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM9 12H2m3 0v4m12-4h.01",
  "M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h8",
  "M4 5h3m3 0h10M4 12h3m3 0h10M4 19h3m3 0h6",
];
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Skills &amp; Experience</h2>
      <div className={styles.content}>
        <div id="skills" className={styles.skills}>
          {skills.map((category) => (
            <section
              key={category.id}
              className={`${styles.skillCategory} ${category.id === "grc" ? styles.grcCategory : ""}`}
              aria-labelledby={`skills-${category.id}`}
            >
              <div className={styles.categoryHeading}>
                <h3 id={`skills-${category.id}`}>{category.title}</h3>
                {category.level && <p className={styles.knowledgeLabel}>{category.level}</p>}
              </div>
              <ul className={category.id === "grc" ? styles.capabilityList : styles.skillList}>
                {category.skills.map((skill, index) => (
                  <li key={skill} className={styles.skill}>
                    {category.id === "grc" && (
                      <span className={styles.skillIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                          <path d={capabilityIcons[index]} />
                        </svg>
                      </span>
                    )}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <h3 className={styles.historyHeading}>Work Experience</h3>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyImage}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </div>

                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

