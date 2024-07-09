import '../app/globals.css';
import Image from "next/image";
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { LogoImage } from './components/Logo';
import { NotificationButton } from "./components/NotificationButton";
import { NavBar } from "./components/NavBar";
import { SignInButton } from "./components/SignIn";
import SidePanel from "./components/SidePanel";

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
      <SidePanel />
      <footer className="py-3 mt-[60vh] bg-primary">
        <p className="text-center text-sm text-foreground">
          &copy; 2022 Echo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
