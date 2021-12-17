// Scene for the Intermission ad videos with logo and question
import React from "react";
import styles from "../styles/Intermission.module.css"

export default function IntermissionAd() {
  return(<div className={styles.container}>
	  <div>
		  <img src="/heads.png" alt=""/>
			  <h1>Intermission!</h1>
			  <h4>
				We will be back shortly with these guests:
			  </h4>
	  </div>
  </div>);
}