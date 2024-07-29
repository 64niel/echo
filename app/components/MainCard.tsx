import developersPandascore from '@api/developers-pandascore';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

interface Tournaments {
  id: number;
  name: string;
  begin_at: string | null;
  end_at: string  | null;
  detailed_stats: boolean;
  has_bracket: boolean;
  tier: string;
  winner_type: string;
  league:{
    id: number;
    name: string;
  };
};

export default async function MainCard() {
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (API_KEY) {
    developersPandascore.auth(API_KEY);
  } else {
    console.error("API key is undefined");
  }
  const res = await developersPandascore.get_tournaments({
  'filter[tier][0]': 's',
  'filter[winner_type][0]': 'Player',
  'range[detailed_stats][0]': 'true',
  'range[detailed_stats][1]': 'true',
  'range[has_bracket][0]': 'true',
  'range[has_bracket][1]': 'true',
  'range[tier][0]': 's',
  'range[tier][1]': 's',
  'range[winner_type][0]': 'Player',
  'range[winner_type][1]': 'Player',
  sort: ['begin_at'],
  page: 1,
  per_page: 5
})
  const data: Tournaments[] = await res.data;
  return (
    <div className='m-3'>
      {data.map((tournament: Tournaments) => (
        <div key={tournament.id} className='my-2 p-1 bg-cardbackground'>
          <h1 className='text-xl'>{tournament.league.name}</h1>
          <h2 className='text-l'>{tournament.name}</h2>
          <p className='text-sm'>{tournament.begin_at}</p>
          <p className='text-sm'>{tournament.end_at}</p>
        </div>
      ))}
    </div>
  );
};


