// r6Matches.tsx
import { Matches } from '../Interfaces';
import developersPandascore from '@api/developers-pandascore';

export default async function r6MatchesInfo() {
  // API key checking
  const API_KEY = process.env.PANDASCORE_API_KEY;
  if (API_KEY) {
    developersPandascore.auth(API_KEY);
  } else {
    console.error("API key is undefined");
  }

  const url = "https://api.pandascore.co/r6siege/matches?sort=-scheduled_at&token=" + API_KEY

  // Getting the tournament data
  const res = await fetch(url);
  const data: Matches[] = await res.json();

  return data; // Return the filtered and sorted data
};