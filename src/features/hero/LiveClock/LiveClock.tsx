"use client";

import { useNow } from "@/hooks/useNow";
import { CLOCK } from "@/lib/constants";
import { PROFILE } from "@/lib/content/profile";
import styles from "./LiveClock.module.scss";

// Same width as a real time, so nothing shifts when the clock starts.
const PLACEHOLDER_TIME = "--:--:--";

const timeFormatter = new Intl.DateTimeFormat(CLOCK.locale, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: PROFILE.timeZone,
});

const zoneFormatter = new Intl.DateTimeFormat(CLOCK.locale, {
  timeZone: PROFILE.timeZone,
  timeZoneName: "short",
});

// The design hard-coded "EET", which is wrong half of the year (Kyiv uses EEST in summer).
function getZoneName(timestamp: number): string {
  return (
    zoneFormatter.formatToParts(timestamp).find((part) => part.type === "timeZoneName")?.value ?? ""
  );
}

/** Local time of the owner, ticking every second. */
export function LiveClock() {
  const now = useNow(CLOCK.tickMs);

  if (now === null) {
    return <span className={styles.clock}>{PLACEHOLDER_TIME}</span>;
  }

  return (
    <time className={styles.clock} dateTime={new Date(now).toISOString()}>
      {timeFormatter.format(now)} {getZoneName(now)}
    </time>
  );
}
