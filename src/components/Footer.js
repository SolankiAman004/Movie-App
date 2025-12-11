import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-10 text-gray-600 dark:text-gray-400 mt-5">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* App Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Movie App
            </h2>
            <p className="text-sm leading-relaxed">
              Movie App helps you explore trending, popular, and upcoming movies.
              Get updates, discover ratings, and enjoy a clean, modern interface.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/movies/popular" className="hover:underline">Popular</Link>
            <Link to="/movies/top" className="hover:underline">Top Rated</Link>
            <Link to="/movies/upcoming" className="hover:underline">Upcoming</Link>
          </div>

          {/* Useful Pages */}
          <div className="flex flex-col space-y-2">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.linkedin.com/in/amansolanki40/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SolankiAman004"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-5 text-center text-sm">
          © 2030 
          <Link to="/" className="hover:underline text-gray-900 dark:text-white ml-1">
            Movie App
          </Link>. 
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};