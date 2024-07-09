'use client'

import { useState } from 'react';

export default function SidePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  const games = ["LoL", "CS2", "Valorant", "R6", "PUBG", "Dota 2", "OW"];

  return (
    <div className="flex my-3">
        <div className="flex items-center justify-start w-full">
            {/* Side Panel Close/Open Button */}
            <span onClick={togglePanel} className='z-10'>
            <svg 
                className="size-8 align-middle fill-objbw overflow-hidder duration-300" 
                viewBox="0 0 1024 1024" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M232.369231 282.813046h559.261538a31.507692 31.507692 0 0 0 0-63.015384h-559.261538a31.507692 31.507692 0 0 0 0 63.015384zM791.630769 480.492308h-559.261538a31.507692 31.507692 0 0 0 0 63.015384h559.261538a31.507692 31.507692 0 0 0 0-63.015384zM791.630769 741.186954h-559.261538a31.507692 31.507692 0 0 0 0 63.015384h559.261538a31.507692 31.507692 0 0 0 0-63.015384z"  />
            </svg>
            </span>
            {/* Side Panel */}
            {isPanelOpen && (
            <div className="flex items-center pl-3">
                <h2 className="text-2xl font-semibold mb-4">GAMES</h2>
            </div>)
            }
        </div>
        {isPanelOpen && (
            <div className="fixed left-0 h-auto w-40 bg-primary text-bw p-3 transition-transform transform -translate-x-0">
                <ul className='text-center'>
                    {games.map((game) => (
                    <li key={game} className="mb-1 p-3 text-2xl bg-secondary hover:bg-black hover:cursor-pointer duration-300">
                        {game}
                    </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
)};