"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { COUNT_UP } from "@/lib/constants";
import { easeOutCubic } from "@/lib/utils/easing";
import styles from "./CountUp.module.scss";

type CountUpProps = {
  end: number;
  durationMs?: number;
  className?: string;
};

/** Counts from 0 to `end` the first time the number scrolls into view. */
export function CountUp({ end, durationMs = COUNT_UP.durationMs, className }: CountUpProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>(COUNT_UP.viewThreshold);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let frameId = 0;
    let startTime: number | null = null;

    const step = (time: number) => {
      startTime ??= time;
      const progress = Math.min(1, (time - startTime) / durationMs);
      setValue(Math.floor(easeOutCubic(progress) * end));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion, end, durationMs]);

  const displayedValue = prefersReducedMotion ? end : value;

  return (
    <span ref={ref} className={className}>
      <span className={styles.liveValue} aria-hidden="true">
        {displayedValue}
      </span>
      {/* The final number for screen readers, crawlers and print, which would otherwise get "0". */}
      <span className={styles.finalValue}>{end}</span>
    </span>
  );
}
