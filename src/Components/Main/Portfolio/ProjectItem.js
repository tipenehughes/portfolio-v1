import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../CSS/Main/Portfolio/ProjectItem.module.css";

const ProjectItem = ({ data }) => {
    console.log(data.image[0]);
    return (
        <div className={styles.project}>
            <div className={styles.projectInner}>
                {/* <img
                    
                    srcset={`${data.image[0]} 400w, ${data.image[1]} 700w`}
                    sizes="(max-width: 480px) 400px, 700px"
                    src={data.image[1]}
                    alt={data.alt}
                /> */}
                <picture className={styles.projectImage}>
                    <source media="(max-width:480px)" srcset={data.image[0]} />
                    <source media="(min-width:481px)" srcset={data.image[1]} />
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
