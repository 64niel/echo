// lolMatches.tsx
import { Matches } from '../Interfaces';

export default async function lolMatchesInfo() {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (!API_KEY) {
    console.error("API key is undefined");
  }

  const url = "https://api.pandascore.co/lol/matches?sort=-scheduled_at&?page=1&token=" + API_KEY

  // Getting the tournament data
  const res = await fetch(url);
  const data: Matches[] = await res.json();

  return data; // Return the filtered and sorted data
};