import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./NavLinks.module.css";

const NavLinks = ({ input, navClass, handleSetMobileMenu, width, isLight }) => {
    smoothscroll.polyfill();
    return (
        <li
            className={`${styles[navClass]} ${!isLight && styles.dark}`}
            onClick={width <= 768 ? () => handleSetMobileMenu() : null}
        >
            <Link smooth to={`/#${input.toLowerCase()}`}>
                {input}
            </Link>
        </li>
    );
};

export default NavLinks;
