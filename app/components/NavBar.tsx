export function NavBar() {
  return (
    <nav className="flex bg-primary w-screen p-2">
      <ul className="flex">
        <li className="text-2xl font-semibold">
          <a href="/" className="group ml-4 transition duration-300">
            HOME
            <span className="block max-w-0 ml-4 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
          </a>
        </li>
        <li className="text-2xl font-semibold">
          <a href="/events.tsx" className="group ml-12 transition duration-300">
            EVENTS
            <span className="block max-w-0 ml-12 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
          </a>
        </li>
        <li className="text-2xl font-semibold">
          <a href="/results.tsx" className="group ml-12 transition duration-300">
            RESULTS
            <span className="block max-w-0 ml-12 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
          </a>
        </li>
        <li className="text-2xl font-semibold">
          <a href="/matches.tsx" className="group ml-12 transition duration-300">
            MATCHES
            <span className="block max-w-0 ml-12 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
          </a>
        </li>
        <li className="text-2xl font-semibold">
          <a href="/calendar.tsx" className="group ml-12 transition duration-300">
            CALENDAR
            <span className="block max-w-0 ml-12 group-hover:max-w-full transition-all duration-500 h-0.5 bg-wb"></span>
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-between w-52 bg-background duration-300 rounded-full relative">
          <input 
            className="w-full py-2.5 pl-6 pr-18 text-wb bg-transparent outline-none text-sm" 
            type="text" 
            name="" 
            placeholder="Search for games" 
          />
          <button className="absolute right-2 w-9 h-9 rounded-full bg-gradient-to-r from-primary 
            to-fourth border-none inline-block transform transition-all duration-300 hover:bg-gray-900 
              hover:shadow-lg hover:-translate-y-1 active:shadow-none active:translate-y-0" title="Search Bar">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="size-6 ml-1.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
          </button>
        </div>
    </nav>
  );
}

