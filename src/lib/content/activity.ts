// Data for the decorative widgets until real GitHub / Spotify integrations replace it.

// Demo numbers for the GitHub card; for a client, take them from their public profile.
// The heatmap itself is generated, so the card keeps its "Demo" badge.
export const GITHUB_DEMO = {
  username: "arivers",
  totalContributions: 1247,
  streakDays: 38,
  languages: ["TS", "TSX", "Rust", "Go"],
} as const;

export const NOW_PLAYING_DEMO_TRACKS: readonly string[] = [
  "Bonobo — Cirrus",
  "Caribou — Home",
  "ODESZA — A Moment Apart",
  "Tycho — Awake",
  "Four Tet — Two Thousand and Seventeen",
  "Boards of Canada — Roygbiv",
];
