import React, {  useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img
              src="https://i.ibb.co/RzQzsDJ/Logo.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                 stroke="currentColor"
                 strokeLinecap="round" // Change to strokeLinecap
                 strokeLinejoin="round" // Change to strokeLinejoin
                 strokeWidth={2} // Change to strokeWidth
                 d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink
           to="/"
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "text-red-400 border-b-2 border-b-red-400" : ""
           }>
           Home
           </NavLink>
     
           <NavLink
           to="/dontaion"
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "text-red-400 border-b-2 border-b-red-400" : ""
           }>
           Donation
           </NavLink>
           <NavLink
           to="/statistics"
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "text-red-400 border-b-2 border-b-red-400" : ""
           }>
            Statistics
           </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;