import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../CSS/Navigation/NavSocial.module.css";

const NavSocial = ({ navSocial, socialIcons }) => {
    return (
        <>
            <li className={`${styles[navSocial]}`}>
                <a
                    href="https://github.com/tipenehughes"
                    class="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Github Portfolio."
                >
                    <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[navSocial]}`}>
                <a
                    href="https://www.linkedin.com/in/tipene-hughes/"
                    class="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin Profile."
                >
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
        </>
    );
};

export default NavSocial;
