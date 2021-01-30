import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Button.module.css";

const Button = ({ input }) => {
    const { isLight } = useContext(ThemeContext);
    return (
        <button className={`${styles.button} ${!isLight ? styles.dark : ""}`}>
            {input}
        </button>
    );
};

export default Button;
