"use client";
// SplashScreen.tsx
import { useEffect, useState } from "react";

let showSplashScreen: () => void;

export default function FullScreenLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    showSplashScreen = () => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="loader"><span></span></div>
  );
}

export { showSplashScreen };