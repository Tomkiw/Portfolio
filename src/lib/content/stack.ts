import type { StackGroup } from "@/types/content";
import { PROFILE } from "./profile";

export const TERMINAL = {
  title: "~/portfolio — zsh — 80×24",
  prompt: `${PROFILE.handle}@portfolio:~$`,
  command: "stack --list --sorted",
  learningTitle: "Currently learning",
} as const;

// Demo stack of the template. A line of the terminal scrolls instead of wrapping, so keep
// "name version — note" within ~39 characters to fit a 375px phone.
export const STACK_GROUPS: readonly StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    tools: [
      { name: "react", version: "v19.2.8", note: "UI library of record" },
      { name: "next", version: "v16.3.8", note: "App Router, RSC, edge" },
      { name: "typescript", version: "v5.9.3", note: "strict mode always" },
      { name: "tailwindcss", version: "v4.0.0", note: "utility-first CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    tools: [
      { name: "node", version: "v22.1.0", note: "LTS" },
      { name: "postgres", version: "v16.4", note: "RDS / Neon" },
      { name: "prisma", version: "v5.22", note: "type-safe ORM" },
      { name: "redis", version: "v7.4", note: "cache & queues" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling",
    tools: [
      { name: "pnpm", version: "v9.12.3", note: "faster, leaner" },
      { name: "biome", version: "v1.9.4", note: "lint + format in one" },
      { name: "vitest", version: "v2.1.4", note: "unit + integration" },
      { name: "playwright", version: "v1.48", note: "e2e + visual" },
    ],
  },
];

export const CURRENTLY_LEARNING: readonly string[] = ["Tauri v2", "Bun", "Drizzle", "PartyKit"];
