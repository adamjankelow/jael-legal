import type { Locale } from "./locales";
import type { When } from "../../content/facts";

const months: Record<Locale, string[]> = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  he: [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ],
  nl: [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ],
};

export function formatWhen(value: When, lang: Locale): string {
  if ("early" in value) {
    if (lang === "he") return `תחילת ${value.early}`;
    if (lang === "nl") return `begin ${value.early}`;
    return `Early ${value.early}`;
  }
  return `${months[lang][value.m - 1]} ${value.y}`;
}

export function formatRange(start: When, end: When | null, lang: Locale, present: string): string {
  const left = formatWhen(start, lang);
  const right = end ? formatWhen(end, lang) : present;
  return `${left} – ${right}`;
}

export function formatIsoDate(iso: string, lang: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = months[lang][m - 1];
  if (lang === "he") return `${d} ב${month} ${y}`;
  if (lang === "nl") return `${d} ${month} ${y}`;
  return `${d} ${month} ${y}`;
}

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 180));
}
