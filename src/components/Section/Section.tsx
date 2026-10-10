import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import type { SectionId } from "@/types/content";
import styles from "./Section.module.scss";

type SectionProps = {
  /** Anchor target; take it from SECTION_ID so links and sections never drift apart. */
  id?: SectionId;
  /** Off for a section that continues the previous one (Stats right under About). */
  hasTopPadding?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({ id, hasTopPadding = true, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(styles.section, !hasTopPadding && styles.noTopPadding, className)}
    >
      {children}
    </section>
  );
}
