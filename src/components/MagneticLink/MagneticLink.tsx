"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { MAGNETIC } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import styles from "./MagneticLink.module.scss";

type MagneticLinkProps = ComponentPropsWithoutRef<"a"> & {
  /** Share of the pointer offset the link follows (0–1). */
  strength?: number;
};

/** Anchor that drifts toward the pointer. Smoothing comes from the consumer's transition. */
export function MagneticLink({
  strength = MAGNETIC.strength,
  className,
  ...anchorProps
}: MagneticLinkProps) {
  const ref = useMagnetic<HTMLAnchorElement>(strength);

  return <a ref={ref} className={cn(styles.magnetic, className)} {...anchorProps} />;
}
