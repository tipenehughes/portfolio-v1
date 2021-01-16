import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectItem.module.css";

const ProjectItem = ({ data }) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectInner}>
                <picture className={styles.projectImage}>
                    <source media="(max-width:480px)" srcSet={data.image[0]} />
                    <source media="(max-width:768px)" srcset={data.image[1]} />
                    <source media="(min-width:769px)" srcset={data.image[1]} />
                    <source media="(min-width:1300px)" srcset={data.image[1]} />
                    <img src={data.image[1]} alt={data.alt} />
                </picture>
                <div className={styles.projectOverlay}>
                    <h3 className={styles.projectOverlayHeader}>
                        {data.heading}
                    </h3>
                    <h4 className={styles.projectOverlaySubHeader}>
                        {data.p1}
                    </h4>
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
                        {data.l2 && (
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
