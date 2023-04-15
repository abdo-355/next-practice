import { FormEventHandler, useRef } from 'react';

import styles from './ContactForm.module.css';

const ContactForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const sendMessageHandler: FormEventHandler = async (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current!.value;
        const enteredName = nameRef.current!.value;
        const enteredMessage = messageRef.current!.value;

        // client side validation here

        await fetch("/api/contact", {
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


    }

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
    </section>
}

export default ContactForm;