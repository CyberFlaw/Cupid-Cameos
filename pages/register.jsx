import { useState } from "react";

import { encodeUUID, decodeUUID } from "./utils/uuidProcessing";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  const [sex, setSex] = useState("");
  const [preferance, setPreferance] = useState("");
  const [phone, setPhone] = useState("");

  const payload = {};

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

        <button
          onClick={() => {
            payload.name = name;
            payload.email = email;
            payload.branch = branch;
            payload.sem = sem;
            payload.sex = sex;
            payload.preferance = preferance;
            payload.phone = phone;
            payload.uuid = encodeUUID(payload);

            decodeUUID(payload.uuid);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
