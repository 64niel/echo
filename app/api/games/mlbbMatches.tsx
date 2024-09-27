// mlbbMatches.tsx
import { Matches } from '../Interfaces';

export default async function mlbbMatchesInfo() {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (!API_KEY) {
    console.error("API key is undefined");
  }

  const url = "https://api.pandascore.co/mlbb/matches?sort=-modified_at&%27filter[detailed_stats]%27=%27true%27&per_page=%27100%27&token=" + API_KEY

  // Getting the tournament data
  const res = await fetch(url);
  const data: Matches[] = await res.json();

  return data; // Return the filtered and sorted data
};