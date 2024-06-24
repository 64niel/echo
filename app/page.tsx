'use client'

import "./globals.css";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { NotificationButton } from "./components/NotificationButton";
import { SignInButton } from "./components/SignIn";
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="text-foreground bg-background min-h-screen flex-col items-center justify-between duration-300">
      <a href="/">
        <Image
          src={theme === 'light' ? "/logos/echo_logo_light.png" : "/logos/echo_logo_dark.png"}
          width={200}
          height={200}
          alt="Echo Logo"
          className="mt-5"  />
      </a>
      <SignInButton />
      <ThemeSwitcher />
      <NotificationButton />
      <nav className="flex bg-primary w-screen p-2">
        <ul className="flex">
          <li className="text-4xl font-semibold">
            <a href="/" className="group pl-5 transition duration-300">
              HOME
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/events.tsx" className="group transition duration-300">
              EVENTS
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/results.tsx" className="group transition duration-300">
              RESULTS
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/matches.tsx" className="group transition duration-300">
              MATCHES
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
            </a>
          </li>
          <li className="text-4xl font-semibold">
            <a href="/calendar.tsx" className="group transition duration-300">
              CALENDAR
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
