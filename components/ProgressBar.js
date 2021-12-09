import React, { useMemo, useEffect, useRef } from 'react';
import { useSupabaseDonations } from '../hooks/useSupabaseDonations';
import styles from '../styles/ProgressBar.module.css';

export default function ProgressBar() {
  const { status, data, error, isFetching } = useSupabaseDonations();

  // Set up progress bar object
  const progressBar = {
    goal: 10000,
    actualTotal: 0,
    matchedTotal: 0,
    percentFilled: 0
  };

  // function to calculate the sponsor matching
  // ! I think this logic needs work...
  const sponsorMatching = (actualTotal, goal) => {
    if (actualTotal < goal) return actualTotal * 2;
    return actualTotal;
  };

  // function to convert to percentage
  const percentage = (current, goal) => {
    return ((current / goal) * 100) + '%';
  };

  // function to set the CSS Custom Property for the bar width
  const setWidth = () => document.documentElement.style.setProperty('--bar-width', progressBar.percentFilled);

  if (data) {
    // reducer to find the actual total
    progressBar.actualTotal = data.reduce((acc, next) => acc + next.donation, 0);

    // sets the matched total
    progressBar.matchedTotal = sponsorMatching(progressBar.actualTotal, progressBar.goal);

    // find the percentage and set the progress bar width
    progressBar.percentFilled = percentage(progressBar.matchedTotal, progressBar.goal);
    console.log(progressBar.percentFilled);
    setWidth();
  }

  console.log(progressBar);

  return (
    <div className={styles.container}>
      Total donations: {progressBar.actualTotal} Goal: {progressBar.goal}
      <div className={styles.progressBar}>
        <span className={styles.progressBarInner}></span>
      </div>
    </div>
  );
}
