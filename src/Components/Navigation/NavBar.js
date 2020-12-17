import React, { useState } from "react";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
import MobileNav from "./MobileNav";
import styles from "../../CSS/Navigation/NavBar.module.css";

const NavBar = () => {
    const [navScroll, setNavScroll] = useState("");
    const [mobileMenu, setMobileMenu] = useState(false);

    const scrollFunction = () => {
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setNavScroll("scroll")
            : setNavScroll("");
    };
    window.onscroll = () => {
        scrollFunction();
    };
    const handleSetMobileMenu = () => {
        return !mobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    };

    return (
        <>
            <nav id="nav" className={`${styles.navBar} ${styles[navScroll]}`}>
                <ul>
                    <NavLinks input={"About"} navClass={"navItem"} />
                    <NavLinks input={"Portfolio"} navClass={"navItem"} />
                    <NavLinks input={"Contact"} navClass={"navItem"} />
                </ul>
                <ul>
                    <NavSocial
                        navSocial={"navSocial"}
                        socialIcons={"socialIcons"}
                    />
                </ul>
            </nav>
            <MobileNav
                handleSetMobileMenu={handleSetMobileMenu}
                menuOpen={mobileMenu}
            />
        </>
    );
};

export default NavBar;
