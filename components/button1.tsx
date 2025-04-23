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
        <button
          className="bg-amber-700  flex gap-2.5 text-amber-300 p-10 rounded-[50%] cursor-pointer hover:bg-sky-700 "
          type="button"
          onClick={() => router.push("/conceptcoachingsyllbus")}
        >
          {" "}
          yes{" "}
        </button>
        <button
          className="bg-amber-700  flex gap-2.5 text-amber-300 p-10 rounded-[50%] cursor-pointer hover:bg-sky-700 "
          type="button"
          onClick={() => router.push("/conceptcoachingcontent")}
        >
          {" "}
          TODO{" "}
        </button>
        <button
          className="bg-black text-amber-50 p-10 cursor-pointer hover:bg-amber-300 rounded-[30%]  "
          type="button"
          onClick={() => router.push("/conceptcoachingonlineplatformlink")}
        >
          {" "}
          OK{" "}
        </button>
        <button
          className="bg-amber-700  flex gap-2.5 text-amber-300 p-10 rounded-[50%] cursor-pointer hover:bg-sky-700 "
          type="button"
          onClick={() => router.push("/TODOAPP")}
        >
          {" "}
          click{""}
        </button>
        <button
          className="bg-amber-950 bg-rose-600 text-yellow-400 p-10 rounded-[20%] hover:bg-slate-950 "
          type="button"
          onClick={() => router.push("/conceptcoachingteam")}
        >
          {" "}
          Enroll{" "}
        </button>
        <button
          className="bg-fuchsia-600 border-indigo-800 text-shadow-lime-300 p-10 rounded-[30%] hover:bg-emerald-500 "
          type="button"
          onClick={() => router.push("/practice")}
        >
          {" "}
          practicepage{" "}
        </button>
      </div>
    </div>
  );
};

export default Button;
