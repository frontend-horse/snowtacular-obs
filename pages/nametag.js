import React from "react";
import styles from "../styles/Nametag.module.css";

export default function NameTag({ name = "Long Namensteinsmith" }) {
  // TODO: Wire up to CMS for name
  return (
    <div className={styles.container}>
      {/* Add tag loop if we have time */}
      <div className={styles.inner}>{name}</div>
    </div>
  );
}
