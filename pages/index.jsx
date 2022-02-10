import { useEffect } from "react";

import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDfL8P3LU0FPGiebLShfhf4MgiwDBecsTE",
      authDomain: "valentine-5e50f.firebaseapp.com",
      // databaseURL: "https://DATABASE_NAME.firebaseio.com",
      projectId: "valentine-5e50f",
      storageBucket: "valentine-5e50f.appspot.com",
      messagingSenderId: "929546683526",
      appId: "1:929546683526:web:ed6327b46e90b71a177d07",
      measurementId: "G-VFH503YKKJ",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app);
  });

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
