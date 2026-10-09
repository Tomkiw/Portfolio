import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/constants";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const CORNER_RADIUS = 7;
const MARK_SIZE = 12;

/**
 * Favicon: the accent square from the logo (`<yn/>■`) on the dark background.
 * Generated at build time. ImageResponse renders only inline styles.
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        borderRadius: CORNER_RADIUS,
        background: BRAND_COLORS.bg,
      }}
    >
      <div style={{ width: MARK_SIZE, height: MARK_SIZE, background: BRAND_COLORS.accent }} />
    </div>,
    size,
  );
}
