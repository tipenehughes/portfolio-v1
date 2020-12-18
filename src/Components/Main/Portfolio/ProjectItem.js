import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../CSS/Main/Portfolio/ProjectItem.module.css";

const ProjectItem = ({ data }) => {
    return (
        <div className={styles.project}>
            <div class={styles.projectInner}>
                <img
                    className={styles.projectImage}
                    src={data.image}
                    alt={data.alt}
                />
                <div className={styles.projectOverlay}>
                    <h3 className={styles.projectOverlayHeader}>
                        {data.heading}
                    </h3>
                    <h4 className={styles.projectOverlaySubHeader}>{data.p1}</h4>
                    <div>
                        <a
                            className={styles.projectOverlayLink}
                            href={data.l1}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={data.a1}
                        >
                            Github
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className={styles.projectIcon}
                            />
                        </a>
                        <a
                            className={styles.projectOverlayLink}
                            href={data.l2}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={data.a2}
                        >
                            Live Demo
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className={styles.projectIcon}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
