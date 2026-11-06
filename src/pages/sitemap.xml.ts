import type { APIRoute } from "astro";
import { insightSlugs } from "../../content/facts";
import { locales } from "../lib/locales";

const pages = ["", "/about", "/services", "/insights", "/contact", "/privacy"];

export const GET: APIRoute = () => {
  const origin = String(import.meta.env.SITE ?? "https://adamjankelow.github.io").replace(/\/$/, "");
  const prefix = import.meta.env.BASE_URL.replace(/\/$/, "");
  const paths = [
    ...pages.flatMap((page) => locales.map((lang) => `/${lang}${page}/`)),
    ...insightSlugs.flatMap((slug) => locales.map((lang) => `/${lang}/insights/${slug}/`)),
  ];

  const urls = paths
    .map((path) => {
      const loc = `${origin}${prefix}${path}`;
      const logical = path.replace(/^\/(en|he|nl)/, "");
      const alternates = locales
        .map((lang) => {
          const href = `${origin}${prefix}/${lang}${logical}`;
          return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`;
        })
        .join("\n");
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${prefix}/en${logical}"/>`;
      return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n${xDefault}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
