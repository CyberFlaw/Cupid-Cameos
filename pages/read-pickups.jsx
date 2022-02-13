import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { readPickupLines, invalidateUser } from "../utils/firebaseHelper";
import { decodeUUID } from "../utils/uuidProcessing";

export default function ReadPickup() {
  const [pickupBuffer, setPickupBuffer] = useState([]);

  const Router = useRouter();

  useEffect(() => {
    async function readBuffer() {
      const lines = await readPickupLines();
      setPickupBuffer(lines);
    }

    if (localStorage.getItem("betterHalf")) Router.push("/waitingroom");

    readBuffer();
  }, [Router]);

  function JsxInjection(props) {
    let line = props.payload.pickup;

    return (
      <>
        <div
          onClick={() => {
            const partnerDecoded = decodeUUID(props.payload.id);
            const userDecoded = decodeUUID(localStorage.getItem("romanticId"));
            localStorage.setItem("betterHalf", props.payload.id);

            invalidateUser(partnerDecoded, userDecoded);
            Router.push("/waitingroom");
          }}
          className="cursor-pointer flex justify-center items-center text-md sm:text-lg px-8 py-5 bg-gray-50 text-gray-700  uppercase tracking-wide font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs"
        >
          <h3>{line}</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen h-auto sm:min-h-screen justify-start items-center">
        <h1 className="text-5xl sm:text-7xl sm:mt-16 mt-16 text-white  ">
          Pickup Lines
        </h1>
        <h3 className="mb-10 mt-3 text-gray-200">
          Let You Instincts Pick Your Better Half
        </h3>

        <div className="bg-gray-200 grid sm:grid-cols-4 grid-cols-1 sm:gap-x-5 sm:gap-y-5 gap-y-6 p-5 rounded-xl  place-content-center">
          {pickupBuffer.map((line) => (
            <JsxInjection key={line.id} payload={line} />
          ))}
        </div>
      </div>
    </>
  );
}
