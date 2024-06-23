'use client'

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
    <main className="text-foreground bg-background flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/">
        <Image
          src={theme === 'light' ? "/logos/echo_logo_light.png" : "/logos/echo_logo_dark.png"}
          width={500}
          height={500}
          alt="Echo Logo"
          className=""  />
      </a>
      <ThemeSwitcher />
      <nav>
        <ul className="flex">
          <li className="text-lg p-5"><a href="/">Home</a></li>
          <li className="text-lg p-5"><a href="/events.tsx">Events</a></li>
          <li className="text-lg p-5"><a href="/results.tsx">Results</a></li>
          <li className="text-lg p-5"><a href="/matches.tsx">Matches</a></li>
          <li className="text-lg p-5"><a href="/calendar.tsx">Calendar</a></li>
        </ul>
      </nav>
    </main>
  );
}
