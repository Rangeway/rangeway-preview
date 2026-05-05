# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Overview

Official Rangeway website at **rangewayev.com**, deployed via GitHub Pages as a static HTML/CSS/JS site (no build step, no Jekyll).

## Architecture

Plain static site served directly by GitHub Pages. No build tools, no static site generator, no bundler.

### Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main single-page site with all sections |
| `investors.html` | Investor relations page |
| `css/styles.css` | All site styles |
| `js/main.js` | Navigation, mobile menu, scroll animations |
| `images/` | Site images (JPG, PNG, SVG) |
| `CNAME` | Custom domain config (`rangewayev.com`) |
| `robots.txt` | Search engine directives |
| `sitemap.xml` | Sitemap for SEO |

### Site Sections (index.html)

1. Navigation (sticky, scrolled state, mobile slide-over menu)
2. Hero (eyebrow, headline, subtitle, CTA, scroll indicator)
3. About / Why Rangeway (banner image, stats)
4. Indoor Comfort Guarantee (feature cards with SVG icons)
5. The Network: Three Formats (Basecamp, Waystation, Trailhead cards)
6. The Experience (4-step numbered grid)
7. Pathfinder Rewards (4 loyalty tiers)
8. Our Founder (bio + blockquote)
9. Locations / Coming Soon (background image, newsletter CTA)
10. Contact (info + form via FormSubmit.co)
11. Footer (brand, links, copyright)

### Investors Page (investors.html)

Standalone page with its own page-specific styles in a `<style>` block. Shares `css/styles.css` and `js/main.js` with the main site. Sections: Hero, Opportunity, Investor Hub CTA, Investment Thesis, Expansion Plan, CTA Banner, Contact Card, Footer.

## Brand Guidelines (MUST FOLLOW)

### Colors
```css
--charcoal: #2d2d2d;   /* Text, dark backgrounds */
--warm: #f4a855;        /* Primary — CTAs, accents, badges */
--warm-dark: #e8923a;   /* Hover/active state for warm */
--cream: #f5f1eb;       /* Light section backgrounds */
--sage: #4a5d52;        /* Secondary accent (rarely used) */
--white: #ffffff;
--gray-100: #f8f7f5;    /* Subtle background variation */
--gray-200: #e5e5e5;    /* Borders, dividers */
--gray-400: #999999;    /* Placeholder text */
--gray-600: #666666;    /* Secondary text */
```

### Layout Tokens
```css
--nav-height: 80px;
--container-max: 1200px;
--section-padding: 120px;
```

### Typography
- **Raleway** (400, 600, 700, 800) — Headlines, wordmark, card titles
- **Source Sans 3** (300, 400, 600, 700) — Body copy, UI text
- Loaded via Google Fonts

### Voice & Language
**USE:** "Driver's Lounge", "destination experiences", "thoughtful amenities", "premium hospitality", "indoor comfort guarantee", "locations"

**AVOID:** Technical jargon (350kW, NOC), utility/infrastructure language, "stations" (use "locations"), "discounts", em dashes, overly casual tone

### Brand Pillars
1. Luxury Hospitality — Premium, refined experience
2. Indoor Comfort — Climate-controlled sanctuary at every location
3. Reliability — Chargers that work when you need them
4. Scenic Routes — Breathtaking destinations, curated journeys

## Key Implementation Details

### JavaScript
- Navigation scroll effect (`.scrolled` class at 40px)
- Mobile menu toggle (`.active` class on toggle + menu)
- Scroll animations via IntersectionObserver (`[data-animate]` → `.visible`)
- Staggered animation delays for sibling elements
- Contact form handled by FormSubmit.co (no JS needed)

### Mobile Behavior
- Navigation: Slide-over menu at mobile breakpoints
- Touch targets: Minimum 48px
- Images and grids stack vertically

### Animations
- `[data-animate]` elements fade/slide in when they enter the viewport
- Stagger delays (100ms per sibling)
- IntersectionObserver with 0.15 threshold

## External Links

- Newsletter signup: https://buttondown.com/rangeway
- Pathfinder Rewards: https://pathfinderrewards.com
- Newsroom: https://newsroom.rangeway.energy
- Contact form: FormSubmit.co → hello@rangewayev.com
- Investor inquiries: investors@rangewayev.com

## Deployment

**Production:** rangewayev.com

GitHub Pages deploys automatically on push to `main`. No build step required.

**IMPORTANT:** The `CNAME` file must contain `rangewayev.com` — do not change this or the site will 404.

### Local Preview

Any static file server works. Quick options:
```bash
# Python
python3 -m http.server 8000

# Node (npx, no install)
npx serve .
```
Then open `http://localhost:8000`.
