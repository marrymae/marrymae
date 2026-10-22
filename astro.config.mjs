// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from https://marrymae.github.io/marrymae/.
// When marrymae.com is connected, set SITE_URL=https://marrymae.com and BASE_PATH=/ in the deploy workflow.
const base = process.env.BASE_PATH ?? '/marrymae';
const to = (path) => `${base.replace(/\/$/, '')}${path}`;

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://marrymae.github.io',
  base,
  trailingSlash: 'ignore',
  // Old addresses forward to the renamed pages.
  redirects: {
    '/method': to('/whats-possible-here'),
    '/events/ritual-theatre': to('/events/erotic-ritual-art'),
  },
});
