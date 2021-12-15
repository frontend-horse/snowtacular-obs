// Scene for only full-screen host
import styles from "../styles/OneCamera.module.css";
import Logo from "../components/Logo";
import LatestDonations from "../components/LatestDonations";
import ProgressBar from "../components/ProgressBar";
import Sponsors from "../components/Sponsors";

export default function OneCamera() {
  return (
    <div className="scene">
      <div className={styles.host} />
      <Logo height={154} width={260} className={styles.logo} />
      <Sponsors className={styles.sponsors} />
      <ProgressBar className={styles.progressBar} />
      <LatestDonations className={styles.latestDonations} />
    </div>
  );
}
