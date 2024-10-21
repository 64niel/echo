// events.tsx
import React from 'react';
import TournamentInfo from '../api/tournamentsAPI';
import TournamentsDisplay from '../components/components/TournamentsDisplay';

// Events page
const Events: React.FC<{ searchParams: { game?: string } }> = async ({ searchParams }) => {
    // Extract the game parameter from searchParams
    const game = searchParams.game;

    // Fetch tournament data from the API
    let tournamentData = await TournamentInfo();

    // If a game is specified, filter the tournament data to include only tournaments for that game
    if (game) {
        tournamentData = tournamentData.filter(tournament => tournament.videogame.name?.toLocaleLowerCase() === game.toLocaleLowerCase());
    }

    // Return the JSX to render the events page
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <div className='m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
                {/* Events title  */}
                <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Relevant Events</h1>
                {/* Display the tournaments using the TournamentsDisplay component */}
                <TournamentsDisplay tournamentData={tournamentData}/>
            </div>
        </div>
    );
};

export default Events;
