import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { encodeUUID, decodeUUID, getKey } from "../utils/uuidProcessing";
import { writeNewUser } from "../utils/firebaseHelper";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  // const [sex, setSex] = useState("");
  // const [preferance, setPreferance] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLine, setPickupLine] = useState("");

  const router = useRouter();

  const payload = {};

  useEffect((router) => {
    const id = localStorage.getItem("romanticId");

    if (id) {
      const payload = decodeUUID(id);

      // if (payload[0] === "m") router.push("/submit-pickup");
      // else if (payload[0] === "f") router.push("/read-pickup");
    }
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen h-auto sm:min-h-screen justify-start items-center">
      <h1 className="text-6xl sm:text-7xl sm:mt-16 mt-16 text-white mb-10 ">
        Valient Hearts
      </h1>

      <div
        className="flex flex-col justify-around items-center bg-white px-10 py-10 sm:py-5 rounded-xl backdrop-filter-blur"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex sm:flex-row flex-col items-center sm:mb-5 ">
          <div className="flex flex-col sm:mr-10 sm:mb-0 mb-5 w-42">
            <label htmlFor="name" className="text-gray-600 ml-3">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="rounded-md p-0.5 px-3 text-gray-600 border-pink-500 border-2"
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col sm:mb-0 mb-5">
            <label htmlFor="email" className="text-gray-600 ml-3">
              Email (GECTCR ID):
            </label>
            <input
              id="email"
              type="text"
              required
              className="rounded-md p-0.5 px-3 text-gray-600 border-pink-500 border-2"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center sm:mb-5 -mb-5">
          <div className="flex flex-col sm:mr-10 sm:mb-0 mb-5">
            <label htmlFor="phone" className="text-gray-600 ml-3">
              Phone:
            </label>
            <input
              id="phone"
              type="text"
              required
              className="rounded-md p-0.5 px-3 text-gray-600 sm:w-32 border-pink-500 border-2"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>

          <div className="flex flex-row justify-around ">
            <div className="flex flex-col sm:mb-0 mb-5 sm:mr-10 mr-4">
              <label htmlFor="branch" className="text-gray-600 ml-2">
                Branch:
              </label>
              <input
                id="branch"
                type="text"
                required
                className="rounded-md p-0.5 px-3 text-gray-600 sm:w-20 w-20 border-pink-500 border-2 "
                onChange={(event) => {
                  setBranch(event.target.value);
                }}
              />
            </div>

            <div className="flex flex-col sm:mb-0 mb-5">
              <label htmlFor="sem" className="text-gray-600 ml-1 ">
                Semester:
              </label>
              <input
                id="sem"
                type="text"
                required
                className="rounded-md p-0.5 px-3 text-gray-600 sm:w-20 w-20 border-pink-500 border-2"
                onChange={(event) => {
                  setSem(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-12 sm:mb-10 sm:mt-0 mt-5">
          <label className="text-gray-600 ml-1">
            Enter Pickup line (Max 180):
          </label>
          <textarea
            name="pickupline"
            cols="30"
            rows="10"
            maxLength={180}
            className="p-1 rounded-md h-36 w-64 sm:h-48 sm:w-80 text-gray-600 border-pink-500 border-2"
            onChange={(event) => {
              setPickupLine(event.target.value);
            }}
          ></textarea>
        </div>

        <button
          onClick={() => {
            if (name && email && branch && sem && phone && pickupLine) {
              payload.name = name;
              payload.branch = branch;
              payload.sem = sem;
              payload.email = email;
              payload.sex = "male";
              // payload.preferance = preferance;
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
                router.push("/waitingroom");
              }
            } else {
              alert("Please fill all the fields");
            }
          }}
        >
          <div className="px-10 py-2 rounded-lg bg-pink-400 ">
            <h2 className="text-white">Submit Proposal</h2>
          </div>
        </button>
      </div>
    </div>
  );
}
