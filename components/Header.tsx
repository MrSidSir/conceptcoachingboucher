import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="bg-gray-800 p[50%] 
     text-white shadow-lg"
    >
      <div className="container mx-auto max-h-full flex items-center justify-between  px-30 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="path-to-your-logo" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">MyApp</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link
            href="/conceptcoachingboucher"
            className="hover:text-yellow-400 transition duration-300"
          >
            Boucher
          </Link>
          {/* C:\Users\irsha\OneDrive\Desktop\conceptcoachingboucher\app\conceptcoachingboucher */}
          <a
            href="#courses"
            className="hover:text-yellow-400 transition duration-300"
          >
            Courses
          </a>
          <Link
            href="/conceptcoachingsyllbus"
            className="hover:text-yellow-400 transition duration-300"
          >
            Search{" "}
          </Link>

          {/* / C:\Users\irsha\OneDrive\Desktop\co */}
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
  );
};

export default Header;
