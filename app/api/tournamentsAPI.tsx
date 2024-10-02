// tournaments.tsx
import { Tournaments } from '../api/Interfaces';
import developersPandascore from '@api/developers-pandascore';

export default async function TournamentInfo(game?: string) {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (API_KEY) {
    developersPandascore.auth(API_KEY);
  } else {
    console.error("API key is undefined");
  }

  // Getting the tournament data
  const res = await developersPandascore.get_tournaments({sort: '-begin_at', page: '1', per_page: '48'})
  const data: Tournaments[] = res.data.map((item: any) => ({
    ...item,
    league: {
      ...item.league,
      image_url: item.league.image_url || ''
    }
  }));

  // Sort the filtered data by begin date in ascending order
  let sortedData = data.sort((a, b) => {
    const dateA = a.begin_at ? new Date(a.begin_at) : new Date();
    const dateB = b.begin_at ? new Date(b.begin_at) : new Date();
    return dateA.getTime() - dateB.getTime();
  });

  if (game) {
    sortedData = sortedData.filter(tournament => tournament.videogame.name === game);
  }

  return sortedData; // Return the filtered and sorted data
};