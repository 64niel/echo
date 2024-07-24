import axios from 'axios'
import { DateTime } from 'luxon'

axios.defaults.baseURL = 'https://api.pandascore.co'
axios.defaults.headers.common.Authorization = 'KccEQOC-Rix7i9SDudNG269gBGemAdSEmV7yklD6CdIDIpEZcd0'
/**
 * Fetches matches from the tournament brackets endpoint
 * @param {number} tournamentId ID of the tournament
 * @returns {Promise<Array>} Array of matches with `previous_matches` array
 */
async function fetchMatches (tournamentId: any) {
  const { data } = await axios.get(`/tournaments/${tournamentId}/brackets`)
  return data
}

/**
 * Sort matches by `scheduled_at` in reverse order
 * @param {Array} matches Array of matches
 * @returns {Array} Array of matches
 */
function sortInReverseChronologicalOrder (matches: any[]) {
  return matches.sort((matchA: { scheduled_at: any }, matchB: { scheduled_at: any }) => {
    return DateTime.fromISO(matchB.scheduled_at).toMillis() - DateTime.fromISO(matchA.scheduled_at).toMillis()
  })
}

/**
 * Creates and return a binary tree where each node represents the winner or loser of a match
 * @param {Array} matches Array of matches
 * @returns {Object} A binary tree
 */
function formatAsTree (matches: any) {
  // Sort matches for easier Finals access
  const orderedMatches = sortInReverseChronologicalOrder(matches)

  const findMatchById = (matchId: any) => orderedMatches.find(({ id }) => id === matchId)

  const buildMatchTree = (match: { id: any; name: any; previous_matches: string | any[] }, previousType: undefined) => {
    if (!match) {
      return {}
    }
    const treeNode = {
      id: match.id,
      name: match.name,
      type: previousType
    }
    // If the node represents a match loser, we should not continue building this branch
    // Because the match already appears in the winner bracket
    if (treeNode.type !== 'loser') {
      if (match.previous_matches.length) {
        treeNode.prevLeft = buildMatchTree(findMatchById(match.previous_matches[0].match_id), match.previous_matches[0].type)
      }
      if (match.previous_matches.length === 2) {
        treeNode.prevRight = buildMatchTree(findMatchById(match.previous_matches[1].match_id), match.previous_matches[1].type)
      }
    }
    return treeNode
  }

  return buildMatchTree(orderedMatches[0])
}

export default async function MatchesApi() {
    const tournamentId = 6859
    const matchesData = await fetchMatches(tournamentId)
    const binaryTree = formatAsTree(matchesData)
  }
