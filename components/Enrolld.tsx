"use client";

import React, { useState } from "react";

const EnrollDetailButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    religion: "",
    qualification: "",
    motherName: "",
    fatherName: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    setOpen(false);
    // Add your form submission logic here (e.g., send to API)
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white rounded-2xl px-6 py-2 shadow hover:bg-blue-700 transition"
      >
        Enroll Details
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Registration Details</h2>

            <div className="grid gap-3">
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="religion"
                placeholder="Religion"
                value={formData.religion}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="qualification"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="motherName"
                placeholder="Mother's Name"
                value={formData.motherName}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <input
                name="contact"
                placeholder="Contact Details"
                value={formData.contact}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollDetailButton;
