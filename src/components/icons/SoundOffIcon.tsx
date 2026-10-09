import { StrokeIcon, type IconProps } from "./StrokeIcon";

const SOUND_STROKE_WIDTH = 1.8;

export function SoundOffIcon(props: IconProps) {
  return (
    <StrokeIcon {...props} strokeWidth={SOUND_STROKE_WIDTH}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </StrokeIcon>
  );
}
