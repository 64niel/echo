// matches.tsx
import lolMatchesInfo from './games/lolMatches';
import dota2MatchesInfo from './games/dota2Matches';
import csMatchesInfo from './games/csMatches';
import codMatchesInfo from './games/codMatches';
import eafcMatchesInfo from './games/eafcMatches';
import mlbbMatchesInfo from './games/mlbbMatches';
import owMatchesInfo from './games/owMatches';
import pubgMatchesInfo from './games/pubgMatches';
import wrMatchesInfo from './games/wrMatches';
import kogMatchesInfo from './games/kogMatches';
import r6MatchesInfo from './games/r6Matches';
import rlMatchesInfo from './games/rlMatches';
import sc2MatchesInfo from './games/sc2Matches';
import scbwMatchesInfo from './games/scbwMatches';
import valMatchesInfo from './games/valMatches';

export default async function allMatchesInfo() {
  // Fetch matches from all APIs
  const [lolMatches, dota2Matches, csMatches, codMatches, eafcMatches, mlbbMatches, owMatches, pubgMatches, wrMatches, kogMatches, r6Matches, rlMatches, sc2Matches, scbwMatches, valMatches] = await Promise.all([
    lolMatchesInfo(),
    dota2MatchesInfo(),
    csMatchesInfo(),
    codMatchesInfo(),
    eafcMatchesInfo(),
    mlbbMatchesInfo(),
    owMatchesInfo(),
    pubgMatchesInfo(),
    wrMatchesInfo(),
    kogMatchesInfo(),
    r6MatchesInfo(),
    rlMatchesInfo(),
    sc2MatchesInfo(),
    scbwMatchesInfo(),
    valMatchesInfo()
  ]);

  // Combine all matches into a single array
  const allMatches = [...lolMatches, ...dota2Matches, ...csMatches, ...codMatches, ...eafcMatches, ...mlbbMatches, ...owMatches, ...pubgMatches, ... wrMatches, ...kogMatches, ...r6Matches, ...rlMatches, ...sc2Matches, ...scbwMatches, ...valMatches];

  // Filter matches for tiers "S" and "A"
  const filteredMatches = allMatches.filter((match) => {
    const isTier = match.tournament.tier && ['s', 'a', 'b'].includes(match.tournament.tier.toLowerCase());
    return isTier;
  });

  // Sort matches by their start time
  const sortedMatches = filteredMatches.sort((a, b) => {
    const dateA = new Date(a.scheduled_at || '').getTime();
    const dateB = new Date(b.scheduled_at || '').getTime();
    return dateA - dateB;
  });

  return sortedMatches;
}