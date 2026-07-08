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

1. Set `site` in `astro.config.mjs` to the live origin (e.g. `https://rangeway.co`).
2. Set `SITE.noindex = false` in `src/config.ts`.
3. Replace `public/robots.txt` with `public/robots.production.txt` (adjust sitemap URL if needed).
4. Confirm DNS, TLS, and the deploy target for the live host.
5. Rebuild and deploy; verify canonicals, OG URLs, and `/sitemap-index.xml`.

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
- `/partners` (includes host inquiry at `#host`)
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
