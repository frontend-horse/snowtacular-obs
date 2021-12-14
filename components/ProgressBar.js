import React, { useMemo, useState } from 'react';
// import { useSupabaseDonations } from '../hooks/useSupabaseDonations';
import { useTeamSeasDonations } from '../hooks/useTeamSeasDonations';
import styles from '../styles/ProgressBar.module.css';

export default function ProgressBar() {
  // const { status, data, error, isFetching } = useSupabaseDonations();
  const { data } = useTeamSeasDonations();

  // setup progressBar state
  const [progressBar, setProgressBar] = useState({
    goal: 10000,
    numOfSponsors: 3,
    maxSponsorMatch: 1000,
    perSponsorMatch: 0,
    donations: 0,
    matching: 0,
    total: 0,
    percentFilled: '0%',
  });

  // function to convert to percentage
  const percentage = (current, goal) => {
    if (current / goal > 1) return '100%';
    return (current / goal) * 100 + '%';
  };

  // function to set the width of the inner progress bar
  const setWidth = () => document.documentElement.style.setProperty('--bar-width', progressBar.percentFilled);

  if (data) {
    // find total amount of donations
    progressBar.donations = data.reduce((acc, next) => acc + next.donation, 0);

    progressBar.donations = 2500

    // if the number of donations is less than the max amount that sponsors will be matching,
    // set to the same amount as the donations.
    // otherwise just set it to the maximum the sponsors will be matching
    if (progressBar.donations < progressBar.numOfSponsors * progressBar.maxSponsorMatch) {
      progressBar.matching = progressBar.donations;
    } else {
      progressBar.matching = progressBar.numOfSponsors * progressBar.maxSponsorMatch;
    }

    // calculate the amount each sponsor will match
    progressBar.perSponsorMatch = progressBar.matching / progressBar.numOfSponsors;

    // set the total to the sum of the donations and sponsor matching amounts
    progressBar.total = progressBar.donations + progressBar.matching;

    // create the percentage string
    progressBar.percentFilled = percentage(progressBar.total, progressBar.goal);

    // set the inner progress bar's width to the percent string
    setWidth();
  }

  return (
    <div className={styles.container}>
      <div className={styles.progressBarLabel}>
        <p>Amount donated so far:</p>
      </div>
      <div className={styles.progressBar}>
        <video id="oceanDirty" className={styles.oceanDirty} autoPlay muted loop>
          <source src="progress-bar/ocean_dirty.mp4" type="video/mp4" />
        </video>
        <span className={styles.progressBarInner}>
          <video id="oceanClean" className={styles.oceanClean} autoPlay muted loop>
            <source src="progress-bar/ocean_clean.mp4" type="video/mp4" />
          </video>
        </span>
        <div className={styles.donationStats}>
          <p>
            ${parseFloat(progressBar.total.toFixed(0)).toLocaleString('en-US')} / ${progressBar.goal.toLocaleString('en-US')}
          </p>
        </div>
      </div>
      <div className={styles.progressBarMessage}>
        <p>
          Donate on teamseas.org with team name <strong>&ldquo;Frontend Horse&rdquo;</strong>
        </p>
      </div>
    </div>
  );
}
