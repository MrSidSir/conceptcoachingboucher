"use client";
import React from "react";
import Image from "next/image";
import HomePageButton from "@/components/homePageButton";
import Header from "@/components/Header";
import ir from "../../public/PHOTO IRSHAD.jpg";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 text-gray-900 flex flex-col justify-between">
      {/* Header at the Top */}
      <Header />

      {/* Header Section */}
      <header className="bg-blue-700 shadow-lg text-white py-6 rounded-b-lg">
        <div className="flex items-center justify-between container mx-auto text-center px-6">
          {/* Profile Button */}
          <button className="transition transform hover:scale-105">
            <Image
              src={ir}
              width={50}
              height={60}
              alt="Irshad"
              className="rounded-full shadow-md"
            />
          </button>

          <div className="text-amber-300 font-semibold cursor-pointer hover:underline">
            About Home
          </div>
          <div className="text-violet-300 font-semibold cursor-pointer hover:underline">
            Search
          </div>
          <div className="text-yellow-300 font-semibold cursor-pointer hover:underline">
            Log in / Log out
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="w-full max-w-xs mx-auto mt-8">
        <form className="bg-white shadow-lg rounded-xl px-8 py-6 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              className="shadow-md border border-red-50 rounded w-full py-2 px-3 focus:ring-2 focus:ring-red-400"
              type="password"
            />
            <p className="text-red-500 text-xs italic mt-1">
              Please choose a secure password.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
              Sign In
            </button>
          </div>
        </form>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-10 text-center">
        <HomePageButton />
      </main>

      {/* Footer at the Bottom */}
      <footer className="bg-purple-900 text-white py-4 text-center shadow-md rounded-t-lg">
        <div className="container mx-auto">
          <p className="text-sm font-light">
            &copy; 2025 Concept Coaching Classes | Thank You
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
