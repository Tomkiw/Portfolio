"use client";

import { useEffect, useId, useRef, useState, type FocusEvent, type MouseEvent } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MEDIA_QUERY } from "@/lib/constants";
import { anchorHref, NAV_LINKS } from "@/lib/content/navigation";
import { padNumber } from "@/lib/utils/format";
import styles from "./MobileMenu.module.scss";

/**
 * Burger menu for viewports below `lg`, where the design simply hid the nav links.
 * Closes on Escape, on a link, on a click outside the list, when focus leaves it
 * and when the viewport grows to desktop size.
 */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection();

  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const desktopQuery = window.matchMedia(MEDIA_QUERY.desktop);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    // The panel covers the page, so the page underneath must not scroll.
    root.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  };

  const handlePanelClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <div className={styles.menu} onBlur={handleBlur}>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      >
        <span className={styles.bars} aria-hidden="true">
          <span className={styles.bar} />
          <span className={styles.bar} />
        </span>
      </button>

      <nav
        id={panelId}
        aria-label="Main"
        className={styles.panel}
        data-open={isOpen}
        onClick={handlePanelClick}
      >
        <ul className={styles.list}>
          {NAV_LINKS.map((link, index) => (
            <li key={link.sectionId} className={styles.item}>
              <a
                href={anchorHref(link.sectionId)}
                className={styles.link}
                aria-current={link.sectionId === activeSection ? "location" : undefined}
                onClick={close}
              >
                <span className={styles.index} aria-hidden="true">
                  / {padNumber(index + 1)}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
