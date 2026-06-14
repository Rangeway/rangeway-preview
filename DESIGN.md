---
name: Rangeway
description: America's first hospitality-driven EV charging network.
colors:
  hearth-amber: "#F4A855"
  hearth-amber-deep: "#E8923A"
  hearth-amber-lite: "#F7C27A"
  stovepipe-charcoal: "#2D2D2D"
  blackpine-ink: "#171514"
  adobe-cream: "#F5F1EB"
  adobe-cream-dim: "#ECE6DC"
  drift-cream: "#FBF7F1"
  pinon-sage: "#4A5D52"
  paper-white: "#FFFFFF"
  ash-100: "#F8F7F5"
  ash-200: "#E5E5E5"
  ash-400: "#999999"
  ash-600: "#666666"
typography:
  mega:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3.4rem, 11vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  display:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3rem, 7.5vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.3rem, 4.6vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  subtitle:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  body-lg:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.26rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  kicker:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "0.22em"
  caption:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "0.16em"
rounded:
  pill: "999px"
  xl: "32px"
  lg: "24px"
  md: "18px"
  sm: "14px"
  xs: "4px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
  s10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.hearth-amber}"
    textColor: "{colors.blackpine-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.hearth-amber-lite}"
    textColor: "{colors.blackpine-ink}"
  button-dark:
    backgroundColor: "{colors.blackpine-ink}"
    textColor: "{colors.drift-cream}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.drift-cream}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "44px"
  masthead:
    backgroundColor: "{colors.adobe-cream}"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.caption}"
    rounded: "0"
    height: "76px"
  masthead-cta:
    backgroundColor: "{colors.hearth-amber}"
    textColor: "{colors.blackpine-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "42px"
  kicker-unit:
    backgroundColor: "transparent"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.kicker}"
    rounded: "0"
    padding: "16px 0 0"
  figure-plate:
    backgroundColor: "transparent"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "0"
  contact-input:
    backgroundColor: "transparent"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "10px 2px 12px"
---

# Design System: Rangeway "Folio"

## 1. Overview

**Creative North Star: "The High Desert Folio."**

The Rangeway site is a printed hospitality brand book brought to the web. Pages read like
chapters in a development prospectus for a premium property: hairline rules, numbered
sections, captioned photographic plates, oversized Raleway display type, and generous cream
negative space. At the emotional beats (the cover, the Indoor Comfort
Guarantee, the closing chapters) the folio goes cinematic: full-bleed photography on
Blackpine Ink, type set large over scrimmed imagery.

The voice is unchanged: a senior hotelier, not a startup founder. The system still rejects
the four anti-references in [PRODUCT.md](PRODUCT.md): Tesla-utility cold, SaaS-cream
landing-page reflex, REI green-and-brown, and champagne-and-marble luxe.

**Key Characteristics:**
- **Editorial backbone.** Every chapter opens with the Kicker Unit: a full-width hairline
  rule with a tracked-uppercase label beneath it.
- **Asymmetric grids.** Headlines sit in a wide left column; ledes, body copy, and CTAs sit
  in a narrower right column, aligned to the headline's baseline. Nothing is centered.
- **Photography as plates.** Images are square-cornered (`4px`), and carry a hairline-ruled
  caption row beneath: an index in the accent color, a place label on the right.
- **Light/dark rhythm.** The page base is a single flat Adobe Cream; structure comes from
  hairlines and ink bands, not alternating cream/white stripes. Dark bands are flat
  Blackpine Ink or full-bleed scrimmed photography.
- **Two accents, one per surface.** Hearth Amber accents dark surfaces and buttons.
  Piñon Sage accents small text on light surfaces (see The Accent Contrast Rule).
- **No numbering.** Sections, list rows, and plates are unnumbered; the hairline rules and
  tracked labels carry the structure. (Numeric 01/02 indexing was tried and removed: it
  reads as template-generated.)

## 2. Colors

The palette is unchanged from the previous system: Hearth Amber, the charcoal/ink neutrals,
the cream family, Piñon Sage, and the ash grays. What changed is the assignment.

### The Accent Contrast Rule (supersedes prior amber-on-cream guidance)

Measured ratios: Hearth Amber Deep (`#E8923A`) on Adobe Cream is **2.17:1**, which fails
WCAG AA at every size. Piñon Sage (`#4A5D52`) on Adobe Cream is **6.27:1** (passes AA for
normal text). Hearth Amber (`#F4A855`) on Blackpine Ink is **9.17:1** (passes), and ink on
amber (buttons) is the same 9.17:1.

Therefore:
- **On light surfaces**, small accent text (kicker indexes, taglines, roles, plate caption
  indexes, accent links, `<em>` inside pull quotes) uses **Piñon Sage** via the
  `--accent-on-light` token.
- **On dark surfaces**, the same elements use **Hearth Amber** (the `.band-dark` overrides
  and the dark `prefers-color-scheme` flip of `--accent-on-light`).
- **Amber on light surfaces is reserved for non-text use**: the primary button surface,
  focus rings, and decorative marks.

### Surfaces

- **Adobe Cream** (`#F5F1EB`): the single flat page base (`--surface-page`).
- **Adobe Cream Dim** (`#ECE6DC`): `--surface-alt`, used sparingly for alternate panels.
- **Drift Cream** (`#FBF7F1`): `--surface-raised` and text-on-ink (`--fg-on-dark-*`).
- **Blackpine Ink** (`#171514`): dark bands, masthead menu, footer, photographic scrims.
- Borders are tinted rgba hairlines: `rgba(45,45,45,0.14)` (light), `rgba(45,45,45,0.32)`
  (strong, used for kicker rules), `rgba(251,247,241,0.16)` on ink.

Dark `prefers-color-scheme` remains first-class: surfaces flip via the semantic tokens.

## 3. Typography

**Display Font:** Raleway. **Body Font:** Source Sans 3.

The folio pushes Raleway harder than the previous system: weight **800** at display and
headline sizes, and a new **mega** step (`clamp(3.4rem, 11vw, 9.5rem)`) used twice only:
the homepage cover headline and the footer wordmark. Labels (kicker, captions, nav links)
moved from Source Sans 3 to **Raleway 600–700 tracked uppercase**, which gives the chrome a
drafted, printed feel.

### Hierarchy

- **Mega** (Raleway 800): homepage cover headline, footer wordmark. Stacked lines; one line
  may take the accent color (e.g. "Stop Better." in Hearth Amber over the ink scrim).
- **Display** (Raleway 800, `clamp(3rem, 7.5vw, 7rem)`): chapter-opener H1 on interior pages.
- **Headline / Title** (Raleway 800): section H2s, max-width `12–16ch`, set in the wide
  column of the asymmetric grid.
- **Pull quote** (`.pullquote`, Raleway 800, `clamp(1.9rem, 4vw, 3.4rem)`): thesis moments.
  `<em>` renders in the accent color with normal style, never italic.
- **Body / Body Large** (Source Sans 3 400): unchanged. Line length `42–56ch` in columns.
- **Kicker** (Raleway 700, `0.76rem`, `0.22em` tracked uppercase): the chapter label.
- **Caption** (Raleway 600, `0.72rem`, `0.16em` tracked uppercase): plate captions, nav
  links, footer column headers, micro labels.

## 4. Layout Grammar (new in Folio)

### The Kicker Unit (signature)

```html
<div class="kicker">
  <span class="kicker__label">The Network</span>
</div>
```

A full-width `1px` rule (`--color-border-strong`), `16px` of air, then the label in tracked
uppercase. Every major section opens with one. A two-slot variant pairs a short accent word
on the left (`.kicker__index`, accent color) with the label on the right, e.g.
"Rangeway / America's First…" on the cover. Numeric indexes are banned (they read as
template-generated).

### The Asymmetric Section Head

`.section-head`: a `7fr / 4fr` grid, headline left, lede bottom-right aligned to the
baseline (`align-items: end`). Collapses to one column under `900px`. Most sections follow
the same two-column geometry for their body content (`7/4`, `6/5`, or `5/6` depending on
text weight).

### Figure Plates

```html
<figure class="fig">
  <div class="fig__frame"><img ... /></div>
  <figcaption class="fig__caption">
    <strong>Waystation</strong><span>Joshua Tree</span>
  </figcaption>
</figure>
```

Square-cornered (`4px`) frames; caption row below with a top hairline. The optional
`<strong>` slot is a word label in the accent color (a format name, "Interior", "Render"),
never a number. Real place names only.

### Index Rows

`.index-row`: the folio's replacement for card grids. A `5fr / 6fr` grid row
(heading / body) with hairline tops, used for amenities, thesis points, values, waypoints,
and pillars. Rows with a meaningful word label ("Phase I") add an `.index-row__num` span,
which switches the grid to `1fr / 5fr / 6fr`. The container takes a closing
`border-bottom`.

### Staggered Entry Grid

Format entries (homepage Network section, /network) sit in a two-column grid where even
entries drop by `clamp(40px, 6vw, 88px)` at desktop, like plates pasted on facing pages.

### Cinematic Bands

`.band-dark` is flat ink. The cinematic variants (`Hero`, `ComfortGuarantee`,
chapter openers) layer a full-bleed photograph with an ink scrim strong
enough to hold `--fg-on-dark-2` body text at AA wherever text actually sits. Scrims are
ink-tinted linear gradients, never pure black.

## 5. Components

### Masthead (replaces the nav pill)

A full-width fixed bar, `76px`, hairline bottom border. Over heroes it is transparent with
cream text; once scrolled past `24px`, and on all non-hero pages, it goes solid Adobe Cream
with charcoal text. Links are Raleway tracked-uppercase micro labels with an amber hover
underline. The mobile toggle is a pill labeled "Menu"/"Close"; the menu is a full-screen
Blackpine Ink overlay with numbered, hairline-ruled, display-scale links.

### Buttons

Unchanged geometry: `999px` pills, `52px` height. The primary is now **flat Hearth Amber**
with **Blackpine Ink** text (no gradient); hover swaps to Hearth Amber Lite with a `1px`
lift. Dark, ghost, and outline variants as before. The warm shadow remains.

### Chapter Opener (PageHero)

Interior pages open with a full-bleed image (`min-height: min(78vh, 820px)`), an on-image
kicker (hairline at `rgba(251,247,241,0.42)`), a Display-sized H1 in the wide column, lede
in the right column, optional CTA slot, and a "Plate" caption strip beneath the image.

### Format Entry (replaces Format Card)

A figure plate (4:3) with caption, then name at `1.7–2.3rem` Raleway 800, sage tagline,
muted description, arrow link. No card surface, no border radius, no shadow; the hairline
caption is the frame. Hover scales the image `1.035` and warms the arrow link.

### Forms

Editorial underline fields: no boxes. Transparent surface, `1px` bottom hairline at
`--color-border-strong`, Raleway tracked-uppercase labels above. Focus thickens the rule
with the accent color. Same FormSubmit action and fields as before.

### Footer

Blackpine Ink. Top: the tagline at headline scale beside four hairline-topped link columns
(Explore / Company / Follow along / Reach us). Middle: the **wordmark signature**, the word
"Rangeway" at mega scale spanning the container between hairlines. Bottom: legal row.

## 7. Do's and Don'ts

### Do:
- **Do** open every section with the Kicker Unit. It is the system's signature pacing.
- **Do** keep the asymmetric two-column geometry; if a section wants centering, it is
  probably a kicker plus a wide-column headline instead.
- **Do** caption photography as plates with real place names.
- **Do** use sage for small accent text on cream, amber for accent text on ink, and amber
  surfaces (with ink text) for primary actions. Never amber small text on cream (2.17:1).
- **Do** collapse all motion under `prefers-reduced-motion` (the global reveal and the hero
  line stagger already do).
- **Do** use `text-wrap: balance` on headlines.

### Don't:
- **Don't** reintroduce the old grammar: centered heroes, alternating cream/white bands,
  narrow centered prose columns, rounded image cards with drop shadows, the floating nav
  pill, or the hero status pill.
- **Don't** use raw `#000`/`#FFF`; use Blackpine Ink and Drift Cream.
- **Don't** introduce hues beyond the palette. Sage is the light-surface accent, not a new
  brand color; it never appears at large scale.
- **Don't** number sections, list rows, plates, or menu items (no 01/02/03 indexes). Word
  labels ("Phase I", "Now Open") are fine; numerals read as template-generated.
- **Don't** use em dashes or `--` in rendered copy. No sentences starting with "And." No
  fragments, hashtags, or statistics. No "stations", "units", "rooms", or "cabins".
- **Don't** build hero-metric strips, logo walls, or three-icon feature grids.
- **Don't** animate layout properties; animate `transform` and `opacity` only, on the
  standard ease curves.
- **Don't** put text on photography without a scrim strong enough for AA at the exact spot
  the text sits. Check both columns of the asymmetric grid, not just the headline side.
