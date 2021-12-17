// Scene for Host, guest, and desktop screen share
import React from "react";
import ProgressBar from "../components/ProgressBar";
import Sponsors from "../components/Sponsors";
import LatestDonations from "../components/LatestDonations";
import Snow from '../components/Snow';
import styles from "../styles/TwoCamerasDesktop.module.css";

export default function TwoCamerasDesktop() {
  return (
    <div className="scene">
      <Snow />
      <div className={styles.desktop} />
      <div className={styles.hostSquare} />
      <div className={styles.guestSquare} />
      <Sponsors className={styles.sponsors} />
      <ProgressBar className={styles.progressBar} />
      <LatestDonations className={styles.latestDonations} />
    </div>
  );
}
