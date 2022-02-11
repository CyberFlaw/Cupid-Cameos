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

initializeApp(firebaseConfig);
const db = getDatabase();

export function writeNewUser(tcrid, uuid, sex, pickupLine = "") {
  const key = getKey(tcrid);

  if (key === "invalid") {
    console.log("Play fair buddy");
  } else {
    const refdb = ref(db);
    get(child(refdb, `registered/`))
      .then((snapshot) => {
        if (snapshot.val() !== null) {
          if (Object.keys(snapshot.val()).find((element) => element === key)) {
            // Remove Comment
            console.log("User Already Exits!");
            return 0;
          } else {
            push(child(ref(db), "registered")).key;

            const updates = {};
            updates[sex + "/" + key + "/" + "id"] = uuid;
            if (pickupLine !== "") {
              updates[sex + "/" + key + "/" + "pickup"] = pickupLine;
              updates["registered/" + key] = "active";
            }
            console.log("Inserted Data!");
            return update(ref(db), updates);
          }
        } else {
          push(child(ref(db), "registered")).key;

          const updates = {};
          updates[sex + "/" + key + "/" + "id"] = uuid;
          if (pickupLine !== "") {
            updates[sex + "/" + key + "/" + "pickup"] = pickupLine;
            updates["registered/" + key] = "active";
          }
          console.log("Inserted Data!");
          return update(ref(db), updates);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function readPickupLines() {
  let lines = [];
  const dbRef = ref(getDatabase());
  const sex = "male";

  get(child(dbRef, `${sex}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Remove Comment
        Object.values(snapshot.val()).forEach((element) => {
          lines.push(element);
        });

        // for (const [key, value] of Object.entries(snapshot.val())) {
        //   lines.push([key,value]);
        // }
        console.log(lines);
        return lines;
      } else {
        console.log("No data available");
        return -1;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
