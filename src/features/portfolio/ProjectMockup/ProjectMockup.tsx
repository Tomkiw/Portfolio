import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types/content";
import styles from "./ProjectMockup.module.scss";

type ProjectMockupProps = {
  project: Project;
};

type DesktopScreenProps = {
  hasGrid: boolean;
};

// Web apps and stores get a two-column dashboard, everything else a single canvas.
const CATEGORIES_WITH_GRID: ReadonlySet<Project["category"]> = new Set(["web", "ecom"]);

function PhoneScreen() {
  return (
    <div className={styles.content}>
      <div className={styles.statusBarSpace} />
      <div className={styles.headerShape} />
      <div className={cn(styles.rowShape, styles.wide)} />
      <div className={cn(styles.rowShape, styles.medium)} />
      <div className={styles.cardStack}>
        <div className={styles.cardShape} />
        <div className={styles.cardShape} />
        <div className={styles.cardShape} />
      </div>
      <div className={styles.pillShape} />
    </div>
  );
}

function DesktopScreen({ hasGrid }: DesktopScreenProps) {
  return (
    <div className={cn(styles.content, styles.desktopContent)}>
      <div className={styles.headerShape} />
      <div className={cn(styles.rowShape, styles.long)} />
      {hasGrid ? (
        <div className={styles.cardGrid}>
          <div className={styles.cardShape} />
          <div className={styles.cardShape} />
        </div>
      ) : (
        <>
          <div className={styles.cardShape} />
          <div className={cn(styles.rowShape, styles.short)} />
        </>
      )}
    </div>
  );
}

/** Faux UI of the project on a phone or a browser window, over the card's gradient. */
export function ProjectMockup({ project }: ProjectMockupProps) {
  const isPhone = project.device === "mobile";

  return (
    <div
      className={cn(
        styles.frame,
        isPhone ? styles.phone : styles.desktop,
        styles[`gradient${project.gradient}`],
      )}
      aria-hidden="true"
    >
      <div className={styles.screen}>
        {isPhone ? (
          <PhoneScreen />
        ) : (
          <DesktopScreen hasGrid={CATEGORIES_WITH_GRID.has(project.category)} />
        )}
      </div>
    </div>
  );
}
