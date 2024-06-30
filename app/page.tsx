import "./globals.css";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { LogoImage } from "./components/Logo";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { NotificationButton } from "./components/NotificationButton";
import { NavBar } from "./components/NavBar";
import { SignInButton } from "./components/SignIn";

export default function Home() {
  return (
    <main className="text-foreground bg-background min-h-screen-20 flex-col items-center justify-between duration-300">
      <LogoImage />
      <div className="-mt-28 mb-28">
        <NotificationButton />
        <SignInButton />
        <ThemeSwitcher />
      </div>
      <NavBar />
    </main>
  );
}
