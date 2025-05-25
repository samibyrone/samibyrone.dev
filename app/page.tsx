import Image from "next/image";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
      <main className="relative bg-black justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <Navbar />
          </div>
      </main>
    </>
  );
}
