# Deploy & Ops — rangeway-preview (preview.rangeway.co)

A **noindexed staging mirror of `rangeway-pages`**, with a few preview-only location
callouts that link out to the per-site microsites. Self-hosted on the Hostinger VPS, served
by Nginx at **https://preview.rangeway.co** from `/var/www/rangeway-preview/` on `72.60.71.39`.

> ⚠️ **Keep this site noindexed.** `public/robots.txt` is `Disallow: /` on purpose. Don't
> change `astro.config.mjs` `site:` away from `preview.rangeway.co` or touch `public/CNAME`.

## How to deploy
**Push to `main`.** GitHub Actions builds Astro and force-pushes `dist/` to the
**`deploy-dist` branch**; the VPS polls that branch every 2 minutes
(`rangeway-deploy.timer` → `/usr/local/bin/rangeway-pull-deploy`, config in
`/etc/rangeway-deploy.conf`) and rsyncs it into the web root. Expect the site live
~2–4 min after push. Last good build stays up if anything fails.

> Why pull-based: Hostinger's network edge intermittently drops inbound SSH from
> GitHub's shared runner IP ranges (any port), so CI-push rsync deploys failed
> randomly (2026-06-09). CI now never connects to the VPS. Deploy logs on the server:
> `journalctl -t rangeway-deploy`.

## Local development
Astro (static). Node 22.
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
```

## Preview-only differences (what makes this ≠ production)
These are the only intentional differences from `rangeway-pages`:
- **`src/sections/WhereGoing.astro`** — the "Where We're Going" waypoints (Mojave, Bozeman,
  St. Louis JV) each link out: Mojave/Bozeman to their microsites, St. Louis to the newsroom
  press release.
- **`src/pages/our-story.astro`** — Mojave "breaking ground" roadmap item.
- **`src/components/Footer.astro`** — Explore column links to the Mojave and Bozeman microsites.
- **`src/config.ts`** — `LINKS.mojaveMicrosite` / `bozemanMicrosite` / `stLouisPress`.
- **`astro.config.mjs`** — `/mojave` redirects to `rangewaymojave.com` (the old internal page is gone).
- External links that are intentionally NOT rangeway.co: `rangewaymojave.com`, `rangewaybozeman.com`.

> The Mojave/Climatize **raise** layer (the `ClimatizeRaise` section, `CAMPAIGN_MODE`/`CLIMATIZE_URL`
> config, the "Invest in Mojave" nav and hero CTAs, and the footer securities disclosure) was
> removed on 2026-06-14 when Mojave secured funding outside Reg CF. Do not re-add it here.
> The standalone `/mojave` page was removed on 2026-06-14; locations now link to their microsites.

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
  rangeway-pages/ rangeway-preview/
```
Then re-apply the preview-only differences listed above onto the freshly-synced files,
normalize any stale domains, `npm run build`, and push. Rollback: `git reset --hard prerefresh-<sha>`.

## TLS / DNS
- HTTPS via Let's Encrypt (certbot on the VPS) — auto-renews.
- DNS at Cloudflare, DNS-only: A record `preview.rangeway.co` → `72.60.71.39`.

## Infra notes
- Server path: `/var/www/rangeway-preview/`. No CI secrets needed: the publish step uses
  the default `GITHUB_TOKEN`, and the VPS pulls anonymously (public repo).
- GitHub Pages disabled. VPS is the only host.
