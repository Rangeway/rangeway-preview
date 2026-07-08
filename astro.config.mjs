import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Preview host. At production cutover, set site to https://rangeway.co
// (or the live apex) and set SITE.noindex = false in src/config.ts.
export default defineConfig({
  site: 'https://preview.rangeway.co',
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
    '/host': '/partners#host'
  }
});
