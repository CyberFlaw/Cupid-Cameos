// import { useEffect } from "react";

// import { firebaseInit } from "../utils/firebaseInit";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1>Hello Gois</h1>
      <ul>
        <li>
          <Link href="/register">
            <a>Get spicy</a>
          </Link>
        </li>
        <li>
          <Link href="/pickup">
            <a>Pickup someone</a>
          </Link>
        </li>
        <li>
          <Link href="/flatter">
            <a>Get your man</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
