import React, { useEffect } from "react";
import useProgress from "../hooks/useProgress";
import styles from "../styles/ProgressBar.module.css";

/**
 * Format a decimal as a percentage
 * @param {number} percentAsDecimal - percentage, represented as a number between 0 and 1
 * @returns {string} percent of goal which has been donated
 */
function formatPercentage(percentAsDecimal) {
  const percentage = Math.floor(percentAsDecimal * 100);
  return percentage + "%";
}

export default function ProgressBar({ className }) {
  const { percent, total, goal } = useProgress();
  const formattedPercent = formatPercentage(percent);

  useEffect(() => {
    document.documentElement.style.setProperty("--bar-width", formattedPercent);
  }, [formattedPercent]);

  return (
    <div className={`${styles.container} ${className}`}>
      {/* <div className={styles.progressBarLabel}>
        <p>Amount donated so far:</p>
      </div> */}
      <div className={styles.progressBar}>
        <video
          id="oceanDirty"
          className={styles.oceanDirty}
          autoPlay
          muted
          loop
        >
          <source
            src="https://res.cloudinary.com/frontendhorse/video/upload/v1639609817/ocean_dirty_uwijcv.mp4"
            type="video/mp4"
          />
        </video>
        <span className={styles.progressBarInner}>
          <video
            id="oceanClean"
            className={styles.oceanClean}
            autoPlay
            muted
            loop
          >
            <source
              src="https://res.cloudinary.com/frontendhorse/video/upload/v1639609817/ocean_clean_fcjsss.mp4"
              type="video/mp4"
            />
          </video>
        </span>
        <div className={styles.donationStats}>
          <p>
            ${parseFloat(total.toFixed(0)).toLocaleString("en-US")} / $
            {goal.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div className={styles.progressBarMessage}>
        Donate on teamseas.org with team name <strong>Frontend Horse</strong>
      </div>
    </div>
  );
}
