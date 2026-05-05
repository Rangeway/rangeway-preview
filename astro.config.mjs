import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://preview.rangewayev.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  redirects: {
    '/summit': '/network/summit'
  }
});
