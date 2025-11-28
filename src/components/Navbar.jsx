import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(250,250,250,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-black">
            wetu<span className="text-blue-500">-vexo</span>
          </a>
          <div className="hidden md:flex space-x-6 font-mono text-black">
            <Link to="/About" className="hover:text-blue-400 transition">About</Link>
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          <button
            className="md:hidden text-black focus:outline-none"
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
                    : "M4 6h16M4 12h16M4 18h16" // menu icon
                }
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 bg-white rounded-lg p-4 font-mono text-black shadow-md">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
