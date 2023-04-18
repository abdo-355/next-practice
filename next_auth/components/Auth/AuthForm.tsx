import { FormEventHandler, useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import styles from "./AuthForm.module.css";

const createUser = async (email: string, password: string) => {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    const submitHandler: FormEventHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current!.value;
        const enteredPassword = passwordRef.current!.value;

        // validation here

        if (isLogin) {
            const result = await signIn("credentials", {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            });

            if (!result!.error) {
                router.replace("/profile");
            }

        } else {
            try {
                const result = await createUser(enteredEmail, enteredPassword);
                console.log(result);
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <section className={styles.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="email">Your Email</label>
                    <input ref={emailRef} type="email" id="email" required />
                </div>
                <div className={styles.control}>
                    <label htmlFor="password">Your Password</label>
                    <input ref={passwordRef} type="password" id="password" required />
                </div>
                <div className={styles.actions}>
                    <button>{isLogin ? "Login" : "Create Account"}</button>
                    <button
                        type="button"
                        className={styles.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? "Create new account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
}


export default AuthForm;
