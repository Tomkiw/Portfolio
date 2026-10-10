import type { Skill } from "@/types/content";

// Demo values of the template: the client's own self-assessment goes here.
export const SKILLS: readonly Skill[] = [
  { id: "react", name: "React", percent: 95 },
  { id: "nextjs", name: "Next.js", percent: 92 },
  { id: "typescript", name: "TypeScript", percent: 90 },
  { id: "tailwind", name: "Tailwind", percent: 94 },
  { id: "postgres", name: "Postgres", percent: 80 },
];

export const MARQUEE_ITEMS: readonly string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Node",
  "tRPC",
  "Framer Motion",
  "GSAP",
];
