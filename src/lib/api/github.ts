import { GITHUB_GRAPH } from "@/lib/constants";
import { GITHUB_SNAPSHOT } from "@/lib/content/activity";
import { createSeededRandom } from "@/lib/utils/random";
import type { ContributionLevel, GitHubActivity } from "@/types/activity";

const SUNDAY = 0;
const SATURDAY = 6;
// Demo shaping, as in the design: weekends are half as busy, recent weeks busier.
const WEEKEND_FACTOR = 0.5;
const RECENCY_BASE = 0.4;
const RECENCY_RANGE = 0.8;
// A day reaches a level once its intensity is above that level's floor.
const LEVEL_FLOOR = { 1: 0.15, 2: 0.35, 3: 0.55, 4: 0.75 } as const;

function toLevel(intensity: number): ContributionLevel {
  if (intensity > LEVEL_FLOOR[4]) return 4;
  if (intensity > LEVEL_FLOOR[3]) return 3;
  if (intensity > LEVEL_FLOOR[2]) return 2;
  if (intensity > LEVEL_FLOOR[1]) return 1;
  return 0;
}

/** A believable year of activity; the fixed seed always draws the same picture. */
function generateDemoLevels(): ContributionLevel[] {
  const random = createSeededRandom(GITHUB_GRAPH.seed);
  const levels: ContributionLevel[] = [];

  for (let week = 0; week < GITHUB_GRAPH.weeks; week++) {
    for (let day = 0; day < GITHUB_GRAPH.daysPerWeek; day++) {
      const weekendFactor = day === SUNDAY || day === SATURDAY ? WEEKEND_FACTOR : 1;
      const recencyFactor = RECENCY_BASE + (week / GITHUB_GRAPH.weeks) * RECENCY_RANGE;
      levels.push(toLevel(random() * weekendFactor * recencyFactor));
    }
  }

  return levels;
}

/**
 * Data for the GitHub contribution card: snapshot numbers and a generated heatmap, so the
 * card shows a "Demo" badge. A real version would call the GitHub GraphQL API here, on the
 * server, with a token from .env (never a NEXT_PUBLIC_ variable) — the component would not change.
 */
export async function getGitHubActivity(): Promise<GitHubActivity> {
  return {
    isDemo: true,
    username: GITHUB_SNAPSHOT.username,
    totalContributions: GITHUB_SNAPSHOT.totalContributions,
    streakDays: GITHUB_SNAPSHOT.streakDays,
    languages: GITHUB_SNAPSHOT.languages,
    levels: generateDemoLevels(),
  };
}
