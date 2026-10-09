"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CURSOR, EFFECT_TARGETS, MEDIA_QUERY } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import styles from "./CustomCursor.module.scss";

type CursorTarget = "none" | "link" | "view";

function getCursorTarget(element: EventTarget | null): CursorTarget {
  if (!(element instanceof Element)) return "none";
  if (element.closest(EFFECT_TARGETS.cursorView)) return "view";
  if (element.closest(EFFECT_TARGETS.cursorLink)) return "link";
  return "none";
}

function toTransform(x: number, y: number): string {
  return `translate(${x}px, ${y}px) translate(-50%, -50%)`;
}

/**
 * Dot that sticks to the pointer plus a ring that trails it. Mouse-like pointers only,
 * and off for reduced motion — then the system cursor simply stays.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<CursorTarget>("none");
  const isFinePointer = useMediaQuery(MEDIA_QUERY.finePointer);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isEnabled = isFinePointer && !prefersReducedMotion;

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!isEnabled || !dot || !ring) return;

    const root = document.documentElement;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };
    const handleMouseOver = (event: MouseEvent) => setTarget(getCursorTarget(event.target));

    // Written straight to the DOM every frame, so following the mouse never re-renders React.
    const followPointer = () => {
      ringX += (pointerX - ringX) * CURSOR.ringLerp;
      ringY += (pointerY - ringY) * CURSOR.ringLerp;
      dot.style.transform = toTransform(pointerX, pointerY);
      ring.style.transform = toTransform(ringX, ringY);
      frameId = requestAnimationFrame(followPointer);
    };

    root.dataset.customCursor = "";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    frameId = requestAnimationFrame(followPointer);

    // The design never cancelled its animation loop, so it kept running after unmount.
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      delete root.dataset.customCursor;
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div
        ref={ringRef}
        className={cn(
          styles.ring,
          target === "link" && styles.overLink,
          target === "view" && styles.overProject,
        )}
        data-label={target === "view" ? CURSOR.viewLabel : undefined}
        aria-hidden="true"
      />
    </>
  );
}
