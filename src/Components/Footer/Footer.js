import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import NavSocial from "../Navigation/NavSocial/NavSocial.js";
import styles from "./Footer.module.css";

const Footer = () => {
    const { isLight } = useContext(ThemeContext);
    const theme = !isLight ? styles.dark : "";

    return (
        <footer className={`${styles.footer} ${theme}`}>
            <ul className={styles.iconContainer}>
                <NavSocial socialClass={""} socialIcons={"footerSocialIcons"} />
            </ul>
            <div className={styles.copyright}>
                <small>Handcrafted by me.</small>
                <small>&copy; 2021</small>
            </div>
        </footer>
    );
};

export default Footer;
