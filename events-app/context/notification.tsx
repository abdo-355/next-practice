import { ReactNode, FC, createContext, useState, useEffect } from "react";

import { INotification } from "@/components/UI/Notification";

interface INotificationContext {
  notification: INotification | null;
  showNotification: (notificationData: INotification) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<INotificationContext>({
  notification: null,
  showNotification: () => { },
  hideNotification: () => { },
});

export default NotificationContext;

export const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<INotification | null>(null)

  const showNotificationHandler = (notificationData: INotification) => {
    setNotification(notificationData)
  }

  const hideNotificationHandler = () => {
    setNotification(null)
  }

  useEffect(() => {
    if (notification && notification.status !== "pending") {
      const timer = setTimeout(() => {
        hideNotificationHandler();

      }, 1800);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [notification])

  const context = {
    notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  }

  return <NotificationContext.Provider value={context}>
    {children}
  </NotificationContext.Provider>
}
