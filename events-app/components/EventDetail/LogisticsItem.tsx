import { FC, ReactNode } from "react";

import styles from "./LogisticsItem.module.css";

interface Props {
  icon: FC;
  children: ReactNode;
}

const LogisticsItem: FC<Props> = ({ icon: Icon, children }) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
