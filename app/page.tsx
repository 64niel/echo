// page.tsx
require('dotenv').config();

import React, { Suspense, lazy } from 'react';
import FullScreenLoader from './components/SplashScreen';
import PageHeader from "./components/Header";
import SidePanel from "./components/SidePanel";
import BackToTop from './components/components/BacktoTop';
import Home from './pages/home'
const Events = lazy(() => delayLoad(import("./pages/events")));
const Results = lazy(() => delayLoad(import("./pages/results")));
const Matches = lazy(() => delayLoad(import("./pages/matches")));
const Calendar = lazy(() => delayLoad(import("./pages/calendar")));
import gamesSupported from './pages/pages/gamessupported';
import Legal from './pages/pages/legal';
import Status from './pages/pages/status';
import Sources from './pages/pages/sources';
import Contact from './pages/pages/contact';
import SignIn from './pages/pages/signin';
import Notifications from './pages/notifications';
import notFound from './pages/notfound';

interface SearchParams {
  page?: string;
  game?: string;
}

const Echo = ({ searchParams }: { searchParams: SearchParams }) => {
  const page = searchParams.page || 'home';

  let PageComponent;

  switch (page) {
    case 'home':
      PageComponent = (props: React.JSX.IntrinsicAttributes) => <Home {...props} searchParams={searchParams} />;
      break;
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
    case 'signin':
      PageComponent = SignIn;
      break;
    case 'notifications':
      PageComponent = Notifications;
      break;
    default:
      PageComponent = notFound;
      break;
  }

  // Main Echo app function
  return (
    <>
      <div className="flex flex-col min-h-screen text-foreground overflow-hidden bg-background">
        {/* Header for the page */}
        <PageHeader />
        <div className="flex flex-grow">
          {/* Side panel section */}
          <SidePanel />
          {/* Main content section with all the pages */}
          <div className="flex-grow flex items-center justify-center">
            <FullScreenLoader />
            <Suspense fallback=''>
              <div id='page-content' className='flex-grow flex items-center justify-center'>
                <PageComponent searchParams={searchParams} />
              </div>
            </Suspense>
          </div>
        </div>
        <BackToTop />
        {/* Footer for the page */}
        <footer className="py-3 mt-10 bg-primary">
          <p className="text-center text-sm text-foreground duration-300">
            &copy; 2024 Echo. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Echo;

function delayLoad<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  }).then(() => promise);
}