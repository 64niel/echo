// page.tsx
require('dotenv').config();

import React, { Suspense, lazy } from 'react';
import FullScreenLoader from './components/SplashScreen';
import PageHeader from "./components/Header";
import SidePanel from "./components/SidePanel";
import BackToTop from './components/ui/BacktoTop';
import Home from './pages/home'
// Lazy loads the pages only when they are called
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

// Interface for whether page and game are selected
interface SearchParams {
  page?: string;
  game?: string;
}

// Echo component that takes searchParams as a prop
const Echo = ({ searchParams }: { searchParams: SearchParams }) => {
  // Default to 'home' if no page is specified
  const page = searchParams.page || 'home';

  // Variable to hold the component to be rendered
  let PageComponent;

  // Determine which component to render based on the page parameter
  switch (page) {
    case 'home':
      // Render Home component with searchParams passed as props
      PageComponent = (props: React.JSX.IntrinsicAttributes) => <Home {...props} searchParams={searchParams} />;
      break;
    case 'events':
      // Render Events component
      PageComponent = Events;
      break;
    case 'results':
      // Render Results component
      PageComponent = Results;
      break;
    case 'matches':
      // Render Matches component
      PageComponent = Matches;
      break;
    case 'calendar':
      // Render Calendar component
      PageComponent = Calendar;
      break;
    case 'gamessupported':
      // Render gamesSupported component
      PageComponent = gamesSupported;
      break;
    case 'status':
      // Render Status component
      PageComponent = Status;
      break;
    case 'contact':
      // Render Contact component
      PageComponent = Contact;
      break;
    case 'sources':
      // Render Sources component
      PageComponent = Sources;
      break;
    case 'legal':
      // Render Legal component
      PageComponent = Legal;
      break;
    case 'signin':
      // Render SignIn component
      PageComponent = SignIn;
      break;
    case 'notifications':
      // Render Notifications component
      PageComponent = Notifications;
      break;
    default:
      // Fallback to page error page if no page was found
      PageComponent = notFound;
      break;
  }

  // Main Echo app function
  return (
    <>
      <div className="flex flex-col min-h-[115vh] md:min-h-screen text-foreground overflow-hidden bg-background">
        {/* Header for the page */}
        <PageHeader />
        <div className="flex flex-grow -mt-5 sm:-mt-1">
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

// Function to delay the loading of the pages
function delayLoad<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  }).then(() => promise);
}