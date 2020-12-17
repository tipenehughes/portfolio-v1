import React from "react";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../CSS/Navigation/MobileNav.module.css";

const MobileNav = ({
    handleSetMobileMenu,
    menuOpen,
    width,
    navigationLinks,
}) => {
    // Mobile menu animations
    const mobileMenu = {
        closed: {
            opacity: 0,
            x: width,
            transition: {
                duration: 0.2,
                type: "ease",
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                type: "ease",
            },
        },
    };

    // Nav link animations
    const menuItems = {
        closed: {
            y: -75,
            opacity: 0,
            transition: {
                duration: 0.2,
                type: "ease",
            },
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "ease",
                delay: 0.3,
            },
        },
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.mobileNav}>
                <motion.div
                    className={styles.mobileNavOverlayHidden}
                    variants={mobileMenu}
                    inital={{ opacity: 0 }}
                    animate={menuOpen ? "open" : "closed"}
                >
                    <motion.ul
                        className={styles.mobileNavOptions}
                        variants={menuItems}
                        inital={{ opacity: 0 }}
                        animate={menuOpen ? "open" : "closed"}
                    >
                        {navigationLinks.map((links) => {
                            return (
                                <NavLinks
                                    className={styles.mobileNavOverlayHidden}
                                    handleSetMobileMenu={handleSetMobileMenu}
                                    navClass={"mobileMenuItem"}
                                    input={links}
                                />
                            );
                        })}
                        <div
                            className={styles.mobileNavOverlayHidden}
                            variants={mobileMenu}
                            inital={"open"}
                            animate={menuOpen ? "open" : "closed"}
                            className={styles.socialContainer}
                        >
                            <NavSocial
                                navSocial={""}
                                socialIcons={"mobileSocialIcons"}
                            />
                        </div>
                    </motion.ul>
                </motion.div>
                <button
                    className={styles.mobileMenu}
                    onClick={() => handleSetMobileMenu()}
                    aria-label="Toggle menu"
                    aria-controls="mobile-nav-overlay-hidden"
                >
                    {menuOpen ? (
                        <FontAwesomeIcon
                            icon={["fas", "bars"]}
                            className={styles.icon}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={["fas", "bars"]}
                            className={styles.icon}
                        />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default MobileNav;
