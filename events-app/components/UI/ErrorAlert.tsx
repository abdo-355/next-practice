import { FC, ReactNode } from 'react';

import styles from './ErrorAlert.module.css';

interface Props {
  children: ReactNode;
}

const ErrorAlert: FC<Props> = ({ children }) => {
  return <div className={styles.alert}>{children}</div>;
}

export default ErrorAlert;
