import { motion } from "framer-motion";
export default function DonationCard({ key, styles, item }) {
  function checkZIndex(latest) {
    // console.log("Latest", latest);
    // if (isSelected) {
    //   zIndex.set(2);
    // } else if (!isSelected && latest.scaleX < 1.01) {
    //   zIndex.set(0);
    // }
  }

  return (
    <li
      className={`${styles.cardContainer} ${styles.cardContainerOpen}`}
      key={item.id}
    >
      <motion.div
        layout
        initial={{ opacity: 0, display: "block" }}
        animate={{ duration: 5, display: "absolute" }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`${styles.card} ${styles.cardOpen}`}
        onUpdate={checkZIndex}
      >
        <div className={styles.cardHeader}>
          <div className={styles.name}>{item.display_name}</div>
          <div className={styles.amount}>
            ${parseFloat(item.donation.toFixed(2)).toLocaleString("en-US")}
          </div>
        </div>
        <div className={styles.message}>{item.message_public}</div>
      </motion.div>
    </li>
  );
}
