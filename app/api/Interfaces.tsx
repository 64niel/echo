// Interfaces.tsx

// The interface for the tournament API draw
export interface Tournaments {
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
  
// The interface for the league API draw
export interface League {
  id: number;
  image_url: string | null | undefined;
  name: string | null;
  slug: string;
  series: {
    begin_at: string | null;
    end_at: string | null;
    full_name: string;
    id: number;
    name: string | null;
    year: number;
    winner_id: number | null;
    winner_type: "Player" | "Team";
    league_id: number;
    season: string | null;
  }[]; // Array
  videogame: {
    name: string;
  }
};

export interface Matches {
  begin_at: string | null;
  end_at: string | null;
  league: {
    image_url: string | null;
    name: string | null;
  }
  name: string | null;
  tournament: {
    name: string | null;
    tier: string;
  }
  videogame: {
    name: string | null;
  }
  tournament_id: string | null;
  scheduled_at: string | number;
  winner: {
    image_url: string | null;
    name: string | null;
    slug: string | null;
  }
  opponents: {
    opponent: any;
    id: number;
    image_url: string | null;
    name: string | null;
  }[];
  results: {
    score: number;
    team_id: number;
  }[];
  status: string; 
}