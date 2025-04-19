import React from "react";
import "./App.css";
import Page from "../CCCregistration/page";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Concept Coaching Classes</h1>
        <p>Empowering students from Class 5th to 12th with expert guidance</p>
        <button className="enroll-btn">Enroll Now</button>
      </header>

      <section className="courses">
        <h2>📚 Courses Offered</h2>
        <ul>
          <li>Mathematics | Science | English (Class 5th-10th)</li>
          <li>Physics | Chemistry | Biology | Maths (Class 11th-12th)</li>
          <li>Competitive Exams: IIT-JEE, NEET</li>
        </ul>
      </section>

      <section className="faculty">
        <h2>👨‍🏫 Our Faculty</h2>
        <p>Expert teachers dedicated to shaping bright futures!</p>
      </section>

      <section className="testimonials">
        <h2>💬 Testimonials</h2>
        <p>“Best coaching institute in town! Highly recommend.” - Student A</p>
      </section>

      <footer>
        <p>📞 Contact us: +91 123-456-7890</p>
      </footer>
    </div>
  );
}

export default App;
