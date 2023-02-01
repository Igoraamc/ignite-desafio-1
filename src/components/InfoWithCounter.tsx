import styles from './InfoWithCounter.module.css';

interface InfoWithCounterProps {
  text: string;
  color?: string;
  counter: number | string;
}

export function InfoWithCounter({ text = "", color = "#4EA8DE", counter }: InfoWithCounterProps) {
  return (
    <div className={styles.info}>
      <span className={styles.infoText} style={{ color }}>{text}</span>
      <span className={styles.infoCounter}>{counter}</span>
    </div>
  );
}