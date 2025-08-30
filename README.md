# Nova Vox Interstellar

Nova Vox Interstellar (NVI) est un média francophone dédié à **EVE Online**. Ce dépôt contient le site statique diffusé via GitHub Pages. Aucun backend n'est requis : toutes les pages sont en HTML/CSS/JS et les articles sont indexés dans un fichier JSON.

## Sommaire
1. [Concept éditorial](#concept-éditorial)
2. [Pile technique](#pile-technique)
3. [Arborescence du dépôt](#arborescence-du-dépôt)
4. [Prévisualisation locale](#prévisualisation-locale)
5. [Ajouter un article](#ajouter-un-article)
6. [Déploiement GitHub Pages](#déploiement-github-pages)
7. [Section Premium](#section-premium)
8. [Sécurité et performances](#sécurité-et-performances)
9. [Gestion des merges](#gestion-des-merges)

## Concept éditorial
- Actualités, analyses de marché, cartes/batailles et témoignages.
- Rigueur : chaque chiffre est sourcé, corrections datées.
- Les contenus "Premium" sont réservés aux membres du Discord après don ISK (pas de paywall web).

## Pile technique
- Site statique (HTML/CSS/JS).
- [GitHub Pages](https://pages.github.com/) pour l'hébergement.
- Index des articles : `assets/posts.json`, chargé côté client avec `fetch`.
- Tous les liens sont **relatifs** pour fonctionner sous `/Eve-onlinesite/`.

## Arborescence du dépôt
```
/index.html                # accueil
/archives.html             # archives avec recherche locale
/edition-semaine.html      # page catégorie
/analyse-financiere.html
/temoignages.html
/cartes-batailles.html
/a-propos.html
/contact.html
/premium.html
/posts/                    # articles individuels
  edition-2025-08-27.html
  analyse-plex-2025-08-27.html
  temoignage-pilote-001.html
/assets/
  style.css
  script.js
  posts.json
.nojekyll                  # déploie tel quel, sans Jekyll
warp.sh                    # serveur local (python)
.github/workflows/pages.yml
```

## Prévisualisation locale
```bash
./warp.sh
```
Le script lance `python -m http.server 8000`. Ouvrez ensuite [http://localhost:8000/index.html](http://localhost:8000/index.html).

## Ajouter un article
1. Copier un gabarit dans `posts/` et éditer le contenu.
2. Ajouter une entrée à `assets/posts.json` selon le schéma :
   ```json
   {
     "slug": "mon-article",
     "title": "Titre complet",
     "date": "2025-08-27T07:00:00Z",
     "category": "analyse-financiere",
     "category_label": "Analyse financière",
     "excerpt": "Résumé neutre...",
     "url": "posts/mon-article.html",
     "sources": ["https://exemple1", "https://exemple2"]
   }
   ```
3. Valider le JSON :
   ```bash
   python -m json.tool assets/posts.json
   ```
4. Commit & push sur `main` ; GitHub Pages déploie automatiquement.

## Déploiement GitHub Pages
Un workflow (`.github/workflows/pages.yml`) publie la racine du dépôt à chaque push sur `main`. Si le site n'est pas encore activé, l'étape `Setup Pages` l'initialise automatiquement (`enablement: true`). Après le premier déploiement, vérifiez dans **Settings → Pages** que la source est **GitHub Actions**.

## Section Premium
La page `premium.html` explique comment obtenir le rôle Discord **Premium NVI** :
- Envoyer 10 000 ISK au personnage EVE indiqué.
- Remplir le Google Form avec pseudo, date et capture du journal.
- Attribution manuelle du rôle sur Discord ; les contenus premium restent sur Discord.

## Sécurité et performances
- Dépôt protégé : utiliser l'authentification à deux facteurs et protéger la branche `main`.
- Aucune dépendance externe inutile, images compressées (`.webp` ou `.svg`).
- Surface d'attaque minimale : site entièrement statique.

## Gestion des merges
Pour éviter les marqueurs `<<<<<<<` / `=======` / `>>>>>>>` :
1. Synchroniser avant de modifier : `git pull --rebase origin main`.
2. En cas de conflit :
   ```bash
   git checkout --ours chemin/du/fichier   # conserver votre version
   git checkout --theirs chemin/du/fichier # ou prendre la version distante
   git add chemin/du/fichier
   git rebase --continue                   # ou git commit en mode merge
   ```
3. Un fichier `.gitattributes` force en dernier recours la stratégie `merge=ours`.

---
Nova Vox Interstellar © 2025
