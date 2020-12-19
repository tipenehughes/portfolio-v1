import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamationCircle,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../CSS/Main/ContactForm/ContactForm.module.css";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...form }),
        })
            .then(() =>
                toast("Thanks, I'll be in touch soon!", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 5000,
                    hideProgressBar: true,
                })
            )
            .catch((error) =>
                toast("Oops, try again!" + error, {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 5000,
                    hideProgressBar: true,
                })
            );
        setForm({ name: "", email: "", message: "" });
        e.preventDefault();
    };
    const { name, email, message } = form;

    return (
        <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.form}>
                    <div className={styles.formControl}>
                        <label htmlFor="name" className={styles.formLabel}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={name}
                            className={styles.formInput}
                            onChange={handleChange}
                        />
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.formIcon}
                        />
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className={styles.formIcon}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            className={styles.formInput}
                            onChange={handleChange}
                        />
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.formIcon}
                        />
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className={styles.formIcon}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="message" className={styles.formLabel}>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={message}
                            className={`${styles.formInput} ${styles.formTextarea}`}
                            onChange={handleChange}
                        ></textarea>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.formIcon}
                        />
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className={styles.formIcon}
                        />
                    </div>
                </div>
                <div className={styles.submit}>
                    <input
                        type="submit"
                        value="Submit"
                        id="submitBtn"
                        className={styles.submitInput}
                    />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
