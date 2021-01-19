import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamationCircle,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const { isLight } = useContext(ThemeContext);
    const theme = !isLight ? styles.dark : "";

    const toastSuccess = () => {
        return toast("Great! We'll be in touch soon :)", {
            toastId: "success",
        });
    };
    const toastError = () => {
        return toast("Oops! Check your details and try again.", {
            toastId: "error",
        });
    };
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

    return (
        <div className={styles.contactForm}>
            <Formik
                initialValues={{
                    email: "",
                    name: "",
                    message: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    message: Yup.string()
                        .max(120, "Must be 120 characters or less")
                        .required("Required"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    fetch("/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: encode({
                            "form-name": "contact",
                            ...values,
                        }),
                    })
                        .then(() => {
                            toastSuccess();
                            setSubmitting(false);
                            console.log(values);
                            resetForm();
                        })
                        .catch((error) => {
                            console.log(error);
                            toastError();
                            setSubmitting(false);
                        });
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <input type="hidden" name="form-name" value="contact" />
                        <div className={styles.form}>
                            <div className={styles.formControl}>
                                <label
                                    htmlFor="name"
                                    className={styles.formLabel}
                                >
                                    Name
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className={`${styles.formInput} ${theme}`}
                                />

                                {touched.name && !errors.name && (
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className={`${styles.formIcon} ${styles.formIconSuccess}`}
                                    />
                                )}
                                {touched.name && errors.name && (
                                    <>
                                        <ErrorMessage
                                            component={"small"}
                                            className={styles.errorMessage}
                                            name="name"
                                        />
                                        <FontAwesomeIcon
                                            icon={faExclamationCircle}
                                            className={`${styles.formIcon} ${styles.formIconError}`}
                                        />
                                    </>
                                )}
                            </div>
                            <div className={styles.formControl}>
                                <label
                                    htmlFor="email"
                                    className={styles.formLabel}
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className={`${styles.formInput} ${theme}`}
                                />

                                {touched.email && !errors.email && (
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className={`${styles.formIcon} ${styles.formIconSuccess}`}
                                    />
                                )}
                                {touched.email && errors.email && (
                                    <>
                                        <ErrorMessage
                                            component={"small"}
                                            className={styles.errorMessage}
                                            name="email"
                                        />
                                        <FontAwesomeIcon
                                            icon={faExclamationCircle}
                                            className={`${styles.formIcon} ${styles.formIconError}`}
                                        />
                                    </>
                                )}
                            </div>
                            <div className={styles.formControl}>
                                <label
                                    htmlFor="message"
                                    className={styles.formLabel}
                                >
                                    Message
                                </label>
                                <Field
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    as="textarea"
                                    className={`${styles.formInput} ${styles.formTextarea} ${theme}`}
                                />

                                {touched.message && !errors.message && (
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className={`${styles.formIcon} ${styles.formIconSuccess}`}
                                    />
                                )}
                                {touched.message && errors.message && (
                                    <>
                                        <ErrorMessage
                                            component={"small"}
                                            className={styles.errorMessage}
                                            name="message"
                                        />
                                        <FontAwesomeIcon
                                            icon={faExclamationCircle}
                                            className={`${styles.formIcon} ${styles.formIconError}`}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.submit}>
                            <input
                                type="submit"
                                value="Submit"
                                id="submitBtn"
                                className={`${styles.submitInput} ${theme}`}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
