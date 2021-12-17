// Scene for Host + Guest cameras
import Logo from "../components/Logo";
import LatestDonations from "../components/LatestDonations";
import ProgressBar from "../components/ProgressBar";
import Sponsors from "../components/Sponsors";
import Snow from '../components/Snow';
import styles from "../styles/TwoCameras.module.css";

export default function TwoCameras() {
  return (
    <div className="scene">
      <Snow />
      <div className={styles.host} />
      <div className={styles.guest} />
      <Logo height={154} width={260} className={styles.logo} />
      <Sponsors className={styles.sponsors} />
      <LatestDonations className={styles.latestDonations} />
      <ProgressBar className={styles.progressBar} />
    </div>
  );
}
