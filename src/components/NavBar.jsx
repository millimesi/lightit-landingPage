import React, { useState } from "react";
import MainLightitlogo from "../assets/MainLightitlogo.svg";
import HeroSection from "./HeroSection";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={MainLightitlogo}
                alt="Lightit Logo"
                className="h-16 w-auto max-w-[120px]"
                style={{
                  display: "block",
                  filter: "drop-shadow(0 4px 8px #fff)",
                }}
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-white hover:text-brand transition-colors duration-300 font-medium text-lg relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-white hover:text-brand transition-colors duration-300 font-medium text-lg relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white hover:text-brand focus:outline-none focus:text-brand transition-colors duration-300"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-gradient-to-r from-gray-800 to-gray-700 border-t border-gray-600`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#about"
            className="block px-3 py-2 text-white hover:text-brand hover:bg-gray-700 rounded-md transition-all duration-300 font-medium"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-white hover:text-brand hover:bg-gray-700 rounded-md transition-all duration-300 font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
