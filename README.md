# Site vitrine Piolat Rotary

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react.

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Sans `RESEND_API_KEY`, les formulaires affichent les messages dans la console en développement ; en production, ils renvoient une erreur. Créez un compte Resend, vérifiez le domaine `piolat.fr`, puis renseignez la clé.

## Où modifier quoi

| Contenu | Fichier |
| --- | --- |
| Coordonnées, horaires, menu | `lib/site.ts` |
| Produits et tarifs indicatifs | `lib/products.ts` |
| Pages savoir-faire, méthode en 5 étapes | `lib/expertise.ts` |
| Objets du formulaire, taille max des fichiers | `lib/contact.ts` |
| Couleurs, typo, tailles, largeurs (design system) | `app/globals.css` (bloc `@theme`) |
| Sections de l'accueil | `sections/home/*` |
| Chiffres clés, arguments, secteurs, FAQ | `lib/home.ts` |
| Motif textile (hero, CTA) | `public/motif.svg` |
| Composants réutilisables | `components/ui`, `components/forms`, `components/layout` |
| Redirections depuis l'ancien site | `next.config.ts` |

## Images

Les visuels de `public/images/` sont **temporaires** (extraits de captures d'écran). Remplacez-les par les originaux en haute définition en gardant les mêmes noms de fichiers. `app/opengraph-image.jpg` (1200 × 630) et `app/icon.png` sont à remplacer aussi.

## À compléter avant la mise en ligne

- `app/mentions-legales/page.tsx` : forme juridique, capital, RCS, TVA, directeur de publication, hébergeur.
- `app/confidentialite/page.tsx` : durée de conservation des données.
- `lib/products.ts` : confirmer les tarifs (HT ou TTC), le prix du Galvano 914 et du collage d'embouts.
- `lib/site.ts` : confirmer l'engagement de délai de réponse (`responseTime`, affiché « sous 48 heures ouvrées »).

## Déploiement

Vercel ou tout hébergeur Node.js. Définir `NEXT_PUBLIC_SITE_URL` et les variables Resend. Le formulaire de contact accepte jusqu'à 8 Mo de fichier (`serverActions.bodySizeLimit` dans `next.config.ts`) ; vérifiez la limite de votre hébergeur.

## Mettre une démo en ligne sur Vercel

1. Déposer le projet sur GitHub (ou utiliser `npx vercel` depuis ce dossier).
2. Sur vercel.com : **Add New → Project**, importer le dépôt. Next.js est détecté automatiquement.
3. Dans **Environment Variables**, ajouter `DEMO_MODE` = `1` : le site n'est pas indexé par Google et les formulaires confirment l'envoi sans rien envoyer.
4. **Deploy**. L'adresse de démo ressemble à `piolat-xxx.vercel.app`.

Pour la vraie mise en ligne : retirer `DEMO_MODE`, ajouter les variables Resend et `NEXT_PUBLIC_SITE_URL`, puis brancher le domaine `piolat.com`.
