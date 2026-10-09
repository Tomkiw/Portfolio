// Data for the decorative widgets until real GitHub / Spotify integrations replace it.

// Snapshot of the public GitHub profile on 2026-10-06: commits in the year before it,
// the longest run of days with commits, languages by number of repositories.
// The heatmap is still generated, so the card keeps its "Demo" badge.
export const GITHUB_SNAPSHOT = {
  username: "Tomkiw",
  totalContributions: 554,
  streakDays: 12,
  languages: ["JS", "TS", "HTML", "CSS"],
} as const;

export const NOW_PLAYING_DEMO_TRACKS: readonly string[] = [
  "Bonobo — Cirrus",
  "Caribou — Home",
  "ODESZA — A Moment Apart",
  "Tycho — Awake",
  "Four Tet — Two Thousand and Seventeen",
  "Boards of Canada — Roygbiv",
];
