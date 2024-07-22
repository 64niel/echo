import Image from "next/image";
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import SidePanel from "./components/SidePanel";
import { PageHeader } from "./components/Header";

export default function Home() {
  return (
    <main className="text-foreground bg-background overflow-hidden min-h-screen-20 flex-col items-center justify-between">
      <PageHeader />
      <SidePanel />
      <footer className="py-3 mt-10 bg-primary">
        <p className="text-center text-sm text-foreground duration-300">
          &copy; 2022 Echo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
