require('dotenv').config();

import Image from "next/image";
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import PageHeader from "./components/Header";
import Home from "./pages/home";
import SidePanel from "./components/SidePanel";

export default function Base() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden bg-background">
      <PageHeader />
        <div className="flex flex-grow">
          <SidePanel />
          <div className="flex-grow flex items-center justify-center">
            <Home />
          </div>
        </div>
      <footer className="py-3 mt-10 bg-primary">
        <p className="text-center text-sm text-foreground duration-300">
          &copy; 2022 Echo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}


