"use client";
// SplashScreen.tsx
import { useEffect, useState } from "react";

// Declare function to show the splash screen
let showSplashScreen: () => void;

// Define the FullScreenLoader component
export default function FullScreenLoader() {
  // State to control the visibility of the splash screen
  const [show, setShow] = useState(false);

  // useEffect hook to define the showSplashScreen function
  useEffect(() => {
    showSplashScreen = () => {
      // Set the splash screen to be visible
      setShow(true);
      // Hide the splash screen after specified time (ms)
      setTimeout(() => {
        setShow(false);
      }, 3000);
    };
  }, []); // Runs once on mount

  // If the splash screen is not visible, return null
  if (!show) return null;

  // Render the splash screen
  return (
    <div className="loader"><span></span></div>
  );
}

export { showSplashScreen };