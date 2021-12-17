import styles from "../styles/Nametag.module.css";
import { useRouter } from "next/router";
export default function NameTag({ name = "Long Namensteinsmith" }) {
  const router = useRouter();
  if (router.query.name) {
    name = router.query.name;
  }

  return (
    <div className={styles.container}>
      {/* Add tag loop if we have time */}
      <div className={styles.inner}>{name}</div>
    </div>
  );
}
