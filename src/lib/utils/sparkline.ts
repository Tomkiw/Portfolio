type Point = {
  x: number;
  y: number;
};

type SparklineGeometry = {
  path: string;
  lastPoint: Point;
};

// 1px inset keeps the 1.5px stroke from being clipped at the edges of the viewBox.
const EDGE_INSET = 1;

/**
 * Same math as the prototype: values are spread evenly across the width,
 * the minimum sits at the bottom and the maximum at the top.
 * Needs at least two values to draw a line.
 */
export function buildSparkline(
  values: readonly number[],
  width: number,
  height: number,
): SparklineGeometry | null {
  if (values.length < 2) return null;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const lastIndex = values.length - 1;

  const points = values.map((value, index) => ({
    x: (index / lastIndex) * (width - 2 * EDGE_INSET) + EDGE_INSET,
    y: height - 2 * EDGE_INSET - ((value - min) / range) * (height - 4 * EDGE_INSET),
  }));

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  return { path, lastPoint: points[lastIndex] };
}
