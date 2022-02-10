import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, push, update } from "firebase/database";

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

export function writeNewUser(tcrid, uuid, sex) {
  const db = getDatabase();

  const key = getKey(tcrid);

  if (key === "invalid") {
    console.log("Play fair buddy");
  } else {
    push(child(ref(db), sex)).key;

    const updates = {};
    updates[sex + "/" + key] = uuid;

    return update(ref(db), updates);
  }
}

export function readUsersOnSex() {
  const dbRef = ref(getDatabase());

  get(child(dbRef, `m`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
