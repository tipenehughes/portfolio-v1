import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../../CSS/Navigation/NavLinks.module.css";

const NavLinks = ({ input, navClass, handleSetMobileMenu, width }) => {
    smoothscroll.polyfill();
    return (
        <li
            className={`${styles[navClass]}`}
            onClick={width <= 768 ? () => handleSetMobileMenu() : null}
        >
            <Link smooth to={`/#${input.toLowerCase()}`}>
                {input}
            </Link>
        </li>
    );
};

export default NavLinks;
