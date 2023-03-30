import { ReactNode, FC } from 'react';

import styles from './EventContent.module.css';

interface Props {
  children: ReactNode;
}

const EventContent: FC<Props> = ({ children }) => {
  return (
    <section className={styles.content}>
      {children}
    </section>
  );
}

export default EventContent;
