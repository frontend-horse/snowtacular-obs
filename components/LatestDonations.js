import React, { useEffect, useMemo, useState } from "react";
import { useSupabaseDonations } from "../hooks/useSupabaseDonations";
import styles from "../styles/LatestDonations.module.css";

export default function LatestDonations({ className }) {
  const { data } = useSupabaseDonations();

  const [fakeData, setFakeData] = useState([]);

  const addDonation = () => {
    // Add a donation to the list
    setFakeData([
      ...fakeData,
      {
        display_name: "Leif will find a way",
        team_name: "Frontend Horse",
        message_public: "This is a test message!",
        donation: 5,
        created_at: Date.now(),
      },
    ]);
  };

  let displayList = useMemo(() => {
    return data?.length ? [...data, ...fakeData] : fakeData;
  }, [data, fakeData]);

  return (
    <div className={`${styles.container} ${className}`}>
      {/* <button onClick={addDonation}>Add Donation</button> */}
      <p className={styles.header}>Latest Donations</p>
      <div className={styles.cardContainer}>
        {displayList?.sort(compareNumbers).map((message, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.name}>{message.display_name}</div>
                <div className={styles.amount}>
                  $
                  {parseFloat(message.donation.toFixed(2)).toLocaleString(
                    "en-US"
                  )}
                </div>
              </div>
              <div className={styles.message}>{message.message_public}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function compareNumbers(a, b) {
  return b.created_at - a.created_at;
}
