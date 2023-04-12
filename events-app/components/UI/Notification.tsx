import { useContext } from "react";
import NotificationContext from "@/context/notification";
import styles from "./notification.module.css";

export interface INotification {
    title: string;
    message: string;
    status: "success" | "error" | "pending";
}

const Notification: React.FC<INotification> = ({ title, message, status }) => {
    const { hideNotification } = useContext(NotificationContext);

    let statusClasses = "";

    if (status === "success") {
        statusClasses = styles.success;
    }

    if (status === "error") {
        statusClasses = styles.error;
    }

    if (status === "pending") {
        statusClasses = styles.pending;
    }

    const activeClasses = `${styles.notification} ${statusClasses}`;

    return (
        <div className={activeClasses} onClick={hideNotification}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
