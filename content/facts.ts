/**
 * Verified biographical facts. Edit dates and names here.
 * Translated sentences live in content/en.ts, he.ts, and nl.ts.
 *
 * TODO: confirm the Israel Bar admission year. null keeps the placeholder line.
 * TODO: portrait — place a real photograph at public/portrait.jpg and set
 * portraitSrc to "/portrait.jpg". Do not use a generated face.
 */

export type YearMonth = { y: number; m: number };
export type When = YearMonth | { early: number };

export interface TimelineItem {
  id: string;
  start: When;
  end: When | null;
  org: string;
}

export const facts = {
  name: "Jael Tahan",
  nameHe: "יעל טהן",
  cityEn: "Tel Aviv",
  linkedin: "https://www.linkedin.com/in/jael-tahan-2707951b4",
  /** TODO: confirm with Jael. */
  barAdmissionYear: null as number | null,
  /** TODO: real photograph only. null shows the monogram placeholder. */
  portraitSrc: null as string | null,
  /** Starter notes and the privacy notice share this date. */
  published: "2026-11-06",
  publication: {
    url: "https://herzoglaw.co.il/en/news-and-insights/overview-of-nvca-documents-updates-october-2023/",
    /** The note covers the October 2023 NVCA updates and was published on this date. */
    published: "2023-12-07",
    coauthor: "Yair Geva",
    org: "Herzog",
  },
  timeline: [
    { id: "pan", start: { y: 2026, m: 2 }, end: null, org: "Palo Alto Networks" },
    { id: "cyberark", start: { y: 2025, m: 6 }, end: { y: 2026, m: 2 }, org: "CyberArk" },
    { id: "herzog-associate", start: { y: 2022, m: 5 }, end: { y: 2025, m: 7 }, org: "Herzog" },
    { id: "herzog-clerk", start: { early: 2021 }, end: { y: 2022, m: 5 }, org: "Herzog" },
    { id: "arnon", start: { y: 2020, m: 12 }, end: { y: 2021, m: 1 }, org: "Arnon Segev & Co." },
  ] satisfies TimelineItem[],
  education: [
    {
      id: "llm",
      years: "2019–2020",
      credential: "LL.M., International Corporate Law",
      org: "Tel Aviv University",
    },
    {
      id: "llb",
      years: "2016–2019",
      credential: "LL.B., Global Law",
      org: "Tilburg University",
    },
  ],
};

export const insightSlugs = [
  "buying-ai-clauses",
  "tech-offer-letters",
  "fundraising-hygiene",
] as const;

export type InsightSlug = (typeof insightSlugs)[number];
