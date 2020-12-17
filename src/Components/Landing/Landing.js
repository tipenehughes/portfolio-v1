import React from "react";
import Button from "../Utilities/Button";
import avatar from "../../Assets/img/avatar.svg";
import { HashLink as Link } from "react-router-hash-link";
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
                <Link to="/#portfolio">
                    <Button input={"See my work"} />
                </Link>
            </section>
            <section className={styles.avatar}>
                <img src={avatar} alt="My Avatar" />
            </section>
        </header>
    );
};

export default Landing;
