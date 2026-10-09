import type { Stat } from "@/types/content";

// Snapshot of the public GitHub profile (github.com/Tomkiw) on 2026-10-06 — refresh it
// together with the projects. Trends are month by month from August 2025.
export const STATS: readonly Stat[] = [
  {
    id: "commits",
    value: 650,
    unit: "+",
    label: "Commits on GitHub",
    trend: [60, 95, 257, 289, 322, 349, 422, 445, 502, 507, 571, 614, 628, 645, 653],
  },
  {
    id: "repositories",
    value: 38,
    unit: "",
    label: "Public Repositories",
    trend: [4, 6, 10, 14, 16, 20, 23, 27, 32, 32, 34, 36, 36, 37, 38],
  },
  {
    id: "live-demos",
    value: 29,
    unit: "",
    label: "Live Demos",
    trend: [4, 6, 10, 14, 16, 20, 22, 25, 28, 28, 28, 29, 29, 29, 29],
  },
  {
    id: "months",
    value: 14,
    unit: "",
    label: "Months of Coding",
    // Commits per month: the rhythm behind the months.
    trend: [60, 35, 162, 32, 33, 27, 73, 23, 57, 5, 64, 43, 14, 17, 8],
  },
];
