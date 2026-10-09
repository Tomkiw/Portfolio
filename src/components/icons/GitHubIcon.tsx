import { DEFAULT_ICON_SIZE, type IconProps } from "./StrokeIcon";

/** GitHub mark — a filled shape, so it does not use the line-icon frame. */
export function GitHubIcon({ size = DEFAULT_ICON_SIZE, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.94 0-1.32.47-2.39 1.24-3.22-.13-.31-.54-1.54.12-3.2 0 0 1-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.89.12 3.2.77.83 1.24 1.9 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .31.22.69.83.58A12 12 0 0 0 12 .3" />
    </svg>
  );
}
