// Scene for the Intermission ad videos with logo and question
import React from "react";
import styles from "../styles/Intermission.module.css"

export default function IntermissionAd() {
  return(<div className={styles.container}>
	  <video src="/sleigh-loop.webm" className={styles.video} autoPlay loop muted></video>
	  <div className={styles.overlay}>
		  <div className="title">
			  <h1>Intermission!</h1>
			  <h4>
							We will be back in a second.
			  </h4>
		  </div>
	  </div>
  </div>);
}