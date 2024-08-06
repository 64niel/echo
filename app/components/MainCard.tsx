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
const res = await developersPandascore.get_tournaments({'filter[tier]': 's,a', sort: ['-begin_at'], page: 1, per_page: 8})
  const data: Tournaments[] = res.data.map((item: any) => ({
    ...item,
    league: {
      ...item.league,
      image_url: item.league.image_url || ''
    }
  }));

const es = await developersPandascore.get_leagues({page: 1, per_page: 8})
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
      <div className='m-3 md:m-10 mx-3 md:mx-12 p-1.5 bg-cardbackground'>
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Events</h1>
        <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
          {data.map((tournament: Tournaments) => (
            <div key={tournament.id} className='flex items-center w-[95%] xl:w-[42%] m-2 md:m-3 mx-2 md:mx-8 h-16 md:h-20 p-1.5 bg-carditembackground'>
              <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
                <img 
                  src={tournament.league.image_url || ''} 
                  alt={tournament.league.slug} 
                  className='max-h-10 max-w-16 md:max-h-14 md:max-w-28' 
                />
              </div>
              <div className='flex flex-col w-full'>
                <div className='flex justify-between items-center'>
                  <h1 className='absolute sm:relative w-[27%] sm:w-auto mt-6 sm:mt-0 text-sm md:text-lg font-semibold mb-0 md:mb-1'>
                    {tournament.league.name}
                  </h1>
                  <div className='flex ml-auto mr-2 tooltip'>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`star ${index < getStarCount(tournament.tier) ? 'bright' : ''}`}>★</span>
                    ))}
                    <span className="tooltiptext">Tier: {tournament.tier.toUpperCase()}</span>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <div className="ml-auto sm:ml-0 text-right sm:text-left mt-0">
                    <p className='text-[9px] md:text-[10px]'>Begins: {tournament.begin_at ? new Date(tournament.begin_at).toLocaleDateString() : 'N/A'}</p>
                    <p className='text-[9px] md:text-[10px]'>Ends: {tournament.end_at ? new Date(tournament.end_at).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <h2 className='hidden md:block text-sm ml-auto mr-2'>Game: {tournament.videogame.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='m-3 md:m-10 mx-3 md:mx-12 p-1.5 bg-cardbackground'>
      <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>Top Ongoing/Upcoming Leagues</h1>
      <div className='flex flex-wrap justify-center mt-2 md:mt-3 mb-2 mb:mb-3'>
        {info.map((league: League) => (
          <div key={league.id} className='flex items-center w-[95%] xl:w-[42%] m-2 md:m-3 mx-2 md:mx-8 h-16 md:h-20 p-1.5 bg-carditembackground'>
            <div className='flex items-center w-16 md:w-28 h-10 md:h-14 m-2 mr-5'>
              <img src={league.image_url ?? ''} 
              alt={league.slug} 
              className='max-h-10 max-w-16 md:max-h-14 md:max-w-28' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-center'>
                <h1 className='absolute sm:relative w-[27%] sm:w-auto mt-6 sm:mt-0 text-sm md:text-lg font-semibold mb-0 md:mb-1'>
                  {league.name}
                </h1>
              </div>
              <div className='flex justify-between items-center'>
                <div className="ml-auto sm:ml-0 text-right sm:text-left mt-0">
                  <p className='text-[9px] md:text-[10px]'>Begins: {league.series[0].begin_at ? new Date(league.series[0].begin_at).toLocaleDateString() : 'N/A'}</p>
                  <p className='text-[9px] md:text-[10px]'>Ends: {league.series[0].end_at ? new Date(league.series[0].end_at).toLocaleDateString() : 'N/A'}</p>
                </div>
                <h2 className='hidden md:block text-sm ml-auto mr-2'>Game: {league.videogame.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


