# Roadside Revival Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the complete Rangeway Astro site in the approved Roadside Revival system, using the official header lockups and pausing for visual approval on every page.

**Architecture:** Keep the static Astro application and its current routes. Centralize navigation, formats, projects, and experience principles in typed content data; build small shared components around that data; then migrate pages by family with a user review gate after each route. Preserve current deployment, indexing, responsive-image, form, and no-JavaScript resilience behavior.

**Tech Stack:** Astro 6, TypeScript, scoped Astro CSS, `@fontsource/raleway`, `@fontsource/source-sans-3`, Node test runner, Sharp responsive-image generation

## Global Constraints

- Preserve the routes The Network, Our Story, Team, Partners, Investors, Newsroom, and Contact.
- Use the official `rangeway-lockup-charcoal.svg` on light headers and `rangeway-lockup-white.svg` on dark, transparent, or image-backed headers.
- Use Raleway for display, navigation, buttons, labels, captions, and wayfinding.
- Use Source Sans 3 for paragraphs, forms, legal content, and sustained reading.
- Use Highway Navy `#17313E`, Rangeway Sun `#F2B64C`, Oxide Red `#993A28`, and Roadmap Cream `#F7E6C4`, adjusted only when required for WCAG 2.1 AA.
- Preserve the project order Bozeman, Mojave, St. Louis at every breakpoint.
- Do not add a sticker, seal, or floating badge to the hero.
- Preserve current copy rules and the ChargeVia boundary. Rangeway must not solicit site hosts.
- Keep final image selection and crop approval inside each page review gate.
- Remove automatic OS dark-mode recoloring. Use art-directed dark sections so the approved palette remains consistent.
- Do not deploy to production until local desktop and mobile review is approved.

---

## File Structure

### New files

- `src/data/site-content.ts`: typed shared navigation, project, format, and experience-principle data.
- `src/components/BrandLockup.astro`: accessible charcoal/white header lockup switch.
- `src/components/ArrivalStrip.astro`: Arrive, Recharge, Continue journey strip.
- `src/components/ExperienceCollage.astro`: image-led homepage experience block.
- `src/components/FieldGuideGrid.astro`: image-backed hospitality principles.
- `src/components/ProjectStrip.astro`: ordered project status and links.
- `public/images/logo/rangeway-lockup-charcoal.svg`: approved light-surface lockup.
- `public/images/logo/rangeway-lockup-white.svg`: approved dark-surface lockup.

### Shared files to modify

- `src/styles/global.css`: Roadside Revival tokens, typography, controls, surfaces, motion, and responsive primitives.
- `src/layouts/BaseLayout.astro`: keep fonts, metadata, skip link, reveal resilience, and art-directed color scheme.
- `src/components/Nav.astro`: official lockups, current route set, responsive menu, and focus containment.
- `src/components/Footer.astro`: Roadside Revival footer while preserving links and legal content.
- `src/components/PageHero.astro`: family-aware interior hero variants.
- `src/components/FormatCard.astro`: image-forward format cards.
- `src/components/FormatNav.astro`: shared Explore-page navigation.
- `src/components/FormatPage.astro`: shared Waystation/Basecamp framework.
- `src/components/ContactForm.astro`: palette and form-state styling without changing submission behavior.
- `test/site-regressions.test.mjs`: design-system, lockup, order, route, accessibility, and resilience regressions.

### Page files to modify

- `src/pages/index.astro`
- `src/pages/network.astro`
- `src/pages/network/waystation.astro`
- `src/pages/network/basecamp.astro`
- `src/pages/network/summit.astro`
- `src/pages/our-story.astro`
- `src/pages/team.astro`
- `src/pages/partners.astro`
- `src/pages/commitments.astro`
- `src/pages/investors.astro`
- `src/pages/contact.astro`
- `src/pages/contact/thanks.astro`
- `src/pages/privacy.astro`
- `src/pages/terms.astro`
- `src/pages/404.astro`

---

### Task 1: Lock Shared Content and Roadside Revival Tokens

**Files:**
- Create: `src/data/site-content.ts`
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Produces: `NAV_LINKS`, `EXPERIENCE_PRINCIPLES`, `FORMATS`, and `PROJECTS` typed readonly arrays.
- Produces: global tokens `--color-highway`, `--color-sun`, `--color-oxide`, `--color-roadmap`, `--font-heading`, and `--font-body`.

- [ ] **Step 1: Add failing tests for shared order, typography, palette, and art-directed color**

```js
test("Roadside Revival tokens and typography are explicit", async () => {
  const [layout, styles] = await Promise.all([
    readSource("src/layouts/BaseLayout.astro"),
    readSource("src/styles/global.css")
  ]);

  assert.match(layout, /@fontsource\/raleway\/800\.css/);
  assert.match(layout, /@fontsource\/source-sans-3\/400\.css/);
  assert.match(styles, /--color-highway:\s*#17313e/i);
  assert.match(styles, /--color-sun:\s*#f2b64c/i);
  assert.match(styles, /--color-oxide:\s*#993a28/i);
  assert.match(styles, /--color-roadmap:\s*#f7e6c4/i);
  assert.doesNotMatch(styles, /@media\s*\(prefers-color-scheme:\s*dark\)/);
});

test("shared project content preserves the approved order", async () => {
  const content = await readSource("src/data/site-content.ts");
  assert.ok(content.indexOf('name: "Bozeman"') < content.indexOf('name: "Mojave"'));
  assert.ok(content.indexOf('name: "Mojave"') < content.indexOf('name: "St. Louis"'));
});
```

- [ ] **Step 2: Run the new tests and verify failure**

Run: `npm test`

Expected: FAIL because `src/data/site-content.ts` and the Roadside Revival tokens do not exist.

- [ ] **Step 3: Add typed shared content**

```ts
import { LINKS } from "../config";

export const NAV_LINKS = [
  { href: "/network", label: "The Network" },
  { href: "/our-story", label: "Our Story" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: LINKS.newsroom, label: "Newsroom", external: true },
  { href: "/contact", label: "Contact" }
] as const;

export const EXPERIENCE_PRINCIPLES = [
  { title: "Good light", body: "Interiors that feel calm, warm, and considered." },
  { title: "Real comfort", body: "Climate control, generous seating, restrooms, and Wi-Fi." },
  { title: "Room to settle", body: "A pause that restores the person making the trip." },
  { title: "Easy momentum", body: "A confident experience from arrival to departure." }
] as const;

export const FORMATS = [
  { name: "Waystation", href: "/network/waystation", tagline: "Streamlined comfort" },
  { name: "Basecamp", href: "/network/basecamp", tagline: "The full-service destination" },
  { name: "Summit", href: "/network/summit", tagline: "Where the road meets rest" }
] as const;

export const PROJECTS = [
  { name: "Bozeman", status: "Raising capital", href: LINKS.bozemanMicrosite },
  { name: "Mojave", status: "Breaking ground", href: LINKS.mojaveMicrosite },
  { name: "St. Louis", status: "In development", href: LINKS.stLouisPress }
] as const;
```

- [ ] **Step 4: Replace global semantic tokens and remove automatic dark-mode overrides**

```css
:root {
  --color-highway: #17313e;
  --color-sun: #f2b64c;
  --color-oxide: #993a28;
  --color-roadmap: #f7e6c4;
  --color-paper: #fffaf0;
  --color-text: var(--color-highway);
  --color-text-muted: #4f5f65;
  --color-border: rgb(23 49 62 / 20%);
  --font-heading: "Raleway", system-ui, sans-serif;
  --font-body: "Source Sans 3", system-ui, sans-serif;
  color-scheme: light;
}
```

Keep the existing reset, focus visibility, containers, reduced-motion handling, and no-JavaScript reveal behavior. Delete the `prefers-color-scheme: dark` token block so dark surfaces are controlled by component classes.

- [ ] **Step 5: Run unit, type, and build checks**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0.

- [ ] **Step 6: Commit the foundation**

```bash
git add src/data/site-content.ts src/styles/global.css src/layouts/BaseLayout.astro test/site-regressions.test.mjs
git commit -m "Build Roadside Revival foundation"
```

---

### Task 2: Install Official Lockups and Rebuild Global Navigation

**Files:**
- Create: `public/images/logo/rangeway-lockup-charcoal.svg`
- Create: `public/images/logo/rangeway-lockup-white.svg`
- Create: `src/components/BrandLockup.astro`
- Modify: `src/components/Nav.astro`
- Modify: `src/components/Footer.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: `NAV_LINKS` from `src/data/site-content.ts`.
- Produces: `<BrandLockup tone="charcoal" | "white" />` with accessible home-link usage in Nav.

- [ ] **Step 1: Add failing lockup and route tests**

```js
test("the header uses both official Rangeway lockups", async () => {
  const [brand, nav] = await Promise.all([
    readSource("src/components/BrandLockup.astro"),
    readSource("src/components/Nav.astro")
  ]);

  assert.match(brand, /rangeway-lockup-charcoal\.svg/);
  assert.match(brand, /rangeway-lockup-white\.svg/);
  assert.match(nav, /aria-label="Rangeway home"/);
  assert.doesNotMatch(nav, /masthead__wordmark/);
  assert.equal(existsSync(path.join(root, "public/images/logo/rangeway-lockup-charcoal.svg")), true);
  assert.equal(existsSync(path.join(root, "public/images/logo/rangeway-lockup-white.svg")), true);
});

test("the current primary navigation remains intact", async () => {
  const content = await readSource("src/data/site-content.ts");
  for (const label of ["The Network", "Our Story", "Team", "Partners", "Investors", "Newsroom", "Contact"]) {
    assert.match(content, new RegExp(`label: "${label}"`));
  }
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`

Expected: FAIL because the lockup component and public assets do not exist.

- [ ] **Step 3: Copy the approved SVG sources without editing their geometry**

```bash
mkdir -p public/images/logo
cp "/Users/zakwinnick/Library/CloudStorage/SynologyDrive-Vandenberg/Rangeway/Logos/Logo 2.0/rangeway-logo-assets/lockup/rangeway-lockup-charcoal.svg" public/images/logo/rangeway-lockup-charcoal.svg
cp "/Users/zakwinnick/Library/CloudStorage/SynologyDrive-Vandenberg/Rangeway/Logos/Logo 2.0/rangeway-logo-assets/lockup/rangeway-lockup-white.svg" public/images/logo/rangeway-lockup-white.svg
```

Expected: both files retain `viewBox="0 0 240 56"` and the amber dot `#f4a855`.

- [ ] **Step 4: Create the lockup component**

```astro
---
interface Props {
  tone: "charcoal" | "white";
  class?: string;
}

const { tone, class: className } = Astro.props;
const src = `/images/logo/rangeway-lockup-${tone}.svg`;
---

<img class={className} src={src} width="240" height="56" alt="Rangeway" decoding="async" />
```

- [ ] **Step 5: Rebuild Nav around `NAV_LINKS` and lockup contrast states**

Use `<BrandLockup tone="white" class="masthead__lockup masthead__lockup--white" />` for transparent/dark state and the charcoal variant for light/scrolled state. Keep the existing `previouslyFocused`, `main.inert`, and `focusableSelector` menu logic unchanged.

```astro
<a class="masthead__brand" href="/" aria-label="Rangeway home">
  <BrandLockup tone="white" class="masthead__lockup masthead__lockup--white" />
  <BrandLockup tone="charcoal" class="masthead__lockup masthead__lockup--charcoal" />
</a>
```

- [ ] **Step 6: Rebuild the footer without changing destinations**

Use Roadside Revival colors and Raleway wayfinding labels. Keep Bozeman before Mojave, preserve the legal links, address, phone, email, social links, and Field Notes links.

- [ ] **Step 7: Run automated checks and inspect both header states**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0; the white lockup appears over the hero and the charcoal lockup appears after scroll and on interior pages.

- [ ] **Step 8: Commit global chrome**

```bash
git add public/images/logo src/components/BrandLockup.astro src/components/Nav.astro src/components/Footer.astro test/site-regressions.test.mjs
git commit -m "Rebuild Rangeway navigation and lockups"
```

---

### Task 3: Build Homepage Shared Components

**Files:**
- Create: `src/components/ArrivalStrip.astro`
- Create: `src/components/ExperienceCollage.astro`
- Create: `src/components/FieldGuideGrid.astro`
- Create: `src/components/ProjectStrip.astro`
- Modify: `src/components/FormatCard.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: `EXPERIENCE_PRINCIPLES`, `FORMATS`, and `PROJECTS`.
- Produces: self-contained semantic homepage sections with no client JavaScript requirement.

- [ ] **Step 1: Add failing semantic and ordering tests**

```js
test("homepage components expose the approved experience sequence", async () => {
  const [arrival, guide, projects] = await Promise.all([
    readSource("src/components/ArrivalStrip.astro"),
    readSource("src/components/FieldGuideGrid.astro"),
    readSource("src/components/ProjectStrip.astro")
  ]);

  assert.ok(arrival.indexOf("Arrive") < arrival.indexOf("Recharge"));
  assert.ok(arrival.indexOf("Recharge") < arrival.indexOf("Continue"));
  assert.match(guide, /EXPERIENCE_PRINCIPLES/);
  assert.match(projects, /PROJECTS/);
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`

Expected: FAIL because the four components do not exist.

- [ ] **Step 3: Implement the static arrival sequence**

```astro
---
const steps = [
  { title: "Arrive", body: "Easy access and a warm welcome." },
  { title: "Recharge", body: "Comfort for driver and vehicle." },
  { title: "Continue", body: "Back on the road, restored." }
];
---

<ol class="arrival-strip" aria-label="The Rangeway experience">
  {steps.map((step) => <li><strong>{step.title}</strong><span>{step.body}</span></li>)}
</ol>
```

- [ ] **Step 4: Implement image-led experience and Field Guide components**

`ExperienceCollage.astro` accepts an ordered `images` prop with `src`, `alt`, and `caption`. `FieldGuideGrid.astro` accepts the same image metadata and pairs it by index with `EXPERIENCE_PRINCIPLES`. Both render meaningful `<figure>` and `<figcaption>` markup and do not hard-code final crop positions.

```ts
export interface GuideImage {
  src: string;
  alt: string;
  caption: string;
}
```

- [ ] **Step 5: Implement the ordered project strip**

```astro
---
import { PROJECTS } from "../data/site-content";
---

<ol class="project-strip">
  {PROJECTS.map((project) => (
    <li>
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        <strong>{project.name}</strong><span>{project.status}</span>
      </a>
    </li>
  ))}
</ol>
```

- [ ] **Step 6: Run tests, type checks, and build**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0.

- [ ] **Step 7: Commit reusable homepage components**

```bash
git add src/components src/data/site-content.ts test/site-regressions.test.mjs
git commit -m "Add Roadside Revival homepage components"
```

---

### Task 4: Rebuild and Review the Homepage

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/sections/Hero.astro`
- Modify: `src/sections/Network.astro`
- Modify: `src/sections/WhereGoing.astro`
- Modify: `src/sections/CloseCta.astro`
- Remove after migration: `src/sections/Positioning.astro`
- Remove after migration: `src/sections/ComfortGuarantee.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: Task 3 components.
- Produces: complete experience-first homepage in the approved section order.

- [ ] **Step 1: Add a failing homepage architecture test**

```js
test("homepage follows the approved experience-first architecture", async () => {
  const home = await readSource("src/pages/index.astro");
  const order = ["Hero", "ArrivalStrip", "ExperienceCollage", "FieldGuideGrid", "Network", "ProjectStrip", "CloseCta"];
  for (let index = 1; index < order.length; index += 1) {
    assert.ok(home.indexOf(order[index - 1]) < home.indexOf(order[index]));
  }
  assert.doesNotMatch(home, /Positioning|ComfortGuarantee/);
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`

Expected: FAIL because the current homepage still uses the Folio section sequence.

- [ ] **Step 3: Compose the approved homepage order**

```astro
<BaseLayout title="Rangeway · Travel farther, stop better." bodyClass="has-hero">
  <Hero />
  <ArrivalStrip />
  <ExperienceCollage images={experienceImages} />
  <FieldGuideGrid images={guideImages} />
  <Network />
  <ProjectStrip />
  <CloseCta />
</BaseLayout>
```

Keep image arrays local to `index.astro` during the visual review so they can be changed without altering shared component behavior.

- [ ] **Step 4: Restyle Hero, Network, and closing action**

Hero requirements: Rangeway Sun split composition, official white lockup over dark/transparent navigation, oversized Raleway, one primary action, no sticker or seal. Network requirements: three image-led format cards. Closing requirements: Oxide Red or Highway Navy band with one dominant action.

- [ ] **Step 5: Run automated checks**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0.

- [ ] **Step 6: Start local preview and perform homepage review**

Run: `npm run dev`

Review at 1440 by 1000 and 390 by 844. Verify no horizontal scrolling, image focal points, header lockup switching, menu focus containment, no-JavaScript visibility, and reduced motion.

- [ ] **Step 7: Pause for user homepage notes and image choices**

Do not proceed until the user approves the homepage at desktop and mobile widths. Apply requested copy pacing, crop, image, and composition adjustments, then repeat Step 5 and Step 6.

- [ ] **Step 8: Commit the approved homepage**

```bash
git add src/pages/index.astro src/sections src/components test/site-regressions.test.mjs
git commit -m "Rebuild Rangeway homepage"
```

---

### Task 5: Rebuild and Review Explore Pages

**Files:**
- Modify: `src/pages/network.astro`
- Modify: `src/pages/network/waystation.astro`
- Modify: `src/pages/network/basecamp.astro`
- Modify: `src/pages/network/summit.astro`
- Modify: `src/components/FormatNav.astro`
- Modify: `src/components/FormatPage.astro`
- Modify: `src/components/PageHero.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: `FORMATS`, `FormatNav`, `FormatCard`, and family-aware `PageHero`.
- Produces: four image-led Explore routes with shared cross-navigation.

- [ ] **Step 1: Add failing Explore-family tests**

```js
test("Explore pages share format navigation and preserve format names", async () => {
  const files = [
    "src/pages/network.astro",
    "src/pages/network/waystation.astro",
    "src/pages/network/basecamp.astro",
    "src/pages/network/summit.astro"
  ];
  const source = (await Promise.all(files.map(readSource))).join("\n");
  assert.match(source, /FormatNav/);
  for (const name of ["Waystation", "Basecamp", "Summit"]) assert.match(source, new RegExp(name));
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`

Expected: FAIL until all four routes use the shared family structure.

- [ ] **Step 3: Update `PageHero` and `FormatPage` interfaces**

```ts
interface HeroProps {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  family: "explore" | "story" | "action";
}
```

`FormatPage` consumes a format content object, renders hospitality experience before amenities, then galleries, operating details, and cross-navigation.

- [ ] **Step 4: Migrate The Network, Waystation, Basecamp, and Summit**

Use the existing approved copy and format terminology. Keep specifications and amenities below the experience narrative. Keep final image arrays local to each route for page-specific iteration.

- [ ] **Step 5: Run automated checks and review each route**

Run: `npm test && npm run check && npm run build`

Review `/network`, `/network/waystation`, `/network/basecamp`, and `/network/summit` individually at desktop and mobile sizes.

- [ ] **Step 6: Pause after each route for user notes**

Approval order: The Network, Waystation, Basecamp, Summit. Do not batch approval. Apply image and composition feedback to one route before moving to the next.

- [ ] **Step 7: Commit approved Explore pages**

```bash
git add src/pages/network* src/components/FormatNav.astro src/components/FormatPage.astro src/components/PageHero.astro test/site-regressions.test.mjs
git commit -m "Rebuild Rangeway Explore pages"
```

---

### Task 6: Rebuild and Review Our Story and Team

**Files:**
- Modify: `src/pages/our-story.astro`
- Modify: `src/pages/team.astro`
- Modify: `src/sections/Leadership.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: story-family `PageHero`.
- Produces: narrative timeline, leadership, team, and hiring sections.

- [ ] **Step 1: Add failing Story-family regression tests**

```js
test("Our Story and Team use the story hero family", async () => {
  const source = (await Promise.all([
    readSource("src/pages/our-story.astro"),
    readSource("src/pages/team.astro")
  ])).join("\n");
  assert.match(source, /family="story"/);
  assert.match(source, /Hospitality/);
  assert.match(source, /Community/);
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`

Expected: FAIL because the pages still use the Folio structure.

- [ ] **Step 3: Recompose Our Story**

Use an image-backed story hero, a clear hospitality-to-community narrative, a visual timeline, leadership proof, and a restrained closing action. Preserve approved claims and avoid startup-origin-story clichés.

- [ ] **Step 4: Recompose Team**

Use image-led team entries with Raleway roles and Source Sans biographies. Preserve the current hiring content and verify whether grayscale remains appropriate during user review instead of treating it as an immutable design rule.

- [ ] **Step 5: Run checks and review routes separately**

Run: `npm test && npm run check && npm run build`

Review `/our-story`, then `/team`, at desktop and mobile widths. Pause for user notes and final portrait treatment after each page.

- [ ] **Step 6: Commit approved story pages**

```bash
git add src/pages/our-story.astro src/pages/team.astro src/sections/Leadership.astro test/site-regressions.test.mjs
git commit -m "Rebuild Rangeway story pages"
```

---

### Task 7: Rebuild and Review Partners and Commitments

**Files:**
- Modify: `src/pages/partners.astro`
- Modify: `src/pages/commitments.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: story-family `PageHero` and existing partner logo metadata.
- Produces: accessible partner logo grid and commitments narrative.

- [ ] **Step 1: Add failing partner and commitments tests**

```js
test("Partners preserves dark-surface logo variants and ChargeVia boundary", async () => {
  const partners = await readSource("src/pages/partners.astro");
  assert.match(partners, /logoDark/);
  assert.match(partners, /chargevia\.net/);
  assert.doesNotMatch(partners, /Host a Rangeway Site/i);
});
```

- [ ] **Step 2: Run tests and verify failure only for the new family structure**

Run: `npm test`

Expected: existing safety assertions remain green; the added story-family assertion fails until migration.

- [ ] **Step 3: Recompose Partners**

Organize partners by the role they play in the driver experience. Preserve exact partner names, links, and light/dark logo variants. Keep logo sizing page-specific so the user can correct visual weight without global hacks.

- [ ] **Step 4: Recompose Commitments**

Use the Roadside Revival reading system, clear commitment headings, supporting evidence, and restrained imagery. Preserve all current substantive commitments and legal precision.

- [ ] **Step 5: Run checks and review each route**

Run: `npm test && npm run check && npm run build`

Review `/partners`, then `/commitments`, with user approval after each page.

- [ ] **Step 6: Commit approved pages**

```bash
git add src/pages/partners.astro src/pages/commitments.astro test/site-regressions.test.mjs
git commit -m "Rebuild Rangeway partner and commitment pages"
```

---

### Task 8: Rebuild and Review Investors and Contact Flow

**Files:**
- Modify: `src/pages/investors.astro`
- Modify: `src/pages/contact.astro`
- Modify: `src/pages/contact/thanks.astro`
- Modify: `src/components/ContactForm.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: action-family `PageHero`, `PROJECTS`, and current form submission behavior.
- Produces: credible investor page and resilient contact flow.

- [ ] **Step 1: Add failing Action-family and form-state tests**

```js
test("Investors and Contact use action-family hierarchy", async () => {
  const source = (await Promise.all([
    readSource("src/pages/investors.astro"),
    readSource("src/pages/contact.astro")
  ])).join("\n");
  assert.match(source, /family="action"/);
  assert.ok(source.indexOf("Bozeman") < source.indexOf("Mojave"));
});

test("contact form keeps validation, timeout, retry, and success behavior", async () => {
  const form = await readSource("src/components/ContactForm.astro");
  for (const pattern of [/required/, /submissionTimeout/, /try again/i, /pagehide/]) {
    assert.match(form, pattern);
  }
});
```

- [ ] **Step 2: Run tests and verify family assertion failure**

Run: `npm test`

Expected: FAIL until Investors and Contact adopt the action-family structure.

- [ ] **Step 3: Recompose Investors**

Lead with the operating vision, then credible proof, project pipeline, investor pathways, and contact action. Use `PROJECTS` so order and statuses cannot diverge from the homepage.

- [ ] **Step 4: Recompose Contact and Thanks**

Place contact context and the form in a balanced desktop grid that becomes a single mobile sequence. Restyle inputs, validation, loading, timeout, retry, and success states without altering the current submission endpoint.

- [ ] **Step 5: Run checks and test without sending a real message**

Run: `npm test && npm run check && npm run build`

Use browser constraint validation and a blocked-network simulation for timeout recovery. Do not submit to the live FormSubmit endpoint.

- [ ] **Step 6: Review and approve routes separately**

Review `/investors`, `/contact`, and `/contact/thanks` at desktop and mobile widths. Pause for user notes after each page.

- [ ] **Step 7: Commit approved action pages**

```bash
git add src/pages/investors.astro src/pages/contact.astro src/pages/contact/thanks.astro src/components/ContactForm.astro test/site-regressions.test.mjs
git commit -m "Rebuild Rangeway action pages"
```

---

### Task 9: Rebuild Utility, Legal, and Error Pages

**Files:**
- Modify: `src/pages/privacy.astro`
- Modify: `src/pages/terms.astro`
- Modify: `src/pages/404.astro`
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: global navigation, footer, palette, and reading typography.
- Produces: readable utility pages consistent with the redesign.

- [ ] **Step 1: Add failing route-content tests**

```js
test("utility pages retain essential titles and shared layout", async () => {
  const pages = await Promise.all([
    readSource("src/pages/privacy.astro"),
    readSource("src/pages/terms.astro"),
    readSource("src/pages/404.astro")
  ]);
  assert.match(pages[0], /Privacy Policy/);
  assert.match(pages[1], /Terms of Service/);
  assert.match(pages[2], /404/);
  for (const page of pages) assert.match(page, /BaseLayout/);
});
```

- [ ] **Step 2: Run tests and record baseline**

Run: `npm test`

Expected: essential content tests pass before restyling.

- [ ] **Step 3: Apply the Roadside Revival reading layout**

Use a compact Raleway page title, Source Sans 3 body, Roadmap Cream surface, Highway Navy text, visible anchor focus, and a comfortable `65ch` maximum reading width. Keep legal copy verbatim.

- [ ] **Step 4: Give 404 a useful recovery path**

Include links to `/`, `/network`, and `/contact` using existing button styles and no unsupported copy claims.

- [ ] **Step 5: Run checks and review all three routes**

Run: `npm test && npm run check && npm run build`

Review `/privacy`, `/terms`, and a nonexistent route at mobile and desktop widths.

- [ ] **Step 6: Commit utility pages**

```bash
git add src/pages/privacy.astro src/pages/terms.astro src/pages/404.astro test/site-regressions.test.mjs
git commit -m "Restyle Rangeway utility pages"
```

---

### Task 10: Complete Cross-Site Accessibility and Responsive QA

**Files:**
- Modify as findings require: `src/styles/global.css`
- Modify as findings require: `src/components/Nav.astro`
- Modify as findings require: `src/components/ResponsiveImage.astro`
- Modify as findings require: page files already migrated
- Test: `test/site-regressions.test.mjs`

**Interfaces:**
- Consumes: all approved routes and shared components.
- Produces: responsive, keyboard-operable, reduced-motion-safe site.

- [ ] **Step 1: Add complete static regression coverage**

```js
test("every primary route exists", () => {
  const routes = [
    "src/pages/index.astro", "src/pages/network.astro", "src/pages/network/waystation.astro",
    "src/pages/network/basecamp.astro", "src/pages/network/summit.astro", "src/pages/our-story.astro",
    "src/pages/team.astro", "src/pages/partners.astro", "src/pages/investors.astro",
    "src/pages/contact.astro", "src/pages/contact/thanks.astro", "src/pages/commitments.astro"
  ];
  for (const route of routes) assert.equal(existsSync(path.join(root, route)), true, route);
});

test("reduced motion disables reveal transitions", async () => {
  const styles = await readSource("src/styles/global.css");
  assert.match(styles, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(styles, /\.reveal[\s\S]*?transition:\s*none/);
});
```

- [ ] **Step 2: Run full automated verification**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0.

- [ ] **Step 3: Verify viewport matrix**

Check every primary route at 390 by 844, 768 by 1024, 1280 by 800, and 1440 by 1000. Confirm no horizontal overflow, no clipped lockup, readable type, correct image focal points, and stable project order.

- [ ] **Step 4: Verify keyboard and assistive behavior**

Tab through header, mobile menu, all links, forms, and footer. Confirm focus visibility, focus containment, focus restoration, skip-link behavior, meaningful image alternatives, and correct heading order.

- [ ] **Step 5: Verify resilience modes**

Disable JavaScript and confirm all content remains visible. Enable reduced motion and confirm reveal transitions collapse. Block the contact request and confirm timeout and retry behavior.

- [ ] **Step 6: Fix findings and rerun Steps 2 through 5**

Every fix must include a regression assertion when the behavior can be checked statically or through the existing Node test suite.

- [ ] **Step 7: Commit QA fixes**

```bash
git add src test/site-regressions.test.mjs
git commit -m "Complete Roadside Revival accessibility QA"
```

---

### Task 11: Final Local Acceptance and Release Readiness

**Files:**
- Modify if required by final notes: approved page and component files
- Verify: `README.md`
- Verify: `DEPLOY.md`

**Interfaces:**
- Consumes: complete locally approved redesign.
- Produces: release-ready branch with no production deployment performed.

- [ ] **Step 1: Run the final verification suite**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0 and `dist/` contains every route.

- [ ] **Step 2: Confirm deployment documentation remains accurate**

Read `README.md`, `DEPLOY.md`, `site.config.mjs`, and `.github/workflows/deploy.yml`. Verify preview remains noindexed and that no design task changed production-cutover behavior.

- [ ] **Step 3: Present the complete local site for user acceptance**

Walk through the homepage and every primary route at desktop and mobile widths. Record and apply final notes one page at a time.

- [ ] **Step 4: Rerun verification after final notes**

Run: `npm test && npm run check && npm run build`

Expected: all commands exit 0.

- [ ] **Step 5: Commit final accepted adjustments**

```bash
git add src public/images test/site-regressions.test.mjs
git commit -m "Finalize Roadside Revival redesign"
```

- [ ] **Step 6: Stop before deployment**

Report the verified branch state and request explicit user approval before pushing or triggering any production deployment.
