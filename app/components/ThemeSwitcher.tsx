// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      The current theme is: {theme?.toUpperCase()}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          className="sr-only peer"
          value=""
          type="checkbox"
          title="toggle light/dark mode"
          onChange={handleToggle}
          checked={theme === "light"}
        />
        <div
          className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-third overflow-hidden
          before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center
          before:content-['🌙'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-[#0B132B]
          before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700
          peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full
          shadow-md shadow-gray-700 peer-checked:shadow-md peer-checked:shadow-gray-400 peer-checked:bg-third
          after:content-['☀️'] after:absolute after:bg-white after:rounded-full after:top-[4px] 
          after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all
          after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-90
          peer-checked:after:translate-y-0"
        ></div>
      </label>
    </>
  );
}