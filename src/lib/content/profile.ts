import type { Profile } from "@/types/content";

// Demo persona of the template — a fictional developer. Replace every value with the
// client's data; add `cvUrl` and `portraitUrl` once their files are in /public.
export const PROFILE: Profile = {
  firstName: "Alex",
  lastName: "Rivers",
  logoMark: "ar",
  handle: "arivers",
  roles: ["Full-Stack Developer", "UI Engineer", "Product Designer", "Tooling Nerd"],
  tagline:
    "I design and build performant, beautifully-engineered web experiences with React, Next.js and TypeScript.",
  summary: "Independent developer building thoughtful products for the modern web.",
  availability: "Available for new work",
  location: "Kyiv, UA",
  timeZone: "Europe/Kyiv",
  // Reserved example domain: mail to it never reaches a real person.
  email: "hello@example.com",
  experienceYears: 6,
  stackSummary: "RSC · TS",
};

export const FULL_NAME = `${PROFILE.firstName} ${PROFILE.lastName}`;
