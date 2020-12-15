import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../CSS/Footer/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerIcons}>
                <a
                    href="https://github.com/tipenehughes"
                    className={styles.footerIcons}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Github Portfolio."
                >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
                <a
                    href="https://www.linkedin.com/in/tipene-hughes/"
                    className={styles.footerIcons}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin Profile."
                >
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                        // className={styles.footerIcons}
                    />
                </a>
            </div>
            <div className={styles.copyright}>
                <small>Handcrafted by me.</small>
                <small>&copy; 2020</small>
            </div>
        </footer>
    );
};

export default Footer;
