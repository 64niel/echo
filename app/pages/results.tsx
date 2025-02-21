// matches.tsx
import React from 'react';
import allMatchesInfo from '../api/matchesAPI';
import MatchesDisplay from '../components/layout/MatchesDisplay';
import { Matches } from '../api/Interfaces';

// Filter matches so that only ones happening today are shown and higher tiers take priority
const sortMatches = (matches: Matches[]): Matches[] => {
    return matches
      .filter((match) => match.status === 'finished') // Include only finished matches
      // Sort matches by date and time with most recent last
      .sort((a, b) => {
        const dateA = new Date(a.scheduled_at || '').getTime();
        const dateB = new Date(b.scheduled_at || '').getTime();
        return dateA - dateB;
    });
};

// Reverse the matches so that most recent are shown first
const filterMatches = (matches: Matches[]): Matches[] => sortMatches(matches).reverse();

// Results page
const Results: React.FC<{ searchParams: { game?: string } }> = async ({ searchParams }) => {
    const game = searchParams.game;
    // Data fetched from API calls
    const init_matchesData: Matches[] = await allMatchesInfo(); // Fetch matches data

    let matchData = filterMatches(init_matchesData); // Apply effects to matches 

    // If a game is specified, filter the matches data to include only matches for that game
    if (game) {
        matchData = matchData.filter(match => match.videogame.name?.toLocaleLowerCase() === game.toLocaleLowerCase());
    }

    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
                {/* Events title  */}
                <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Results of Past Matches</h1>
                {/* Use the matches display to display matches on the page */}
                <MatchesDisplay matchData={matchData} />
            </div>
        </div>
    );
};

export default Results;
