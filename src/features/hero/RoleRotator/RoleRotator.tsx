"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypingLoop } from "@/hooks/useTypingLoop";
import { ROLE_ROTATOR } from "@/lib/constants";
import styles from "./RoleRotator.module.scss";

type RoleRotatorProps = {
  roles: readonly string[];
};

/** Types the roles one after another. With reduced motion it simply shows the first role. */
export function RoleRotator({ roles }: RoleRotatorProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const typedText = useTypingLoop(roles, ROLE_ROTATOR, prefersReducedMotion);
  const visibleText = prefersReducedMotion ? (roles[0] ?? "") : typedText;

  return (
    <span className={styles.rotator}>
      {/* Letter-by-letter changes are noise for screen readers; they get the full list once. */}
      <span className={styles.typed} aria-hidden="true">
        {visibleText}
        <span className={styles.caret} />
      </span>
      <span className={styles.srOnly}>{roles.join(", ")}</span>
    </span>
  );
}
