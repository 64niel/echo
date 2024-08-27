// ./api/tournaments.tsx
import { Tournaments } from '../components/MainCard';
import developersPandascore from '@api/developers-pandascore';

export default async function TournamentInfo() {
    const API_KEY = process.env.PANDASCORE_API_KEY;
    if (API_KEY) {
      developersPandascore.auth(API_KEY);
    } else {
      console.error("API key is undefined");
    }
    const res = await developersPandascore.get_tournaments({'filter[tier]': 's,a', sort: ['-begin_at'], page: 1, per_page: 10})
      const data: Tournaments[] = res.data.map((item: any) => ({
        ...item,
        league: {
          ...item.league,
          image_url: item.league.image_url || ''
        }
      }));
    return data;
};