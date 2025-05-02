// page.tsx
import React from "react";
import ir from "../../public/PHOTO IRSHAD.jpg";
import Image from "next/image";
import HomePageButton from "@/components/homePageButton";
import Header from "@/components/Header";

const Brochure = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 ">
        <div className=" flex  items-center justify-between container mx-auto text-center border-2 border-red-800">
          <div>
            {" "}
            <button>
              {" "}
              <Image src={ir} width={50} height={60} alt="irshad" />{" "}
            </button>{" "}
          </div>
          <div className=" text-amber-400 text-centre border-pink-400 ">
            {" "}
            about home{" "}
          </div>
          <div className=" text-violet-500 border-b-black  ">search</div>
          <div className="  text-amber-200 border-b-black  ">
            log in\ log out
          </div>

          {/* <h1 className="text -4xl font-bold">concept coaching classes </h1>
          <p className="text-lg mt-2"></p> */}
        </div>
      </header>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pb--8 mb-4"></form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-boldmb-2">
            username
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3text-gray"></input>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            password
          </label>
          <input className="class=shadow appearance-none border border-red-50 rounded w-full py-2"></input>
          <p className="text-red-500 text-xs italic">
            please choose a password.
          </p>
        </div>
        <div className="flex items-centre justify-between"></div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 row-auto">
          sign in
        </button>
      </div>
      {/* Content Section */}
      <main className="container mx-auto px-4 py-10">
        <HomePageButton />
      </main>

      {/* Footer Section */}
      <footer className="bg-purple-950 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Concept Coachinng Classes . thank you.</p>
        </div>
      </footer>
      
      <Footer />
    </div>
  );
};

export default Brochure;
