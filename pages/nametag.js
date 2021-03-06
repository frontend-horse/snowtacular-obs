import { useState, useEffect } from "react";
import styles from "../styles/Nametag.module.css";
import { useRouter } from "next/router";

export default function NameTag({ name }) {
  const [currentGuest, setCurrentGuest] = useState("");

  const router = useRouter();

  useEffect(() => {
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

      setCurrentGuest(guestList.find((guest) => !guest.checked).text);
    }

    fetchTodos();

    setInterval(() => {
      fetchTodos();
    }, 15000);
  }, [router.query.name]);

  return (
    <div className={styles.container}>
      <svg
        className={styles.loop}
        width="50"
        height="100"
        viewBox="0 0 50 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.666.774c-27.614 0-50 22.386-50 50 0 27.615 22.386 50 50 50v-100ZM28.252 58.246a9.195 9.195 0 1 0 0-18.391 9.195 9.195 0 0 0 0 18.39Z"
        />
      </svg>

      <div className={styles.inner}>{router.query.name || currentGuest}</div>
    </div>
  );
}
