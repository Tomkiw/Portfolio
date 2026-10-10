import type { NavLink, SectionId, SocialLink } from "@/types/content";

// Single source of truth for anchors: sections take their `id` from here
// and every link builds its href with anchorHref().
export const SECTION_ID: { readonly [Id in SectionId]: Id } = {
  home: "home",
  about: "about",
  services: "services",
  work: "work",
  process: "process",
  stack: "stack",
  contact: "contact",
};

export function anchorHref(sectionId: SectionId): string {
  return `#${sectionId}`;
}

export const NAV_LINKS: readonly NavLink[] = [
  { sectionId: SECTION_ID.home, label: "Home" },
  { sectionId: SECTION_ID.about, label: "About" },
  { sectionId: SECTION_ID.services, label: "Services" },
  { sectionId: SECTION_ID.work, label: "Work" },
  { sectionId: SECTION_ID.process, label: "Process" },
  { sectionId: SECTION_ID.contact, label: "Contact" },
];

export const FOOTER_LINKS: readonly NavLink[] = [
  { sectionId: SECTION_ID.home, label: "Home" },
  { sectionId: SECTION_ID.about, label: "About" },
  { sectionId: SECTION_ID.services, label: "Services" },
  { sectionId: SECTION_ID.work, label: "Work" },
  { sectionId: SECTION_ID.stack, label: "Stack" },
];

// Demo links go to the platforms' home pages, never to a stranger's profile.
// Replace them with the client's profiles.
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
  { id: "x", label: "Twitter / X", href: "https://x.com" },
  { id: "dribbble", label: "Dribbble", href: "https://dribbble.com" },
];

// Until there is a booking link, "Schedule a call" leads to the contact section.
export const SCHEDULE_CALL_HREF = anchorHref(SECTION_ID.contact);

/** Labels of the calls to action, shared by the hero, about, nav and footer. */
export const CTA_LABEL = {
  hire: "Hire Me",
  talk: "Let's Talk",
  viewWork: "View Work",
  downloadCv: "Download CV",
  downloadCvFile: "Download CV (PDF)",
  scheduleCall: "Schedule a call",
} as const;
