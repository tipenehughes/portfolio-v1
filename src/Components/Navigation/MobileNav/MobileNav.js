import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import NavLinks from "../NavLinks/NavLinks";
import NavSocial from "../NavSocial/NavSocial";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MobileNav.module.css";

const MobileNav = ({
    handleSetMobileMenu,
    menuOpen,
    width,
    navigationLinks,
}) => {
    const { isLight } = useContext(ThemeContext);
    const theme = !isLight ? styles.dark : "";
    // Mobile menu animations
    const mobileMenu = {
        closed: {
            opacity: 0,
            x: width,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
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
                duration: 0.1,
                type: "ease",
            },
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "ease",
                delay: 0.3,
            },
        },
    };

    // Menu button icon animations
    const menuIcons = {
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.mobileNav}>
                <motion.div
                    className={`${styles.mobileNavOverlayHidden} ${theme}`}
                    variants={mobileMenu}
                    inital={{ opacity: 0 }}
                    animate={menuOpen ? "open" : "closed"}
                    style={{ transform: `translateX(${width})` }}
                >
                    <ThemeToggle mobile={true} />
                    <motion.ul
                        className={styles.mobileNavOptions}
                        variants={menuItems}
                        inital={{ opacity: 0 }}
                        animate={menuOpen ? "open" : "closed"}
                    >
                        {navigationLinks.map((links, index) => {
                            return (
                                <NavLinks
                                    className={styles.mobileNavOverlayHidden}
                                    handleSetMobileMenu={handleSetMobileMenu}
                                    navClass={"mobileMenuItem"}
                                    input={links}
                                    width={width}
                                    key={index}
                                />
                            );
                        })}
                        <ul
                            className={styles.mobileNavOverlayHidden}
                            variants={mobileMenu}
                            inital={"open"}
                            animate={menuOpen ? "open" : "closed"}
                            className={styles.socialContainer}
                        >
                            <NavSocial
                                socialClass={""}
                                socialIcons={"mobileSocialIcons"}
                            />
                        </ul>
                    </motion.ul>
                </motion.div>
                <button
                    className={styles.mobileMenu}
                    onClick={() => handleSetMobileMenu()}
                    aria-label="Toggle menu"
                    aria-controls="mobileNavOverlayHidden"
                >
                    {menuOpen ? (
                        <AnimatePresence>
                            <motion.div
                                key="times"
                                initial={{ opacity: 0 }}
                                variants={menuIcons}
                                animate="open"
                                exit="closed"
                            >
                                <FontAwesomeIcon
                                    icon={["fas", "times"]}
                                    className={styles.icon}
                                />
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <AnimatePresence>
                            <motion.div
                                key="bars"
                                initial={{ opacity: 0 }}
                                variants={menuIcons}
                                animate="open"
                                exit="closed"
                            >
                                <FontAwesomeIcon
                                    icon={["fas", "bars"]}
                                    className={styles.icon}
                                />
                            </motion.div>
                        </AnimatePresence>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default MobileNav;
