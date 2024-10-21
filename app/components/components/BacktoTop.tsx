'use client'
// BacktoTop.tsx
import React, { useState, useEffect } from 'react';
import '../components.css';

// Function to go back to the top of the page
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set the visability at a certain Y value
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sets scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        // Tooltip for the back to top button
        <div className='tooltip'>  
            {/* Button for the back to top function */}
            <button onClick={scrollToTop} className="back-to-top-button bg-primary hover:bg-third">
            ↑
            </button>
            <span className='tooltiptext mt-3 sm:mt-4 border border-solid border-black'>Top of Page</span>
        </div>
      )}
    </div>
  );
};

export default BackToTop;