import React from "react";
import Image from "next/image";
import Header from "@/components/Header"; // Ensure this path is correct

function CoachingInstitute() {
  return (
    <div className="coaching-container bg-gray-50 p-6 rounded-lg shadow-md">
      <Header />

      {/* Header Section */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Concept Coaching Classes
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Empowering Students from Class 5th to 12th
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
          Enroll Now
        </button>
      </header>

      {/* Images Section */}
      <div className="flex justify-center gap-4 mb-6">
        <Image
          className="rounded-md shadow-lg"
          src="https://conservationcubclub.com/wp-content/uploads/2024/01/Cat-Staring-Hero.jpeg"
          width={250}
          height={350}
          alt="Cute Cat"
        />
        <Image
          className="rounded-md shadow-lg"
          src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb"
          width={250}
          height={350}
          alt="Learning Environment"
        />
      </div>

      {/* About Section */}
      <section className="about mb-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="bg-blue-400 text-white p-4 rounded-md shadow-lg hover:bg-cyan-700 hover:bg-blue-500 cursor-pointer transition duration-300">
          At Concept Coaching, we provide expert guidance and innovative
          learning solutions for students.
        </p>
      </section>

      {/* Courses Section */}
      <section className="courses bg-gray-100 p-6 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 animate-slide-down">
          Courses Offered
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="p-4 border-l-4 border-blue-500 bg-white shadow-sm rounded-md hover:animate-pulse">
            <span className="font-semibold">
              Mathematics | Science | English
            </span>{" "}
            (Class 5th-10th)
          </li>
          <li className="p-4 border-l-4 border-green-500 bg-white shadow-sm rounded-md hover:animate-pulse">
            <span className="font-semibold">
              Physics | Chemistry | Biology | Maths
            </span>{" "}
            (Class 11th-12th)
          </li>
          <li className="p-4 border-l-4 border-purple-500 bg-white shadow-sm rounded-md hover:animate-pulse">
            <span className="font-semibold">Competitive Exams:</span> IIT-JEE,
            NEET
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-6">
        <p className="text-lg text-gray-600">
          Contact us for more details | 📞 7355534404
        </p>
      </footer>
    </div>
  );
}

export default CoachingInstitute;
