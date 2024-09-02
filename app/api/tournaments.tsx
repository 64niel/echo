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
  const res = await developersPandascore.get_tournaments({'filter[tier]': 's,a', sort: ['-begin_at'], page: 1, per_page: 10})
    const data: Tournaments[] = res.data.map((item: any) => ({
      ...item,
      league: {
        ...item.league,
        image_url: item.league.image_url || ''
      }
    }));
  return data; // Return the data collected
};