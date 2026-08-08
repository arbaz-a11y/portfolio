// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Local `npm run dev` / `npm run build` run at the site root.
//
// For GitHub Pages (project page), the deploy workflow sets these env vars
// automatically from your repo name — you don't need to change anything here:
//   BASE_PATH  = "/<repo-name>/"
//   SITE_URL   = "https://<owner>.github.io"
//
// To preview the subpath build locally:
//   BASE_PATH=/portfolio/ SITE_URL=https://yourname.github.io npm run build
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
});
