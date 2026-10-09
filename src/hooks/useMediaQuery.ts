import { useCallback, useSyncExternalStore } from "react";

// The server cannot evaluate media queries, so server HTML and hydration
// always use `false`; the real value arrives right after hydration.
const SERVER_SNAPSHOT = false;

function getServerSnapshot(): boolean {
  return SERVER_SNAPSHOT;
}

/** Live result of a CSS media query, e.g. useMediaQuery("(pointer: coarse)"). */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", onChange);
      return () => mediaQueryList.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
