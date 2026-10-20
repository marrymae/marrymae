# Marry Mae website

This repository is the website for Marry Mae (marrymae.com): in-person, embodied erotic education and ritual in Lisbon for singles and couples.

## Before any work

1. Read `brand/BRAND.md`. It holds the brand rules for the site: colours, type, components, page plan, words and legal flags.
2. Use only the values in `brand/tokens.css`. Do not invent colours, fonts, sizes or rounded corners.
3. Match the look of `brand/reference/homepage.html` and `brand/reference/couples.html`.

## How Marry works

- Marry decides brand, copy and offers in a separate planning space and brings them here as prompts. Build what the prompt asks, one stage at a time.
- Show the plan (pages, files, components) before building anything large, and wait for a yes.
- Never invent copy, prices, claims or testimonials. Use `[COPY TO COME]` where words are missing.
- Mark every hands-on offer page and the FAQ with `<!-- LEGAL REVIEW -->`.
- Never add client names, stories or photos.
- Ask before adding analytics, cookies, tracking, third-party embeds or paid services.
- Explain what changed in plain language at the end of each stage; Marry is not a developer.

## Repository and hosting

- GitHub repo `marrymae/marrymae` (public). Push directly to `main`; no feature branches or pull requests.
- `README.md` is Marry's GitHub profile README. Leave it alone.
- Astro static site. `.github/workflows/deploy.yml` builds and deploys to GitHub Pages at https://marrymae.github.io/marrymae/ on every push to `main` and once a day.
- The site lives under `/marrymae/`, so every internal link goes through `url()` in `src/lib/url.ts`. When marrymae.com (on Cloudflare) is connected, set `SITE_URL` and `BASE_PATH=/` in the workflow.
- Motion: GSAP (`src/scripts/motion.ts`), switched off for visitors who ask for reduced motion and when JavaScript doesn't run.
