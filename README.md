# rangeway-preview

Staging mirror of the Rangeway marketing site. Astro, static, deploys to a Hostinger VPS at **https://preview.rangeway.co**.

> Preview stays **noindexed** (`public/robots.txt` + `SITE.noindex` in `src/config.ts`). Do not open crawlers until production cutover.

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
npm run check
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and force-pushes `dist/` to the **`deploy-dist`** branch. The VPS polls that branch and rsyncs into `/var/www/rangeway-preview`. See [DEPLOY.md](DEPLOY.md).

## Production cutover checklist

1. Set `RANGEWAY_SITE_ORIGIN` to the live origin (for example, `https://rangeway.co`).
2. Set `RANGEWAY_NOINDEX=false` in the build environment.
3. Confirm DNS, TLS, and the deploy target for the live host.
4. Rebuild and deploy; the build generates `robots.txt`, canonicals, OG URLs, form return URLs, and `/sitemap-index.xml` from the same origin configuration.

Example production build:

```bash
RANGEWAY_SITE_ORIGIN=https://rangeway.co RANGEWAY_NOINDEX=false npm run build
```

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
- `/network/waystation`
- `/network/basecamp`
- `/network/summit`
- `/our-story`
- `/team`
- `/partners`
- `/investors`
- `/contact` and `/contact/thanks`
- `/commitments`, `/privacy`, `/terms`

## Structure

- `src/layouts/BaseLayout.astro` — head, fonts, analytics, JSON-LD, global CSS
- `src/components/` — shared UI (Nav, Footer, ContactForm, FormatCard, PathMark, ResponsiveImage)
- `src/sections/` — composable home page sections
- `src/styles/global.css` — design tokens and base styles
- `src/config.ts` — site meta + external links
- `public/images/` — static imagery (prefer optimized JPEG + sibling WebP)
