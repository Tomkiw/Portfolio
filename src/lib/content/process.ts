import type { ProcessStep } from "@/types/content";

// Demo process of the template: four steps fill the row on desktop.
export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description:
      "Kickoff, audit, define success metrics. We agree on what good looks like before any code is written.",
    icon: "?",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, component sketches. Built tight and iterated with your team in the loop.",
    icon: "✎",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Production-grade engineering with weekly demos. You always have something shippable in your hands.",
    icon: "▶",
  },
  {
    id: "ship",
    number: "04",
    title: "Ship",
    description:
      "Deploy, monitor, optimize. Performance benchmarks, analytics, and a clean handoff to your team.",
    icon: "✦",
  },
];
