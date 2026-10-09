import type { Profile } from "@/types/content";

export const PROFILE: Profile = {
  firstName: "Ihor",
  lastName: "Tomkiv",
  logoMark: "it",
  handle: "tomkiw",
  roles: [
    "Junior Full-Stack Developer",
    "Frontend Developer",
    "React & Next.js Developer",
    "Team Lead & Scrum Master",
  ],
  tagline:
    "I build responsive, accessible web apps with React, Next.js and Node.js, from semantic markup to REST APIs.",
  summary:
    "Junior full-stack developer from Ternopil building responsive web apps with React, Next.js and Node.js.",
  availability: "Open to work",
  location: "Ternopil, UA",
  timeZone: "Europe/Kyiv",
  email: "igortomkiw3@gmail.com",
  // Coding since August 2025 (first repository on GitHub).
  experienceYears: 1,
  stackSummary: "React · Next.js",
  cvUrl: "/cv.pdf",
  portraitUrl: "/images/portrait.png",
};

export const FULL_NAME = `${PROFILE.firstName} ${PROFILE.lastName}`;
