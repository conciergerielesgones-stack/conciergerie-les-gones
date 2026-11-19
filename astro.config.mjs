import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Remplacez par votre nom de domaine définitif (et mettez le même dans public/CNAME)
export default defineConfig({
  site: 'https://www.VOTRE-DOMAINE.fr',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
