import React from "react";
import Article from "./Article";

const Main = () => {
    const articles = [
        {
            heading: "About Me",
            p1: `I’m a New York City based front end developer from New
      Zealand. I love to build visually beautiful, accessible, and
      user friendly websites.`,
            p2: `With the use of my skills, my passion is introducing and
      building an online presence for disadvantaged communities
      back home in New Zealand.`,
            p3: `Keep scrolling to see some of my latest work!`,
            technologies: true,
        },
        {
            heading: "Portfolio",
            portfolio: true,
        },
        {
            heading: "Contact",
            p1: `If you have any questions or would like to chat, feel free to reach out below!`,
            form: true,
        },
    ];
    return (
        <main>
            {articles.map((data, index) => {
                return <Article data={data} index={index} key={index} />;
            })}
        </main>
    );
};

export default Main;
