"use client";

import { useEffect, useEffectEvent, useReducer } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { INTRO, PRELOADER } from "@/lib/constants";
import { PRELOADER_COPY } from "@/lib/content/preloader";
import { cn } from "@/lib/utils/cn";
import { padNumber } from "@/lib/utils/format";
import styles from "./Preloader.module.scss";

type Phase = "counting" | "opening" | "done";

type PreloaderState = {
  progress: number;
  phase: Phase;
};

type PreloaderAction = { type: "advance"; step: number } | { type: "open" } | { type: "finish" };

type PreloaderProps = {
  onDone: () => void;
};

const INITIAL_STATE: PreloaderState = { progress: 0, phase: "counting" };
const COUNTER_DIGITS = 3;

function reducer(state: PreloaderState, action: PreloaderAction): PreloaderState {
  switch (action.type) {
    case "advance":
      return { ...state, progress: Math.min(PRELOADER.fullPercent, state.progress + action.step) };
    case "open":
      return { ...state, phase: "opening" };
    case "finish":
      return { ...state, phase: "done" };
  }
}

function randomBetween(min: number, spread: number): number {
  return min + Math.random() * spread;
}

/**
 * Counts to 100%, then splits into two curtains that slide away. While they open it
 * sets <html data-intro="play">, which starts the hero name reveal — so the reveal is
 * actually seen (in the design it played, unseen, under the preloader).
 * Server-rendered so the page never flashes before it; CSS hides it for reduced motion
 * and as a failsafe when JavaScript never arrives.
 */
export function Preloader({ onDone }: PreloaderProps) {
  const [{ progress, phase }, dispatch] = useReducer(reducer, INITIAL_STATE);
  const prefersReducedMotion = usePrefersReducedMotion();
  const notifyDone = useEffectEvent(onDone);
  const isFull = progress >= PRELOADER.fullPercent;

  // Timeline: tick until 100%, open after a short pause, then disappear.
  useEffect(() => {
    if (prefersReducedMotion) {
      const timeoutId = window.setTimeout(() => dispatch({ type: "finish" }), 0);
      return () => window.clearTimeout(timeoutId);
    }

    let timeoutId: number;
    if (phase === "counting" && !isFull) {
      timeoutId = window.setTimeout(
        () =>
          dispatch({
            type: "advance",
            step: randomBetween(PRELOADER.minStep, PRELOADER.stepSpread),
          }),
        randomBetween(PRELOADER.minTickMs, PRELOADER.tickSpreadMs),
      );
    } else if (phase === "counting") {
      timeoutId = window.setTimeout(() => dispatch({ type: "open" }), PRELOADER.openDelayMs);
    } else if (phase === "opening") {
      timeoutId = window.setTimeout(
        () => dispatch({ type: "finish" }),
        PRELOADER.hideDelayMs - PRELOADER.openDelayMs,
      );
    } else {
      return;
    }

    return () => window.clearTimeout(timeoutId);
  }, [progress, phase, isFull, prefersReducedMotion]);

  // Side effects of the phase changes: start the hero reveal, hand control back.
  useEffect(() => {
    if (phase === "counting") return;
    document.documentElement.dataset.intro = INTRO.playValue;
    if (phase === "done") notifyDone();
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={cn(styles.preloader, phase === "opening" && styles.opening)} aria-hidden="true">
      <div className={cn(styles.curtain, styles.top)} />
      <div className={cn(styles.curtain, styles.bottom)} />

      <span className={cn(styles.corner, styles.topLeft)}>{PRELOADER_COPY.title}</span>
      <span className={cn(styles.corner, styles.topRight)}>{PRELOADER_COPY.release}</span>
      <p className={styles.counter}>
        {padNumber(Math.floor(progress), COUNTER_DIGITS)}
        <em>%</em>
      </p>
      <span className={cn(styles.corner, styles.bottomLeft)}>{PRELOADER_COPY.status}</span>
      <span className={cn(styles.corner, styles.bottomRight)}>{PRELOADER_COPY.version}</span>

      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
