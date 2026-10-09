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
  { sectionId: SECTION_ID.services, label: "What I Do" },
  { sectionId: SECTION_ID.work, label: "Work" },
  { sectionId: SECTION_ID.process, label: "Process" },
  { sectionId: SECTION_ID.contact, label: "Contact" },
];

export const FOOTER_LINKS: readonly NavLink[] = [
  { sectionId: SECTION_ID.home, label: "Home" },
  { sectionId: SECTION_ID.about, label: "About" },
  { sectionId: SECTION_ID.services, label: "What I Do" },
  { sectionId: SECTION_ID.work, label: "Work" },
  { sectionId: SECTION_ID.stack, label: "Stack" },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/Tomkiw" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ihor-tomkiv/" },
  { id: "telegram", label: "Telegram", href: "https://t.me/Tomkiw" },
];

// Until there is a booking link, "Schedule a call" leads to the contact section.
export const SCHEDULE_CALL_HREF = anchorHref(SECTION_ID.contact);
