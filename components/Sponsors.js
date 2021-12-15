import styles from "../styles/Sponsors.module.css";

const sponsors = ["prismic", "cloudinary", "netlify"];

export default function Sponsors({ className }) {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(
      "--num-sponsors",
      sponsors.length
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <p>All your donations are being matched by our sponsors</p>
      <div className={styles.cropBox}>
        <div className={styles.images}>
          {sponsors.map((sponsor) => (
            <div key={sponsor}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`sponsors/${sponsor}.svg`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
