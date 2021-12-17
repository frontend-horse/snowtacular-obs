// Scene for the Intermission ad videos with logo and question
import React from "react";
import styles from "../styles/IntermissionAd.module.css"

const question = "What's your favorite holiday movie?"

let flakes = []
for(let x = 0; x < 30; x++)(
	flakes.push({
		x: Math.round(Math.random() * 1920),
		y: Math.round(Math.random() * 1080),
		size: Math.round(Math.random() * 60) + 20,
		flake: Math.floor(Math.random() * 8) + 1,
		time: Math.floor(Math.random() * 6) + 4,
	})
)

export default function IntermissionAd() {
  return(<div className={styles.container}>
	  {
		  flakes.map((ele, index) => (
			  /* eslint-disable-next-line @next/next/no-img-element */
			  <img className={styles.flake} key={index}
			  	alt=""
				src={`/snowflakes/flake_${ele.flake}.svg`}
			  	style={{
					  left: ele.x,
					  top: ele.y,
					  width: ele.size,
					  height: ele.size,
					  animationDuration: ele.time,
					  animationName: styles.rotate,
					  animationDelay: -Math.random() * 3
				  }}
			  />
		  ))
	  }
	<div className={styles.content}>
		<h1 className={styles.question}>{question}</h1>
		<video src="" className={styles.video}></video>
		<h2>sponsored by</h2>
		<div className={styles.sponsorTag}></div>
	</div>
  </div>);
}