import developersPandascore from '@api/developers-pandascore';

interface Tournaments {
  id: number;
  name: string;
  begin_at: string | null;
  end_at: string | null;
  detailed_stats: boolean;
  has_bracket: boolean;
  tier: string | null;
  winner_type: string | null;
  league:{
    id: number;
    image_url: string | undefined;
    name: string | null;
    slug: string
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
  'filter[tier][1]': 'b',
  'filter[videogame_title][0]': 'null',
  'range[detailed_stats][0]': 'true',
  'range[detailed_stats][1]': 'true',
  'range[has_bracket][0]': 'true',
  'range[has_bracket][1]': 'true',
  'range[tier][0]': 's',
  'range[tier][1]': 'a',
  sort: 'begin_at&sort=tier',
  page: '1',
  per_page: '2'
})
  const data: Tournaments[] = res.data.map((item: any) => ({
    ...item,
    league: {
      ...item.league,
      image_url: item.league.image_url || ''
    }
  }));
  return (
    <div className='m-10 mx-12 p-1.5 bg-cardbackground'>
      <h1 className='mt-3.5 -mb-1 text-center text-2xl font-semibold'>Top Ongoing/Upcoming Events</h1>
      {data.map((tournament: Tournaments) => (
        <div key={tournament.id} className='flex items-center m-7 mx-10 h-20 p-1.5 bg-carditembackground'>
          <div className='flex items-center w-28 h-14 m-2 mr-4'>
            <img src={tournament.league.image_url} alt={tournament.league.slug} className='max-h-14 max-w-28' />
          </div>
          <div>
            <div className='flex items-center'>
              <h1 className='text-xl mx-1'>{tournament.league.name}</h1>
              <h2 className='text-l mx-2'>{tournament.name}</h2>
              <p className='text-s mx-2'>Tier: {tournament.tier}</p>
            </div>
            <p className='text-xs mx-1'>Begins: {tournament.begin_at ? new Date(tournament.begin_at).toLocaleString() : 'N/A'}</p>
            <p className='text-xs mx-1'>Ends: {tournament.end_at ? new Date(tournament.end_at).toLocaleString() : 'N/A'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


