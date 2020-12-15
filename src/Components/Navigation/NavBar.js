import React from "react";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
import styles from "../../CSS/Navigation/NavBar.module.css";

const NavBar = () => {
    return (
        <nav id="nav" className={styles.navBar}>
            <ul>
                <NavLinks input={"About"} />
                <NavLinks input={"Portfolio"} />
                <NavLinks input={"Contact"} />
            </ul>
            <ul>
                <NavSocial />
            </ul>
        </nav>
    );
};

export default NavBar;
