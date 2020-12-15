import React from "react";
import styles from "../../CSS/Main/Article.module.css";
import ProjectContainer from "../Main/Portfolio/ProjectContainer";
import ContactForm from "../Main/Contact/ContactForm";

const Article = ({ data, index }) => {
    console.log(data, index);
    return (
        <article className="container">
            <section className={styles.articleCard}>
                <div className={styles.headingContainer}>
                    <h2 className={styles.articleHeading}>
                        {data.heading}
                        <span className={styles.articleSpan}></span>
                    </h2>
                </div>
                {data.p1 && <p>{data.p1}</p>}
                {data.p2 && <p>{data.p2}</p>}
                {data.p3 && <p>{data.p3}</p>}
                {data.portfolio && <ProjectContainer />}
                {data.form && <ContactForm />}
            </section>
        </article>
    );
};

export default Article;
