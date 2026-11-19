# Conciergerie les Gônes — site

Site Astro (landing page + articles), déployé automatiquement sur GitHub Pages à chaque modification de la branche `main`.

## Réglages
- `src/config.js` : numéro WhatsApp, lien Calendly, webhook Make, commission, prix du simulateur.
- `astro.config.mjs` et `public/robots.txt` : nom de domaine.
- `public/CNAME` : à créer avec le nom de domaine quand il est acheté.

## Ajouter un article
Créer un fichier `src/pages/articles/mon-article.md` sur le modèle des articles existants (titre, description, catégorie, date, résumé, FAQ). Il apparaît automatiquement dans la page Articles et dans le sitemap. `draft: true` pour le masquer.

## En local
```
npm install
npm run dev
```
