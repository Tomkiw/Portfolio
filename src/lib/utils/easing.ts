/** Fast start, gentle stop. `progress` goes from 0 to 1. */
export function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}
