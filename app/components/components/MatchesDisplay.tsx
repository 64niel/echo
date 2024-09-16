// MatchesDisplay.tsx
import { Matches } from '@/app/api/Interfaces';
import { getStarCount } from "./StarCount"
import { getImagePathForGame } from "./ImagePaths";

interface MatchesDisplayProps {
  matchData: Matches[];
}

// Export display for matches
export default function MatchesDisplay({ matchData }: MatchesDisplayProps) {
  return (
    // Display today's matches
    <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
      {matchData.map((match: Matches) => (
        <div key={match.name} className='flex items-center w-[95%] xl:w-[42%] m-2 md:m-3 mx-2 md:mx-8 h-16 md:h-20 p-1.5 bg-carditembackground'>
          <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
            <img src={match.league.image_url || getImagePathForGame(match.videogame.name || '')} 
            alt={match.league.name || ''} 
            className='max-h-10 max-w-15 md:max-h-14 md:max-w-28' />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center'>
              <h1 className='absolute sm:relative w-[27%] sm:w-48 xl:w-52 mt-3 sm:mt-0 text-[15px] md:text-lg font-semibold mb-0 md:mb-1 text-nowrap overflow-hidden text-ellipsis'>
                {match.name}
              </h1>
              <div className='flex ml-auto mr-2 tooltip'>
                {/* Star display */}
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={`star ${index < getStarCount(match.tournament.tier) ? 'bright' : ''}`}>★</span>
                ))}
                <span className="tooltiptext">Tier: {match.tournament.tier.toUpperCase()}</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className="ml-0 mt-1 sm:mt-0 sm:ml-0 pr-4 text-left">
                <p className='text-[9px] md:text-[11px]'>
                  Starts: {match.scheduled_at ? new Date(match.scheduled_at).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                </p>
              </div>
              <h2 className='md:block text-xs md:text-sm ml-auto mr-2'>Game: {match.videogame.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}