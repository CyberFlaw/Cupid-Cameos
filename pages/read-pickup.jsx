import { useEffect, useState } from "react";
import { readUsersOnSex } from "../utils/FirebaseHelper";

export default function Flatter() {
  const [pickupLines, setPickupLines] = useState([]);

  useEffect((pickupLines) => {
    setPickupLines(readUsersOnSex());

    console.log(pickupLines);
  }, []);
  return (
    <div>
      <h1>🥵</h1>

      {/* display */}

      {/* fetch from firebase */}
    </div>
  );
}
