'use client'
// BacktoTop.tsx
import React, { useState, useEffect } from 'react';
import '../components.css';
import { div } from 'framer-motion/client';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <div className='tooltip'>    
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