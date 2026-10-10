"use client";

import { useEffect, useState } from "react";
import { SpotifyIcon } from "@/components/icons";
import { getNowPlaying } from "@/lib/api/now-playing";
import { NOW_PLAYING } from "@/lib/constants";
import { pickRandomIndex } from "@/lib/utils/random";
import styles from "./NowPlaying.module.scss";

const FEED = getNowPlaying();
const BAR_KEYS = ["low", "mid", "high", "medium"] as const;

/**
 * Floating "now playing" pill. Starts on a random track and moves on every 9 seconds.
 * Mounted only on the client (after the preloader), so the random start cannot cause
 * a hydration mismatch. Labelled as demo while the playlist is not real.
 */
export function NowPlaying() {
  const trackCount = FEED.tracks.length;
  const [trackIndex, setTrackIndex] = useState(() => pickRandomIndex(trackCount));

  useEffect(() => {
    const intervalId = window.setInterval(
      () => setTrackIndex((current) => (current + 1) % trackCount),
      NOW_PLAYING.rotateMs,
    );
    return () => window.clearInterval(intervalId);
  }, [trackCount]);

  return (
    <aside
      className={styles.widget}
      aria-label={FEED.isDemo ? "Now playing (demo playlist)" : "Now playing"}
    >
      <span className={styles.icon} aria-hidden="true">
        <SpotifyIcon />
      </span>
      <span className={styles.text}>
        <span className={styles.status}>Now playing{FEED.isDemo ? " · demo" : null}</span>
        <span className={styles.track}>{FEED.tracks[trackIndex]}</span>
      </span>
      <span className={styles.bars} aria-hidden="true">
        {BAR_KEYS.map((key) => (
          <span key={key} />
        ))}
      </span>
    </aside>
  );
}
