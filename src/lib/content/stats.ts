import type { Stat } from "@/types/content";
import { PROFILE } from "./profile";

// Demo numbers of the template. Use only figures the client can back up — for a real
// person, invented stats hurt more than a missing section.
export const STATS: readonly Stat[] = [
  {
    id: "projects",
    value: 60,
    unit: "+",
    label: "Projects Shipped",
    trend: [3, 5, 4, 7, 6, 9, 12, 11, 14, 18, 22, 28, 36, 44, 52, 60],
  },
  {
    id: "clients",
    value: 32,
    unit: "",
    label: "Happy Clients",
    trend: [1, 2, 3, 5, 6, 7, 10, 14, 17, 21, 25, 28, 32],
  },
  {
    id: "experience",
    value: PROFILE.experienceYears,
    unit: "yr",
    label: "Experience",
    trend: [1, 1, 2, 2, 3, 4, 5, 6],
  },
  {
    id: "awards",
    value: 12,
    unit: "",
    label: "Awards / Mentions",
    trend: [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 12],
  },
];
