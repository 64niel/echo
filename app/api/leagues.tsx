// leagues.tsx
import { League } from '../api/Interfaces';
import developersPandascore from '@api/developers-pandascore';

export default async function LeagueInfo() {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (API_KEY) {
    developersPandascore.auth(API_KEY);
  } else {
    console.error("API key is undefined");
  }
  // Getting the league data
  const res = await developersPandascore.get_leagues({page: 1, per_page: 10})
      const data: League[] = res.data.map((item: any) => ({
      ...item,
      series: item.series.map((series: any) => ({
          ...series,
          year: series.year || 0
      })),
  }));
  return data; // Return the data collected
};