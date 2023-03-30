import { ReactNode, FC } from "react";
import Link from "next/link"

import styles from "./Button.module.css"

interface Props {
    link: string;
    children: ReactNode
}

const Button: FC<Props> = ({ link, children }) => {
    return <Link className={styles.btn} href={link}>{children}</Link>
}

export default Button