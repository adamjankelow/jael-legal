import type { InsightPost, SiteCopy } from "../../content/types";
import type { Locale } from "./locales";

export function barMembership(copy: SiteCopy, year: number | null): string {
  if (year == null) return copy.ui.barYearPending;
  return copy.ui.barYearKnown.replaceAll("{year}", String(year));
}

export function postPlainText(post: InsightPost): string {
  return post.blocks
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .join(" ");
}

export function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function minutesLabel(lang: Locale, count: number): string {
  if (lang === "he") return `${count} דק׳`;
  return `${count} min`;
}
