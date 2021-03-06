import Link from "next/link";
import Head from "next/head";
import ProgressBar from "../components/ProgressBar";
import Sponsors from "../components/Sponsors";

import styles from "../styles/Home.module.css";

export default function Home() {
  const pages = [
    "intermission",
    "intermission-ad",
    "nametag",
    "one-camera-desktop",
    "one-camera",
    "starting-soon",
    "teamseas-fetch",
    "timer",
    "two-cameras-desktop",
    "two-cameras",
    "intermission",
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Holiday Snowtacular Slides</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {pages.map((page) => (
          <Link href={`/${page}`} key={page}>
            <a style={{ marginBottom: "10px", fontSize: "20px" }}>{page}</a>
          </Link>
        ))}
      </main>
    </div>
  );
}
