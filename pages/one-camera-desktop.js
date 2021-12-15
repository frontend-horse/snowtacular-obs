// Scene for host and screen share

import ProgressBar from "../components/ProgressBar";
import Sponsors from "../components/Sponsors";
import LatestDonations from "../components/LatestDonations";
import styles from "../styles/OneCameraDesktop.module.css";

export default function OneCamerasDesktop() {
  return (
    <div className="scene">
      <div className={styles.desktop} />
      <div className={styles.hostSquare} />
      <Sponsors className={styles.sponsors} />
      <ProgressBar className={styles.progressBar} />
      <LatestDonations className={styles.latestDonations} />
    </div>
  );
}
