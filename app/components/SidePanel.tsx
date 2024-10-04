'use client'

// SidePanel.tsx
import "../globals.css";
import "./components.css";
import { useEffect, useState } from 'react';
import useHandleNavigation from "./components/handleNav";

export default function SidePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);
  const handleNavigation = useHandleNavigation();

  const games = ["LoL", "CS2", "Valorant", "Dota 2", "MLBB", "PUBG", "R6 Siege", "Overwatch", "RL", "EA FC", "CoD", "Wild Rift", "KoG", "StarCraft 2", "Starcraft BW"];
  
  const gameNameMapping: { [key: string]: string } = {
    "LoL": "lol",
    "CS2": "counter-strike",
    "Valorant": "valorant",
    "Dota 2": "dota 2",
    "MLBB": "mobile legends: bang bang",
    "PUBG": "pubg",
    "R6 Siege": "rainbow 6 siege",
    "Overwatch": "overwatch",
    "RL": "rocket league",
    "EA FC": "ea sports fc",
    "CoD": "call of duty",
    "Wild Rift": "lol wild rift",
    "KoG": "king of glory",
    "StarCraft 2": "starcraft 2",
    "Starcraft BW": "starcraft brood war"
  };

  // Function to generate image path based on game name
  function getImagePathForGame(gameName: string): string {
    // Replace spaces with underscores and convert to lowercase for the file name
    const fileName = gameName.replace(/\s+/g, '_').toLowerCase();
    // Return the path using the standardized file name
    return `/images/${fileName}_sb.png`;
  }

  const handleGameClick = (game: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get('page') || 'home';
    const apiGameName = gameNameMapping[game] || game; // Use the mapped value or fallback to the original name
    handleNavigation('/', { page: currentPage, game: apiGameName });
    setSelectedGame(game || null); // Set the selected game or null if no game is selected
    localStorage.setItem('selectedGame', game || ''); // Save the selected game to local storage
  };

  useEffect(() => {
    const savedGame = localStorage.getItem('selectedGame');
    if (savedGame) {
      setSelectedGame(savedGame);
    }
  }, []);

  return (
    <div className={`${isPanelOpen ? 'absolute' : 'relative'} md:relative flex flex-col my-5 -mr-2 z-20`}>
      <div className={`flex items-center ${isPanelOpen ? 'w-32 md:w-44' : 'w-[40px] sm:w-[50px] md:w-[60px]'} pl-2 py-2 mb-24 ${isPanelOpen ? 'border-b-3' : 'border-0'} border-black border-opacity-50 ${isPanelOpen ? 'bg-primary' : 'bg-background'}`}>
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
          <div>
            <div className="pl-2">
              <h2 className="text-l md:text-2xl font-semibold duration-300">FILTER</h2>
            </div>
          </div>
        )}
      </div>
      {isPanelOpen && (
        <div className={`absolute left-0 ${isPanelOpen ? 'side-panel-full' : ''} w-32 md:w-44 h-[400px] md:h-[460px] p-2 mt-[43px] md:mt-[58px] scrollbar-medium scrollbar-thumb-rounded-full scrollbar-thumb-primary scrollbar-track-gray-400 overflow-y-scroll bg-primary text-white`}>
          <nav>
            {selectedGame && (
              <button className="game-item w-full mb-2 p-2 text-l md:text-2xl font-semibold bg-primary border-3 border-solid border-secondary hover:cursor-pointer"
                onClick={() => handleGameClick('')}>
                <div className="game-item-hover p-2 hover:bg-red-900">
                  <h2 className="text-l md:text-2xl font-semibold">Remove</h2>
                </div>
                <h2 className="text-l md:text-2xl font-semibold hover:hidden">None</h2>
              </button>
            )}
            <ul className='text-center'>
              {games.map((game) => (
                <li className={`game-item mb-2 p-3 text-l md:text-2xl font-semibold bg-secondary hover:cursor-pointer ${selectedGame === game ? 'bg-third border-2 border-solid border-black': ''}`} 
                  key={game}
                  onClick={() => handleGameClick(game)}
                >
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
        <div className="h-auto w-32 md:w-44 px-3 py-2 mt-80 md:mt-96 bg-primary text-center text-objbw z-20">
          <h1 className="text-medium md:text-xl pb-1 duration-300">Information:</h1>
          <ul className="p-0.5 duration-300">
            <li>
              <button onClick={() => handleNavigation('/?page=status')} className="text-sm md:text-medium underline hover:text-third hover:decoration-third">
                Status
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/?page=gamessupported')} className="text-sm md:text-medium underline hover:text-third hover:decoration-third">
                Games Supported
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/?page=contact')} className="text-sm md:text-medium underline hover:text-third hover:decoration-third">
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/?page=sources')} className="text-sm md:text-medium underline hover:text-third hover:decoration-third">
                Sources
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/?page=legal')} className="text-sm md:text-medium underline hover:text-third hover:decoration-third">
                Legal
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}