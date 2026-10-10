import { SPARKLINE } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import { buildSparkline } from "@/lib/utils/sparkline";
import styles from "./Sparkline.module.scss";

type SparklineProps = {
  values: readonly number[];
  className?: string;
};

/** Tiny decorative trend line with a dot on the latest value. */
export function Sparkline({ values, className }: SparklineProps) {
  const { width, height, dotRadius } = SPARKLINE;
  const geometry = buildSparkline(values, width, height);

  if (!geometry) return null;

  return (
    <svg
      className={cn(styles.sparkline, className)}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <path className={styles.line} d={geometry.path} />
      <circle
        className={styles.dot}
        cx={geometry.lastPoint.x}
        cy={geometry.lastPoint.y}
        r={dotRadius}
      />
    </svg>
  );
}
