import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-mono text-xl font-bold text-black">
            wetu<span className="text-blue-500">-vexo</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-mono text-black">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-black p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 bg-white rounded-lg p-4 font-mono text-black shadow-lg z-50">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
