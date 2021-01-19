import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import light from "../../../Assets/img/Theme/sun.svg";
import dark from "../../../Assets/img/Theme/moon.svg";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ mobile }) => {
    const { isLight, handleSetIsLight } = useContext(ThemeContext);
    const translate = !isLight ? "translateX(1.1rem)" : "translateX(0)";
    const icon = !isLight ? dark : light;
    const mobileClass = mobile && styles.mobile;
    return (
        <div className={`${styles.themeContainer} ${mobileClass}`}>
            <button
                className={styles.themeButton}
                onClick={() => handleSetIsLight()}
            >
                <div
                    className={styles.themeIcon}
                    style={{
                        transform: translate,
                    }}
                >
                    <img src={icon} alt="#" />
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;
