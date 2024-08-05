import "./components.css";
import developersPandascore from '@api/developers-pandascore';

interface Tournaments {
  id: number;
  name: string;
  begin_at: string | null;
  end_at: string | null;
  detailed_stats: boolean;
  has_bracket: boolean;
  tier: string;
  winner_type: string | null;
  league:{
    id: number;
    image_url: string | undefined;
    name: string | null;
    slug: string
  };
  videogame:{
    id: number;
    name: string | null;
  }
};

interface League {
  id: number;
  image_url: string | null | undefined;
  name: string | null;
  slug: string;
  series: {
    begin_at: string;
    end_at: string;
    full_name: string;
    id: number;
    name: string | null;
    year: number;
    winner_id: number | null;
    winner_type: "Player" | "Team";
    league_id: number;
    season: string | null;
  }[]; // Add square brackets to indicate it is an array
  videogame: {
    name: string;
  }
};


export default async function MainCard() {
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (API_KEY) {
    developersPandascore.auth(API_KEY);
  } else {
    console.error("API key is undefined");
  }
const res = await developersPandascore.get_tournaments({'filter[tier]': 's,a', sort: '-begin_at', page: '1', per_page: '8'})
  const data: Tournaments[] = res.data.map((item: any) => ({
    ...item,
    league: {
      ...item.league,
      image_url: item.league.image_url || ''
    }
  }));

const es = await developersPandascore.get_leagues({sort: '', page: '1', per_page: '8'})
  const info: League[] = es.data.map((item: any) => ({
    ...item,
    series: item.series.map((series: any) => ({
      ...series,
      year: series.year || 0
    }))
  }));

const getStarCount = (tier: string) => {
  switch (tier.toLowerCase()) {
    case 's':
      return 5;
    case 'a':
      return 4;
    case 'b':
      return 3;
    case 'c':
      return 2;
    case 'd':
      return 1;
    default:
      return 0;
  }
};
  
  return (
    <>
      <div className='m-10 mx-12 p-1.5 bg-cardbackground'>
        <h1 className='mt-3.5 -mb-1 text-center text-2xl font-semibold'>Top Ongoing/Upcoming Events</h1>
        <div className='flex flex-wrap justify-center mt-3 mb-3'>
          {data.map((tournament: Tournaments) => (
            <div key={tournament.id} className='flex items-center w-[90%] xl:w-[42%] m-3 mx-8 h-20 p-1.5 bg-carditembackground'>
              <div className='flex items-center w-28 h-14 m-2 mr-5'>
                <img src={tournament.league.image_url} alt={tournament.league.slug} className='max-h-10 max-w-16 md:max-h-14 md:max-w-28' />
              </div>
              <div className='flex flex-col w-full'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-l font-semibold mb-1'>{tournament.league.name}</h1>
                  <div className='flex ml-auto mr-2 tooltip'>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`star ${index < getStarCount(tournament.tier) ? 'bright' : ''}`}>★</span>
                    ))}
                    <span className="tooltiptext">Tier: {tournament.tier.toUpperCase()}</span>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-[10px]'>Begins: {tournament.begin_at ? new Date(tournament.begin_at).toLocaleDateString() : 'N/A'}</p>
                    <p className='text-[10px]'>Ends: {tournament.end_at ? new Date(tournament.end_at).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <h2 className='text-sm ml-auto mr-2'>Game: {tournament.videogame.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='m-10 mx-12 p-1.5 bg-cardbackground'>
      <h1 className='mt-3.5 -mb-1 text-center text-2xl font-semibold'>Top Ongoing/Upcoming Leagues</h1>
      <div className='flex flex-wrap justify-center mt-3 mb-3'>
        {info.map((league: League) => (
          <div key={league.id} className='flex items-center w-[90%] xl:w-[42%] m-3 mx-8 h-20 p-1.5 bg-carditembackground'>
            <div className='flex items-center w-28 h-14 m-2 mr-5'>
              <img src={league.image_url ?? ''} alt={league.slug} className='max-h-10 max-w-16 md:max-h-14 md:max-w-28' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-center'>
                <h1 className='text-l font-semibold mb-1'>{league.name}</h1>
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-[10px]'>Begins: {league.series[0].begin_at ? new Date(league.series[0].begin_at).toLocaleDateString() : 'N/A'}</p>
                  <p className='text-[10px]'>Ends: {league.series[0].end_at ? new Date(league.series[0].end_at).toLocaleDateString() : 'N/A'}</p>
                </div>
                <h2 className='text-sm ml-auto mr-2'>Game: {league.videogame.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


