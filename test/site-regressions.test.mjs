import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readSource = (relativePath) => readFile(path.join(root, relativePath), "utf8");

test("content remains visible when JavaScript is unavailable", async () => {
  const [layout, styles] = await Promise.all([
    readSource("src/layouts/BaseLayout.astro"),
    readSource("src/styles/global.css")
  ]);

  assert.match(layout, /document\.documentElement\.classList\.add\("js"\)/);
  assert.match(styles, /html\.js \.reveal\s*\{[\s\S]*?opacity:\s*0/);
  assert.match(styles, /html\.js \.reveal\.is-visible\s*\{[\s\S]*?opacity:\s*1/);
});

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

test("the mobile menu contains focus and restores it when closed", async () => {
  const nav = await readSource("src/components/Nav.astro");

  assert.match(nav, /previouslyFocused/);
  assert.match(nav, /main\.inert/);
  assert.match(nav, /focusableSelector/);
});

test("contact forms recover when navigation does not begin", async () => {
  const form = await readSource("src/components/ContactForm.astro");

  assert.match(form, /submissionTimeout/);
  assert.match(form, /try again/i);
  assert.match(form, /pagehide/);
});

test("Rangeway does not solicit site hosts", async () => {
  const files = [
    "src/sections/Hero.astro",
    "src/sections/CloseCta.astro",
    "src/sections/Positioning.astro",
    "src/pages/partners.astro",
    "src/components/Nav.astro",
    "src/components/Footer.astro",
    "src/components/ContactForm.astro",
    "astro.config.mjs"
  ];
  const source = (await Promise.all(files.map(readSource))).join("\n");

  assert.doesNotMatch(source, /Host a Rangeway Site/i);
  assert.doesNotMatch(source, /hostMode/);
  assert.doesNotMatch(source, /partners#host/);
  assert.doesNotMatch(source, /properties that care how a stop feels/i);
  assert.doesNotMatch(source, /hospitality operators run every location/i);
  assert.match(source, /chargevia\.net/);
});

test("Electric Era uses its light logo in dark mode", async () => {
  const partnerPage = await readSource("src/pages/partners.astro");
  const darkLogoPath = "public/images/partners/electric-era-white.jpg";

  assert.match(
    partnerPage,
    /name: "Electric Era",[\s\S]*?logoDark: "\/images\/partners\/electric-era-white\.jpg"/
  );
  assert.equal(existsSync(path.join(root, darkLogoPath)), true);
});

test("team headshots receive a grayscale overlay", async () => {
  const teamPage = await readSource("src/pages/team.astro");

  assert.match(teamPage, /\.team-row__frame :global\(img\)\s*\{[\s\S]*?filter:\s*grayscale\(1\)/);
});

test("team hiring heading is vertically centered with its supporting copy", async () => {
  const teamPage = await readSource("src/pages/team.astro");

  assert.match(
    teamPage,
    /\.hiring\s*\{[\s\S]*?align-items:\s*center/
  );
});

test("team hiring section has no bottom padding", async () => {
  const teamPage = await readSource("src/pages/team.astro");

  assert.match(teamPage, /class="section band-dark hiring-section"/);
  assert.match(teamPage, /\.hiring-section\s*\{[\s\S]*?padding-bottom:\s*0/);
});

test("responsive image helpers provide dimensions and a width-based WebP source set", async () => {
  const helperPath = path.join(root, "src/lib/responsive-images.mjs");
  assert.equal(existsSync(helperPath), true, "responsive image helper should exist");

  const { getResponsiveImage } = await import(helperPath);
  assert.deepEqual(getResponsiveImage("/images/basecamp-interior.jpg"), {
    width: 1024,
    height: 1024,
    webpSrcset: "/images/basecamp-interior-640.webp 640w, /images/basecamp-interior.webp 1024w"
  });
});

test("preview and production deployment behavior comes from one shared configuration", async () => {
  const configPath = path.join(root, "site.config.mjs");
  assert.equal(existsSync(configPath), true, "shared deployment configuration should exist");

  const { SITE_ORIGIN, SITE_NOINDEX } = await import(configPath);
  assert.equal(SITE_ORIGIN, "https://preview.rangeway.co");
  assert.equal(SITE_NOINDEX, true);
});
