import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

const Hero = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center items-center flex-col m-12">
        <h1 className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white font-extrabold text-4xl md:text-5xl p-4 rounded-lg shadow-lg">
          Welcome to Concept Coaching Browser
        </h1>
        <p className="text-gray-900 bg-gradient-to-r from-gray-300 to-gray-100 p-6 my-4 rounded-xl shadow-md text-lg md:text-xl">
          Director:{" "}
          <span className="font-bold text-blue-500">
            SYED IRSHAD AHMAD ('MR. SID SIR')
          </span>
          <br /> Qualifications: B.SC. (P.C.M), M.SC. (CHEMISTRY) + B.ED. M.C.A
          (Machine Learning)
        </p>
        <p className="text-gray-800 bg-gradient-to-r from-green-300 to-green-100 p-4 my-2 rounded-lg shadow-md text-lg">
          ONE INITIATIVE TOWARDS CONCEPT
        </p>
        <button
          type="button"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://res.cloudinary.com/dpotbki0n/image/upload/v1744553152/PHOTO_IRSHAD_ktqljc.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full"
            style={{ height: "auto" }}
          />
        </button>
      </div>
    </div>
  );
};
export default Hero;
