import { padNumber } from "@/lib/utils/format";
import type { AccentTitle, NumberedSectionKey, SectionCopy } from "@/types/content";
import { PROFILE } from "./profile";
import { TESTIMONIALS } from "./testimonials";

type SectionHeaderContent = {
  eyebrow: string;
  title: AccentTitle;
  description: string;
};

/** Headers of the numbered sections. The number is not written here — see getSectionHeader(). */
export const SECTION_COPY: Record<NumberedSectionKey, SectionCopy> = {
  about: {
    label: "About",
    title: { lines: ["Engineering", "with"], accent: "intent." },
    description: `I started building for the web ${PROFILE.experienceYears}+ years ago and never looked back. Today I help founders, design teams, and growing companies ship products that feel as good as they look.`,
  },
  services: {
    label: "Services",
    title: { lines: ["What I can", "help"], accent: "with." },
    description:
      "From standalone features to multi-quarter rebuilds, here's where I spend most of my billable time.",
  },
  work: {
    label: "Selected Work",
    title: { lines: ["Recent"], accent: "projects." },
    description: "A small slice of shipped work — full case studies and code samples on request.",
  },
  testimonials: {
    label: "Words",
    title: { lines: ["Trusted by", "great"], accent: "teams." },
    description:
      "Drag, scroll, or use the arrows to browse what folks I've worked with had to say.",
  },
  process: {
    label: "How I Work",
    title: { lines: ["Process", "over"], accent: "chaos." },
    description:
      "Four weeks, four phases, zero surprises. Every project follows the same playbook so you always know what's next.",
  },
  stack: {
    label: "Stack & Tools",
    title: { lines: ["Tools of the"], accent: "trade." },
    description: "What's in my daily kit. Opinionated, battle-tested, kept current.",
  },
};

// Order of the numbered sections on the page — keep it in sync with app/page.tsx.
const SECTION_ORDER: readonly NumberedSectionKey[] = [
  "about",
  "services",
  "work",
  "testimonials",
  "process",
  "stack",
];

/** A section without content is not rendered: testimonials stay hidden until there are some. */
export function isSectionVisible(key: NumberedSectionKey): boolean {
  return key !== "testimonials" || TESTIMONIALS.length > 0;
}

const VISIBLE_SECTIONS = SECTION_ORDER.filter(isSectionVisible);

/** Eyebrow, title and description, numbered by position among the visible sections. */
export function getSectionHeader(key: NumberedSectionKey): SectionHeaderContent {
  const { label, title, description } = SECTION_COPY[key];
  const number = padNumber(VISIBLE_SECTIONS.indexOf(key) + 1);
  return { eyebrow: `/ ${number} · ${label}`, title, description };
}
