import { StrokeIcon, type IconProps } from "./StrokeIcon";

export function ArrowIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </StrokeIcon>
  );
}
