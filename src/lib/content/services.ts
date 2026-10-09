import type { Service } from "@/types/content";

// What I can take on in a team today — every item is backed by a project on GitHub.
export const SERVICES: readonly Service[] = [
  {
    id: "responsive-layout",
    title: "Responsive Layout",
    description:
      "Figma mockups turned into semantic, mobile-first pages that hold up from 320px to 1440px.",
    tags: ["HTML5", "SCSS", "Figma"],
  },
  {
    id: "react-apps",
    title: "React & Next.js Apps",
    description:
      "Interactive UIs with routing, forms and server data, typed end to end with TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "state-data",
    title: "State & Data Fetching",
    description:
      "TanStack Query for server data, Zustand for client state, every error state covered.",
    tags: ["TanStack Query", "Zustand", "Axios"],
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    description:
      "Node.js and Express on MongoDB: cookie auth, request validation, CORS and env config.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "forms-a11y",
    title: "Forms & Accessibility",
    description:
      "Validated forms with clear errors, keyboard-friendly UI, ARIA where HTML is not enough.",
    tags: ["Formik", "Yup", "ARIA"],
  },
  {
    id: "teamwork",
    title: "Teamwork & Scrum",
    description:
      "Team Lead and Scrum Master on team projects: sprint planning, task breakdown, code review.",
    tags: ["Scrum", "Git", "GitHub"],
  },
];
