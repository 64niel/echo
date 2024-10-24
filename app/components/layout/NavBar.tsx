'use client'
// NavBar.tsx

import useHandleNavigation from '../functions/handleNav';
import { useState, useEffect } from 'react';
import "../components.css";

// The navigation bar
export function NavBar() {
  // Initialize the navigation handler using the custom hook
  const handleNavigation = useHandleNavigation(); 

  // Function to handle navigation on click
  const handleNavClick = (path: string) => {
    // Parse the current URL's query parameters
    const urlParams = new URLSearchParams(window.location.search); 
    // Get the 'game' parameter from the URL
    const game = urlParams.get('game'); 
    // Create a query object with the page and game parameters
    const query = { page: path.split('=')[1], game: game || '' };
    // Call the navigation handler with the root path and query object
    handleNavigation('/', query);
  };

  // Navigation bar scrolling
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });

  return (
    <>
      {/* Placeholder element */}
      <div className={`py-1.5 h-[70px] md:h-[52px] ${scroll ? "block" : "hidden"}`}></div>
      {/* Navigation bar container */}
      <nav className={`flex justify-between items-center w-screen py-1.5 h-[34px] md:h-auto bg-primary ${scroll ? "sticky" : "non-sticky"} duration-300`}>
        <div className="flex items-center">
          <ul className="flex">
            <li className="text-[15px] sm:text-lg md:text-2xl font-semibold">
              {/* Navigate to home button */}
              <button onClick={() => handleNavClick('/?page=home')} className="group ml-5 md:ml-9 transition duration-300 relative inline-block">
                HOME
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
              </button>
            </li>
            <li className="text-[15px] sm:text-lg md:text-2xl font-semibold">
              {/* Navigate to events button */}
              <button onClick={() => handleNavClick('/?page=events')} className="group ml-8 md:ml-14 transition duration-300 relative inline-block">
                EVENTS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
              </button>
            </li>
            <li className="text-[15px] sm:text-lg md:text-2xl font-semibold">
              {/* Navigate to results button */}
              <button onClick={() => handleNavClick('/?page=results')} className="group ml-8 md:ml-14 transition duration-300 relative inline-block">
                RESULTS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
              </button>
            </li>
            <li className="text-[15px] sm:text-lg md:text-2xl font-semibold">
              {/* Navigate to matches button */}
              <button onClick={() => handleNavClick('/?page=matches')} className="group ml-8 md:ml-14 transition duration-300 relative inline-block">
                MATCHES
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
              </button>
            </li>
            <li className="hidden lg:block text-[15px] sm:text-lg md:text-2xl font-semibold">
              {/* Navigate to calendar button */}
              <button onClick={() => handleNavClick('/?page=calendar')} className="group ml-8 md:ml-14 transition duration-300 relative inline-block">
                CALENDAR
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
              </button>
            </li>
          </ul>
        </div>
        {/* Search bar */}
        <div className="flex relative items-center justify-between w-56 mr-1 sm:mr-6 bg-background duration-300 rounded-full">
          {/* Search bar input */}
          <input 
            className="hidden lg:block w-full py-2.5 pl-3 pr-18 text-wb bg-transparent outline-none text-sm" 
            type="text" 
            name="" 
            placeholder="Search Bar is Unavailable" 
          />
          {/* Search bar button */}
          <button className="absolute right-2 w-7 md:w-9 h-7 md:h-9 rounded-full bg-gradient-to-r from-primary 
            to-fourth to-95% border-none inline-block transform transition-all duration-75 hover:bg-gray-900 
              hover:shadow-lg hover:-translate-y-1 active:shadow-none active:translate-y-0" title="Search Bar">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-5 md:size-6 ml-1 md:ml-1.5"
                onClick={() => handleNavigation('/?page=status')}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

