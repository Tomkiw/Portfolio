import { StrokeIcon, type IconProps } from "./StrokeIcon";

export function ArrowLeftIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </StrokeIcon>
  );
}
