'use client'

import "./globals.css";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="text-foreground bg-background flex min-h-screen flex-col justify-between p-24">
      <a href="/">
        <Image
          src={theme === 'light' ? "/logos/echo_logo_light.png" : "/logos/echo_logo_dark.png"}
          width={200}
          height={200}
          alt="Echo Logo"
          className=""  />
      </a>
      <ThemeSwitcher />
      <nav>
        <ul className="flex bg-primary w-full">
          <li className="text-4xl font-semibold">
            <a href="/" className="group transition duration-300">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/events.tsx" className="group transition duration-300">
              Events
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/results.tsx" className="group transition duration-300">
              Results
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/matches.tsx" className="group transition duration-300">
              Matches
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/calendar.tsx" className="group transition duration-300">
              Calendar
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
