"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function HomePageButton() {
  const router = useRouter();

  return (
    <div className="mt-4">
      <button
        type="button"
        className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition duration-300"
        onClick={() => router.push("/")}
      >
        Go To Home Page
      </button>
    </div>
  );
}
