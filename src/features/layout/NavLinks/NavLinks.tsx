"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { anchorHref, NAV_LINKS } from "@/lib/content/navigation";
import { cn } from "@/lib/utils/cn";
import styles from "./NavLinks.module.scss";

/** Desktop navigation; the mobile menu takes over below the `lg` breakpoint. */
export function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <nav aria-label="Main" className={styles.nav}>
      <ul className={styles.list}>
        {NAV_LINKS.map((link) => {
          const isActive = link.sectionId === activeSection;

          return (
            <li key={link.sectionId}>
              <a
                href={anchorHref(link.sectionId)}
                className={cn(styles.link, isActive && styles.active)}
                aria-current={isActive ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
