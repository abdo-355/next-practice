import { FormEventHandler, useEffect, useRef, useState } from 'react';

import styles from './ContactForm.module.css';
import Notification, { INotification } from '../UI/Notification';

const ContactForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [reqStatus, setReqStatus] = useState<INotification["status"]>()

    const sendMessageHandler: FormEventHandler = async (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current!.value;
        const enteredName = nameRef.current!.value;
        const enteredMessage = messageRef.current!.value;

        // client side validation here

        setReqStatus("pending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    name: enteredName,
                    message: enteredMessage
                })
            });

            if (!res.ok) {
                throw new Error();
            }
            setReqStatus("success");
            emailRef.current!.value = "";
            nameRef.current!.value = "";
            messageRef.current!.value = "";
        } catch (err) {
            setReqStatus("error");
        }

    }

    let notification: INotification | null = null

    if (reqStatus === "pending") {
        notification = {
            status: "pending",
            title: "Sending...",
            message: "Your message is on its way!"
        }
    } else if (reqStatus === "error") {
        notification = {
            status: "error",
            title: "Error!",
            message: "Something went wrong!"
        }
    } else if (reqStatus === "success") {
        notification = {
            status: "success",
            title: "Success!",
            message: "Your message has been sent!"
        }
    }

    useEffect(() => {
        if (reqStatus === "success" || reqStatus === "error") {
            const timer = setTimeout(() => {
                setReqStatus(undefined);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [reqStatus])

    return <section className={styles.contact}>
        <h1>How can i help you?</h1>
        <form onSubmit={sendMessageHandler} className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="email">Your Email</label>
                    <input ref={emailRef} type="email" id="email" required />
                </div>
                <div className={styles.control}>
                    <label htmlFor="name">Your Name</label>
                    <input ref={nameRef} type="text" id="name" required />
                </div>
            </div>
            <div className={styles.control}>
                <label htmlFor="message">Your Message</label>
                <textarea ref={messageRef} id="message" rows={5} required></textarea>
            </div>
            <div className={styles.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {notification && <Notification {...notification} />}
    </section>
}

export default ContactForm;