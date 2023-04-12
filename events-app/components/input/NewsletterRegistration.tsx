import { useRef, useContext } from "react";

import styles from "./NewsletterRegistration.module.css";
import NotificationContext from "@/context/notification";

const NewsletterRegistration: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const { showNotification } = useContext(NotificationContext);

  const registrationHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const enteredEmail = emailRef.current!.value;

      showNotification({
        title: "Signing up...",
        message: "registering for the newsletter",
        status: "pending"
      })

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: enteredEmail })
      })

      if (res.ok) {
        showNotification({
          title: "Success!",
          message: "successfully registered for the newsletter",
          status: "success"
        })
      } else {
        const data = await res.json();

        throw new Error(data.message || "Something went wrong!")
      }

    } catch (err: unknown) {
      showNotification({
        title: "Error",
        message: (err as { message: string }).message,
        status: "error"
      })
    }
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
