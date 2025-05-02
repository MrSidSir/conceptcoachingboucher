import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-900 text-amber-50 py-6 p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Brand Name or Tagline */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold tracking-wide text-amber-400">
            Concept Coaching Classes
          </h2>
          <p className="text-sm text-gray-300">
            Empowering students to succeed!
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-4 md:mb-0">
          <p className="text-gray-200">
            📩 Email:{" "}
            <a
              href="mailto:irshad1554@gmail.com"
              className="hover:text-amber-400"
            >
              irshad1554@gmail.com
            </a>
          </p>
          <p className="text-gray-200">
            📞 Phone:{" "}
            <a href="tel:+917355534404" className="hover:text-amber-400">
              +91 7355534404
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100071840081900"
            className="hover:text-amber-400"
          >
            🟦 Facebook
          </a>
          <a
            href="https://www.instagram.com/conceptcoachingclassesnewdelhi/"
            className="hover:text-amber-400"
          >
            📸 Instagram
          </a>
          <a href="https://x.com/Mrsidsir4404" className="hover:text-amber-400">
            🐦 Twitter
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-sm text-center text-gray-400 border-t border-gray-600 pt-2">
        © 2025 Concept Coaching Classes | All Rights Reserved
      </div>
    </footer>
  );
};
export default Footer;
