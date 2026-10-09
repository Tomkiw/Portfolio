import { StrokeIcon, type IconProps } from "./StrokeIcon";

const SOUND_STROKE_WIDTH = 1.8;

export function SoundOnIcon(props: IconProps) {
  return (
    <StrokeIcon {...props} strokeWidth={SOUND_STROKE_WIDTH}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
    </StrokeIcon>
  );
}
