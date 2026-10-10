"use client";

import { useInView } from "@/hooks/useInView";
import { DONUT } from "@/lib/constants";
import styles from "./Donut.module.scss";

type DonutProps = {
  label: string;
  percent: number;
};

const FULL_PERCENT = 100;

/** Radial skill meter that fills up the first time it scrolls into view. */
export function Donut({ label, percent }: DonutProps) {
  const { ref, isInView } = useInView<HTMLDivElement>(DONUT.viewThreshold);
  const { size, stroke } = DONUT;
  const center = size / 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const filledOffset = circumference * (1 - percent / FULL_PERCENT);
  const dashOffset = isInView ? filledOffset : circumference;

  return (
    // role="img" makes screen readers announce the label once instead of reading "0%" mid-animation.
    <div ref={ref} className={styles.donut} role="img" aria-label={`${label}: ${percent}%`}>
      <svg className={styles.chart} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className={styles.track}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className={styles.fill}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          // Print shows the filled state even if the donut was never scrolled into view.
          style={{ "--filled-offset": filledOffset }}
        />
      </svg>
      <span className={styles.percent}>
        <span className={styles.liveValue}>{isInView ? percent : 0}</span>
        <span className={styles.finalValue}>{percent}</span>
        <sup>%</sup>
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
