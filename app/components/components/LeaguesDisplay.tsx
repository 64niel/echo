// LeaguesDisplay.tsx
import { League } from '@/app/api/Interfaces';
import { getImagePathForGame } from "./ImagePaths";

interface MatchesDisplayProps {
  leagueData: League[];
}

// Export display for matches
export default function LeaguesDisplay({ leagueData }: MatchesDisplayProps) {
  return (
    // Display Ongoing/Upcoming Leagues 
    <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
    {leagueData.map((league: League) => (
        <div key={league.id} className='flex items-center w-[95%] xl:w-[42%] m-2 md:m-3 mx-2 md:mx-8 h-16 md:h-20 p-1.5 bg-carditembackground'>
        <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
            {/* Image for the league */}
            <img src={league.image_url || getImagePathForGame(league.videogame.name || '')} 
            alt={league.slug} 
            className='max-h-10 max-w-15 md:max-h-14 md:max-w-28' />
        </div>
        <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center'>
            {/* League name */}
            <h1 className='absolute sm:relative w-[27%] sm:w-auto mt-6 sm:mt-0 text-[15px] md:text-lg font-semibold mb-0 md:mb-1 text-nowrap overflow-hidden text-ellipsis'>
                {league.name}
            </h1>
            </div>
            <div className='flex justify-between items-center'>
            {/* League dates */}
            <div className="ml-auto sm:ml-0 text-right sm:text-left mt-0">
                <p className='text-[9px] md:text-[11px]'>Begins: {league.series[0].begin_at ? new Date(league.series[0].begin_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}</p>
                <p className='text-[9px] md:text-[11px]'>Ends: {league.series[0].end_at ? new Date(league.series[0].end_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}</p>
            </div>
            {/* Game name */}
            <h2 className='hidden md:block text-sm ml-auto mr-2'>Game: {league.videogame.name}</h2>
            </div>
        </div>
        </div>
    ))}
    </div>
  );
}