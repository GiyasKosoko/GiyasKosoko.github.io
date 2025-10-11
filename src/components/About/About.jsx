import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return(
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
                        <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="cursor icon"
                        />
                        <div className={styles.aboutItemTxt}>
                            <h3>Front End Developer</h3>
                            <p>Stuff about me being a front-end developer.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="cursor icon"
                        />
                        <div className={styles.aboutItemTxt}>
                            <h3>Data Analyst</h3>
                            <p>Stuff about me being a data analyst.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="cursor icon"
                        />
                        <div className={styles.aboutItemTxt}>
                            <h3>UI/UX Designer</h3>
                            <p>Stuff about me being a UI/UX designer.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="cursor icon"
                        />
                        <div className={styles.aboutItemTxt}>
                            <h3>Coding Instructor</h3>
                            <p>Stuff about me being a coding instructor.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}