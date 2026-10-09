// Animation and interaction parameters taken 1:1 from the design prototype,
// plus a few shared values (brand colors for generated images, effect selectors).

/**
 * Brand colors for generated images (icon, Open Graph). ImageResponse cannot read CSS
 * variables, so these mirror the tokens in src/styles/_tokens.scss — keep them in sync.
 */
export const BRAND_COLORS = {
  bg: "#0a0908",
  bgCard: "#181614",
  line: "#2a2724",
  fg: "#f5f1ea",
  fgDim: "#c8c2b8",
  fgMute: "#868078",
  accent: "#ff5a1f",
} as const;

export const MEDIA_QUERY = {
  reducedMotion: "(prefers-reduced-motion: reduce)",
  coarsePointer: "(pointer: coarse)",
  finePointer: "(pointer: fine)",
  /** Keep in sync with the `lg` breakpoint in src/styles/_breakpoints.scss. */
  desktop: "(width > 980px)",
} as const;

export const HERO_NAME = {
  firstLineDelayMs: 0,
  secondLineDelayMs: 300,
  staggerMs: 80,
} as const;

export const ROLE_ROTATOR = {
  typeMs: 70,
  holdMs: 1800,
  deleteMs: 35,
} as const;

export const TERMINAL_TYPING = {
  charMs: 35,
  viewThreshold: 0.3,
} as const;

export const GITHUB_GRAPH = {
  weeks: 53,
  daysPerWeek: 7,
  /** Seed of the demo picture (same as the design). */
  seed: 42,
} as const;

/**
 * The preloader sets <html data-intro="play"> when its curtains open; the hero name
 * reveal waits for it (selector in src/components/SplitText/SplitText.module.scss).
 */
export const INTRO = {
  playValue: "play",
} as const;

export const PRELOADER = {
  /** Every tick adds minStep…minStep + stepSpread percent. */
  minStep: 1,
  stepSpread: 4,
  /** Pause between ticks: minTickMs…minTickMs + tickSpreadMs. */
  minTickMs: 30,
  tickSpreadMs: 40,
  /** Counted from the moment the counter reaches 100%. */
  openDelayMs: 350,
  hideDelayMs: 1500,
  fullPercent: 100,
} as const;

/**
 * Selectors the effects use to find elements. CSS module class names are hashed,
 * so markup opts in with data-* attributes instead (data-tick, data-cursor, data-vim-trigger).
 */
export const EFFECT_TARGETS = {
  tick: "a, button, [data-tick]",
  cursorLink: "a, button",
  cursorView: '[data-cursor="view"]',
  vimTrigger: "[data-vim-trigger]",
} as const;

export const CURSOR = {
  /** Share of the remaining distance the ring covers each frame. */
  ringLerp: 0.18,
  viewLabel: "View →",
} as const;

export const TICK_SOUND = {
  baseFrequencyHz: 1800,
  frequencySpreadHz: 400,
  peakGain: 0.05,
  /** Exponential ramps cannot reach 0, so the tick fades to this instead. */
  floorGain: 0.0001,
  attackS: 0.005,
  decayS: 0.05,
  stopS: 0.06,
} as const;

export const VIM = {
  requiredTaps: 5,
  /** Max pause between two logo clicks before the count starts over. */
  tapWindowMs: 2000,
  scrollStep: 80,
} as const;

export const NOW_PLAYING = {
  rotateMs: 9000,
} as const;

export const CLOCK = {
  tickMs: 1000,
  /** en-GB gives 24h time and real zone abbreviations (EET / EEST) instead of "GMT+2". */
  locale: "en-GB",
} as const;

export const MAGNETIC = {
  /** Share of the pointer offset the element follows. */
  strength: 0.35,
  /** Used by ghost buttons. */
  subtleStrength: 0.25,
} as const;

export const COUNT_UP = {
  durationMs: 1800,
  /** Share of the element that must be visible to start counting. */
  viewThreshold: 0.4,
} as const;

export const DONUT = {
  size: 90,
  stroke: 8,
  viewThreshold: 0.4,
} as const;

export const SPARKLINE = {
  width: 90,
  height: 22,
  dotRadius: 2,
} as const;

export const SPLIT_TEXT = {
  defaultStaggerMs: 50,
} as const;
