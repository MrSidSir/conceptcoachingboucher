import React from "react";
// import "./CoachingInstitute.css";
import Image from "next/image";

function CoachingInstitute() {
  return (
    <div className="coaching-container">
      <header>
        <h1>Concept Coaching Classes</h1>
        <p>Empowering Students from Class 5th to 12th</p>
        <button className="enroll-btn">Enroll Now</button>
      </header>
      <div className="justify-between">
        <Image
          className="justify-between "
          src="https://conservationcubclub.com/wp-content/uploads/2024/01/Cat-Staring-Hero.jpeg"
          width={200}
          height={400}
          alt=""
        />
        <Image
          className=""
          src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          width={100}
          height={100}
          alt=""
        />
      </div>
      {/* https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80 */}
      <section className="about">
        <h2>About Us</h2>
        <p className="bg-blue-400 hover:text-amber-100 p-2.5 cursor-pointer  ">
          At Concept Coaching, we provide expert guidance and innovative
          learning solutions for students.
        </p>
      </section>
      {/* <section className="courses">
        <h2>Courses Offered</h2>
        <ul>
          <li>Mathematics | Science | English (Class 5th-10th)</li>
          <li>Physics | Chemistry | Biology | Maths (Class 11th-12th)</li>
          <li>Competitive Exams: IIT-JEE, NEET</li>
        </ul>
      </section> */}
      <section className="courses bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Courses Offered
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="p-4 border-l-4 border-blue-500 bg-white shadow-sm rounded-md">
            <span className="font-semibold">
              Mathematics | Science | English
            </span>{" "}
            (Class 5th-10th)
          </li>
          <li className="p-4 border-l-4 border-green-500 bg-white shadow-sm rounded-md">
            <span className="font-semibold">
              Physics | Chemistry | Biology | Maths
            </span>{" "}
            (Class 11th-12th)
          </li>
          <li className="p-4 border-l-4 border-purple-500 bg-white shadow-sm rounded-md">
            <span className="font-semibold">Competitive Exams:</span> IIT-JEE,
            NEET
          </li>
        </ul>
      </section>

      <footer>
        <p>Contact us for more details | 📞 7355534404 </p>
      </footer>
    </div>
  );
}

export default CoachingInstitute;
