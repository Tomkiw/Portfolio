"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowIcon, ArrowLeftIcon } from "@/components/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils/cn";
import type { Testimonial } from "@/types/content";
import styles from "./TestimonialScroller.module.scss";

type TestimonialScrollerProps = {
  items: readonly Testimonial[];
};

type Progress = {
  left: number;
  width: number;
};

type DragStart = {
  pointerX: number;
  scrollLeft: number;
};

type Direction = 1 | -1;

const FULL_PERCENT = 100;
// Shown until the first measurement (same as the design).
const INITIAL_PROGRESS: Progress = { left: 0, width: 25 };

/** Bar that mirrors the track: its width is the visible share, its offset the scrolled share. */
function measureProgress(track: HTMLElement): Progress {
  const maxScroll = track.scrollWidth - track.clientWidth;
  if (maxScroll <= 0) return { left: 0, width: FULL_PERCENT };

  const visibleShare = (track.clientWidth / track.scrollWidth) * FULL_PERCENT;
  const scrolledShare = track.scrollLeft / maxScroll;
  return { left: scrolledShare * (FULL_PERCENT - visibleShare), width: visibleShare };
}

/** Horizontal testimonial strip: native scroll and snap, mouse drag, arrow buttons, progress bar. */
export function TestimonialScroller({ items }: TestimonialScrollerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<DragStart | null>(null);
  const [progress, setProgress] = useState<Progress>(INITIAL_PROGRESS);
  const [isDragging, setIsDragging] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateProgress = () => setProgress(measureProgress(track));

    // ResizeObserver also reports once right after observe(), which gives the first measurement.
    const resizeObserver = new ResizeObserver(updateProgress);
    resizeObserver.observe(track);
    track.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const scrollByCard = (direction: Direction) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !(firstCard instanceof HTMLElement)) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // Mouse only: touch screens and trackpads already scroll the strip natively.
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    dragStartRef.current = { pointerX: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const dragStart = dragStartRef.current;
    if (!dragStart) return;
    event.currentTarget.scrollLeft = dragStart.scrollLeft - (event.clientX - dragStart.pointerX);
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return;
    dragStartRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <div>
      <div className={styles.progress} aria-hidden="true">
        <span
          className={styles.progressBar}
          style={{ left: `${progress.left}%`, width: `${progress.width}%` }}
        />
      </div>

      <div
        ref={trackRef}
        className={cn(styles.track, isDragging && styles.dragging)}
        role="region"
        aria-label="Testimonials"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {items.map((item) => (
          <figure key={item.id} className={styles.card}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.quote}>
              <p>{item.quote}</p>
            </blockquote>
            <figcaption className={styles.author}>
              <span className={styles.avatar} aria-hidden="true">
                {item.initials}
              </span>
              <span className={styles.info}>
                <strong className={styles.name}>{item.name}</strong>
                <span className={styles.role}>{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          className={styles.control}
          aria-label="Next testimonial"
          onClick={() => scrollByCard(1)}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
