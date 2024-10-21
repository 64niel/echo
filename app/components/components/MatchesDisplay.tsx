// MatchesDisplay.tsx
import { Matches } from '@/app/api/Interfaces';
import { getStarCount } from "./StarCount";
import { getImagePathForGame } from "./ImagePaths";
import React from 'react';

interface MatchesDisplayProps {
  matchData: Matches[];
}

// Export display for matches
export default function MatchesDisplay({ matchData }: MatchesDisplayProps) {
  return (
    // Container display for each match
    <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
      {matchData.map((match: Matches) => (
        <div key={match.name} className='flex items-center w-[95%] xl:w-[44%] m-2 md:m-3 mx-2 md:mx-8 h-16 md:h-20 p-1.5 bg-carditembackground tooltip'>
          <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
            {/* Display league image or default game image fallback */}
            <img src={match.league.image_url || getImagePathForGame(match.videogame.name || '')} 
            alt={match.league.name || ''} 
            className='max-h-10 max-w-15 md:max-h-14 md:max-w-28' />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center'>
              {/* Determine different displays depending on the status of the match (finished or not started) */}
              {match.status === 'finished' ? (
                <>
                  {/* Display match results if finished */}
                  <div className='absolute sm:relative w-[27%] sm:w-48 xl:w-52 mt-3 sm:mt-0 text-[15px] md:text-lg font-semibold mb-0 md:mb-1 text-nowrap overflow-hidden text-ellipsis'>
                    {match.results.map((result, index) => {
                      const team = match.opponents.find(opponent => opponent.opponent.id === result.team_id);
                      const teamName = team ? team.opponent.name : result.team_id;
                      return (
                        <span key={index}>{teamName}: {result.score} </span>
                      );
                    })}
                  </div>
                  {/* Tooltip for match winner */}
                  <span className='tooltiptext -ml-[85%] sm:-ml-[85%] mt-4 sm:mt-4'>Winner: {match.winner?.name}</span>
                  {/* Tooltip for tournament name */}
                  <span className='tooltiptext -ml-[85%] sm:-ml-[85%] mt-10 sm:mt-14'>Tournament: {match.league.name}</span>
                </>
              ) : (
                <>
                  {/* Display match name if not finished */}
                  <h1 className='absolute sm:relative w-[27%] sm:w-48 xl:w-52 mt-3 sm:mt-0 text-[15px] md:text-lg font-semibold mb-0 md:mb-1 text-nowrap overflow-hidden text-ellipsis'>
                    {match.name}
                  </h1>
                  {/* Tooltip for tournament name */}
                  <span className='tooltiptext -ml-[85%] sm:-ml-[80%] mt-12 sm:mt-13'>Tournament: {match.league.name}</span>
                </>
              )}
              <div className='flex ml-auto mr-2 tooltip'>
                {/* Star display */}
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={`star ${index < getStarCount(match.tournament.tier) ? 'bright' : ''}`}>★</span>
                ))}
                {/* Tooltip relating star count to tier */}
                <span className="tooltiptext">Tier: {match.tournament.tier.toUpperCase()}</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className="ml-0 mt-1 sm:mt-0 sm:ml-0 pr-4 text-left">
                {/* Change date text depending on match status */}
                {match.status === 'finished' ? (
                  <p className='text-[9px] md:text-[11px]'>
                    {/* Past tense */}
                    Started: {match.scheduled_at ? new Date(match.scheduled_at).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                  </p>
                ) : (
                  <p className='text-[9px] md:text-[11px]'>
                    {/* Future tense */}
                    Starts: {match.scheduled_at ? new Date(match.scheduled_at).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                  </p>
                )}
              </div>
              {/* Display game name */}
              <h2 className='md:block text-xs md:text-sm ml-auto mr-2'>Game: {match.videogame.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}