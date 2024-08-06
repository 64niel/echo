'use client'

import "../globals.css";
import "./components.css";
import { useState } from 'react';

export default function SidePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  const games = ["LoL", "CS2", "Valorant", "R6 Siege", "PUBG", "Dota 2", "Overwatch", "MLBB"];
  
  // Function to generate image path based on game name
  function getImagePathForGame(gameName: string): string {
    // Replace spaces with underscores and convert to lowercase for the file name
    const fileName = gameName.replace(/\s+/g, '_').toLowerCase();
    // Return the path using the standardized file name
    return `/images/${fileName}_sb.png`;
  }

  return (
    <div className={`${isPanelOpen ? 'absolute' : 'relative'} md:relative flex flex-col my-5`}>
      <div className={`flex items-center ${isPanelOpen ? 'w-32 md:w-44' : 'w-[40px] sm:w-[50px] md:w-[60px]'} pl-2 py-2 mb-24 ${isPanelOpen ? 'border-b-3' : 'border-3'} border-black border-opacity-50 bg-primary z-10`}>
        {/* Side Panel Close/Open Button */}
        <span onClick={togglePanel} className='hover:cursor-pointer'>
          <svg 
            className="size-5 sm:size-7 md:size-10 fill-objbw duration-300"
            viewBox="0 0 1024 1024" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M232.369231 282.813046h559.261538a31.507692 31.507692 0 0 0 0-63.015384h-559.261538a31.507692 31.507692 0 0 0 0 63.015384zM791.630769 480.492308h-559.261538a31.507692 31.507692 0 0 0 0 63.015384h559.261538a31.507692 31.507692 0 0 0 0-63.015384zM791.630769 741.186954h-559.261538a31.507692 31.507692 0 0 0 0 63.015384h559.261538a31.507692 31.507692 0 0 0 0-63.015384z"  />
          </svg>
        </span> 
        {isPanelOpen && (
          <div className="pl-2">
            <h2 className="text-l md:text-2xl font-semibold duration-300">GAMES</h2>
          </div>
        )}
      </div>
      {isPanelOpen && (
        <div className="absolute left-0 w-32 md:w-44 h-[400px] md:h-[460px] p-3 mt-[46px] md:mt-[58px] scrollbar-medium scrollbar-thumb-rounded-full scrollbar-thumb-primary scrollbar-track-gray-400 overflow-y-scroll bg-primary text-white">
          <nav>
            <ul className='text-center'>
              {games.map((game) => (
                <li className="game-item mb-2 p-3 text-l md:text-2xl font-semibold bg-secondary hover:cursor-pointer" key={game}>
                  <div 
                    className="game-item-hover"
                    style={{ backgroundImage: `url(${getImagePathForGame(game)})` }}
                  >
                  </div>
                  {game}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      {isPanelOpen && (
        <div className="h-auto w-32 md:w-44 px-3 py-2 mt-80 md:mt-96 bg-primary text-center text-objbw z-10">
          <h1 className="text-medium md:text-xl pb-1 duration-300">Information:</h1>
          <ul className="p-0.5 duration-300">
            <li><a href="" className="text-sm md:text-medium underline hover:text-third hover:decoration-third">Leagues</a></li>
            <li><a href="" className="text-sm md:text-medium underline hover:text-third hover:decoration-third">Games Supported</a></li>
            <li><a href="" className="text-sm md:text-medium underline hover:text-third hover:decoration-third">Contact</a></li>
            <li><a href="" className="text-sm md:text-medium underline hover:text-third hover:decoration-third">Sources</a></li>
            <li><a href="" className="text-sm md:text-medium underline hover:text-third hover:decoration-third">Legal</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}