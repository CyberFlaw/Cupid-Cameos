import { useEffect } from "react";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem("romanticId");
  }, []);

  return (
    <div
      className={styles.container}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1><p class="text-blue-600">hello gois</p></h1>
      <ul>
        <li>
          <Link href="/submit-pickup">
            <a>Pickup someone</a>
          </Link>
        </li>
        <li>
          <Link href="/read-pickup">
            <a>Fall for someone</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
