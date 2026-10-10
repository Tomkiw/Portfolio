import { Fragment } from "react";
import type { AccentTitle } from "@/types/content";
import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  /** Small label above the title, e.g. "/ 01 · About". */
  eyebrow: string;
  title: AccentTitle;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.title}>
          {/* Lines of one title never repeat, so the text is a stable key. */}
          {title.lines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </Fragment>
          ))}{" "}
          <em>{title.accent}</em>
        </h2>
      </div>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
