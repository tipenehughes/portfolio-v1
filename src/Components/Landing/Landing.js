import React from "react";
import Button from "../Utilities/Button";
import avatar from "../../Assets/img/avatar.svg";
import styles from "../../CSS/Landing/Landing.module.css";

const Landing = () => {
    return (
        <header id="landing" className={`${styles.landing} ${"container"}`}>
            <section className={styles.welcome}>
                <h1>
                    <span>Hello!</span>
                    <br />
                    <span>I'm Tipene.</span>
                </h1>
                <h2>I'm a New York City based front end developer.</h2>
                <Button input={"See my work"} />
            </section>
            <section className={styles.avatar}>
                <img src={avatar} alt="My Avatar" />
            </section>
        </header>
    );
};

export default Landing;
