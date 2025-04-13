// page.tsx
import React from "react";

const Brochure = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">concept coaching classes </h1>
          <p className="text-lg mt-2"></p>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">This coaching class gives tuition to children from class 5th to class 12th.
             Here special attention is given to the educational concept of the child.
             Here syllabus wise test is also taken from the students.
              And this coaching is completely free and gives tuition to orphan students.</h2>
          <p>
           coaching location : E-block , 25 futta road , khadda coloney , jaitpur part - 2 , New Delhi 
           110044
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4"> Concept Coaching Classes are held in the morning and evening in two shifts. 
            ACs have been installed in all the classes here. There is a saint here. Here the weaker children are guided separately. 
            There are CCTV cameras here which provide greater security to the students.</h2>
          <ul className="list-disc list-inside">
            <li> free test paper</li>
            <li> online doubt session</li>
            <li>free wifi connectivity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: irshad1554@gmail.com</p>
          <p>Phone: +91 7355534404 </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Concept Coachinng Classes . thank you.</p>
        </div>
      </footer>
    </div>
  );
};

export default Brochure;