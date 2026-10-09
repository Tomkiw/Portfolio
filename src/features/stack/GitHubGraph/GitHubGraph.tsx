import { GitHubIcon } from "@/components/icons";
import { getGitHubActivity } from "@/lib/api/github";
import { cn } from "@/lib/utils/cn";
import type { ContributionLevel } from "@/types/activity";
import styles from "./GitHubGraph.module.scss";

const TITLE_ICON_SIZE = 22;
const LEGEND_LEVELS: readonly ContributionLevel[] = [0, 1, 2, 3, 4];
const LEVEL_CLASS: Record<ContributionLevel, string | undefined> = {
  0: undefined,
  1: styles.level1,
  2: styles.level2,
  3: styles.level3,
  4: styles.level4,
};

/** Contribution heatmap card; shows a "Demo" badge while the data is generated. */
export async function GitHubGraph() {
  const activity = await getGitHubActivity();

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.title}>
          <GitHubIcon size={TITLE_ICON_SIZE} className={styles.icon} />
          <h3 className={styles.heading}>github.com/{activity.username}</h3>
          {activity.isDemo ? (
            <span
              className={styles.demoBadge}
              title="Sample heatmap; the numbers are a snapshot of the GitHub profile"
            >
              Demo
            </span>
          ) : null}
        </div>
        <ul className={styles.stats}>
          <li>
            <strong>{activity.totalContributions}</strong> commits in last year
          </li>
          <li>
            <strong>{activity.streakDays}</strong>-day best streak
          </li>
          <li>{activity.languages.join(" · ")}</li>
        </ul>
      </div>

      <div
        className={styles.graph}
        role="img"
        aria-label={`Contribution graph: ${activity.totalContributions} contributions in the last year`}
      >
        {activity.levels.map((level, day) => (
          // A cell's position is the day it stands for, so the index is its identity.
          <span key={`day-${day}`} className={cn(styles.cell, LEVEL_CLASS[level])} />
        ))}
      </div>

      <div className={styles.legend} aria-hidden="true">
        <span>Less</span>
        {LEGEND_LEVELS.map((level) => (
          <span key={level} className={cn(styles.cell, LEVEL_CLASS[level])} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
