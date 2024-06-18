import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="text-foreground bg-background flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ECHOE</h1>
      <ThemeSwitcher />
    </main>
  );
}
