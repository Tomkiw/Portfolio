import { MARQUEE_ITEMS } from "@/lib/content/skills";
import styles from "./Marquee.module.scss";

// The track holds three identical groups and slides by exactly one group per loop,
// so the jump back to the start is invisible. Only the first group is read aloud.
const GROUP_KEYS = ["original", "first-copy", "second-copy"] as const;

export function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {GROUP_KEYS.map((groupKey, groupIndex) => (
          <ul
            key={groupKey}
            className={styles.group}
            aria-hidden={groupIndex > 0 ? true : undefined}
          >
            {MARQUEE_ITEMS.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
