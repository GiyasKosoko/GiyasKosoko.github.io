import React, { useRef } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    view,
    details,
  },
}) => {
  const dialogRef = useRef(null);

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {view ? (
          <>
            <button
              type="button"
              className={styles.link}
              onClick={() => dialogRef.current.showModal()}
            >
              Details
            </button>

            <a
              href={view}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </>
        ) : (
          <>
            <a href={demo} className={styles.link}>
              Demo
            </a>

            <a href={source} className={styles.link}>
              Source
            </a>
          </>
        )}
      </div>

      {view && (
        <dialog ref={dialogRef} className={styles.dialog} aria-label={title}>
          <h2>{title}</h2>
          <p>{details || description}</p>

          <button
            type="button"
            className={styles.link}
            onClick={() => dialogRef.current.close()}
          >
            Close
          </button>
        </dialog>
      )}
    </div>
  );
};
