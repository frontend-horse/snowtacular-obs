// Scene for the Intermission ad videos with logo and question
import React from "react";
import styles from "../styles/Intermission.module.css"

const sponsors = ["prismic", "netlify", "cloudinary", "stepzen", "orbit"];

if (typeof window !== "undefined") {
	document.documentElement.style.setProperty(
		"--num-sponsors",
		sponsors.length
	);
}

export default function IntermissionAd() {
	return (<div className={styles.container}>
		<div className={styles.columns}>
			<div className={styles.column1}>
				<h1>Intermission!</h1>
				<img src="/heads.png" alt="" />
			</div>
			<div className={styles.columntwo}>
				<h4>
					We will be back shortly with these guests:
				</h4>
				<ul className={styles.guests}>
					<li>Kent C. Dodds</li>
					<li>Amelia Wattenberger</li>
					<li>Chris Coyier</li>
					<li>Varun Vachhar</li>
					<li>Josh Comeau</li>
					<li>Cassidy Williams</li>
					<li>Scott Hanselman</li>
				</ul>
			</div>
		</div>
		<div className={styles.sponsors}>
			<p>sponsored by</p>
			<div className={styles.sponsorRow}>
				{sponsors.map((sponsor) => (
					<div key={sponsor}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={`sponsors/${sponsor}.svg`} alt="" />
					</div>
				))}
			</div>
		</div>
	</div>);
}