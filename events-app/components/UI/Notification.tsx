import { useContext } from "react";
// import NotificationContext from "../../store/notification-context";
import styles from "./notification.module.css";

interface Props {
    title: string;
    message: string;
    status: "success" | "error" | "pending";
}

const Notification: React.FC<Props> = ({ title, message, status }) => {
    // const notificationCtx = useContext(NotificationContext);

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
        <div className={activeClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
