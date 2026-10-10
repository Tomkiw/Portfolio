import type { ReactNode } from "react";

export const DEFAULT_ICON_SIZE = 14;
const DEFAULT_STROKE_WIDTH = 2;

export type IconProps = {
  size?: number;
  className?: string;
};

type StrokeIconProps = IconProps & {
  children: ReactNode;
  strokeWidth?: number;
};

/** Shared frame for line icons: 24×24 grid, drawn with the current text color. */
export function StrokeIcon({
  size = DEFAULT_ICON_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  className,
  children,
}: StrokeIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
