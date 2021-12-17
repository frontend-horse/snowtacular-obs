import { useState, useEffect } from "react";

/**
 * @param {number} number
 * @returns {string}
 */
function formatAsTwoDigits(number) {
	if (number < 10) {
		return `0${number}`;
	}

	return number + '';
}

const streamStart = new Date('2021-12-17T17:00:00+0000');

export default function Timer({ time, styles }) {
	const [timeRemaining, setTimeRemaining] = useState(Date.now());

	useEffect(() => {
		let interval = null;

		if (timeRemaining > 0) {
			interval = setInterval(() => {
				const now = Date.now();
				const timeRemaining = Math.max(streamStart - now, 0);
				setTimeRemaining(timeRemaining);
			}, 250);
		}

		return () => clearInterval(interval);
	}, [timeRemaining]);

	const secondsRemaining = Math.floor(timeRemaining / 1000);
	const displayMinutes = Math.floor(secondsRemaining / 60);
	const displaySeconds = secondsRemaining - (displayMinutes * 60);

	const finalTime = `${formatAsTwoDigits(displayMinutes)}:${formatAsTwoDigits(displaySeconds)}`;

	return <div className={styles.timer}>{finalTime}</div>;
}