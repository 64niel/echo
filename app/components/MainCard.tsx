// MainCard.tsx
import "./components.css";
import { Tournaments, League, Matches } from '../api/Interfaces';
import TournamentInfo from "@/app/api/tournaments";
import LeagueInfo from "@/app/api/leagues";
import allMatchesInfo from "@/app/api/matches";

const filterMatches = (matches: Matches[]): Matches[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to the start of the day

  return matches.filter((match) => {
    const matchDate = new Date(match.scheduled_at || '');
    matchDate.setHours(0, 0, 0, 0); // Set to the start of the day

    return matchDate.getTime() === today.getTime();
  });
};

export default async function MainCard() { 
  const init_matchesData: Matches[] = await allMatchesInfo(); // Fetch matches data 
  const init_tournamentData: Tournaments[] = await TournamentInfo(); // Fetch tournament data
  const init_leagueData: League[] = await LeagueInfo(); // Fetch league data

  // Limits the number of individual events that can be shown on a card
  // const matchData = init_matchesData.slice(0, 10);
  const tournamentData = init_tournamentData.slice(0, 8);
  const leagueData = init_leagueData.slice(0, 8);

  // Filter matches so that only matches on the date of viewing are shown
  const todayMatches = filterMatches(init_matchesData);

  const getImagePathForGame = (gameName: string): string => {
    // Remove non-alphanumeric characters (except underscores and spaces)
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
      {/* Display today's matches */}
      <div className='m-3 md:m-10 mx-3 md:mx-12 p-1.5 bg-cardbackground'>
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Games Today</h1>
        <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
          {todayMatches.map((match: Matches) => (
            <div key={match.name} className='flex items-center w-[95%] xl:w-[42%] m-2 md:m-3 mx-2 md:mx-8 h-16 md:h-20 p-1.5 bg-carditembackground'>
              <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
                <img src={match.league.image_url || getImagePathForGame(match.videogame.name || '')} 
                alt={match.league.name || ''} 
                className='max-h-10 max-w-15 md:max-h-14 md:max-w-28' />
              </div>
              <div className='flex flex-col w-full'>
                <div className='flex justify-between items-center'>
                  <h1 className='absolute sm:relative w-[27%] sm:w-auto mt-6 sm:mt-0 text-[15px] md:text-lg font-semibold mb-0 md:mb-1 text-nowrap overflow-hidden text-ellipsis'>
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
                  <div className="ml-auto sm:ml-0 text-right sm:text-left mt-0">
                    <p className='text-[9px] md:text-[11px]'>
                      Starts: {match.scheduled_at ? new Date(match.scheduled_at).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                    </p>
                  </div>
                  <h2 className='hidden md:block text-sm ml-auto mr-2'>Game: {match.videogame.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* The outline of the card */}
      <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
        {/* Events title  */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Events</h1>
        {/* Wrapping around the individual tournament displays */}
        <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
          {tournamentData.map((tournament: Tournaments) => (
            <div key={tournament.league.id} className='flex items-center w-[95%] xl:w-[44%] m-2 md:m-3 mx-2 md:mx-5 h-16 md:h-20 p-1.5 bg-carditembackground'>
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


