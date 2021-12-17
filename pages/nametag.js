import { useState, useEffect } from "react";
import styles from "../styles/Nametag.module.css";
import { useRouter } from "next/router";

export default function NameTag({ name }) {
  const [currentGuest, setCurrentGuest] = useState("");

  // Check if there's a query param first
  const router = useRouter();
  // if so we use that
  if (router.query.name) {
    setCurrentGuest(router.query.name);
  }

  useEffect(() => {
    // if there's no query param, we fetch Notion data
    if (!name) {
      function fetchTodos() {
        fetch(`/api/notion`)
          .then((response) => response.json())
          .then((data) => formatData(data))
          .catch(() => console.error());
      }

      function formatData(data) {
        const list = data?.response?.results;

        if (!data.response.results) return null;

        const guestList = list.reverse().map(({ properties }) => {
          const text = properties?.Name?.title?.[0]?.plain_text;
          const checked = properties?.Complete?.checkbox;
          return { text, checked };
        });

        setCurrentGuest(guestList.find((guest) => !guest.checked));
      }

      fetchTodos();

      setInterval(() => {
        fetchTodos();
      }, 15000);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Add tag loop if we have time */}
      <div className={styles.inner}>{currentGuest.text}</div>
    </div>
  );
}
