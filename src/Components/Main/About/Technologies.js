import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Languages from "./Languages";
import Tools from "./Tools";
import styles from "./Technologies.module.css";

const Technologies = () => {
    const { isLight } = useContext(ThemeContext);

    const [card, setCard] = useState("languages");
    const handleSetCard = (input) => {
        return setCard(input);
    };
    const selectedLangs = card === "languages" ? styles.selected : "";
    const selectedTools = card === "tools" ? styles.selected : "";
    const theme = !isLight ? styles.dark : "";

    return (
        <div className={styles.container}>
            <p>Here's a few technologies I've been working with recently:</p>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => handleSetCard("languages")}
                    className={`${styles.button} ${selectedLangs} ${theme}`}
                >
                    Languages & Libraries
                </button>
                <button
                    onClick={() => handleSetCard("tools")}
                    className={`${styles.button} ${selectedTools} ${theme}`}
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
