import { ReactNode, FC } from "react";
import Link from "next/link"

import styles from "./Button.module.css"

interface Props {
    link?: string;
    children: ReactNode;
    onClick?: () => void;
}

const Button: FC<Props> = ({ link, children, onClick }) => {
    if (!link) {
        return <button className={styles.btn} onClick={onClick}>{children}</button>
    }

    return <Link className={styles.btn} href={link}>{children}</Link>
}

export default Button