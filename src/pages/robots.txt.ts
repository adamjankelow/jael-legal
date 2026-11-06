import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const origin = String(import.meta.env.SITE ?? "https://adamjankelow.github.io").replace(/\/$/, "");
  const base = import.meta.env.BASE_URL;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}sitemap.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
