# rangeway-redesign

The new rangewayev.com. Astro, static, deploys to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. Enable Pages in repo settings with source set to **GitHub Actions**.

Custom domain (CNAME for `rangewayev.com`) is not committed yet. Flip the DNS and add a CNAME file when ready to replace the legacy site at `rangeway-pages`.

## Writing rules

All user-facing copy must follow the Rangeway voice:

- No em dashes. No sentences starting with "And." No fragments.
- `driver's lounge` is always lowercase.
- No hashtags. No statistics.
- Use "drivers," "hotel operators," "Trailkeepers," "Lookouts" (never "cabins/units/rooms").
- "Summit" standalone, never "Rangeway Summit."

## Pages

- `/` home
- `/network` network overview
- `/network/trailhead`
- `/network/waystation`
- `/network/basecamp`
- `/summit`
- `/our-story`
- `/investors`
- `/partners`

## Structure

- `src/layouts/BaseLayout.astro` — head, fonts, analytics, global CSS
- `src/components/` — shared UI primitives (Nav, Footer, ContactForm, FormatCard, PartnerLogo, PathMark)
- `src/sections/` — composable home page sections
- `src/styles/global.css` — design tokens and base styles
- `public/images/` — static imagery
