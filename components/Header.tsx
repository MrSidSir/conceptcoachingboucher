import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="#10B981" />
            <text
              x="24"
              y="28"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="white"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              CCC
            </text>
          </svg>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
            Concept Coaching Classes
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link
            href="/conceptcoachingboucher"
            className="hover:text-yellow-400 transition duration-300"
          >
            Boucher
          </Link>
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
            Syllabus
          </Link>
          <a
            href="#menu"
            className="hover:text-yellow-400 transition duration-300"
          >
            Menu
          </a>
        </nav>

        {/* CTA Button */}
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
