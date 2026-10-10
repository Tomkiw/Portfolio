// Fixed words of the hero; the name, roles and tagline come from profile.ts.
export const HERO_COPY = {
  metaLabels: { location: "Based In", experience: "Experience", stack: "Stack" },
  experienceUnit: "years",
  scrollHint: "Scroll",
  /** Orange badge on the portrait, after "{years}+". */
  portraitBadge: "Years Building",
  portraitTech: "</> shipping production-grade code",
  /** Shown in the frame while PROFILE.portraitUrl is not set. */
  portraitPlaceholder: { title: "Portrait", hint: "drop your photo here" },
} as const;
