import React from "react";
import styles from "../../CSS/Main/Article.module.css";
import Technologies from "./About Me/Technologies";
import ProjectContainer from "./Portfolio/ProjectContainer";
import ContactForm from "./Contact/ContactForm";

const Article = ({ data, index }) => {
    const setRoute = (d) => {
        const routeName = d.heading.split(" ")[0];
        return routeName.toLowerCase();
    };

    return (
        <article className={styles.container} id={setRoute(data)}>
            <section className={styles.articleCard}>
                <div className={styles.headingContainer}>
                    <h2 className={styles.articleHeading}>
                        {data.heading}
                        <span className={styles.articleSpan}></span>
                    </h2>
                </div>
                {data.p1 && <p>{data.p1}</p>}
                {data.p2 && <p>{data.p2}</p>}
                {data.technologies && <Technologies />}
                {data.p3 && <p>{data.p3}</p>}
                {data.portfolio && <ProjectContainer />}
                {data.form && <ContactForm />}
            </section>
        </article>
    );
};

export default Article;
