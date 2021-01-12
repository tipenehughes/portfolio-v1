import React from "react";
import styles from "./Technologies.module.css";

import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";

const Languages = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <img src={html} alt="" className={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={css} alt="" className={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={js} alt="" className={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={react} alt="" className={styles.image} />
            </div>
        </>
    );
};

export default Languages;
