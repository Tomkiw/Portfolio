import type { ComponentPropsWithoutRef } from "react";
import { MagneticLink } from "@/components/MagneticLink";
import { MAGNETIC } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import styles from "./ButtonLink.module.scss";

type ButtonVariant = "primary" | "ghost";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
};

// Every button in the design is magnetic; ghost buttons pull a little less.
const MAGNETIC_STRENGTH: Record<ButtonVariant, number> = {
  primary: MAGNETIC.strength,
  ghost: MAGNETIC.subtleStrength,
};

/** Button look for elements that cannot be a ButtonLink, e.g. next/link or a real <button>. */
export function getButtonClassName(variant: ButtonVariant = "primary"): string {
  return cn(styles.button, styles[variant]);
}

/**
 * Pill-shaped link styled as a button. Links on this one-page site are
 * in-page anchors or files, so it renders <a> rather than next/link.
 */
export function ButtonLink({ variant = "primary", className, ...anchorProps }: ButtonLinkProps) {
  return (
    <MagneticLink
      strength={MAGNETIC_STRENGTH[variant]}
      className={cn(getButtonClassName(variant), className)}
      {...anchorProps}
    />
  );
}
