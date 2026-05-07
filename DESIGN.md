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
  display:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3.6rem, 8vw, 6.2rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.45rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  subtitle:
    fontFamily: "Raleway, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  body-lg:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.28rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  eyebrow:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "0.22em"
  caption:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
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
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.hearth-amber-lite}"
    textColor: "{colors.stovepipe-charcoal}"
  button-dark:
    backgroundColor: "{colors.stovepipe-charcoal}"
    textColor: "{colors.paper-white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "52px"
  button-ghost:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.paper-white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "52px"
  button-outline:
    backgroundColor: "{colors.adobe-cream}"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.stovepipe-charcoal}"
    textColor: "{colors.adobe-cream}"
  format-card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "26px 28px 28px"
  nav-pill:
    backgroundColor: "{colors.blackpine-ink}"
    textColor: "{colors.paper-white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "10px 14px 10px 20px"
    height: "64px"
  eyebrow-tag:
    backgroundColor: "{colors.adobe-cream}"
    textColor: "{colors.hearth-amber}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "0"
  hero-pill:
    backgroundColor: "{colors.hearth-amber}"
    textColor: "{colors.hearth-amber-lite}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "7px 14px 7px 12px"
  contact-input:
    backgroundColor: "{colors.adobe-cream}"
    textColor: "{colors.stovepipe-charcoal}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Design System: Rangeway

## 1. Overview

**Creative North Star: "The High Desert Lodge."**

Rangeway's visual system is the lobby of a quiet hospitality property at dusk. Warm amber light pools across cream plaster walls, timber and stone do the structural work, and the hardware (charging, kilowatts, equipment) is present but recessed. The system speaks in the voice of a senior hotelier, not a startup founder: plainspoken, declarative, generous with space. Every page treats the stop as the product, the charger as a consequence.

Color is restrained on the surface and committed at the accents. **Hearth Amber** (`#F4A855`) is the only saturated voice in the palette and earns its place by appearing rarely: the eyebrow rule above section titles, the hero pill, the primary CTA, the focus ring, the moment of emphasis inside a quote. Cream (`#F5F1EB`) and Charcoal (`#2D2D2D`) carry the rest. Both light and dark surfaces are first-class: dark sections feel like the lobby after sundown, lit by amber radial washes; light sections feel like the same room at mid-morning.

Type is the editorial spine. **Raleway** at display weight (`-0.05em` letter-spacing, `0.95` line-height) carries the architecture; **Source Sans 3** at `1.75` line-height carries the prose. The eyebrow is a load-bearing element, not a decoration: a hairline rule, then `0.22em` tracked uppercase warm text, then the headline. It's the system's signature unit of pacing, and it appears on nearly every section.

This system explicitly rejects the four anti-references in [PRODUCT.md](PRODUCT.md): Tesla-Supercharger utility cold, generic SaaS-cream landing-page reflex, REI outdoor-gear green-and-brown, and ultra-luxe champagne-and-marble distance. The shared sin across all four is feeling abstract or category-coded. Rangeway is specific to itself.

**Key Characteristics:**
- **Single-accent palette.** Hearth Amber on cream and charcoal. No secondary, no tertiary.
- **Editorial pacing.** Eyebrow + headline + lede, repeated as the primary section opener.
- **Pill geometry on interaction, soft generous radii on containers.** Buttons and tags are pills (`999px`); cards are `32px`.
- **Both schemes first-class.** Light is the day surface, dark is the evening surface. Neither is a fallback.
- **Long, soft, ambient shadows** that read as light pooling, not as UI elevation.
- **Backdrop blur reserved for floating chrome** (nav, captions, pills over imagery), never decorative on flat sections.
- **No statistics, no logo strips, no hero-metric template.** Quiet confidence over hype.

## 2. Colors: The High Desert Palette

A restrained four-color foundation: one warm accent, two neutrals (light and dark), one secondary natural. Saturation is low across the system and concentrated in a single hue.

### Primary
- **Hearth Amber** (`#F4A855`): the brand's voice. Used for the eyebrow rule and uppercase eyebrow text, the primary button gradient (paired with `#F7C27A` Lantern Glow at the highlight), focus rings, hover states, the hero status pill, and the warm radial wash that lights every section. Always paired with a darker companion (`#E8923A`) when a gradient is used.
- **Deep Hearth Ember** (`#E8923A`): the darker amber. Used for hover-state companion in the primary gradient, eyebrow text on cream cards (where AA contrast on `#F5F1EB` requires it), and `<em>` inside large pull-quotes.
- **Lantern Glow** (`#F7C27A`): the lighter amber. Hero pill text on dark imagery, primary button gradient highlight, soft accents over deep-charcoal surfaces.

### Secondary (used sparingly)
- **Piñon Sage** (`#4A5D52`): the only non-amber chromatic color, defined but used quietly. Reserved for moments where a second hue is necessary (illustrative chrome, secondary tags). It must never compete with Hearth Amber for attention.

### Neutral (Cream family, light surfaces)
- **Adobe Cream** (`#F5F1EB`): the principal warm surface. Section background for `.section-cream`, the daytime body wash, eyebrow rule cards.
- **Drift Cream** (`#FBF7F1`): the page top. Lighter than Adobe; appears at the start of the radial-gradient page background and in card surfaces that need to lift slightly off section cream.
- **Adobe Cream Dim** (`#ECE6DC`): the intermediate cream. Mid-page gradient stop and section divisions where two cream surfaces meet.

### Neutral (Charcoal family, dark surfaces)
- **Stovepipe Charcoal** (`#2D2D2D`): the principal dark text color and the dark-button surface.
- **Blackpine Ink** (`#171514`): the deepest surface. Footer, hero behind imagery, `.section-dark` floor. Always carries an amber radial wash to keep it from feeling cold.

### Neutral (Functional grays, text + borders)
- **Ash 600** (`#666666`): muted body text.
- **Ash 400** (`#999999`): tertiary captions, placeholders.
- **Ash 200** (`#E5E5E5`): hairlines on light surfaces (paired with cream).
- **Ash 100** (`#F8F7F5`): rarely-used near-white surface for raised inputs.

Borders are not gray. They are tinted rgba: `rgba(45, 45, 45, 0.08)` on light, `rgba(255, 255, 255, 0.08)` on dark. Hairlines stay tied to the dominant text color rather than introducing a third neutral.

### Named Rules

**The Single Voice Rule.** Hearth Amber is the only saturated color on any given screen. It carries roughly 5–10% of surface area and never competes with itself across sections. If two sections in sequence both need amber emphasis, the second one yields.

**The Tinted Neutral Rule.** No `#000` and no `#FFF` as text or surface. Both ends of the value scale are warm-tinted: `Blackpine Ink` (`#171514`) at the floor, `Drift Cream` (`#FBF7F1`) at the ceiling. The page itself uses a radial-gradient wash so even the "background" is never a flat neutral.

**The Lit Surface Rule.** Every dark surface in this system must carry a warm radial wash (e.g. `radial-gradient(circle at top left, rgba(244, 168, 85, 0.18), transparent 34%)`). Charcoal alone reads as utility cold; charcoal with amber light reads as a hospitality lobby after sundown.

## 3. Typography

**Display Font:** Raleway (system-ui fallback)
**Body Font:** Source Sans 3 (system-ui fallback)
**Label/Mono Font:** none — labels share the body family, distinguished by tracking and case.

**Character:** Raleway is geometric but warm at its high weights, with a slight humanist flex at the terminals. It carries scale beautifully (the display step uses `-0.05em` tracking and `0.95` line-height to compress the headline into a sculptural block). Source Sans 3 below it is unfussy, slightly condensed, with a tall x-height that survives at small captions. The pairing reads as editorial without ever tipping into magazine-pastiche.

### Hierarchy

- **Display** (Raleway 700, `clamp(3.6rem, 8vw, 6.2rem)`, `0.95` line-height, `-0.05em` letter-spacing): hero headline only. `text-wrap: balance`. Always at most two lines, broken at a meaningful caesura ("Travel Farther, / Stop Better.").
- **Headline** (Raleway 700, `clamp(2.6rem, 5vw, 4rem)`, `1.02` line-height, `-0.04em`): page-level H1 outside the hero. Used on internal pages.
- **Title** (Raleway 700, `clamp(2.2rem, 4vw, 3.45rem)`, `1.02` line-height, `-0.04em`): section openers (H2). Maximum width ~22ch on pull quotes.
- **Subtitle** (Raleway 700, `clamp(1.6rem, 3vw, 2.2rem)`, `1.25` line-height, `-0.03em`): subsection or card-level (H3).
- **Body** (Source Sans 3 400, `1.08rem`, `1.75` line-height, `0` tracking): default prose. Maximum line length ~52ch in long-form passages, ~65ch where text fills a column.
- **Body Large** (Source Sans 3 400, `1.28rem`, `1.75` line-height): leding paragraphs and important first paragraphs. One step up from body for emphasis without bolding.
- **Eyebrow** (Source Sans 3 700, `0.78rem`, `0.22em` tracking, uppercase, Hearth Amber): the section opener label. Always paired with a leading 38px hairline rule (`.eyebrow::before`). Used at the top of nearly every section.
- **Caption** (Source Sans 3 400, `0.86rem`, `1.55` line-height): image captions, footer fine print, secondary metadata.

### Named Rules

**The Eyebrow Rule.** Section openers begin with the eyebrow unit: a 38px hairline rule, then the eyebrow text in tracked uppercase Hearth Amber, then the headline. This sequence is the most-repeated unit in the system. Skipping it makes a section feel orphaned. Doubling it (an eyebrow inside a card inside an eyebrow-led section) makes the page feel cluttered.

**The Display Tracking Rule.** Headlines at H1/H2 size always use negative letter-spacing in the `-0.04em` to `-0.05em` range. Body and small text always use `0`. Never apply heading tracking to body sizes; never let display sizes default to `normal`.

**The Italic Pull Rule.** Inside a Title-sized pull quote, an `<em>` is rendered Hearth Amber Deep with `font-style: normal` (not italic). The color emphasis replaces italics; mixing both reads as overdesigned. See `.positioning__quote em`.

**The Pill Casing Rule.** Tracked-uppercase labels (eyebrow, captions on cards, form field labels, scroll cue) live at `0.12em–0.22em` letter-spacing, never below `0.08em`. If a label is uppercased it must be tracked.

## 4. Elevation

The system uses **soft ambient shadow plus tonal layering**, never structural lift. Shadows here are a metaphor for warm light pooling under a hanging fixture, not a UI elevation hierarchy. Cards do not "float above" the surface — they "rest on" it. The shadows are long (`50px`–`90px` y-offset blur) and low alpha (`0.10`–`0.16`), which reads as ambient light rather than a hard drop.

The hero, footer, and `.section-dark` surfaces are flat, lit instead by amber radial-gradient washes from a top-left light source. Depth on dark surfaces is conveyed by gradient and atmosphere, not shadow.

### Shadow Vocabulary

- **shadow-soft** (`0 18px 50px rgba(24, 18, 14, 0.10)`): default card resting state on light surfaces.
- **shadow** (`0 24px 80px rgba(24, 18, 14, 0.14)`): media containers, large cards, the our-story image frame.
- **shadow-warm** (`0 16px 40px rgba(244, 168, 85, 0.24)`): under primary CTA buttons. The amber shadow signals "lit from within" and matches the hearth-amber gradient surface above it.
- **shadow-dark** (`0 14px 34px rgba(23, 21, 20, 0.18)`): dark CTA on light section.
- **shadow-nav** (`0 20px 60px rgba(12, 10, 9, 0.28)`): scrolled-state nav bar; the deepest shadow in the system, used only on the nav-pill when it docks.
- **format-card hover** (`0 36px 90px rgba(0, 0, 0, 0.16)`): the hover step from `0 28px 80px rgba(0, 0, 0, 0.10)`. The card lifts `4px` and the shadow lengthens.

### Named Rules

**The Lantern Pool Rule.** Shadows are wide, soft, and long (`y-offset ≥ 14px`, `blur ≥ 34px`, `alpha ≤ 0.18` for resting states). A short, dark shadow with high alpha reads as Material Design or 2014-app drop-shadow, both of which violate the hospitality voice. If a shadow looks crisp at 100% zoom, it is too small.

**The No-Lift-On-Atmosphere Rule.** Sections with a radial-gradient atmospheric wash (hero, footer, `.section-dark`, `.positioning__wash`) do not contain shadowed cards. The atmosphere is doing the depth work. Adding a shadow on top reads as competing depth signals.

## 5. Components

### Buttons

The system has four button variants, all sharing one geometry: a `999px` pill at `52px` minimum height with `14px 26px` padding (the `.btn-outline` is the small variant at `44px / 10px 20px`). Every primary action across the site uses the warm gradient.

- **Shape:** pill (`border-radius: 999px`), `52px` minimum height, `14px 26px` padding, Source Sans 3 700 at `1rem`.
- **Primary (`.btn-warm`, `.btn-primary`):** charcoal text on a `135deg` Hearth Amber gradient (`#F4A855 → #F7C27A`). Carries `shadow-warm` to amplify the lit-from-within feel. Hover swaps to a brighter Lantern-Glow-led gradient (`#F8C987 → #E8923A`) and lifts `1px`. The amber-on-charcoal pairing keeps text contrast high while preserving warmth.
- **Dark (`.btn-dark`):** white text on a `135deg` charcoal-to-ink gradient (`#2D2D2D → #171514`) with `shadow-dark`. Used as the secondary on light surfaces where the warm primary already exists nearby.
- **Ghost (`.btn-ghost`):** white text on `rgba(255, 255, 255, 0.06)` with a `rgba(255, 255, 255, 0.26)` hairline border. Reserved for dark surfaces (hero, footer); never used on cream.
- **Outline (`.btn-outline`):** smaller (`44px / 10px 20px`), inherits color, hairline border. Hover inverts: charcoal fill, cream text. Used for tertiary actions and on form inquiry rows.

State change is exclusively `transform: translateY(-1px)` plus a color shift, transitioning over `0.2s` on the project's standard ease curve. No scale jumps.

### Arrow Link / Inline Link

- **Style:** Source Sans 3 700 at `0.92rem` with the project's heading family, paired with a 14px chevron SVG. Color inherits from context (text color in body, white on dark sections). Hover shifts to Hearth Amber Deep and the chevron translates `3px` right.
- **No underline at rest.** Underlines appear only in legal/disclosure prose where clickability cannot be implied by adjacency.

### Cards (Format Card)

- **Corner Style:** generous `32px` (`{rounded.xl}`) — the largest radius in the system, reserved for image-led cards.
- **Background:** `Paper White` (light scheme) or `surface-raised` (dark scheme). Border is the tinted rgba hairline, not gray.
- **Shadow Strategy:** `0 28px 80px rgba(0,0,0,0.10)` at rest, `0 36px 90px rgba(0,0,0,0.16)` on hover. The card lifts `-4px` on hover and the inner image scales `1.04` over `0.6s`.
- **Internal Padding:** `26px 28px 28px`. Slightly more bottom padding than top to give the description and arrow-link room to breathe above the implicit bottom edge.
- **Composition:** image at `aspect-ratio: 16 / 10` filling the top half, body below. Image carries an optional pill-tag (`Pill` overlay, charcoal `0.7` background with `8px` blur) sitting at `top-left: 18px`.

### Inputs / Form Fields

- **Style:** Source Sans 3 400 at `1rem`, `12px 14px` padding, `14px` radius (`{rounded.sm}`), Adobe Cream surface, tinted-rgba hairline border. The cream surface inside cream sections distinguishes itself by shadow and label, not by stark fill contrast.
- **Labels:** Raleway 600, `0.78rem`, tracked uppercase at `0.12em`. Always above the field, never floating, never inside.
- **Focus:** border shifts to Hearth Amber, surface flips to Paper White, and a `4px` Hearth-Amber `0.14` glow ring appears. The glow is the affordance, not a focus outline.
- **Disabled / Error:** error states haven't been built yet; when they are, follow the same focus-glow pattern using a sage or burnt-clay tint, never red.

### Navigation

The nav is a free-floating pill, not a bar. At rest it sits `18px` from the top, full-width container-padded, with a `rgba(32, 28, 26, 0.36)` translucent fill and a `24px` backdrop blur. Once scrolled past `40px` it docks: opacity rises to `0.88`, the `shadow-nav` appears, and the border softens.

- **Geometry:** `999px` pill, `64px` minimum height, `10px 14px 10px 20px` asymmetric padding (left padding extra for the brand mark).
- **Links:** Source Sans 3 500, `0.95rem`, `rgba(255, 255, 255, 0.82)`. Hover fills the link with `rgba(255, 255, 255, 0.08)` and lifts color to white. Each link is a mini pill at `999px`.
- **Brand mark:** the **PathMark** SVG (a stylized "R" path with an amber dot at the bowl junction), sized to 26px in the nav, paired with the wordmark in Raleway 700.
- **Mobile:** at `≤1180px` the link list collapses behind a hamburger toggle. The mobile menu drops as a `24px`-radius blurred panel beneath the nav pill.

### Hero Pill (Status Tag)

The signature attention pill that sits above the hero headline. A condensed translucent pill on dark imagery, used for time-sensitive announcements (currently the Climatize raise).

- **Style:** `7px 14px 7px 12px` padding, `999px` radius. Surface is `rgba(244, 168, 85, 0.14)` over an `0.45` warm border, `10px` backdrop blur, Lantern-Glow text.
- **Indicator:** a leading `8px` Hearth-Amber dot with a `4px` halo (`box-shadow: 0 0 0 4px rgba(244, 168, 85, 0.18)`).
- **Hover:** background warms to `0.22`, text brightens to white, `1px` lift. The chevron translates right.

### Eyebrow Unit (signature)

Not a component in the React/Astro sense, but the most-reused composition in the system. It is what makes a Rangeway section recognizably Rangeway.

- **Composition:** a 38px × 1px hairline rule at `currentColor`, an inline-flex gap of `10px`, then the label in Source Sans 3 700, `0.78rem`, `0.22em` tracked uppercase, Hearth Amber.
- **Variants:** `.eyebrow--plain` removes the rule (used inside cards). On dark sections (`.section-dark .eyebrow`) the text stays Hearth Amber but the rule keeps its full opacity. On light sections, the rule sits at the warm color with `0.8` opacity.

### Image Caption

The pill caption that overlays photography (e.g. "Driver's Lounge · Basecamp" on the our-story image).

- **Style:** `7px 11px` padding, `999px` radius, `rgba(24, 21, 20, 0.7)` surface with `8px` blur, white text, `1px` `rgba(255, 255, 255, 0.14)` border, Raleway 600 at `0.72rem`, `0.08em` tracked uppercase.
- **Placement:** absolute `18px` from the bottom-left of the media. On mobile, drops to `12px`.

## 6. Do's and Don'ts

### Do:

- **Do** open every section with the Eyebrow Unit (38px hairline rule + tracked-uppercase Hearth Amber label) before the headline. This is the system's signature unit of pacing.
- **Do** keep Hearth Amber to roughly 5–10% of any screen. Eyebrows, focus rings, primary CTA, hero pill, the rare `<em>` inside a pull quote.
- **Do** use the warm gradient (`#F4A855 → #F7C27A`) only on primary CTAs, never as a section background. The gradient earns its weight by being rare.
- **Do** light every dark surface with a top-left amber radial wash (`rgba(244, 168, 85, 0.18)` at `34%` falloff). Cold charcoal alone reads as utility infrastructure, which is the brand's first anti-reference.
- **Do** use long, soft, low-alpha shadows (`y-offset ≥ 14px`, `blur ≥ 34px`, `alpha ≤ 0.18`). Shadows should read as ambient lantern light, not as UI lift.
- **Do** keep body line length at `52ch–65ch`. Wider runs collapse the editorial pacing.
- **Do** treat both light and dark schemes as first-class surfaces. Test every component in both. Both should feel like the same lobby, at different hours.
- **Do** caption photography with the pill caption (`Driver's Lounge · Basecamp`). Specific real-place names in the chrome reinforce the "specific over generic" principle from PRODUCT.md.
- **Do** use `text-wrap: balance` on every headline and pull quote. The display sizes break unforgivably without it.

### Don't:

- **Don't** use raw `#000` or `#FFF` for any surface or text. Use `Blackpine Ink` (`#171514`) and `Drift Cream` (`#FBF7F1`). Untinted neutrals are the SaaS-cream landing-page reflex.
- **Don't** use `border-left` or `border-right` greater than `1px` as a colored stripe on cards, callouts, or list items. Use full borders, background tints, or leading numbers instead.
- **Don't** apply `background-clip: text` to gradients. Headlines are solid color (text or paper-white). Emphasis is weight, scale, or warm `<em>`.
- **Don't** introduce a second saturated color. Piñon Sage exists in tokens but must never compete with Hearth Amber for the eye. No teal, no navy, no signal-red, no indigo.
- **Don't** build a hero-metric section ("100+ Locations / 350kW / 24/7"). PRODUCT.md prohibits statistics. The hero earns belief through imagery and copy, not numbers.
- **Don't** build "trusted by" logo strips, three-icon feature grids with circular icon backgrounds, gradient-text marketing headlines, or purple-and-mint SaaS palettes. Every one of these belongs to the generic-startup-landing anti-reference.
- **Don't** use earthy-green-and-warm-brown REI palettes. Rangeway lives outdoors but is hospitality, not gear. Sage stays muted; brown is replaced by warm cream.
- **Don't** use champagne-on-marble luxury cues (gold serif Didone, taupe-on-ivory spacing, all-caps small-tracked labels framed in thin gold rules). That's the ultra-luxe anti-reference; Rangeway is warm and present, not aloof.
- **Don't** use em dashes or `--` in any rendered copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** start sentences with "And." Don't use sentence fragments. Don't use hashtags. Don't use statistics. Don't use "stations" or "units" or "rooms" or "cabins". Formats are **Trailhead**, **Waystation**, **Basecamp**.
- **Don't** add CSS layout-property animations (`width`, `height`, `padding`). Animate `transform` and `opacity`. Use `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` or the standard ease, never bounce or elastic.
- **Don't** stack two sections with the same background. Adobe Cream → Drift Cream gradient page wash → cream section → cream-dim section is fine; cream → cream → cream reads as undifferentiated. Vary the surface.
- **Don't** put a shadow on a card inside an atmospheric (radial-wash) section. The atmosphere is the depth signal; competing shadows muddy it.
- **Don't** rely on emoji for personality, lowercase-friend tone for warmth, or quirky microcopy for delight. Warmth lives in materials, light, and place. Confidence carries the voice.
