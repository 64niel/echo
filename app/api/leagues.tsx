// leagues.tsx
import { League } from '../api/Interfaces';
import developersPandascore from '@api/developers-pandascore';

export default async function LeagueInfo() {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (!API_KEY) {
    console.error("API key is undefined");
    return [];
  }

  // Getting the league data
  const res = await developersPandascore.get_leagues({ page: 1, per_page: 50});
  const data: League[] = res.data.map((item: any) => ({
    ...item,
    series: item.series.map((series: any) => ({
      ...series,
      year: series.year || 0
    })),
  }));
  // Get the current date
  const currentDate = new Date();

  // Filter the data to include only A and S tier tournaments that are ongoing or in the future
  const filteredData = data.filter((tournament: League) => {
    const beginDate = tournament.series[0].begin_at ? new Date(tournament.series[0].begin_at) : null;
    const endDate = tournament.series[0].end_at ? new Date(tournament.series[0].end_at) : null;

    // Check if the tournament is ongoing or in the future
    return (beginDate && beginDate >= currentDate || endDate && endDate >= currentDate);
  });

  // Sort the filtered data by begin date in ascending order
  const sortedData = filteredData.sort((a, b) => {
    const dateA = a.series[0].begin_at ? new Date(a.series[0].begin_at) : new Date();
    const dateB = b.series[0].begin_at ? new Date(b.series[0].begin_at) : new Date();
    return dateA.getTime() - dateB.getTime();
  });

  return sortedData; // Return the filtered and sorted data
};