// MainCard.tsx
import "./components.css";
import { Tournaments, League } from '../api/Interfaces';
import TournamentInfo from "@/app/api/tournaments";
import LeagueInfo from "@/app/api/leagues";

export default async function MainCard() {  
  const init_tournamentData: Tournaments[] = await TournamentInfo();
  const init_leagueData: League[] = await LeagueInfo();

  const tournamentData = init_tournamentData.slice(0, 8);
  const leagueData = init_leagueData.slice(0, 8);

  const getImagePathForGame = (gameName: string): string => {
    // Replace non-alphanumeric characters (except underscores and spaces) with an empty string
    const clearGameName = gameName.replace(/[^a-zA-Z0-9\s]/g, '');
    // Replace spaces with underscores and convert to lowercase for the file name
    const fileName = clearGameName.replace(/\s+/g, '_').toLowerCase();
    // Return the path using the standardized file name
    return `/logos/${fileName}_logo.png`;
  };

  // Defines the correlation between stars and tier
  const getStarCount = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 's':
        return 5;
      case 'a':
        return 4;
      case 'b':
        return 3;
      case 'c':
        return 2;
      case 'd':
        return 1;
      default:
        return 0;
    }
  };
  
  // MainCard display and layout
  return (
    <>
      {/* The outline of the card */}
      <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
        {/* Events title  */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Events</h1>
        {/* Wrapping around the individual tournament displays */}
        <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
          {tournamentData.map((tournament: Tournaments) => (
            <div key={tournament.id} className='flex items-center w-[95%] xl:w-[44%] m-2 md:m-3 mx-2 md:mx-5 h-16 md:h-20 p-1.5 bg-carditembackground'>
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
      </div>
      {/* The outline of the card */}
      <div className='m-3 md:m-10 mx-3 md:mx-12 p-1.5 bg-cardbackground'>
        {/* Leagues title */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Leagues</h1>
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
      </div>
    </>
  );
};


