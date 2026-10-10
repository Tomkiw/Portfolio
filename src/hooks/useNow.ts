import { useCallback, useSyncExternalStore } from "react";

function getServerSnapshot(): null {
  return null;
}

/**
 * Current time (ms), refreshed every `intervalMs`. Returns `null` on the server
 * and during hydration, so a clock never renders a time that differs between
 * the server HTML and the browser.
 */
export function useNow(intervalMs: number): number | null {
  const subscribe = useCallback(
    (onTick: () => void) => {
      const intervalId = window.setInterval(onTick, intervalMs);
      return () => window.clearInterval(intervalId);
    },
    [intervalMs],
  );

  // Rounded to the interval so repeated reads within one tick return the same value.
  const getSnapshot = useCallback(
    () => Math.floor(Date.now() / intervalMs) * intervalMs,
    [intervalMs],
  );

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
