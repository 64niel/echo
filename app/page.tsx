import Image from "next/image";
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { NotificationButton } from "./components/NotificationButton";
import { NavBar } from "./components/NavBar";
import { SignInButton } from "./components/SignIn";
import SidePanel from "./components/SidePanel";
import { LogoImage } from "./components/Logo";

export default function Home() {
  return (
    <main className="text-foreground bg-background overflow-hidden min-h-screen-20 flex-col items-center justify-between">
      <LogoImage />
      <div className="-mt-28 mb-28">
        <NotificationButton />
        <SignInButton />
        <ThemeSwitcher />
      </div>
      <NavBar />
      <SidePanel />
      <footer className="py-3 mt-10 bg-primary">
        <p className="text-center text-sm text-foreground">
          &copy; 2022 Echo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
