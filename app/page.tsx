// page.tsx
require('dotenv').config();

import React, { useState } from 'react';
import PageHeader from "./components/Header";
import Home from "./pages/home";
import SidePanel from "./components/SidePanel";

import dotenv from 'dotenv';
dotenv.config();

// Main Echo app function
function Echo() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden bg-background">
      {/* Header for the page */}
      <PageHeader />
      <div className="flex flex-grow">
        {/* Side panel section */}
        <SidePanel />
        {/* Main content section with all the pages */}
        <div className="flex-grow flex items-center justify-center">
          <Home />
        </div>
      </div>
      {/* Footer for the page */}
      <footer className="py-3 mt-10 bg-primary">
        <p className="text-center text-sm text-foreground duration-300">
          &copy; 2022 Echo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Echo;


