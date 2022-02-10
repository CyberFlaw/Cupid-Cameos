import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { encodeUUID, decodeUUID, getKey } from "../utils/uuidProcessing";
import { writeNewUser } from "../utils/firebaseHelper";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  const [sex, setSex] = useState("");
  const [preferance, setPreferance] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLine, setPickupLine] = useState("");

  const payload = {};

  useEffect((router) => {
    const id = localStorage.getItem("romanticId");

    if (id) {
      const payload = decodeUUID(id);
      console.log(payload[0]);

      // if (payload[0] === "m") router.push("/submit-pickup");
      // else if (payload[0] === "f") router.push("/read-pickup");
    }
  }, []);

  return (
    <div>
      <h1>Hello thirsty ones</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="email">Email (Tcr id)</label>
        <input
          id="email"
          type="text"
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          required
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />

        <label htmlFor="branch">Branch</label>
        <input
          id="branch"
          type="text"
          required
          onChange={(event) => {
            setBranch(event.target.value);
          }}
        />

        <label htmlFor="sem">Semester</label>
        <input
          id="sem"
          type="text"
          required
          onChange={(event) => {
            setSem(event.target.value);
          }}
        />

        <label htmlFor="sex">Sex</label>
        <input
          id="sex"
          type="text"
          required
          onChange={(event) => {
            setSex(event.target.value);
          }}
        />

        <label htmlFor="preference">sexual orientation</label>
        <input
          id="preference"
          type="text"
          required
          onChange={(event) => {
            setPreferance(event.target.value);
          }}
        />

        <label>Enetr Pickup line (Max 180)</label>
        <input
          type=""
          maxLength={180}
          onChange={(event) => {
            setPickupLine(event.target.value);
          }}
        />

        <button
          onClick={() => {
            payload.name = name;

            payload.branch = branch;
            payload.sem = sem;
            payload.email = email;
            payload.sex = sex;
            payload.preferance = preferance;
            payload.phone = phone;
            payload.uuid = encodeUUID(payload);

            const check = getKey(email);
            if (check === "invalid") console.log("Wrong email");
            else {
              writeNewUser(
                payload.email,
                payload.uuid,
                payload.sex,
                pickupLine
              );

              localStorage.setItem("romanticId", payload.uuid);

              // if (sex === "m") router.push("/submit-pickup");
              // else if (sex === "f") router.push("/read-pickup");
              // else
              // router.push('')
            }
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
