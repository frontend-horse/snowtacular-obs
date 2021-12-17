import React, { useEffect, useState } from "react";
import { useSupabaseDonations } from "../hooks/useSupabaseDonations";
import styles from "../styles/LatestDonations.module.css";

import DonationCard from "./DonationCard";

let DEBUG = false;

export default function LatestDonations({ className }) {
	/** @type {{data: TeamSeasDonation[]}} */
	const { data = [] } = useSupabaseDonations();

	/** @type {[TeamSeasDonation[], function]} */
	// const [queue, setQueue] = useState([]);

	/** @type {Object<number, boolean>} */
	const [shownDonationIds, setShownDonationIds] = useState({});

	const [fakeData, setFakeData] = useState([]);

	const sortedSupabaseTransactions = [...data].sort(compareNumbers);
	let DATA = [...sortedSupabaseTransactions, ...fakeData].reverse();
	const queue = DATA.filter(donation => !shownDonationIds[donation.id]);
	const displayList = DATA
		.slice(-20)
		.filter(donation => shownDonationIds[donation.id]);

	useEffect(() => {
		let throttle = setInterval(() => {
			if (queue.length > 0) {
				let nextDonation = queue[0];
				setShownDonationIds(shown => ({...shown, [nextDonation.id]: true}));
			}
		}, 1000);

		return () => clearInterval(throttle);
	}, [queue]);
	//   const [queue, setQueue] = useState([]);
	//   const [displayList, setDisplayList] = useState([]);

	//   useEffect(() => {
	//       [...data, ...fakeData].forEach((donation) => {
	//         const loggedDonations = [...queue, ...displayList];
	//         const donationExists = loggedDonations.find(
	//           (loggedDonation) => loggedDonation.id === donation.id
	//         );

	//         if (!donationExists) {
	//           setQueue([donation, ...queue]);
	//           setTimeout(() => {
	//             setDisplayList([...displayList, donation]);
	//             console.count("Donation added");
	//             setQueue(queue.filter((donation) => donation.id !== donation.id));
	//           }, 1000);
	//         }
	//       });
	//   }, [data, displayList, queue, fakeData]);

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
				id: Math.floor(Math.random() * 10000),
			},
		]);
	};

	// let displayList = useMemo(() => {
	//   return data?.length ? [...data, ...fakeData] : fakeData;
	// }, [data, fakeData]);

	return (
		<div className={`${styles.container} ${className}`}>
			{DEBUG && (
				<>
					{!!queue.length && <div>{queue[0].display_name}</div>}
					<button onClick={addDonation}>Add Donation</button>
				</>
			)}
			<p className={styles.header}>Latest Donations</p>
			<div className={styles.listContainer}>
				{displayList?.sort(compareNumbers).map((item) => {
					return <DonationCard styles={styles} key={item.id} item={item} />;
				})}
			</div>
		</div>
	);
}

function compareNumbers(a, b) {
	return b.created_at - a.created_at;
}

/**
 * @typedef {object} TeamSeasDonation
 * @property {number} id
 * @property {string} color
 * @property {number} created_at
 * @property {string} display_name
 * @property {number} donation
 * @property {number} ff
 * @property {string} flair
 * @property {string} is_gift
 * @property {string} message_public
 * @property {'Frontend Horse'} team_name
 */
