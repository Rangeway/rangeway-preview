import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_ORIGIN } from './site.config.mjs';

// The origin and crawler policy come from site.config.mjs so canonical, form, and
// robots behavior change together at production cutover.
export default defineConfig({
  site: SITE_ORIGIN,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/thanks')
    })
  ],
  redirects: {
    '/summit': '/network/summit',
    '/mojave': 'https://rangewaymojave.com',
    '/host': 'https://chargevia.net'
  }
});
