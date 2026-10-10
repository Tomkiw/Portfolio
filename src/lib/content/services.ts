import type { Service } from "@/types/content";

// Demo services of the template. Keep descriptions about two lines long at 1440px:
// the cards align their text to the bottom, so uneven lengths make the titles jump.
export const SERVICES: readonly Service[] = [
  {
    id: "web-apps",
    title: "Web Application Development",
    description:
      "End-to-end product engineering — from idea to production. SSR, edge functions, real-time data.",
    tags: ["Next.js", "tRPC", "Edge"],
  },
  {
    id: "design-systems",
    title: "UI Engineering & Design Systems",
    description:
      "Component libraries, design tokens, accessibility audits. Pixel-tight implementations.",
    tags: ["React", "Tailwind", "Radix"],
  },
  {
    id: "prototypes",
    title: "Interactive Prototypes",
    description:
      "High-fidelity prototypes that feel like the real thing. Animations, gestures, micro-interactions.",
    tags: ["Framer", "GSAP", "WebGL"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Core Web Vitals, bundle analysis, image pipelines. Turning slow sites into instant ones.",
    tags: ["Lighthouse", "CDN", "RSC"],
  },
  {
    id: "backend",
    title: "Backend & API Design",
    description:
      "Type-safe APIs, queues, scheduled jobs. Postgres + Prisma stacks I'd actually want to maintain.",
    tags: ["Postgres", "Redis", "Prisma"],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits, hiring pipelines. A senior set of eyes on your codebase.",
    tags: ["Audit", "Strategy", "Hiring"],
  },
];
