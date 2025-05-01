import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
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
  );
};

export default Header;
