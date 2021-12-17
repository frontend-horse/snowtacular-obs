import React from "react";
import styles from "../styles/Nametag.module.css";

export default function NameTag({ name = "Long Namensteinsmith" }) {
  // TODO: Wire up to CMS for name
  return (
    <div className={styles.container}>
      <svg className={styles.loop} width="50" height="100" viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50.666.774c-27.614 0-50 22.386-50 50 0 27.615 22.386 50 50 50v-100ZM28.252 58.246a9.195 9.195 0 1 0 0-18.391 9.195 9.195 0 0 0 0 18.39Z"/></svg>
      <div className={styles.inner}>{name}</div>
    </div>
  );
}
