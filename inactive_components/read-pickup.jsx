// import { useEffect, useState } from "react";
// import { readPickupLines, writeNewUser } from "../utils/FirebaseHelper";

// export default function Flatter() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [branch, setBranch] = useState("");
//   const [sem, setSem] = useState("");
//   const [sex, setSex] = useState("");
//   const [preferance, setPreferance] = useState("");
//   const [phone, setPhone] = useState("");
//   const [pickupLine, setPickupLine] = useState("");

//   const payload = {};

//   useEffect((pickupLine) => {
//     const lines = readPickupLines();
//     if (lines != -1) setPickupLine(lines);
//     console.log(pickupLine);
//   }, []);

//   return (
//     <>
//       <div className="flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 h-auto sm:h-screen justify-start items-center">
//         <h1>Prepare to be flustered</h1>

//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="name" className="text-blue-500">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             required
//             onChange={(event) => {
//               setName(event.target.value);
//             }}
//           />

//           <label htmlFor="email">Email (Tcr id)</label>
//           <input
//             id="email"
//             type="text"
//             required
//             onChange={(event) => {
//               setEmail(event.target.value);
//             }}
//           />

//           <label htmlFor="phone">Phone</label>
//           <input
//             id="phone"
//             type="text"
//             required
//             onChange={(event) => {
//               setPhone(event.target.value);
//             }}
//           />

//           <label htmlFor="branch">Branch</label>
//           <input
//             id="branch"
//             type="text"
//             required
//             onChange={(event) => {
//               setBranch(event.target.value);
//             }}
//           />

//           <label htmlFor="sem">Semester</label>
//           <input
//             id="sem"
//             type="text"
//             required
//             onChange={(event) => {
//               setSem(event.target.value);
//             }}
//           />

//           <label htmlFor="sex">Sex</label>
//           <input
//             id="sex"
//             type="text"
//             required
//             onChange={(event) => {
//               setSex(event.target.value);
//             }}
//           />

//           <label htmlFor="preference">sexual orientation</label>
//           <input
//             id="preference"
//             type="text"
//             required
//             onChange={(event) => {
//               setPreferance(event.target.value);
//             }}
//           />

//           <button
//             onClick={() => {
//               payload.name = name;

//               payload.branch = branch;
//               payload.sem = sem;
//               payload.email = email;
//               payload.sex = sex;
//               payload.preferance = preferance;
//               payload.phone = phone;
//               payload.uuid = encodeUUID(payload);

//               const check = getKey(email);
//               if (check === "invalid") console.log("Wrong email");
//               else {
//                 writeNewUser(payload.email, payload.uuid, payload.sex);

//                 localStorage.setItem("romanticId", payload.uuid);

//                 // if (sex === "m") router.push("/submit-pickup");
//                 // else if (sex === "f") router.push("/read-pickup");
//                 // else
//                 // router.push('')
//               }
//             }}
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
