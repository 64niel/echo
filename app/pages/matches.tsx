// matches.tsx
import React from 'react';
import allMatchesInfo from '../api/matchesAPI';
import MatchesDisplay from '../components/components/MatchesDisplay';
import type { Matches } from '../api/Interfaces';

// Filter matches so that only matches occuring today and upcoming matches are displayed
const filterMatches = (matches: Matches[]): Matches[] => {
    const now = new Date();
  
    return matches
      .filter((match) => {
        const matchDate = new Date(match.scheduled_at || '');
        return matchDate >= now;
      })
      .sort((a, b) => {
        const dateA = new Date(a.scheduled_at || '').getTime();
        const dateB = new Date(b.scheduled_at || '').getTime();
        return dateA - dateB;
      });
};

// Mathces page
const Matches: React.FC = async () => {
    // Data fetched from API calls
    const init_matchesData: Matches[] = await allMatchesInfo(); // Fetch matches data

    const matchData = filterMatches(init_matchesData);

    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
                {/* Events title  */}
                <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Ongoing/Upcoming Matches</h1>
                <MatchesDisplay matchData={matchData}/>
            </div>
        </div>
    );
};

export default Matches;