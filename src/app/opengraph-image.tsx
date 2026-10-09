import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/constants";
import { FULL_NAME, PROFILE } from "@/lib/content/profile";

export const alt = `${FULL_NAME} — ${PROFILE.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PADDING = 72;
const FONT_FAMILY = "Space Grotesk";
const FONT_WEIGHT = { regular: 400, medium: 500 } as const;

// ImageResponse cannot use next/font, and it needs static TTF/OTF/WOFF files, while
// next/font serves a variable WOFF2 — hence the separate copies (latin subset, OFL).
const FONTS_DIR = join(process.cwd(), "src", "assets", "fonts");
const [regularFont, mediumFont] = await Promise.all([
  readFile(join(FONTS_DIR, "space-grotesk-400.ttf")),
  readFile(join(FONTS_DIR, "space-grotesk-500.ttf")),
]);

/**
 * Preview card for links shared in messengers and social networks, built at build time
 * in the site's colors and display font. ImageResponse renders only inline styles.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: PADDING,
        fontFamily: FONT_FAMILY,
        color: BRAND_COLORS.fg,
        background: BRAND_COLORS.bg,
        backgroundImage: `radial-gradient(circle at 85% 0%, ${BRAND_COLORS.accent}40, transparent 55%)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 24,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: BRAND_COLORS.fgMute,
        }}
      >
        <div style={{ width: 48, height: 2, background: BRAND_COLORS.accent }} />
        {`${PROFILE.handle} · Portfolio`}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: FONT_WEIGHT.medium,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          {PROFILE.firstName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            lineHeight: 1,
            letterSpacing: -4,
            color: BRAND_COLORS.accent,
          }}
        >
          {`${PROFILE.lastName}.`}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 48,
          fontSize: 30,
          lineHeight: 1.4,
          color: BRAND_COLORS.fgDim,
        }}
      >
        <div style={{ display: "flex", maxWidth: 760 }}>{PROFILE.tagline}</div>
        <div style={{ display: "flex", fontSize: 24, color: BRAND_COLORS.fgMute }}>
          {PROFILE.location}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: FONT_FAMILY, data: regularFont, weight: FONT_WEIGHT.regular, style: "normal" },
        { name: FONT_FAMILY, data: mediumFont, weight: FONT_WEIGHT.medium, style: "normal" },
      ],
    },
  );
}
