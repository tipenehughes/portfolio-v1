import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import whakaariSm from "../../../Assets/img/Portfolio items/whakaari-400w.png";
import whakaariLg from "../../../Assets/img/Portfolio items/whakaari-700w.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/pounamunui-400w.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/pounamunui-700w.png";
import newsAggregator from "../../../Assets/img/Portfolio items/news-aggregator-700w.png";
import spacexSm from "../../../Assets/img/Portfolio items/spacex-400w.png";
import spacexLg from "../../../Assets/img/Portfolio items/spacex-700w.png";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
        {
            image: [spacexSm, spacexLg],
            alt: "Space X app",
            heading: "SpaceX App",
            p1: "SpaceX App displaying current rocket and launch data",
            l1: "https://github.com/tipenehughes/space-x-app",
            a1: "Github page for a project.",
            l2: "https://spacex-project.netlify.app/",
            a2: "SpaceX app live website.",
        },
        {
            image: [whakaariSm, whakaariLg],
            alt: "Whakaari website",
            heading: "Whakaari Rotorua",
            p1: "International Performance Artists",
            l1: "https://github.com/tipenehughes/whakaari",
            a1: "Github page for a Whakaari website project.",
            l2: "https://whakaari.netlify.app/",
            a2: "Whakaari project live website.",
        },
        {
            image: [pounamunuiSm, pounamunuiLg],
            alt: "Pounamunui website",
            heading: "Pounamunui Marae",
            p1: "Tribal Community Hub",
            l1: "https://github.com/tipenehughes/Houmaitawhiti-Tribal-Hub",
            a1: "Github page for a project.",
            l2: "https://pounamunui.netlify.app/",
            a2: "Pounamunui project live website.",
        },
        {
            image: [newsAggregator, newsAggregator],
            alt: "News aggregator website",
            heading: "News Aggregator",
            p1: "News aggregator featuring weather, stocks and reddit",
            l1: "https://github.com/tipenehughes/news-aggregator",
            a1: "Github page for a project.",
            l2: "https://news-aggregator-react.netlify.app/",
            a2: "News Aggregator live website",
        },
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
