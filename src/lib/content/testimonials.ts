import type { Testimonial } from "@/types/content";

// Sample quotes from fictional people, to show the section in the template. A client's
// site gets real quotes only, shared with the author's permission — or an empty list,
// which hides the section and renumbers the ones after it.
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "sasha-mendel",
    quote:
      "Shipped the rebuild in half the time we'd budgeted, with a measurable bump in conversion. Easy decision to keep them on retainer.",
    name: "Sasha Mendel",
    role: "Head of Product · Atlas",
    initials: "SM",
  },
  {
    id: "daria-holub",
    quote:
      "Rare combination of taste, speed, and rigor. Code review comments alone leveled up our junior team.",
    name: "Daria Holub",
    role: "CTO · Northwind",
    initials: "DH",
  },
  {
    id: "mark-iversen",
    quote:
      "Took our half-baked prototype and turned it into a product I'm genuinely proud to demo. Designs come back better than I asked for.",
    name: "Mark Iversen",
    role: "Founder · Roam",
    initials: "MI",
  },
  {
    id: "lena-park",
    quote:
      "Honest, opinionated, and incredibly fast. The kind of engineer you build the rest of the team around.",
    name: "Lena Park",
    role: "VP Eng · Verge",
    initials: "LP",
  },
  {
    id: "tom-reeves",
    quote:
      "Brought clarity to a project that had been stalled for months. Within two weeks we had momentum and a roadmap.",
    name: "Tom Reeves",
    role: "Founder · Halftone",
    initials: "TR",
  },
];
