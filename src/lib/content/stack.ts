import type { StackGroup } from "@/types/content";
import { PROFILE } from "./profile";

export const TERMINAL = {
  title: "~/portfolio — zsh — 80×24",
  prompt: `${PROFILE.handle}@portfolio:~$`,
  command: "stack --list --sorted",
} as const;

// Versions as used in Recipool (front and back) and in this portfolio.
export const STACK_GROUPS: readonly StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    tools: [
      { name: "react", version: "v19.2.4", note: "components & hooks" },
      { name: "next", version: "v16.2.1", note: "App Router" },
      { name: "typescript", version: "v5.9.3", note: "strict mode" },
      { name: "sass", version: "v1.105.1", note: "SCSS modules" },
    ],
  },
  {
    id: "state-data",
    title: "State & Data",
    tools: [
      { name: "tanstack-query", version: "v5.96.2", note: "caching" },
      { name: "zustand", version: "v5.0.12", note: "client state" },
      { name: "axios", version: "v1.14.0", note: "HTTP client" },
      { name: "formik", version: "v2.4.9", note: "forms + Yup" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    tools: [
      { name: "node", version: "v24", note: "LTS runtime" },
      { name: "express", version: "v5.2.1", note: "REST APIs" },
      { name: "mongoose", version: "v9.7.3", note: "MongoDB models" },
      { name: "dotenv", version: "v17.4.2", note: "env config" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling",
    tools: [
      { name: "git", version: "v2.55", note: "branches & PRs" },
      { name: "npm", version: "v11.19", note: "scripts & packages" },
      { name: "vite", version: "v5.4", note: "vanilla JS projects" },
      { name: "eslint", version: "v9", note: "code quality" },
    ],
  },
];

export const CURRENTLY_LEARNING: readonly string[] = ["React", "TypeScript", "Next.js", "Zustand"];
