// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const repo = "my-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://mlalic2358.github.io",
  base: import.meta.env.PROD ? `/${repo}/` : "/",
});
