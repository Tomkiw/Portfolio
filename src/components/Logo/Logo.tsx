import { anchorHref, SECTION_ID } from "@/lib/content/navigation";
import { FULL_NAME, PROFILE } from "@/lib/content/profile";
import { cn } from "@/lib/utils/cn";
import styles from "./Logo.module.scss";

type LogoSize = "default" | "small";

type LogoProps = {
  /** "small" is the footer variant: 15px, wider gaps, muted text. */
  size?: LogoSize;
};

export function Logo({ size = "default" }: LogoProps) {
  return (
    // "/#home" scrolls to the top on the home page and leads home from the 404 / error pages.
    <a
      href={`/${anchorHref(SECTION_ID.home)}`}
      className={cn(styles.logo, size === "small" && styles.small)}
      data-vim-trigger=""
    >
      {/* The mark would be read as "less than y n slash greater than", so screen readers
          get the name as text instead (an aria-label would not contain the visible text). */}
      <span className={styles.bracket} aria-hidden="true">
        &lt;
      </span>
      <span aria-hidden="true">{PROFILE.logoMark}</span>
      <span className={styles.bracket} aria-hidden="true">
        /&gt;
      </span>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.srOnly}>{`${FULL_NAME}, home`}</span>
    </a>
  );
}
