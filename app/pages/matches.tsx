// matches.tsx
import React from 'react';
import allMatchesInfo from '../api/matchesAPI';
import MatchesDisplay from '../components/components/MatchesDisplay';
import type { Matches } from '../api/Interfaces';

// Filter matches so that only matches occuring today and upcoming matches are displayed
const filterMatches = (matches: Matches[]): Matches[] => {
  const now = new Date(); // Get the current date and time

  return matches
    .filter((match) => {
      const matchDate = new Date(match.scheduled_at || ''); // Parse the match date
      return matchDate >= now; // Keep only matches that are scheduled for today or in the future
    })
    .sort((a, b) => {
      const dateA = new Date(a.scheduled_at || '').getTime(); // Get the timestamp of match A
      const dateB = new Date(b.scheduled_at || '').getTime(); // Get the timestamp of match B
      return dateA - dateB; // Sort matches by date in ascending order
    });
};

// Mathces page
const Matches: React.FC<{ searchParams: { game?: string } }> = async ({ searchParams }) => {
  const game = searchParams.game; // Extract the game parameter from searchParams
  // Data fetched from API calls
  const init_matchesData: Matches[] = await allMatchesInfo(); // Fetch matches data

  let matchData = filterMatches(init_matchesData); // Filter and sort the matches data

  // If a game is specified, filter the matches data to include only matches for that game
  if (game) {
    matchData = matchData.filter(match => match.videogame.name?.toLocaleLowerCase() === game.toLocaleLowerCase());
  }

  return (
      <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
          <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
              {/* Events title  */}
              <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Ongoing/Upcoming Matches</h1>
              {/* Use the matches display to display matches on the page */}
              <MatchesDisplay matchData={matchData}/>
          </div>
      </div>
  );
};

export default Matches;