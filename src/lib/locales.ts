export const locales = ["en", "he", "nl"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

function baseNoSlash(): string {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return "";
  return base.replace(/\/$/, "");
}

/** Site path for a locale page. `path` is "/" or "/about" or "/services#ai-procurement". */
export function localePath(lang: Locale, path = "/"): string {
  const prefix = baseNoSlash();
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const bare = hashAt >= 0 ? path.slice(0, hashAt) : path;
  let clean = bare.startsWith("/") ? bare : `/${bare}`;
  if (clean !== "/" && clean.endsWith("/")) clean = clean.slice(0, -1);
  if (clean === "/") return `${prefix}/${lang}/${hash}`;
  return `${prefix}/${lang}${clean}/${hash}`;
}

/** Keep the current page and change only the locale segment. */
export function switchedPath(pathname: string, target: Locale): string {
  const prefix = baseNoSlash();
  let rest = pathname;
  if (prefix && rest.startsWith(prefix)) rest = rest.slice(prefix.length);
  const parts = rest.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) parts[0] = target;
  else parts.unshift(target);
  return `${prefix}/${parts.join("/")}/`;
}

export function withBase(path: string): string {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
