import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  get,
  push,
  update,
  set,
  remove,
} from "firebase/database";

import { getKey } from "./uuidProcessing";

// const firebaseConfig = {
//   apiKey: "AIzaSyDfL8P3LU0FPGiebLShfhf4MgiwDBecsTE",
//   authDomain: "valentine-5e50f.firebaseapp.com",
//   databaseURL:
//     "https://valentine-5e50f-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "valentine-5e50f",
//   storageBucket: "valentine-5e50f.appspot.com",
//   messagingSenderId: "929546683526",
//   appId: "1:929546683526:web:ed6327b46e90b71a177d07",
//   measurementId: "G-VFH503YKKJ",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAVmJBYD6ij9LMh-iEofu9SjO0FYxbuSTQ",
  authDomain: "valentine-dev.firebaseapp.com",
  projectId: "valentine-dev",
  databaseURL:
    "https://valentine-dev-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "valentine-dev.appspot.com",
  messagingSenderId: "520613889719",
  appId: "1:520613889719:web:c54787721c19353b71ef32",
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
            if (pickupLine !== "")
              updates[sex + "/" + key + "/" + "pickup"] = pickupLine;

            updates["registered/" + key] = "active";
            console.log("Inserted Data!");
            return update(ref(db), updates);
          }
        } else {
          push(child(ref(db), "registered")).key;

          const updates = {};
          updates[sex + "/" + key + "/" + "id"] = uuid;
          if (pickupLine !== "")
            updates[sex + "/" + key + "/" + "pickup"] = pickupLine;

          updates["registered/" + key] = "active";
          console.log("Inserted Data!");
          return update(ref(db), updates);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export async function readPickupLines() {
  let lines = [];
  const dbRef = ref(db);
  const sex = "male";

  await get(child(dbRef, `${sex}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        Object.values(snapshot.val()).forEach((element) => {
          lines.push(element);
        });
        // console.log(lines);
      } else {
        console.log("No data available");
        return [];
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return lines;
}

export function invalidateUser(partnerUUID, userUUID) {
  const ukey = getKey(userUUID[5]);
  const pkey = getKey(partnerUUID[5]);

  const pName = partnerUUID[1];
  const uName = userUUID[1];

  let partnerName, userName;

  partnerName = pName.split(" ")[0];
  userName = uName.split(" ")[0];

  if (ukey === "invalid" || pkey === "invalid") {
    console.log("Play fair buddy");
  } else {
    const updates = {};
    updates["registered/" + ukey] = "inactive";
    updates["registered/" + pkey] = "inactive";
    update(ref(db), updates);
    const payload = {
      useruUUID: localStorage.getItem("romanticId"),
      partnerUUID: localStorage.getItem("betterHalf"),
    };

    get(child(ref(db), "matches")).then((snapshot) => {
      set(ref(db, `/matches/${partnerName}${userName}`), payload);
    });

    console.log(pkey);
    remove(ref(db, `male/${pkey}`));
  }
}
