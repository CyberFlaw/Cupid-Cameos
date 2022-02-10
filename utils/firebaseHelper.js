import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

import { getKey } from "./uuidProcessing";

const firebaseConfig = {
  apiKey: "AIzaSyDfL8P3LU0FPGiebLShfhf4MgiwDBecsTE",
  authDomain: "valentine-5e50f.firebaseapp.com",
  databaseURL:
    "https://valentine-5e50f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "valentine-5e50f",
  storageBucket: "valentine-5e50f.appspot.com",
  messagingSenderId: "929546683526",
  appId: "1:929546683526:web:ed6327b46e90b71a177d07",
  measurementId: "G-VFH503YKKJ",
};

const app = initializeApp(firebaseConfig);

export function writeUserData(tcrid, uuid, sex) {
  const key = getKey(tcrid);
  if (key === 0) {
    console.log("Play fair buddy");
  }

  const db = getDatabase();
  set(ref(db, "users/" + sex), {
    key: uuid,
  })
    .then(() => {
      console.log("Success");
    })
    .catch((error) => {
      console.log("Failed");
    });
}

export function readUserData(sex) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${sex}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
