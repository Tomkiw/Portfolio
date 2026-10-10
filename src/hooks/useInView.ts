import { useEffect, useRef, useState } from "react";

/**
 * Turns `true` the first time at least `threshold` of the element is visible
 * and stays `true`: every scroll reveal in the design plays only once.
 */
export function useInView<T extends Element>(threshold: number) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
