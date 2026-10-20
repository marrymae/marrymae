// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from https://marrymae.github.io/marrymae/.
// When marrymae.com is connected, set SITE_URL=https://marrymae.com and BASE_PATH=/ in the deploy workflow.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://marrymae.github.io',
  base: process.env.BASE_PATH ?? '/marrymae',
  trailingSlash: 'ignore',
});
