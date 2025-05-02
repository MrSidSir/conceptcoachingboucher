import React from "react";
import Head from "next/head"; // Import Head from Next.js
import Header from "@/components/Header";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <header className="bg-gray-400 h-full  text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="path-to-your-logo" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">MyApp</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4">
            <a
              href="#home"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#courses"
              className="hover:text-yellow-400 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#search"
              className="hover:text-yellow-400 transition duration-300"
            >
              Search
            </a>
            <a
              href="#menu"
              className="hover:text-yellow-400 transition duration-300"
            >
              Menu
            </a>
          </nav>

          {/* Add Action Button */}
          <div>
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Head>
          <div className="bg-amber-300 text-black text-arial p-10">
            {" "}
            Thank you for visiting concept coaching classes{" "}
          </div>
        </Head>
        <h1 className="text-4xl font-bold text-blue-500">
          {" "}
          syed irshad ahmad{" "}
        </h1>
      </div>
    </div>
  );
};

export default Page;
