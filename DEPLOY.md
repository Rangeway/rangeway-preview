# Deploy & Ops — rangeway-preview (preview.rangewayev.com)

A **noindexed staging mirror of `rangeway-pages`** with an added **Mojave/Climatize promo
layer**. Self-hosted on the Hostinger VPS, served by Nginx at
**https://preview.rangewayev.com** from `/var/www/rangeway-preview/` on `72.60.71.39`.

> ⚠️ **Keep this site noindexed.** `public/robots.txt` is `Disallow: /` on purpose. Don't
> change `astro.config.mjs` `site:` away from `preview.rangewayev.com` or touch `public/CNAME`.

## How to deploy
**Push to `main`.** GitHub Actions builds Astro and rsyncs `dist/` to the VPS (~1–2 min).
Same flow, retries, and "last good build stays up on failure" behavior as the other sites.

## Local development
Astro (static). Node 22.
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
```

## The Mojave/Climatize layer (what makes this ≠ production)
These are the only intentional differences from `rangeway-pages`:
- **New files:** `src/pages/mojave.astro`, `src/sections/ClimatizeRaise.astro`
- **Insertions into shared files:**
  - `src/pages/index.astro` — imports + renders `<ClimatizeRaise />` (between Positioning and Network)
  - `src/sections/Hero.astro` — the `.hero__pill` "Now raising on Climatize" banner → climatize.earth
  - `src/components/Footer.astro` — the `.site-footer__disclosure` securities disclosure
  - `src/sections/WhereGoing.astro` + `src/pages/our-story.astro` — Mojave "breaking ground" roadmap item; "Visit Rangeway Mojave" CTA
  - `src/pages/investors.astro` — the "Invest in Mojave" Climatize CTA section
- External links that are intentionally NOT rangeway.co: `rangewaymojave.com`, `climatize.earth`.

## Refreshing preview to current production
There is **no shared git history** with `rangeway-pages` — to pull in production changes:
```bash
# from ~/Documents/GitHub
git -C rangeway-preview tag prerefresh-$(git -C rangeway-preview rev-parse --short HEAD)
rsync -a --delete \
  --exclude='.git' --exclude='node_modules' --exclude='dist' --exclude='.astro' \
  --exclude='.DS_Store' --exclude='.playwright-mcp' \
  --exclude='astro.config.mjs' --exclude='CNAME' --exclude='robots.txt' \
  --exclude='.github' --exclude='README.md' --exclude='PRODUCT.md' --exclude='DEPLOY.md' \
  --exclude='mojave.astro' --exclude='ClimatizeRaise.astro' \
  rangeway-pages/ rangeway-preview/
```
Then re-apply the Mojave/Climatize insertions listed above onto the freshly-synced files,
normalize any stale domains, `npm run build`, and push. Rollback: `git reset --hard prerefresh-<sha>`.

## TLS / DNS
- HTTPS via Let's Encrypt (certbot on the VPS) — auto-renews.
- DNS at Cloudflare, DNS-only: A record `preview.rangewayev.com` → `72.60.71.39`.

## Infra notes
- Server path: `/var/www/rangeway-preview/`; CI secrets `VPS_SSH_KEY` + `VPS_KNOWN_HOSTS`.
- GitHub Pages disabled. VPS is the only host.
