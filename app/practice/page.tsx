import React from "react";
import Head from "next/head"; // Import Head from Next.js
import Header from "@/components/Header";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <header className="bg-gray-400 h-full text-white shadow-lg">
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

      {/* Motivational Section */}
      <div className="text-center p-6 bg-blue-100">
        <h2 className="text-2xl font-bold text-blue-600">
          Stay Focused, Stay Determined!
        </h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>1. Hard work beats talent when talent doesn't work hard.</li>
          <li>
            2. Practice like you've never won, perform like you've never lost.
          </li>
          <li>
            3. Success is no accident—it's hard work, perseverance, and
            learning.
          </li>
          <li>4. Push yourself, because no one else will do it for you.</li>
          <li>
            5. The only limit to your success is the one you set yourself.
          </li>
          <li>6. Dreams don’t work unless you do.</li>
          <li>7. Sweat, sacrifice, and success—three steps to greatness.</li>
          <li>8. Train harder today, shine brighter tomorrow.</li>
          <li>9. Don't stop when you're tired. Stop when you're done.</li>
          <li>10. Challenges make you stronger; keep moving forward!</li>
        </ul>
      </div>

      {/* Feedback Section */}
      <div className="p-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Share Your Feedback
        </h2>
        <p className="text-gray-600">
          Help us improve your coaching experience!
        </p>
        <form className="mt-4">
          <textarea
            className="w-3/4 p-2 border rounded-lg"
            rows={4}
            placeholder="Write your feedback here..."
          ></textarea>
          <br />
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Head>
          <div className="bg-amber-300 text-black text-arial p-10">
            {" "}
            Thank you for visiting Concept Coaching Classes{" "}
          </div>
        </Head>
        <div className="bg-slate-500 text-2xl text-cyan-300">
          headed by{" "}
          <h1 className="text-4xl font-bold text-2xl font-bold animate-color">
            {" "}
            Syed Irshad Ahmad{" "}
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Page;
