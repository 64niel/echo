// TournamentsDisplay.tsx
import { Tournaments } from '@/app/api/Interfaces';
import { getStarCount } from "./StarCount"
import { getImagePathForGame } from "./ImagePaths";

interface MatchesDisplayProps {
  tournamentData: Tournaments[];
}

// Export display for matches
export default function TournamentsDisplay({ tournamentData }: MatchesDisplayProps) {
  return (
    // Display Ongoing/Upcoming Events
    <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
      {tournamentData.map((tournament: Tournaments) => (
        <div key={tournament.league.id} className='flex items-center w-[95%] xl:w-[44%] m-2 md:m-3 mx-2 md:mx-5 h-16 md:h-20 p-1.5 bg-carditembackground tooltip'>
          <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
            {/* Image for the tournament */}
            <img 
              src={tournament.league.image_url || getImagePathForGame(tournament.videogame.name || '')}
              alt={tournament.league.slug} 
              className='max-h-10 max-w-15 md:max-h-14 md:max-w-28' 
            />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center'>
              {/* Tournament name */}
              <h1 className='absolute sm:relative w-[27%] sm:w-48 mt-6 sm:mt-0 text-[15px] md:text-lg font-semibold mb-0 md:mb-1 text-nowrap overflow-hidden text-ellipsis'>
                {tournament.league.name}
              </h1>
              <span className='tooltiptext -ml-[85%] sm:-ml-[62%] mt-12 sm:mt-4'>Stage: {tournament.name}</span>
              {/* Tooltip for when hovering over stars */}
              <div className='flex ml-auto mr-2 tooltip'>
                {/* Star display */}
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={`star ${index < getStarCount(tournament.tier) ? 'bright' : ''}`}>★</span>
                ))}
                <span className="tooltiptext">Tier: {tournament.tier.toUpperCase()}</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              {/* Tournament dates */}
              <div className="ml-auto sm:ml-0 text-right sm:text-left mt-0">
                <p className='text-[9px] md:text-[11px]'>Begins: {tournament.begin_at ? new Date(tournament.begin_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}</p>
                <p className='text-[9px] md:text-[11px]'>Ends: {tournament.end_at ? new Date(tournament.end_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}</p>
              </div>
              {/* Game name */}
              <h2 className='hidden md:block text-sm ml-auto mr-2'>Game: {tournament.videogame.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}