// matches.tsx
import React from 'react';
import allMatchesInfo from '../api/matchesAPI';
import MatchesDisplay from '../components/components/MatchesDisplay';
import { Matches } from '../api/Interfaces';

// Filter matches so that only ones happening today are shown and higher tiers take priority
const filterMatches = (matches: Matches[]): Matches[] => {
  return matches
    .filter((match) => match.status === 'finished') // Include only finished matches
    .sort((a, b) => {
      const dateA = new Date(a.scheduled_at || '').getTime();
      const dateB = new Date(b.scheduled_at || '').getTime();
      return dateB - dateA; // Sort matches in descending order (newest first)
    });
};

// Results page
const Results: React.FC<{ searchParams: { game?: string } }> = async ({ searchParams }) => {
    const game = searchParams.game;
    // Data fetched from API calls
    const init_matchesData: Matches[] = await allMatchesInfo(); // Fetch matches data

    let matchData = filterMatches(init_matchesData);

    if (game) {
        matchData = matchData.filter(match => match.videogame.name === game);
    }

    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
                {/* Events title  */}
                <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Results of Past Matches</h1>
                <MatchesDisplay matchData={matchData} />
            </div>
        </div>
    );
};

export default Results;
