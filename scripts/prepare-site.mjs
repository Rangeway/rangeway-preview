import { writeFile } from "node:fs/promises";
import { SITE_NOINDEX, SITE_ORIGIN } from "../site.config.mjs";

const robots = SITE_NOINDEX
  ? "# Preview host stays closed to crawlers.\nUser-agent: *\nDisallow: /\n"
  : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap-index.xml\n`;

await writeFile(new URL("../public/robots.txt", import.meta.url), robots);
