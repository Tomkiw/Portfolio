"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EFFECT_TARGETS, VIM } from "@/lib/constants";
import styles from "./VimMode.module.scss";

function isTypingInto(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

/**
 * Easter egg: five clicks in a row on a logo turn on vim-style scrolling
 * (j / k, g / G, Esc). The footer tells visitors how to find it.
 */
export function VimMode() {
  const [isActive, setIsActive] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let taps = 0;
    let resetTimeoutId = 0;

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest(EFFECT_TARGETS.vimTrigger)) {
        return;
      }
      window.clearTimeout(resetTimeoutId);
      taps += 1;

      if (taps >= VIM.requiredTaps) {
        taps = 0;
        setIsActive((wasActive) => !wasActive);
        return;
      }
      resetTimeoutId = window.setTimeout(() => {
        taps = 0;
      }, VIM.tapWindowMs);
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
      window.clearTimeout(resetTimeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const root = document.documentElement;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || isTypingInto(event.target)) return;

      switch (event.key) {
        case "j":
          window.scrollBy({ top: VIM.scrollStep, behavior });
          break;
        case "k":
          window.scrollBy({ top: -VIM.scrollStep, behavior });
          break;
        case "g":
          window.scrollTo({ top: 0, behavior });
          break;
        // With Shift held the key arrives as "G"; the design compared against "g" and never matched.
        case "G":
          window.scrollTo({ top: root.scrollHeight, behavior });
          break;
        case "Escape":
          setIsActive(false);
          break;
      }
    };

    root.dataset.vim = "";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      delete root.dataset.vim;
    };
  }, [isActive, prefersReducedMotion]);

  if (!isActive) return null;

  return (
    <>
      <aside className={styles.panel} aria-label="Vim mode">
        <p className={styles.heading}>✦ Vim mode enabled</p>
        <ul className={styles.keys}>
          <li>
            <kbd>j</kbd> / <kbd>k</kbd> — scroll down/up
          </li>
          <li>
            <kbd>g</kbd> / <kbd>G</kbd> — top / bottom
          </li>
          <li>
            <kbd>esc</kbd> — exit
          </li>
        </ul>
      </aside>
      <div className={styles.statusBar} aria-hidden="true">
        -- Vim mode --
      </div>
    </>
  );
}
