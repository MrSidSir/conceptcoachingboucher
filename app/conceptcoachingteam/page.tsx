import React from "react";
import Header from "@/components/Header";

const Page = () => {
  function sum(x: number, y: number, z: number) {
    return x + y + z;
  }
  const total = sum(3, 4, 5);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-cyan-300 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="path-to-your-logo" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">MyApp</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4 justify-between">
            <a
              href="#home"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#courses"
              className="hover:text-amber-700 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#search"
              className="hover:text-emerald-900 transition duration-300 "
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
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:cursor-pointer font-medium hover:bg-yellow-500 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </header>
      {/* Header */}
      <header className="bg-slate-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Concept Coaching Classes</h1>
        <p className="text-lg">Unlock Your Potential with Expert Guidance</p>
      </header>
      <h1>{total}</h1>

      {/* Hero Section */}
      <section className="container mx-auto text-center py-16">
        <h2 className="text-3xl font-bold text-gray-700">
          Achieve Your Goals with Us!
        </h2>
        <p className="mt-4 text-gray-600">
          Join our coaching programs and excel in academics and competitive
          exams.
        </p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-amber-600 hover:bg-cyan-400">
          Enroll Now
        </button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold  text-blue-600">
            Expert Tutors
          </h3>
          <p className="text-gray-600 mt-2">
            Learn from the best industry professionals.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-600">
            Comprehensive Courses
          </h3>
          <p className="text-gray-600 mt-2">
            Detailed curriculum for academic success.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-600">
            Flexible Learning
          </h3>
          <p className="text-gray-600 mt-2">
            Online and offline options to suit your needs.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-6">
        © 2025 Concept Coaching Classes - All Rights Reserved
      </footer>
    </div>
  );
};

export default Page;

// import React from "react";

// type Props = {};

// const Page = (props: Props) => {
//   function sum(x, y, z) {
//     return x + y + z;
//   }
//   const total = sum(3, 4, 5);

//   return (
//     <div>
//       <h1>{total}</h1>
//     </div>
//   );
// };

// export default Page;
