import React from "react";

import styles from "./Button.module.css";

const Button = ({ input }) => {
    return <button className={styles.button}>{input}</button>;
};

export default Button;
