export type SectionId = "home" | "about" | "services" | "work" | "process" | "stack" | "contact";

export type Profile = {
  firstName: string;
  lastName: string;
  /** Short mark inside the logo brackets: <yn/>. */
  logoMark: string;
  /** Handle used in decorative copy: terminal prompt, preloader corner. */
  handle: string;
  roles: readonly string[];
  tagline: string;
  /** One-line bio: footer intro and the default meta description. */
  summary: string;
  availability: string;
  location: string;
  /** IANA time zone for the live clock in the hero. */
  timeZone: string;
  email: string;
  experienceYears: number;
  stackSummary: string;
  cvUrl: string;
  /** Hero photo from /public; the frame tints it into the orange duotone. */
  portraitUrl: string;
};

export type NavLink = {
  sectionId: SectionId;
  label: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type Skill = {
  id: string;
  name: string;
  percent: number;
};

export type Stat = {
  id: string;
  value: number;
  unit: string;
  label: string;
  /** Growth history drawn as a sparkline. */
  trend: readonly number[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
};

export type ProjectCategory = "web" | "mobile" | "ecom" | "design";

export type ProjectFilter = "all" | ProjectCategory;

export type ProjectFilterOption = {
  id: ProjectFilter;
  label: string;
};

/** Grid footprint: featured 7 + compact 5, half 6 + 6, third 4 × 3 columns. */
export type ProjectSize = "featured" | "compact" | "half" | "third";

export type ProjectDevice = "desktop" | "mobile";

/** Index of the card background gradient (1–6). */
export type ProjectGradient = 1 | 2 | 3 | 4 | 5 | 6;

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  /** Display number, e.g. "001". */
  number: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  description: string;
  gradient: ProjectGradient;
  size: ProjectSize;
  device: ProjectDevice;
  metrics: readonly ProjectMetric[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Decorative glyph shown in the step badge. */
  icon: string;
};

export type StackTool = {
  name: string;
  version: string;
  note: string;
};

export type StackGroup = {
  id: string;
  title: string;
  tools: readonly StackTool[];
};
