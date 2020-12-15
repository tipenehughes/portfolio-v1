import React from "react";
import styles from "../../CSS/Navigation/NavLinks.module.css";

const NavLinks = ({ input }) => {
    return (
        <li className={styles.navItem}>
            <a href={"#" + input}>{input}</a>
        </li>
    );
};

export default NavLinks;
