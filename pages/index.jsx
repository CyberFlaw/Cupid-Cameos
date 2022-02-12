import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import { useEffect } from "react";

// import readImage from "../assets/read.png";
import writeImage from "../assets/write.png";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("romanticId");

    if (id) {
      router.push("/waitingroom");
    }
  });
  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen sm:h-screen justify-start items-center">
        <h1 className="text-7xl sm:mt-20 mt-16 text-white">Valentine</h1>

        <div className="w-full flex sm:flex-row flex-col justify-center items-center mt-0 sm:mt-3 sm:mb-20 mb-36">
          {/* Submit pickup */}
          <div id="submit-pickup">
            <Link href="/submit-pickup" passHref>
              <button className=" px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
                <div className="bg-black hover:opacity-60 opacity-0 h-full">
                  {" "}
                </div>
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                  <div className="-m-10">
                    <Image
                      src={writeImage}
                      alt="write img"
                      height={235}
                      width={235}
                    />
                    <h3 className="text-black sm:text-xs text-sm mx-5 mb-5">
                      Guys! This is your chance. Write the best pickup lines you
                      possibly can. If you crack her up, you might be able to
                      snatch her heart.
                    </h3>
                    <h2 className="text-black sm:text-xs text-sm mx-5 mb-5">
                      {" "}
                      Best of luck, Valiant Hearts!
                    </h2>
                  </div>
                </div>
              </button>
            </Link>
          </div>
          {/* Read pickup */}
          {/* <div id="read-pickup" className="sm:mb-0 mb-10">
            <Link href="/read-pickup" passHref>
              <button className=" px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
                <div className="bg-black hover:opacity-60 opacity-0 h-full">
                  {" "}
                </div>
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                  <div className="-m-10">
                    <Image
                      src={readImage}
                      alt="read img"
                      height={200}
                      width={200}
                    />
                    <h3 className="text-black sm:text-xs text-sm mx-5 mb-5">
                      Gals! I’ve heard that there are a bunch of Gentlemen on
                      the other side of this door with their finest jokes. If
                      you are flattered do let them know, they would love your
                      kind gesture. Remember you only get one pick.
                    </h3>
                    <h2 className="text-black sm:text-xs text-sm mx-5 mb-5">
                      {" "}
                      Choose wisely, Alluring Maiden!
                    </h2>
                  </div>
                </div>
              </button>
            </Link>
          </div> */}
        </div>
        <div className="flex flex-grow flex-col justify-center items-center ">
          <h3 className="text-white text-xs">Brought to you by</h3>
          <h2 className="text-white text-xm">
            {" "}
            The Students of Department of Computer Science
          </h2>
        </div>
      </div>
    </>
  );
}
