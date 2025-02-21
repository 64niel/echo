// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false); // State to track if the component has mounted
  const { theme, setTheme } = useTheme(); // Destructuring theme and setTheme from useTheme hook

  useEffect(() => {
    setMounted(true); // Set mounted to true when the component is mounted
  }, []); // "[]" ensures this runs only once when the component mounts

  if (!mounted) return null; // If the component is not mounted, return null to prevent rendering

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle theme between dark and light
  };

  return (
    // Button styling
    <div id="theme-switcher">
      <label className="relative inline-flex float-right items-center mr-2 md:mr-5 cursor-pointer">
        <input 
          className="peer hidden" 
          id="toggle" 
          type="checkbox" 
          title="Toggle Light/Dark Themes" 
          onChange={handleToggle}
          checked={theme === "dark"} />
        <div
          className="relative w-24 md:w-28 h-10 md:h-12 bg-primary hover:bg-third peer-checked:bg-primary peer-checked:hover:bg-third rounded-full after:absolute after:content-[''] after:w-[34px] md:after:w-[40px] after:h-[34px] md:after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-primary peer-checked:after:to-black after:rounded-full after:top-[3px] md:after:top-[4px] after:left-[8px] md:after:left-[7px] active:after:w-[50px] peer-checked:after:left-[88px] md:peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
        ></div>
        {/* Sun SVG */}
        <svg
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 md:size-7 fill-white peer-checked:opacity-60 absolute left-[13px]">
          <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z" />
        </svg>
        {/* Moon SVG */}
        <svg
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 md:size-7 fill-black peer-checked:fill-white absolute w-6 h-6 right-[13px]">
          <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z" />
        </svg>
      </label>
    </div>
  );
}