import styles from "../styles/LatestDonations.module.css";

export default function LatestDonations({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.header}>Latest Donations</p>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.name}>Ben Myers</div>
          <div className={styles.amount}>$100</div>
        </div>
        <div className={styles.message}>I love the ocean!</div>
      </div>
    </div>
  );
}
