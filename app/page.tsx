"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/button1";
import Header from "@/components/Header";
import Address from "@/components/irshad/Address";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Header />

      <div className="flex justify-center items-center flex-col m-12">
        <h1 className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white font-extrabold text-4xl md:text-5xl p-4 rounded-lg shadow-lg">
          Welcome to Concept Coaching Browser
        </h1>
        <p className="text-gray-900 bg-gradient-to-r from-gray-300 to-gray-100 p-6 my-4 rounded-xl shadow-md text-lg md:text-xl">
          Director:{" "}
          <span className="font-bold text-blue-500">
            SYED IRSHAD AHMAD ('MR. SID SIR')
          </span>
          <br /> Qualifications: B.SC. (P.C.M), M.SC. (CHEMISTRY) + B.ED. M.C.A
          (Machine Learning)
        </p>
        <p className="text-gray-800 bg-gradient-to-r from-green-300 to-green-100 p-4 my-2 rounded-lg shadow-md text-lg">
          ONE INITIATIVE TOWARDS CONCEPT
        </p>
        <button
          type="button"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://res.cloudinary.com/dpotbki0n/image/upload/v1744553152/PHOTO_IRSHAD_ktqljc.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full"
          />
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded-lg shadow-sm mx-2">
        <ul className="list-disc list-inside text-sm font-sans space-y-1">
          <li className="bg-gray-600 text-white font-normal py-1 px-2 rounded-md hover:shadow-md transition-transform duration-200 hover:scale-102">
            Mr. Sam (M.Tech.)
          </li>
          <li className="bg-red-200 text-gray-800 font-normal py-1 px-2 rounded-md hover:shadow-md transition-transform duration-200 hover:scale-102">
            Mr. Tanveer Sir (Master of Code)
          </li>
          <li className="bg-blue-300 text-gray-900 font-normal py-1 px-2 rounded-md hover:shadow-md transition-transform duration-200 hover:scale-102">
            Mr. Sid Sir (M.Sc.)
          </li>
        </ul>
      </div>

      <div className="mx-12 my-8">
        <h2 className="text-2xl font-bold text-blue-500">
          Why Should You Join Our Concept Coaching Classes:
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <p>
            <strong>1.</strong> Unlock your full potential—concept coaching
            helps you truly understand, not just memorize.
          </p>
          <p>
            <strong>2.</strong> Bridge the gap between theory and reality—learn
            how concepts work in real life!
          </p>
          <p>
            <strong>3.</strong> Personalized guidance ensures no student is left
            behind.
          </p>
          <p>
            <strong>4.</strong> Master the fundamentals to solve any problem
            confidently.
          </p>
          <p>
            <strong>5.</strong> Interactive and engaging sessions make learning
            exciting and effective.
          </p>
          <p>
            <strong>6.</strong> Boost your critical thinking and apply knowledge
            like a pro.
          </p>
          <p>
            <strong>7.</strong> Stronger concepts mean higher scores—excel in
            exams with ease.
          </p>
          <p>
            <strong>8.</strong> Learn from experienced mentors who make tough
            topics simple.
          </p>
          <p>
            <strong>9.</strong> Turn confusion into clarity—never fear tricky
            subjects again!
          </p>
          <p>
            <strong>10.</strong> Your future starts today—invest in yourself
            with concept coaching.
          </p>
        </div>
      </div>

      <div className="flex justify-around items-center my-12">
        <button
          className="bg-purple-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-110"
          type="button"
          onClick={() => router.push("/thankyou")}
        >
          Concept Coaching Syllabus
        </button>
        <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-110">
          OK
        </button>
      </div>

      <div className="">
        <h3 className="text-xl text-center font-bold text-violet-500 mb-4">
          About Our Facilities
        </h3>
        <Button />
        <div>
          <Address />
          <Footer />
        </div>
      </div>
    </div>
  );
}
