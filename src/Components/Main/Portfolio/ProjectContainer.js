import React from "react";
import whakaariSm from "../../../Assets/img/Portfolio items/whakaari-400w.png";
import whakaariLg from "../../../Assets/img/Portfolio items/whakaari-700w.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/pounamunui-400w.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/pounamunui-700w.png";
import whangamarinoSm from "../../../Assets/img/Portfolio items/whangamarino-400w.png";
import whangamarinoLg from "../../../Assets/img/Portfolio items/whangamarino-700w.png";
import spacexSm from "../../../Assets/img/Portfolio items/spacex-400w.png";
import spacexLg from "../../../Assets/img/Portfolio items/spacex-700w.png";
import styles from "../../../CSS/Main/Portfolio/ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";

const ProjectContainer = () => {
    const projects = [
        {
            image: [whakaariSm, whakaariLg],
            alt: "Whakaari website",
            heading: "Whakaari Rotorua",
            p1: "International Performance Artists",
            l1: "https://github.com/tipenehughes/whakaari",
            a1: "Github page for a Whakaari website project.",
            l2: "https://whakaari.netlify.app/",
            a2: "Whakaari website project live website.",
        },
        {
            image: [spacexSm, spacexLg],
            alt: "Space X project website",
            heading: "SpaceX Project",
            p1: "SpaceX project displaying current rocket and launch data",

            l1: "https://github.com/tipenehughes/space-x-app",
            a1: "Github page for a project.",
            l2: "https://spacex-project.netlify.app/",
            a2: "Pounamunui website project live website.",
        },
        {
            image: [pounamunuiSm, pounamunuiLg],
            alt: "Pounamunui website",
            heading: "Pounamunui Marae",
            p1: "Tribal Community Hub",
            l1: "https://github.com/tipenehughes/Houmaitawhiti-Tribal-Hub",
            a1: "Github page for a project.",
            l2: "https://pounamunui.netlify.app/",
        },
        {
            image: [whangamarinoSm, whangamarinoLg],
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
