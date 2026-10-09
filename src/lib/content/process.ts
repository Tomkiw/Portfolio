import type { ProcessStep } from "@/types/content";

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "plan",
    number: "01",
    title: "Plan",
    description:
      "Break the task into a backlog, agree on scope and the definition of done before any code is written.",
    icon: "?",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "Treat the Figma mockup as a spec: components, breakpoints, hover, loading and error states.",
    icon: "✎",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Small commits, feature branches and pull requests with code review. The main branch always works.",
    icon: "▶",
  },
  {
    id: "ship",
    number: "04",
    title: "Ship",
    description:
      "Deploy to Vercel, check Lighthouse, demo at the sprint review and carry the feedback into the next sprint.",
    icon: "✦",
  },
];
