import { FormEventHandler, useRef } from "react";

import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const oldPasswordRef = useRef<HTMLInputElement>(null);

    const submitHandler: FormEventHandler = async (event) => {
        event.preventDefault();

        const newPassword = newPasswordRef.current?.value;
        const oldPassword = oldPasswordRef.current?.value;

        // validation here

        const res = await fetch("/api/user/change-password", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newPassword,
                oldPassword
            })
        })

        const data = await res.json();
        console.log(data);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.control}>
                <label htmlFor="new-password">New Password</label>
                <input ref={newPasswordRef} type="password" id="new-password" />
            </div>
            <div className={styles.control}>
                <label htmlFor="old-password">Old Password</label>
                <input ref={oldPasswordRef} type="password" id="old-password" />
            </div>
            <div className={styles.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
