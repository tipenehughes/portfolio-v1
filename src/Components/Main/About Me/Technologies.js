import React, { useState } from "react";
import Languages from "./Languages";
import Tools from "./Tools";
import styles from "../../../CSS/Main/About/Technologies.module.css";

const Technologies = () => {
    const [card, setCard] = useState("languages");
    const handleSetCard = (input) => {
        return setCard(input);
  };
  const selectedLangs = card === "languages" ? styles.selected : '';
  const selectedTools = card === "tools" ? styles.selected : '';

    return (
        <div className={styles.container}>
            <p>Here's a few technologies I've been working with recently:</p>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => handleSetCard("languages")}
                    className={`${styles.button} ${selectedLangs}`}
                >
                    Languages & Libraries
                </button>
                <button
                    onClick={() => handleSetCard("tools")}
                    className={`${styles.button} ${selectedTools}`}
                >
                    Tools
                </button>
            </div>

            <div className={styles.technologiesContainer}>
                {card === "languages" && <Languages />}
                {card === "tools" && <Tools />}
            </div>

            <div className={styles.technologiesContainer}></div>
        </div>
    );
};

export default Technologies;
