import React from "react";
import ReactDOM from "react-dom";

import styles from "./notification.module.css";

export interface INotification {
  status: "error" | "success" | "pending";
  title: string;
  message: string;
}

const Notification: React.FC<INotification> = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = styles.success;
  }

  if (status === "error") {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications") as HTMLDivElement
  );
}

export default Notification;
