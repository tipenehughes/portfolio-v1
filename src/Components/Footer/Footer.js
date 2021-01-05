import React from "react";
import NavSocial from "../Navigation/NavSocial";
import styles from "../../CSS/Footer/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
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
