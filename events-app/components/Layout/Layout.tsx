import { FC, ReactNode, useContext } from "react";

import MainHeader from "./MainHeader";
import Notification from "../UI/Notification";
import NotificationContext from "@/context/notification";

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    const { notification } = useContext(NotificationContext);


    return <>
        <MainHeader />
        <main>{children}</main>
        {notification && <Notification {...notification} />}
    </>
}

export default Layout;