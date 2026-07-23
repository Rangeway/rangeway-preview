import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readSource = (relativePath) => readFile(path.join(root, relativePath), "utf8");
const extractObjectContaining = (source, needle) => {
  const needleIndex = source.indexOf(needle);
  const objectStart = source.lastIndexOf("{", needleIndex);
  const objectEnd = source.indexOf("}", needleIndex);
  assert.ok(needleIndex >= 0 && objectStart >= 0 && objectEnd > needleIndex);
  return source.slice(objectStart, objectEnd + 1);
};

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

test("native and styled buttons use the heading typeface", async () => {
  const styles = await readSource("src/styles/global.css");

  assert.match(styles, /button\s*\{[^}]*font-family:\s*var\(--font-heading\)/);
  assert.match(styles, /\.btn\s*\{[^}]*font-family:\s*var\(--font-heading\)/);
});

test("shared project content preserves the approved order", async () => {
  const content = await readSource("src/data/site-content.ts");
  assert.ok(content.indexOf('name: "Mojave"') < content.indexOf('name: "St. Louis"'));
  assert.ok(content.indexOf('name: "St. Louis"') < content.indexOf('name: "Hawaii"'));
});

test("public project surfaces replace Bozeman with Hawaii and use the current microsites", async () => {
  const [config, content, strip, footer, story, network, waypoints, hero, astroConfig] =
    await Promise.all([
      readSource("src/config.ts"),
      readSource("src/data/site-content.ts"),
      readSource("src/components/ProjectStrip.astro"),
      readSource("src/components/Footer.astro"),
      readSource("src/pages/our-story.astro"),
      readSource("src/pages/network.astro"),
      readSource("src/sections/WhereGoing.astro"),
      readSource("src/sections/Hero.astro"),
      readSource("astro.config.mjs")
    ]);

  const publicSource = [config, content, strip, footer, story, network, waypoints, hero, astroConfig].join("\n");
  assert.doesNotMatch(publicSource, /bozeman/i);
  assert.match(config, /mojaveMicrosite:\s*"https:\/\/mojave\.rangeway\.co"/);
  assert.match(config, /hawaiiMicrosite:\s*"https:\/\/hawaii\.rangeway\.co"/);
  assert.match(astroConfig, /['"]\/mojave['"]:\s*['"]https:\/\/mojave\.rangeway\.co['"]/);

  for (const source of [content, strip, footer, story, network, waypoints]) {
    assert.ok(source.indexOf("Mojave") < source.indexOf("St. Louis"));
    assert.ok(source.indexOf("St. Louis") < source.indexOf("Hawaii"));
  }

  assert.match(hero, /const desktopImage = "\/images\/waystation-hawaii\.jpg"/);
  assert.match(hero, /srcset="\/images\/waystation-hawaii\.webp"/);
  assert.match(hero, /Waystation concept · Hawaii/);
});

test("Our Story gives Hawaii distinct, hospitality-led copy without naming a site format", async () => {
  const story = await readSource("src/pages/our-story.astro");
  const hawaiiStart = story.indexOf("<h3>Rangeway Hawaii");
  const hawaiiEnd = story.indexOf("</div>", hawaiiStart);

  assert.ok(hawaiiStart >= 0 && hawaiiEnd > hawaiiStart);
  const hawaiiEntry = story.slice(hawaiiStart, hawaiiEnd);

  assert.match(hawaiiEntry, /Rangeway Hawaii is rooted in hoʻokipa/);
  assert.match(hawaiiEntry, /Hawaiian practice of welcoming and caring for guests/);
  assert.doesNotMatch(hawaiiEntry, /taking shape/i);
  assert.doesNotMatch(hawaiiEntry, /\b(?:Waystation|Basecamp|Summit)\b/i);
});

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

test("homepage network derives format identity and routes from shared content", async () => {
  const network = await readSource("src/sections/Network.astro");

  assert.match(network, /import\s*\{\s*FORMATS\s*\}\s*from\s*["']\.\.\/data\/site-content["']/);
  assert.match(network, /FORMATS\.map/);
  assert.doesNotMatch(network, /name:\s*"(?:Waystation|Basecamp|Summit)"/);
  assert.doesNotMatch(network, /tagline:\s*"/);
  assert.doesNotMatch(network, /href:\s*"\/network\//);
});

test("homepage follows the approved experience-first architecture", async () => {
  const home = await readSource("src/pages/index.astro");
  const frontmatterEnd = home.indexOf("\n---", 3);
  assert.notEqual(frontmatterEnd, -1, "homepage Astro frontmatter should close");

  const renderedHome = home.slice(frontmatterEnd + 4);
  const order = ["<Hero", "<ArrivalStrip", "<ExperienceCollage", "<FieldGuideGrid", "<Network", "<ProjectStrip", "<CloseCta"];
  const renderedIndexes = order.map((component) => renderedHome.indexOf(component));
  renderedIndexes.forEach((index, componentIndex) => {
    assert.notEqual(index, -1, `${order[componentIndex]} should render on the homepage`);
  });
  for (let index = 1; index < order.length; index += 1) {
    assert.ok(renderedIndexes[index - 1] < renderedIndexes[index]);
  }
  assert.doesNotMatch(renderedHome, /<(?:Positioning|ComfortGuarantee)\b/);
});

test("homepage keeps the approved clipped hero with the Hawaii Waystation concept", async () => {
  const hero = await readSource("src/sections/Hero.astro");

  assert.match(hero, /\.hero__media\s*\{[^}]*clip-path:\s*ellipse\(88% 83% at 100% 48%\)/s);
  assert.match(hero, /@media\s*\(max-width:\s*760px\)[\s\S]*?\.hero__media\s*\{[^}]*clip-path:\s*none/s);
  assert.doesNotMatch(hero, /hero__swoop/);
  assert.match(hero, /const desktopImage = "\/images\/waystation-hawaii\.jpg"/);
  assert.match(hero, /srcset="\/images\/waystation-hawaii\.webp"/);
  assert.match(hero, /const heroAlt\s*=\s*[\s\S]*?concept rendering[\s\S]*?Rangeway Waystation[\s\S]*?Hawaii/);
  assert.match(hero, /Waystation concept · Hawaii/);
});

test("homepage hero gives the desktop image a 60 percent column without changing mobile stacking", async () => {
  const hero = await readSource("src/sections/Hero.astro");

  assert.match(
    hero,
    /\.hero__split\s*\{[^}]*grid-template-columns:\s*minmax\(0, 40fr\) minmax\(0, 60fr\)[^}]*overflow:\s*hidden/s
  );
  assert.match(
    hero,
    /@media\s*\(max-width:\s*760px\)[\s\S]*?\.hero__split\s*\{[^}]*grid-template-columns:\s*1fr/s
  );
});

test("homepage content sections share the Network chapter-header grammar", async () => {
  const sections = await Promise.all([
    readSource("src/components/ExperienceCollage.astro"),
    readSource("src/components/FieldGuideGrid.astro"),
    readSource("src/components/ProjectStrip.astro")
  ]);
  const labels = ["The Experience", "The Field Guide", "Where We Are Going"];
  const obsoleteClassHooks = [
    /experience-collage__(?:header|eyebrow|lede)/,
    /field-guide__(?:header|eyebrow|lede)/,
    /project-strip__(?:header|eyebrow|lede)/
  ];

  sections.forEach((section, index) => {
    const sharedHeader = new RegExp(
      `<div class="kicker reveal">\\s*<span class="kicker__label">${labels[index]}</span>\\s*</div>\\s*<div class="section-head reveal">\\s*<h2[^>]*>[\\s\\S]*?</h2>\\s*<p class="section-head__lede">`
    );
    assert.match(section, sharedHeader);
    assert.doesNotMatch(section, obsoleteClassHooks[index]);
  });
});

test("Project Vision top-aligns only its shared section-head row", async () => {
  const projects = await readSource("src/components/ProjectStrip.astro");

  assert.match(projects, /\.project-vision\s+\.section-head\s*\{[^}]*align-items:\s*start/s);
});

test("homepage image and format grids have no artificial vertical stagger offsets", async () => {
  const [collage, guide, network] = await Promise.all([
    readSource("src/components/ExperienceCollage.astro"),
    readSource("src/components/FieldGuideGrid.astro"),
    readSource("src/sections/Network.astro")
  ]);
  const nthChildMarginOffset = /:nth-child\([^)]*\)[^{]*\{[^}]*margin-top:/s;

  assert.doesNotMatch(collage, nthChildMarginOffset);
  assert.doesNotMatch(guide, nthChildMarginOffset);
  assert.doesNotMatch(network, nthChildMarginOffset);
});

test("homepage Network cards stretch to one equal desktop row height", async () => {
  const network = await readSource("src/sections/Network.astro");

  assert.match(network, /\.network__grid\s*\{[^}]*align-items:\s*stretch/s);
  assert.match(network, /\.network__entry\s*\{[^}]*height:\s*100%/s);
  assert.match(network, /@media\s*\(max-width:\s*900px\)[\s\S]*?grid-template-columns:\s*1fr/);
});

test("homepage Network captions stay contained within their cards", async () => {
  const network = await readSource("src/sections/Network.astro");

  assert.match(network, /\.network__entry\s*\{[^}]*min-width:\s*0[^}]*overflow:\s*hidden/s);
  assert.match(
    network,
    /\.network__entry\s+\.fig__caption\s*\{[^}]*margin-inline:\s*var\(--space-5\)[^}]*min-width:\s*0/s
  );
  assert.match(
    network,
    /\.network__entry\s+\.fig__caption\s+span\s*\{[^}]*min-width:\s*0[^}]*overflow-wrap:\s*anywhere/s
  );
});

test("Waystation format cards describe the route instead of the photo location", async () => {
  const [homepageNetwork, networkPage] = await Promise.all([
    readSource("src/sections/Network.astro"),
    readSource("src/pages/network.astro")
  ]);

  for (const source of [homepageNetwork, networkPage]) {
    assert.match(source, /caption:\s*"Waystation · Regional routes"/);
    assert.doesNotMatch(source, /caption:\s*"Waystation · Joshua Tree"/);
  }
});

test("homepage image components keep focal positions injectable and preserve figure semantics", async () => {
  const [imageTypes, collage, guide] = await Promise.all([
    readSource("src/components/homepage-images.ts"),
    readSource("src/components/ExperienceCollage.astro"),
    readSource("src/components/FieldGuideGrid.astro")
  ]);

  assert.match(imageTypes, /focalPosition\?: string/);
  assert.match(collage, /object-position/);
  assert.match(guide, /object-position/);
  assert.match(collage, /<figure>/);
  assert.match(collage, /<figcaption>/);
  assert.match(guide, /<figure>/);
  assert.match(guide, /<figcaption>/);
});

test("homepage uses a distinct Trailhead lounge image for Real comfort", async () => {
  const home = await readSource("src/pages/index.astro");
  const experienceStart = home.indexOf("const experienceImages");
  const guideStart = home.indexOf("const guideImages");
  const frontmatterEnd = home.indexOf("\n---", guideStart);

  assert.ok(experienceStart >= 0 && guideStart > experienceStart && frontmatterEnd > guideStart);

  const experienceImages = home.slice(experienceStart, guideStart);
  const guideImages = home.slice(guideStart, frontmatterEnd);
  assert.match(experienceImages, /\/images\/basecamp-interior\.jpg/);
  assert.doesNotMatch(guideImages, /\/images\/basecamp-interior\.jpg/);
  assert.match(guideImages, /\/images\/trailhead-interior\.jpg/);

  const realComfortImage = extractObjectContaining(guideImages, "/images/trailhead-interior.jpg");
  const alt = realComfortImage.match(/alt\s*:\s*"([^"]+)"/i)?.[1];
  const caption = realComfortImage.match(/caption\s*:\s*"([^"]+)"/i)?.[1];
  assert.ok(alt, "Real comfort image should have alt text");
  for (const detail of ["people", "seating", "work", "lounge"]) {
    assert.match(alt, new RegExp(detail, "i"));
  }
  assert.ok(caption, "Real comfort image should have a caption");
  assert.match(caption, /Real comfort/i);
});

test("homepage responsive picture wrappers fill their image plates", async () => {
  const [collage, guide] = await Promise.all([
    readSource("src/components/ExperienceCollage.astro"),
    readSource("src/components/FieldGuideGrid.astro")
  ]);

  assert.match(
    collage,
    /\.experience-collage__frame :global\(picture\)\s*\{[^}]*display:\s*block;[^}]*width:\s*100%;[^}]*height:\s*100%/s
  );
  assert.match(
    guide,
    /\.field-guide__frame :global\(picture\)\s*\{[^}]*display:\s*block;[^}]*width:\s*100%;[^}]*height:\s*100%/s
  );
});

test("the Field Guide requires exactly four images", async () => {
  const imageTypes = await readSource("src/components/homepage-images.ts");
  const guide = await readSource("src/components/FieldGuideGrid.astro");

  assert.match(
    imageTypes,
    /readonly \[\s*GuideImage,\s*GuideImage,\s*GuideImage,\s*GuideImage\s*\]/
  );
  assert.match(guide, /images: FieldGuideImages/);
});

test("the mobile menu contains focus and restores it when closed", async () => {
  const nav = await readSource("src/components/Nav.astro");

  assert.match(nav, /previouslyFocused/);
  assert.match(nav, /main\.inert/);
  assert.match(nav, /focusableSelector/);
});

test("the header keeps the official white Rangeway lockup on Highway Navy", async () => {
  const [brand, nav] = await Promise.all([
    readSource("src/components/BrandLockup.astro"),
    readSource("src/components/Nav.astro")
  ]);

  assert.match(brand, /rangeway-lockup-white\.svg/);
  assert.match(nav, /<BrandLockup tone="white"/);
  assert.doesNotMatch(nav, /tone="charcoal"|surface-page|lockup--charcoal/);
  assert.match(nav, /\.masthead\s*\{[\s\S]*?background:\s*var\(--color-highway\)/);
  assert.match(nav, /aria-label="Rangeway home"/);
  assert.doesNotMatch(nav, /masthead__wordmark/);
  assert.equal(existsSync(path.join(root, "public/images/logo/rangeway-lockup-white.svg")), true);
});

test("footer places its single official lockup before the tagline", async () => {
  const footer = await readSource("src/components/Footer.astro");
  const brandHook = 'class="folio-footer__brand"';
  const taglineHook = 'class="folio-footer__tag"';

  assert.ok(footer.indexOf(brandHook) < footer.indexOf(taglineHook));
  assert.equal((footer.match(/class="folio-footer__brand"/g) ?? []).length, 1);
  assert.match(footer, /<BrandLockup tone="white"/);
});

test("the current primary navigation remains intact", async () => {
  const content = await readSource("src/data/site-content.ts");
  for (const label of ["The Network", "Our Story", "Team", "Partners", "Investors", "Newsroom", "Contact"]) {
    assert.match(content, new RegExp(`label: "${label}"`));
  }
});

test("footer wayfinding uses the heading typeface", async () => {
  const footer = await readSource("src/components/Footer.astro");

  assert.match(
    footer,
    /\.folio-footer ul,\s*\.folio-footer address,\s*\.folio-footer__legal\s*\{[^}]*font-family:\s*var\(--font-heading\)/
  );
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

test("partner logos follow the page surface instead of the OS color scheme", async () => {
  const partnerPage = await readSource("src/pages/partners.astro");

  assert.doesNotMatch(partnerPage, /prefers-color-scheme/);
  assert.doesNotMatch(partnerPage, /logoDark/);
  assert.match(partnerPage, /<img src=\{p\.logo\}/);
});

test("partner logo tiles provide a restrained 72px contained mark", async () => {
  const partnerPage = await readSource("src/pages/partners.astro");
  const markRule = partnerPage.match(/\.partner-row__mark\s*\{([^}]*)\}/s)?.[1];
  const imageRule = partnerPage.match(/\.partner-row__mark img\s*\{([^}]*)\}/s)?.[1];

  assert.ok(markRule);
  assert.match(markRule, /width:\s*72px/);
  assert.match(markRule, /height:\s*72px/);
  assert.ok(imageRule);
  assert.match(imageRule, /width:\s*100%/);
  assert.match(imageRule, /height:\s*100%/);
  assert.match(imageRule, /object-fit:\s*contain/);
});

test("Partners call to action top-aligns its heading and supporting content", async () => {
  const partnerPage = await readSource("src/pages/partners.astro");

  assert.match(partnerPage, /\.partner-cta\s*\{[^}]*align-items:\s*start/s);
});

test("team headshots receive a grayscale overlay", async () => {
  const teamPage = await readSource("src/pages/team.astro");

  assert.match(teamPage, /\.team-row__frame :global\(img\)\s*\{[\s\S]*?filter:\s*grayscale\(1\)/);
});

test("Theo appears directly under Stephanie on the Team page", async () => {
  const teamPage = await readSource("src/pages/team.astro");
  const stephanie = teamPage.indexOf('name: "Stephanie McGreevy"');
  const theo = teamPage.indexOf('name: "Theo Reichgelt"');

  assert.ok(stephanie >= 0 && theo > stephanie);
  assert.doesNotMatch(teamPage.slice(stephanie, theo), /\n\s*name:\s*"(?!Stephanie McGreevy)/);
});

test("team hiring heading top-aligns with its supporting copy", async () => {
  const teamPage = await readSource("src/pages/team.astro");
  const desktopHiringRule = teamPage.match(/\.hiring\s*\{([^}]*)\}/s)?.[1];

  assert.ok(desktopHiringRule);
  assert.match(desktopHiringRule, /align-items:\s*start/);
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
