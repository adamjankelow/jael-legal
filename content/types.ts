export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface Service {
  id: string;
  title: string;
  /** One sentence used on the home list. */
  summary: string;
  /** Who the work is for. */
  audience: string;
  included: string[];
  excluded: string[];
  /** Lead four appear first on the home page. */
  lead: boolean;
}

export interface ChecklistItem {
  title: string;
  text: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  description: string;
  blocks: Block[];
}

export interface SiteCopy {
  locale: "en" | "he" | "nl";
  langName: string;
  meta: {
    homeTitle: string;
    description: string;
    about: string;
    services: string;
    insights: string;
    contact: string;
    privacy: string;
  };
  nav: {
    about: string;
    services: string;
    insights: string;
    contact: string;
    privacy: string;
  };
  ui: {
    skip: string;
    languageLabel: string;
    portraitCaption: string;
    portraitAlt: string;
    cta: string;
    present: string;
    barYearPending: string;
    barYearKnown: string;
    included: string;
    excluded: string;
    audience: string;
    readNote: string;
    allNotes: string;
    otherNotes: string;
    schedule: string;
    scheduleReady: string;
    scheduleMissing: string;
    whatsapp: string;
    whatsappReady: string;
    whatsappMissing: string;
    email: string;
    emailMissing: string;
    newTab: string;
    onThisPage: string;
    checklistLink: string;
    profileLabel: string;
  };
  footer: {
    disclaimer: string;
    location: string;
  };
  home: {
    kicker: string;
    tagline: string;
    lede: string;
    introTitle: string;
    intro: string;
    servicesTitle: string;
    servicesLede: string;
    otherTitle: string;
    otherLede: string;
    notesTitle: string;
    notesLede: string;
    close: string;
  };
  about: {
    title: string;
    lede: string;
    paragraphs: string[];
    experienceTitle: string;
    educationTitle: string;
    writingTitle: string;
    /** Sentence with a single {link} token. The href is facts.publication.url. */
    publication: string;
    publicationLink: string;
    roles: Record<string, string>;
    howTitle: string;
    how: string[];
    limitsTitle: string;
    limits: string[];
  };
  services: {
    title: string;
    lede: string;
    otherTitle: string;
    otherLede: string;
    checklistEyebrow: string;
    checklistTitle: string;
    checklistIntro: string;
    checklist: ChecklistItem[];
    items: Service[];
  };
  insights: {
    title: string;
    lede: string;
    posts: InsightPost[];
    disclaimer: string;
  };
  contact: {
    title: string;
    lede: string;
    timezone: string;
    languages: string;
    noForm: string;
  };
  privacy: {
    title: string;
    updatedLabel: string;
    blocks: Block[];
  };
  notFound: {
    title: string;
    lede: string;
  };
}
