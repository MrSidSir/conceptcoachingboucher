import Link from "next/link";
import React from "react";

import { useRouter } from "next/navigation";

type Props = {};

const Button = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="flex gap-2.5 items-center justify-between w-[70%]  mx-auto">
        {/* <button
          className="bg-emerald-300 text-white rounded-md p-10 cursor-pointer hover:bg-black  "
          type="button"
          onClick={() => router.push("/conceptcoachingboucher")}
        >
          {" "}
          okey{" "}
        </button> */}
        <div className="flex flex-wrap gap-6 justify-center items-center p-8">
          <button
            className="bg-amber-700 text-amber-300 w-40 h-40 flex justify-center items-center rounded-full border-4 border-amber-300 cursor-pointer hover:bg-sky-700 hover:border-sky-500 transition duration-300 ease-in-out"
            type="button"
            onClick={() => router.push("/conceptcoachingsyllbus")}
          >
            Yes
          </button>

          <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-40 h-40 flex justify-center items-center rounded-full border-4 border-purple-300 cursor-pointer hover:bg-sky-700 hover:border-sky-500 transition duration-300 ease-in-out"
            type="button"
            onClick={() => router.push("/conceptcoachingcontent")}
          >
            TODO
          </button>

          <button
            className="bg-gray-800 text-white w-40 h-40 flex justify-center items-center rounded-full border-4 border-gray-500 shadow-md relative overflow-hidden transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-700 hover:border-gray-300"
            type="button"
            onClick={() => router.push("/conceptcoachingonlineplatformlink")}
          >
            <span className="absolute inset-0 bg-gray-500 opacity-30 rounded-full hover:bg-amber-800 cursor-pointer blur-lg"></span>
            <span className="relative z-10">OK</span>
          </button>

          <button
            className="bg-amber-700 text-amber-300 w-40 h-40 flex justify-center items-center rounded-full border-4 border-amber-300 cursor-pointer hover:bg-sky-700 hover:border-sky-500 transition duration-300 ease-in-out"
            type="button"
            onClick={() => router.push("/TODOAPP")}
          >
            Click
          </button>

          <button
            className="bg-rose-600 text-yellow-400 w-40 h-40 flex justify-center items-center rounded-full border-4 border-rose-700 cursor-pointer hover:bg-slate-900 hover:border-yellow-600 transition duration-300 ease-in-out"
            type="button"
            onClick={() => router.push("/conceptcoachingteam")}
          >
            Enroll
          </button>

          <button
            className="bg-fuchsia-600 text-white w-40 h-40 flex justify-center items-center  rounded-full border-4 border-indigo-800 cursor-pointer hover:bg-emerald-500 hover:border-emerald-700 transition duration-300 ease-in-out"
            type="button"
            onClick={() => router.push("/practice")}
          >
            Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
