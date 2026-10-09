import { useEffect, useRef } from "react";
import { MEDIA_QUERY } from "@/lib/constants";
import { useMediaQuery } from "./useMediaQuery";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Makes the element drift toward the pointer while it is hovered.
 * Off for touch screens (as in the design) and for users who prefer reduced motion.
 * The transform is written straight to the DOM so mouse moves don't re-render React.
 */
export function useMagnetic<T extends HTMLElement>(strength: number) {
  const ref = useRef<T>(null);
  const isCoarsePointer = useMediaQuery(MEDIA_QUERY.coarsePointer);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isEnabled = !isCoarsePointer && !prefersReducedMotion;

  useEffect(() => {
    const element = ref.current;
    if (!element || !isEnabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const offsetX = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const offsetY = (event.clientY - (rect.top + rect.height / 2)) * strength;
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    const resetPosition = () => {
      element.style.transform = "";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", resetPosition);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", resetPosition);
      resetPosition();
    };
  }, [strength, isEnabled]);

  return ref;
}
