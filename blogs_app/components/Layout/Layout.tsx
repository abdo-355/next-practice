import { ReactNode, FC } from "react";

import Navbar from "./Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return <>
        <Navbar />
        <main>{children}</main>
    </>
}

export default Layout;