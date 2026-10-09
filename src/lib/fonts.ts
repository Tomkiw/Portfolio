import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

// Both are variable fonts: one file covers every weight the design uses.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  fallback: ["system-ui", "sans-serif"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  fallback: ["ui-monospace", "monospace"],
});
