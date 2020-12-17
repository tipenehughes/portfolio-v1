import React from 'react'
import styles from "../../../CSS/Main/About/Technologies.module.css";

import sass from "../../../Assets/img/logos/sass.svg";
import npm from "../../../Assets/img/logos/npm.svg";
import figma from "../../../Assets/img/logos/figma.svg";
import github from "../../../Assets/img/logos/github.svg";

const Tools = () => {
  return (
    <>
            <div className={styles.imageContainer}>
                <img src={sass} alt="" class={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={npm} alt="" class={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={github} alt="" class={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={figma} alt="" class={styles.image} />
            </div>
        </>
  )
}

export default Tools
