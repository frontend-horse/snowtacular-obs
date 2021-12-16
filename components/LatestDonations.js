import React, { useMemo, useState } from "react";
import { useSupabaseDonations } from "../hooks/useSupabaseDonations";
import styles from "../styles/LatestDonations.module.css";

export default function LatestDonations({ className }) {
  const { data } = useSupabaseDonations();

  const [latestDonations, setLatestDonations] = useState([]);

  if (data) {
    // Manually adding more donations in for testing...
    // donationsWithMessage.push({
    //   display_name: 'Ryan Trimble',
    //   team_name: 'Frontend Horse',
    //   message_public: 'This is a test message!',
    //   donation: 5,
    // });
    // donationsWithMessage.push({
    //   display_name: 'Leif will find a way',
    //   team_name: 'Frontend Horse',
    //   message_public: 'This is a test message!',
    //   donation: 5,
    // });

    // setInterval(() => {
    //   donationsWithMessage.push({
    //     display_name: 'Too many Bens',
    //     team_name: 'Frontend Horse',
    //     message_public: 'This is a test message!',
    //     donation: 5,
    //   });
    // }, 1000);

    // Map the donations with messages to cards
    latestDonations = data.reverse().map((message, key) => {
      return (
        <div key={key} className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.name}>{message.display_name}</div>
            <div className={styles.amount}>
              ${parseFloat(message.donation.toFixed(2)).toLocaleString("en-US")}
            </div>
          </div>
          <div className={styles.message}>{message.message_public}</div>
        </div>
      );
    });
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.header}>Latest Donations</p>
      <div className={styles.cardContainer}>{latestDonations}</div>
    </div>
  );
}
