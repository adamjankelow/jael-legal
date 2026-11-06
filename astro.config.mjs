import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * GitHub project page: https://adamjankelow.github.io/jael-legal/
 *   SITE_URL=https://adamjankelow.github.io
 *   BASE_PATH=/jael-legal
 *
 * Custom domain at the root (later):
 *   SITE_URL=https://example.com
 *   BASE_PATH=/
 * and a CNAME file in public/. See README.
 */
const site = process.env.SITE_URL ?? "https://adamjankelow.github.io";
const rawBase = process.env.BASE_PATH ?? "/jael-legal";
const base = rawBase === "/" ? "/" : `/${rawBase.replace(/^\/|\/$/g, "")}`;

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
