import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Concept Coaching Classes</h1>
        <p className="text-lg">Unlock Your Potential with Expert Guidance</p>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto text-center py-16">
        <h2 className="text-3xl font-bold text-gray-700">
          Achieve Your Goals with Us!
        </h2>
        <p className="mt-4 text-gray-600">
          Join our coaching programs and excel in academics and competitive
          exams.
        </p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-amber-600 hover:bg-blue-700">
          Enroll Now
        </button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold  text-blue-600">Expert Tutors</h3>
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
