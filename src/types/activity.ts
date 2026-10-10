export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type NowPlayingFeed = {
  /** True while the widget cycles through a demo playlist instead of real Spotify data. */
  isDemo: boolean;
  tracks: readonly string[];
};

export type GitHubActivity = {
  /** True while the card shows generated sample data instead of the real GitHub API. */
  isDemo: boolean;
  username: string;
  totalContributions: number;
  streakDays: number;
  languages: readonly string[];
  /** One level per day, oldest first, week by week (7 entries per week). */
  levels: readonly ContributionLevel[];
};
