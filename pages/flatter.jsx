import { useEffect } from "react";
import { readUserData } from "../utils/FirebaseHelper";

export default function Flatter() {
  useEffect(() => {
    readUserData(m);
  });
  return (
    <div>
      <h1>🥵</h1>

      {/* display */}

      {/* fetch from firebase */}
    </div>
  );
}
