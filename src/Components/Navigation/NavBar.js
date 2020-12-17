import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
import MobileNav from "./MobileNav";
import styles from "../../CSS/Navigation/NavBar.module.css";

const NavBar = () => {
    const [navScroll, setNavScroll] = useState("");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    // To set screen width for mobile menu and NavLinks
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    // To set state if NavBar grows
    const scrollFunction = () => {
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setNavScroll("scroll")
            : setNavScroll("");
    };
    window.onscroll = () => {
        scrollFunction();
    };

    // To set state if mobile menu is open
    const handleSetMobileMenu = () => {
        return !mobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    };

    // Nav links
    const navigationLinks = ["About", "Portfolio", "Contact"];

    return (
        <>
            <nav className={`${styles.navBar} ${styles[navScroll]}`}>
                <ul>
                    {navigationLinks.map((links) => {
                        return (
                            <NavLinks
                                input={links}
                                navClass={"navItem"}
                                width={width}
                            />
                        );
                    })}
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
                width={width}
                navigationLinks={navigationLinks}
            />
        </>
    );
};

export default NavBar;
