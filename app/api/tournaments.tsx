import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://api.pandascore.co/tournaments', {
      headers: {
        Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
