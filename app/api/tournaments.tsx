// tournaments.tsx
import { Tournaments } from '../api/Interfaces';
import developersPandascore from '@api/developers-pandascore';

export default async function TournamentInfo() {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (API_KEY) {
    developersPandascore.auth(API_KEY);
  } else {
    console.error("API key is undefined");
  }

  // Getting the tournament data
  const res = await developersPandascore.get_tournaments({sort: ['-begin_at'], page: 1, per_page: 50})
  const data: Tournaments[] = res.data.map((item: any) => ({
    ...item,
    league: {
      ...item.league,
      image_url: item.league.image_url || ''
    }
  }));
  
  // Get the current date
  const currentDate = new Date();

  // Filter the data to include only A and S tier tournaments that are ongoing or in the future
  const filteredData = data.filter((tournament: Tournaments) => {
    const tier = tournament.tier?.toLowerCase();
    const beginDate = tournament.begin_at ? new Date(tournament.begin_at) : null;
    const endDate = tournament.end_at ? new Date(tournament.end_at) : null;

    // Check if the tournament is A or S tier and if it is ongoing or in the future
    return (tier === 'a' || tier === 's') && (beginDate && beginDate >= currentDate || endDate && endDate >= currentDate);
  });

  // Sort the filtered data by begin date in ascending order
  const sortedData = filteredData.sort((a, b) => {
    const dateA = a.begin_at ? new Date(a.begin_at) : new Date();
    const dateB = b.begin_at ? new Date(b.begin_at) : new Date();
    return dateA.getTime() - dateB.getTime();
  });

  return sortedData; // Return the filtered and sorted data
};