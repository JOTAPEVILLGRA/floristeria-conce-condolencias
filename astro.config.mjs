import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL;

export default defineConfig({
  site,
  output: 'static',
  integrations: site
    ? [
        sitemap({
          filter: (page) => new URL(page).pathname !== '/conceptos/',
        }),
      ]
    : [],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
