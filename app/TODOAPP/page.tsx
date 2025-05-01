"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/button1";
import Header from "@/components/Header";
const courses = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Computer Science",
  "commerce",
];

async function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Users, setUsers] = useState();

  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <header className="fade-in">
        <h1>Concept Coaching Classes</h1>
        <input
          type="text"
          placeholder="Search courses..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </header>

      <main>
        <h2>Available Courses:</h2>
        <ul>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))
          ) : (
            <li>No courses found</li>
          )}
        </ul>
      </main>
    </div>
  );
}

export default Page;
