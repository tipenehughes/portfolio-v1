import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamationCircle,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../../CSS/Main/ContactForm/ContactForm.module.css";

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <form id="form" method="POST" name="contact" data-netlify="true">
                <div className={styles.form}>
                    <div className={styles.formControl}>
                        <label for="name" className={styles.formLabel}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className={styles.formInput}
                        />
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.formIcon}
                        />
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className={styles.formIcon}
                        />
                        <small className={styles.small}>Error Message</small>
                    </div>
                    <div className={styles.formControl}>
                        <label for="email" className={styles.formLabel}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className={styles.formInput}
                        />
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.formIcon}
                        />
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className={styles.formIcon}
                        />
                        <small className={styles.small}>Error Message</small>
                    </div>
                    <div className={styles.formControl}>
                        <label for="message" className={styles.formLabel}>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            className={`${styles.formInput} ${styles.formTextarea}`}
                        ></textarea>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.formIcon}
                        />
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className={styles.formIcon}
                        />
                        <small className={styles.small}>Error Message</small>
                    </div>
                </div>
                <div className={styles.submit}>
                    <input
                        type="submit"
                        id="submitBtn"
                        className={styles.submitInput}
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
