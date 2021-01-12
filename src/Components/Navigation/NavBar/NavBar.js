import React, { useState, useEffect } from "react";
import NavLinks from "../NavLinks/NavLinks";
import NavSocial from "../NavSocial/NavSocial";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const [navScroll, setNavScroll] = useState("");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    // To set screen width for mobile menu and NavLinks
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    // To set overflow hidden on body element when menu open to prevent scroll
    const bodyScroll = () => {
        mobileMenu === true
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = null);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        bodyScroll();
    }, [mobileMenu]);

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
                    {navigationLinks.map((links, index) => {
                        return (
                            <NavLinks
                                input={links}
                                navClass={"navItem"}
                                key={index}
                            />
                        );
                    })}
                </ul>
                <ul>
                    <NavSocial
                        socialClass={"navSocial"}
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
