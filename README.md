# Jael Tahan

Personal site for Jael Tahan, an Israel-licensed hi-tech and AI commercial lawyer. Static pages only: no backend, no database, no stored forms.

English, Hebrew, and Dutch live at `/en/`, `/he/`, and `/nl/`. Hebrew pages are `dir="rtl"`.

The public URL this build targets is [https://adamjankelow.github.io/jael-legal/](https://adamjankelow.github.io/jael-legal/).

Hebrew and Dutch are drafts. See [TRANSLATION_REVIEW.md](TRANSLATION_REVIEW.md) before treating them as final. The short business note is [docs/plan.md](docs/plan.md).

## Run locally

Requires Node 22 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:4321/jael-legal/en/](http://localhost:4321/jael-legal/en/). The dev server uses the same project-page base path as production, so links work the way they will on GitHub Pages.

Other entry points: `/jael-legal/he/` and `/jael-legal/nl/`. The site root redirects to English.

```bash
npm run check   # types, plus a scan that blocks prices and puffery in content
npm run build
npm run preview
```

## Edit content

Public wording and facts are not buried in the layout.

| File | What to edit |
| --- | --- |
| `content/contact.ts` | Email, WhatsApp, Calendly. Empty strings are intentional TODOs. |
| `content/facts.ts` | Timeline, education, Bar admission year, portrait path, publication URL. |
| `content/en.ts` | English copy. This is the source text. |
| `content/he.ts` | Hebrew copy. Needs Jael’s review. |
| `content/nl.ts` | Dutch copy. Needs Jael’s review. |

Keep the three locale files in the same shape (same service ids, same article slugs, same number of paragraphs). `content/index.ts` fails the build if they drift.

To publish a real portrait, add the file at `public/portrait.jpg` and set `portraitSrc` in `content/facts.ts` to `"/portrait.jpg"`. Leave it `null` until then. Do not use a generated face.

Employer names appear only in the biography. Remove or reword the `pan` and `cyberark` entries in `content/facts.ts`, and the matching sentences in the three locale files, if clearance requires it.

## GitHub Pages

The workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds on pull requests and deploys on a push to `main`.

In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The first deployment needs that setting. After it succeeds, the site is at `https://adamjankelow.github.io/jael-legal/`.

## Custom domain later

The base path is an environment variable, not a hardcoded root.

1. In the workflow build step, set `SITE_URL` to `https://your-domain` and `BASE_PATH` to `/`.
2. For local production builds, use the same variables.
3. Add `public/CNAME` containing the domain, then set the custom domain under Settings → Pages.
4. Point DNS at GitHub Pages as GitHub documents for the domain.

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH`. The defaults match the project page above.

## What the site will not say

No prices, discounts, or “starting from” amounts. No superlatives, no guarantees, no testimonials, no client logos. The footer states that Jael advises on Israeli law, is not a Dutch advocaat, and that the site is general information rather than legal advice. `npm run check` rejects a short list of those phrases under `content/` and `src/`.
