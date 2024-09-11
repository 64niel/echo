// matches.tsx
import React from 'react';
import MatchesInfo from '../api/matchesAPI';
import MatchesDisplay from '../components/components/MatchesDisplay';

// Results page
const Results: React.FC = async () => {
    const matchData = await MatchesInfo();

    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
                {/* Events title  */}
                <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Ongoing/Upcoming Events</h1>
                <MatchesDisplay matchData={matchData}/>
            </div>
        </div>
    );
};

export default Results;
