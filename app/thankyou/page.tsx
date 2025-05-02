"use client";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white text-center p-6">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold animate-pulse mb-4">
        Thank You for Visiting!
      </h1>
      <p className="text-lg font-medium mb-6">
        We appreciate your time at{" "}
        <span className="font-bold">Concept Coaching Classes</span>. Keep
        striving for success, and we hope to see you again soon!
      </p>

      {/* Decorative Line */}
      <div className="w-48 h-1 bg-white rounded-full mb-6"></div>

      {/* Call-to-Action */}
      <div className="flex space-x-4">
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Visit Again
        </button>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Share with Friends
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm">
        <p className="opacity-80">
          &copy; {new Date().getFullYear()} Concept Coaching Classes | Keep
          Learning, Keep Growing 🚀
        </p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
