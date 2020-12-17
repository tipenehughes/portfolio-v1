import React from "react";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../CSS/Navigation/MobileNav.module.css";

const MobileNav = ({ handleSetMobileMenu, menuOpen }) => {
    // use window.width
    const mobile = {
        closed: { x: -100 },
        open: { x: 0 },
    };
    return (
        <motion.nav
            variants={mobile}
            inital={false}
            animate={menuOpen ? "open" : "closed"}
            className={styles.nav}
        >
            <div className={styles.mobileNav}>
                <div className={styles.mobileNavOverlayHidden}>
                    <ul className={styles.mobileNavOptions}>
                        <NavLinks navClass={"mobileMenuItem"} input={"About"} />
                        <NavLinks
                            navClass={"mobileMenuItem"}
                            input={"Portfolio"}
                        />
                        <NavLinks
                            navClass={"mobileMenuItem"}
                            input={"Contact"}
                        />
                        <div className={styles.socialContainer}>
                            <NavSocial
                                navSocial={""}
                                socialIcons={"mobileSocialIcons"}
                            />
                        </div>
                    </ul>
                </div>
                <button
                    className={styles.mobileMenu}
                    onClick={() => handleSetMobileMenu()}
                    aria-label="Toggle menu"
                    aria-controls="mobile-nav-overlay-hidden"
                >
                    <FontAwesomeIcon
                        icon={["fas", "bars"]}
                        className={styles.icon}
                    />
                </button>
            </div>
        </motion.nav>
    );
};

export default MobileNav;
