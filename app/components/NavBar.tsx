import "./components.css";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center w-screen py-1.5 bg-primary">
      <div className="flex items-center">
        <ul className="flex">
          <li className="text-2xl font-semibold">
            <a href="/" className="group ml-9 transition duration-300 relative inline-block">
              HOME
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
            </a>
          </li>
          <li className="text-2xl font-semibold">
            <a href="/events.tsx" className="group ml-14 transition duration-300 relative inline-block">
              EVENTS
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
            </a>
          </li>
          <li className="text-2xl font-semibold">
            <a href="/results.tsx" className="group ml-14 transition duration-300 relative inline-block">
              RESULTS
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
            </a>
          </li>
          <li className="text-2xl font-semibold">
            <a href="/matches.tsx" className="group ml-14 transition duration-300 relative inline-block">
              MATCHES
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
            </a>
          </li>
          <li className="text-2xl font-semibold">
            <a href="/calendar.tsx" className="group ml-14 transition duration-300 relative inline-block">
              CALENDAR
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex relative items-center justify-between w-56 mr-6 bg-background duration-300 rounded-full">
        <input 
          className="w-full py-2.5 pl-6 pr-18 text-wb bg-transparent outline-none text-sm" 
          type="text" 
          name="" 
          placeholder="Search for games" 
        />
        <button className="absolute right-2 w-9 h-9 rounded-full bg-gradient-to-r from-primary 
          to-fourth to-95% border-none inline-block transform transition-all duration-75 hover:bg-gray-900 
            hover:shadow-lg hover:-translate-y-1 active:shadow-none active:translate-y-0" title="Search Bar">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="size-6 ml-1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
      </div>
    </nav>
  );
}

