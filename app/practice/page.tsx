import React from "react";

type Props = {};

const Practice = (props: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Concept Coaching</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            At Concept Coaching, we guide students to master concepts and
            achieve excellence.
          </p>
        </div>
      </section>

      <section id="services" className="py-12 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Math Coaching</h3>
              <p className="text-gray-700">
                Understand fundamental concepts and tackle advanced problems.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Science Coaching</h3>
              <p className="text-gray-700">
                Explore and grasp the wonders of science.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Test Prep Coaching</h3>
              <p className="text-gray-700">
                Prepare for competitive exams with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Email us at{" "}
            <a
              href="mailto:contact@conceptcoaching.com"
              className="text-blue-500 hover:underline"
            >
              contact@conceptcoaching.com
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Concept Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Practice;
