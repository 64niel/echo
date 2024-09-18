// MainCard.tsx
import "./components.css";
import MatchesDisplay from "./components/MatchesDisplay";
import TournamentsDisplay from "./components/TournamentsDisplay";
import LeaguesDisplay from "./components/LeaguesDisplay";
import { Tournaments, League, Matches } from '../api/Interfaces';
import TournamentInfo from "@/app/api/tournamentsAPI";
import LeagueInfo from "@/app/api/leaguesAPI";
import allMatchesInfo from "@/app/api/matchesAPI";

// Filter matches so that only ones happening today are shown and higher tiers take priority
const filterMatches = (matches: Matches[]): Matches[] => {
  const now = new Date();
  const startOfDay = new Date(now.setHours(0, 0, 0, 0));
  const endOfDay = new Date(now.setHours(23, 59, 59, 999));
  
  const tierOrder = ['s', 'a', 'b', 'c', 'd'];

  return matches
    .filter((match) => {
      const matchDate = new Date(match.scheduled_at || '');
      return matchDate >= startOfDay && matchDate <= endOfDay;
    })
    .filter((match) => {
      const isTier = match.tournament.tier && ['s', 'a', 'b'].includes(match.tournament.tier.toLowerCase());
      return isTier;
    })
    .sort((a, b) => {
      const tierA = a.tournament.tier.toLowerCase();
      const tierB = b.tournament.tier.toLowerCase();
      return tierOrder.indexOf(tierA) - tierOrder.indexOf(tierB);
    });
};

// Filter tournaments so that only A and S tier tournaments that are ongoing or in the future are shown
const filterTournaments = (tournaments: Tournaments[]): Tournaments[] => {
  const currentDate = new Date();
  const tierOrder = ['s', 'a', 'b', 'c', 'd'];

  return tournaments
    .filter((tournament) => {
      const tier = tournament.tier?.toLowerCase();
      const beginDate = tournament.begin_at ? new Date(tournament.begin_at) : null;
      const endDate = tournament.end_at ? new Date(tournament.end_at) : null;

      // Check if the tournament is A or S tier and if it is ongoing or in the future
      return (tier === 'a' || tier === 's') && (beginDate && beginDate >= currentDate || endDate && endDate >= currentDate);
    })
    .sort((a, b) => {
      const tierA = a.tier.toLowerCase();
      const tierB = b.tier.toLowerCase();
      return tierOrder.indexOf(tierA) - tierOrder.indexOf(tierB);
    });
};

// The main card
export default async function MainCard() { 
  // Data fetched from API calls
  const init_matchesData: Matches[] = await allMatchesInfo(); // Fetch matches data 
  const init_tournamentData: Tournaments[] = await TournamentInfo(); // Fetch tournament data
  const init_leagueData: League[] = await LeagueInfo(); // Fetch league data

  // Apply filters
  const todayMatches = filterMatches(init_matchesData);
  const filteredTournaments = filterTournaments(init_tournamentData);

  // Limits the number of individual events that can be shown on a card
  const matchData = todayMatches.slice(0, 14);
  const tournamentData = filteredTournaments.slice(0, 10);
  const leagueData = init_leagueData.slice(0, 8);
  
  // MainCard display and layout
  return (
    <>
      <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
        {/* Matches title */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Games Today</h1>
        <MatchesDisplay matchData={matchData}/>
      </div>
      <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
        {/* Events title  */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Events</h1>
        <TournamentsDisplay tournamentData={tournamentData}/>
      </div>
      <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
        {/* Leagues title */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Leagues</h1>
        <LeaguesDisplay leagueData={leagueData}/>
      </div>
    </>
  );
};


