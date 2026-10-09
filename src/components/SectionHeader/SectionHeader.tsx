import type { ReactNode } from "react";
import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  /** Small label above the title, e.g. "/ 01 · About". */
  eyebrow: string;
  /** Wrap the accent word in <em> to color it. */
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
