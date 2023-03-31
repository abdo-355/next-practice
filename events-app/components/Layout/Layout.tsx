import { FC, ReactNode } from "react";

import MainHeader from "./MainHeader";

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return <>
        <MainHeader />
        <main>{children}</main>
    </>
}

export default Layout;