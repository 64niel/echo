'use client'

import "./components.css";
import { useState } from 'react';

export default function SidePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  const games = ["LoL", "CS2", "Valorant", "R6 Siege", "PUBG", "Dota 2", "Overwatch"];
  
  // Function to generate image path based on game name
  function getImagePathForGame(gameName: string): string {
    // Replace spaces with underscores and convert to lowercase for the file name
    const fileName = gameName.replace(/\s+/g, '_').toLowerCase();
    // Return the path using the standardized file name
    return `/images/${fileName}_sb.png`;
  }

  return (
    <div className="flex flex-col my-3">
      <div className="flex items-center pl-2 pt-2 w-full">
        {/* Side Panel Close/Open Button */}
        <span onClick={togglePanel} className='z-10 hover:cursor-pointer'>
          <svg 
            className="size-10 fill-objbw duration-300" 
            viewBox="0 0 1024 1024" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M232.369231 282.813046h559.261538a31.507692 31.507692 0 0 0 0-63.015384h-559.261538a31.507692 31.507692 0 0 0 0 63.015384zM791.630769 480.492308h-559.261538a31.507692 31.507692 0 0 0 0 63.015384h559.261538a31.507692 31.507692 0 0 0 0-63.015384zM791.630769 741.186954h-559.261538a31.507692 31.507692 0 0 0 0 63.015384h559.261538a31.507692 31.507692 0 0 0 0-63.015384z"  />
          </svg>
        </span>
        {isPanelOpen && (
          <div className="pl-2 z-10">
            <h2 className="text-2xl font-semibold">GAMES</h2>
          </div>
        )}
      </div>
      {isPanelOpen && (
        <div className="absolute left-0 h-auto w-40 bg-primary text-white p-3 pt-14">
          <nav>
            <ul className='text-center'>
              {games.map((game) => (
                <li className="game-item mb-2 p-3 text-2xl bg-secondary outline outline-2 outline-black hover:cursor-pointer" key={game}>
                  <div 
                    className="game-item-hover"
                    style={{ backgroundImage: `url(${getImagePathForGame(game)})` }}
                  ></div>
                  {game}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      {isPanelOpen && (
        <div className="h-auto w-40 px-3 py-2 mt-[50vh] bg-primary text-center text-white z-10">
          <h1 className="text-xl pb-1">Information:</h1>
          <ul className="p-0.5">
            <li><a href="" className="underline hover:text-third hover:decoration-third">Leagues</a></li>
            <li><a href="" className="underline hover:text-third hover:decoration-third">Games Supported</a></li>
            <li><a href="" className="underline hover:text-third hover:decoration-third">Contact</a></li>
            <li><a href="" className="underline hover:text-third hover:decoration-third">Sources</a></li>
            <li><a href="" className="underline hover:text-third hover:decoration-third">Legal</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}