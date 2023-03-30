import styles from './EventSummary.module.css';

interface Props {
  title: string;
}

const EventSummary: React.FC<Props> = ({ title }) => {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
