# Jael Tahan — plan notes for the site

Full research plan (6 November 2026): [Jael Tahan — personal brand & remote legal plan](https://cursor.com/canvas/store-fb2ec342-f517-4e0c-bb26-b04f58b73aa1/9c084f87-a5d2-41da-84e4-31b66c24a62a).

This file is the short version for people editing the site. It is not page copy. Internal planning figures stay in that research plan. Do not copy them onto the site or into this file.

## Positioning

Personal brand under her own name, not a firm. The line used on the site is “Jael Tahan — Hi-tech & AI counsel for startups.” The subline is “Israeli commercial counsel with in-house cyber experience. English, Hebrew, Dutch.”

The wedge is buy-side work for companies purchasing AI tools, grounded in cyber in-house roles and Herzog’s Hi-Tech department. She is one counsel. The site does not borrow firm-scale claims (a patent practice, a multi-partner team, certification programmes).

Dutch pages do not use the title advocaat for her. They say she is admitted in Israel and is not admitted in the Netherlands.

## Services on the site

Lead four, in this order:

1. **AI vendor and procurement review.** For companies buying an AI tool or model. A marked agreement and a short note covering training and improvement rights, output IP, confidentiality, indemnities and liability caps, security and logs, GDPR and Israeli Privacy Protection Law Amendment 13, EU AI Act deployer duties the draft shifts onto the buyer, model-change notice, and exit or deletion. Not a build, a certificate, or an opinion on Dutch law. The services page has the clause list in full.
2. **Tech employment and equity offer review.** Employee side, including English-speaking olim and expats. Employment agreement, option or RSU grant, non-compete, NDA, and any Section 14 reference. Not litigation, not a tax opinion (including Section 102), not immigration filings.
3. **Commercial, SaaS, and vendor redlines.** One customer or vendor agreement, a plain issues list, data-processing terms read beside the commercial terms. Ongoing coverage of every contract is the retainer, not this item.
4. **Fractional in-house counsel.** Part-time, monthly, for seed to Series A. Not round-the-clock cover and not a full legal department.

Narrower matters, also with in/out scope on the services page: internal AI-use policy and a light AI Act readiness note (not a certificate); SAFE and seed document review; founders’ agreement and IP assignment; one NDA or contractor agreement; Israel–Netherlands / EU setup on the Israeli-law side, with referral to a Dutch advocaat where the question is Dutch law.

Not on the public menu: rental-contract review. Not claimed anywhere: talent acquisition or recruiting. The about page says that work is outside this practice.

She does not act for both sides of the same matter. Employee-side reviews and company-side clients need a conflict check. That is written into “How the work is done.”

## Compliance

Israel Bar advertising rules (2001) allow practice areas, languages, and Bar membership. The site must not state professional fees, discounts, or amounts. It must not use superlatives or guarantees, testimonials, client names or logos without written consent, pop-ups, or third-party ad banners.

Every page carries this disclaimer in the footer: Jael advises on Israeli law; she is not admitted as a Dutch advocaat; the contents are general information and not legal advice.

Reading the site does not create a retainer. Contact is a link out (scheduler, WhatsApp, or email) once those are filled in. Nothing is stored on the site.

Employer names are biography only. They are easy to remove. Publishing the practice site at all depends on outside-work clearance from her current employer.

## Biography the pages use

Verified for the public bio, and editable in `content/facts.ts`:

- Legal counsel, Palo Alto Networks, from February 2026.
- Legal counsel, CyberArk, June 2025–February 2026.
- Herzog Hi-Tech: associate May 2022–July 2025; articled clerk from early 2021.
- Paralegal, Arnon Segev & Co., December 2020–January 2021. This month is in the research plan’s verified bio and was not in the short brief. Delete the `arnon` entry if it should not be public.
- LL.M. International Corporate Law, Tel Aviv University, 2019–2020.
- LL.B. Global Law, Tilburg University, 2016–2019. Academic only. Not Dutch admission.
- Co-author, with Yair Geva, of Herzog’s overview of the October 2023 NVCA model-document updates, published 7 December 2023: https://herzoglaw.co.il/en/news-and-insights/overview-of-nvca-documents-updates-october-2023/
- Languages: English, Hebrew, Dutch.
- Place: Tel Aviv. Israel Bar membership is stated. The admission year is still a placeholder.

Cum laude on the LL.M. was only a LinkedIn snippet in the research plan. It is not on the site.

## Open questions

- Israel Bar admission year (`content/facts.ts`, `barAdmissionYear`).
- Palo Alto Networks outside-work clearance, conflicts, and whether the current employer stays in the public bio.
- A commissioned portrait. The hero is a monogram until `portraitSrc` is set. No generated headshot.
- Domain. The build defaults to `https://adamjankelow.github.io/jael-legal/`. A custom domain is a `BASE_PATH=/` change. See the README.
- Public email, WhatsApp number, and scheduler URL. TODOs in `content/contact.ts`. Empty values render as “will be added,” not as dead links.
- Human review of Hebrew and Dutch, including the spelling יעל טהן. See `TRANSLATION_REVIEW.md`.
- Confirm cum laude before anyone adds it.
- Do not add talent-acquisition claims unless she confirms them.
- Insurance cover, osek registration, and Bar questions about practising while abroad are for her own advisers. They are not website copy.
- Conflict approach when an employee-side review and a company client overlap. The page states the rule; the working policy still needs her sign-off.
- Rental review stays off the menu unless she decides otherwise.
- The tagline is option A from the research plan. Change it in the locale files if she prefers another.
- The timezone sentence assumes Tel Aviv. Edit it if she works abroad for a long stretch.
- Launch timing. The research plan looks toward a soft launch before travel around March or April 2027. The site can be built and held until clearance and the contact links exist.
