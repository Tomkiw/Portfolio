import type { Metadata, Viewport } from "next";
import { BRAND_COLORS } from "@/lib/constants";
import { FULL_NAME, PROFILE } from "@/lib/content/profile";
import { jetbrainsMono, spaceGrotesk } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils/cn";
import "@/styles/globals.scss";

const SITE_TITLE = `${FULL_NAME} · Portfolio`;

// Site-wide defaults; pages add their own title and canonical URL.
// The Open Graph image comes from src/app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_TITLE,
    template: `%s · ${FULL_NAME}`,
  },
  description: PROFILE.summary,
  authors: [{ name: FULL_NAME }],
  openGraph: {
    type: "website",
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: PROFILE.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: PROFILE.summary,
  },
};

// themeColor lives in `viewport` (not `metadata`) since Next 14.
export const viewport: Viewport = {
  themeColor: BRAND_COLORS.accent,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(spaceGrotesk.variable, jetbrainsMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
