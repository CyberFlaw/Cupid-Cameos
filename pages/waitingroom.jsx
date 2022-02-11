export default function maleWaitingRoom() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 h-screen sm:h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-white opacity-80 rounded-lg px-10 py-5">
          <h1 className="sm:text-6xl text-4xl mb-5">Please Wait Untill</h1>
          <h1 className="sm:text-4xl text-xl">
            Someone Responds To Your Pickup Line
          </h1>
        </div>
      </div>
    </>
  );
}
