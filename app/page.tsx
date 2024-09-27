/// page.tsx
require('dotenv').config();

import React from 'react';
import { redirect } from 'next/navigation';
import PageHeader from "./components/Header";
import SidePanel from "./components/SidePanel";
import Home from "./pages/home";
import Events from './pages/events';
import Results from './pages/results';
import Matches from './pages/matches';
import Calendar from './pages/calendar';
import gamesSupported from './pages/pages/gamessupported';
import Legal from './pages/pages/legal';
import Status from './pages/pages/status';
import Sources from './pages/pages/sources';
import Contact from './pages/pages/contact';
import notFound from './pages/notfound';
import { LoadingProvider } from './components/components/loadingContent';

interface SearchParams {
  page?: string;
}

const Echo = ({ searchParams }: { searchParams: SearchParams }) => {
  const page = searchParams.page || 'home';

  if (!['home', 'events', 'results', 'matches', 'calendar', 'gamessupported', 'status', 'contact', 'sources', 'legal'].includes(page)) {
    redirect('/');
  }

  let PageComponent;

  switch (page) {
    case 'events':
      PageComponent = Events;
      break;
    case 'results':
      PageComponent = Results;
      break;
    case 'matches':
      PageComponent = Matches;
      break;
    case 'calendar':
      PageComponent = Calendar;
      break;
    case 'gamessupported':
      PageComponent = gamesSupported;
      break;
    case 'status':
      PageComponent = Status;
      break;
    case 'contact':
      PageComponent = Contact;
      break;
    case 'sources':
      PageComponent = Sources;
      break;
    case 'legal':
      PageComponent = Legal;
      break;
    case 'home':
    default:
      PageComponent = Home;
      break;
  }

  // Main Echo app function
  return (
    <LoadingProvider>
      <div className="flex flex-col min-h-screen text-foreground overflow-hidden bg-background">
        {/* Header for the page */}
        <PageHeader />
        <div className="flex flex-grow">
          {/* Side panel section */}
          <SidePanel />
          {/* Main content section with all the pages */}
          <div className="flex-grow flex items-center justify-center">
            <PageComponent />
          </div>
        </div>
        {/* Footer for the page */}
        <footer className="py-3 mt-10 bg-primary">
          <p className="text-center text-sm text-foreground duration-300">
            &copy; 2024 Echo. All rights reserved.
          </p>
        </footer>
      </div>
    </LoadingProvider>
  );
};

export default Echo;
