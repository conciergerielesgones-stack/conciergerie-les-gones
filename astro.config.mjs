import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Nom de domaine du site
export default defineConfig({
  site: 'https://conciergerielesgones.fr',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
