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

  return allMatches;
}