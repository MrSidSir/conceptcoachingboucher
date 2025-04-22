"use client"
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function HomePageButton({}: Props) {
  const router = useRouter();
  return (
    <div>
      {" "}
      <button
        className="bg-emerald-300 text-white rounded-md p-10 cursor-pointer hover:bg-black  "
        type="button"
        onClick={() => router.push("/")}
      >
        {" "}
        Go To Home Page
      </button>
    </div>
  );
}
