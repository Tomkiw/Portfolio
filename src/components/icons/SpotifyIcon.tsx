import { DEFAULT_ICON_SIZE, type IconProps } from "./StrokeIcon";

/** Spotify mark — a filled shape, so it does not use the line-icon frame. */
export function SpotifyIcon({ size = DEFAULT_ICON_SIZE, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 14.4c-.2.3-.5.4-.8.2-2.2-1.3-4.9-1.6-8.2-.9-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.5-.8 6.6-.5 9 1 .3.2.4.5.3.8zm1.2-2.7c-.2.3-.6.5-1 .3-2.5-1.5-6.3-2-9.2-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.3-1 7.5-.5 10.4 1.2.3.2.4.7.2 1zm.1-2.7C15 9.4 9.8 9.2 7 10c-.4.1-.8-.1-1-.5-.1-.4.1-.8.5-1 3.3-1 8.9-.8 12.2 1.2.4.2.5.7.3 1.1-.2.3-.7.5-1.1.2z" />
    </svg>
  );
}
