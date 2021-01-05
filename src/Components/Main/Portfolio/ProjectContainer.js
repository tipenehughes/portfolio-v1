import React from "react";
import whakaari from "../../../Assets/img/Portfolio items/whakaari.png";
import pounamunui from "../../../Assets/img/Portfolio items/pounamunui.png";
import whangamarino from "../../../Assets/img/Portfolio items/whangamarino.png";
import spacex from "../../../Assets/img/Portfolio items/spacex.png";
import styles from "../../../CSS/Main/Portfolio/ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";

const ProjectContainer = () => {
    const projects = [
        {
            image: whakaari,
            alt: "Whakaari website",
            heading: "Whakaari Rotorua",
            p1: "International Performance Artists",
            l1: "https://github.com/tipenehughes/whakaari",
            a1: "Github page for a Whakaari website project.",
            l2: "https://whakaari.netlify.app/",
            a2: "Whakaari website project live website.",
        },
        {
            image: spacex,
            alt: "Space X project website",
            heading: "SpaceX Project",
            p1: "SpaceX project displaying current rocket and launch data",

            l1: "https://github.com/tipenehughes/space-x-app",
            a1: "Github page for a project.",
            l2: "https://spacex-project.netlify.app/",
            a2: "Pounamunui website project live website.",
        },
        {
            image: pounamunui,
            alt: "Pounamunui website",
            heading: "Pounamunui Marae",
            p1: "Tribal Community Hub",
            l1: "https://github.com/tipenehughes/Houmaitawhiti-Tribal-Hub",
            a1: "Github page for a project.",
            l2: "https://pounamunui.netlify.app/",
        },
        {
            image: whangamarino,
            alt: "Whangamarino School website",
            heading: "Whangamarino School",
            p1: "Indigenous Elementary Aged School",
            l1: "https://github.com/tipenehughes/Whangamarino-School",
            a1: "Github page for a project.",
            l2: "https://whangamarino.netlify.app/",
            a2: "Whangamarino website project live website.",
        },
    ];
    return (
        <div className={styles.projectContainer}>
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
