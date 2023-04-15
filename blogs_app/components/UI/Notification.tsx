import React from "react";

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

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
