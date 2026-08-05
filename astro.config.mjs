import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.criqtech.com/',
  integrations: [mdx(), sitemap(), tailwind()]
  redirects: {
    '/cv': '/cv/criq',
  }
});