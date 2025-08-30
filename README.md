# Nova Vox Interstellar

 codex/set-up-nova-vox-interstellar-static-site-s8siqw
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
Nova Vox Interstellar (NVI) est un média francophone consacré à **EVE Online**.
Ce dépôt héberge le site statique publié via GitHub Pages.

## Objectif
- Actualités et analyses du marché
- Cartes de batailles et témoignages de pilotes
- Rigueur éditoriale : sources citées, corrections datées

## Prévisualiser le site en local
Aucun outil de build n'est nécessaire :

```bash
# depuis la racine du dépôt
 codex/set-up-nova-vox-interstellar-static-site-3r16vt

 codex/set-up-nova-vox-interstellar-static-site-g0i3pj
codex/set-up-nova-vox-interstellar-static-site-vuxm5c
codex/set-up-nova-vox-interstellar-static-site-lcxmnz
 codex/set-up-nova-vox-interstellar-static-site-0v0deg
main
main
 main
 main
./warp.sh
```

Le script lance `python -m http.server 8000`.
Ouvrir ensuite [http://localhost:8000/index.html](http://localhost:8000/index.html) dans un navigateur.

## Structure principale
- `index.html` – accueil et dernières publications
 codex/set-up-nova-vox-interstellar-static-site-3r16vt
 codex/set-up-nova-vox-interstellar-static-site-g0i3pj
- `archives-stellaires.html` – liste complète et recherche locale
- `chroniques-hebdo.html`, `oracles-du-marche.html`, etc. – pages catégories
- `posts/` – articles individuels
- `assets/` – `void-theme.css`, `stellar-index.js` et `starlog.json` (index des articles)

## Ajouter un article
1. Copier un fichier de `posts/` comme gabarit et éditer le contenu.
2. Ajouter une entrée correspondante dans `assets/starlog.json` (voir schéma existant).
3. Vérifier le JSON : `python -m json.tool assets/starlog.json`.
codex/set-up-nova-vox-interstellar-static-site-vuxm5c
codex/set-up-nova-vox-interstellar-static-site-lcxmnz
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000/index.html](http://localhost:8000/index.html) dans un navigateur.

## Structure principale
- `index.html` – accueil et dernières publications
 main
 main
- `archives.html` – liste complète et recherche locale
- `edition-semaine.html`, `analyse-financiere.html`, etc. – pages catégories
- `posts/` – articles individuels
- `assets/` – `style.css`, `script.js` et `posts.json` (index des articles)

## Ajouter un article
1. Copier un fichier de `posts/` comme gabarit et éditer le contenu.
2. Ajouter une entrée correspondante dans `assets/posts.json` (voir schéma existant).
3. Vérifier le JSON : `python -m json.tool assets/posts.json`.
 codex/set-up-nova-vox-interstellar-static-site-3r16vt
 codex/set-up-nova-vox-interstellar-static-site-g0i3pj

main
main
main
 main
 main
4. Commit & push sur `main` pour déclencher le déploiement GitHub Pages.

## Déploiement
Une action GitHub (`.github/workflows/pages.yml`) publie automatiquement la racine du dépôt vers GitHub Pages à chaque push sur `main`.

## Contributions
Les contributions sont bienvenues via issues ou pull requests. Merci de respecter la ligne éditoriale et les liens relatifs.
 codex/set-up-nova-vox-interstellar-static-site-3r16vt

## Gestion des merges
Pour éviter d'avoir à nettoyer manuellement les marqueurs `<<<<<<<`, `=======` et `>>>>>>>` lors d'une mise à jour :

1. Synchronisez d'abord votre copie locale avec la branche `main` :

```bash
git pull --rebase origin main
```

2. En cas de conflit, choisissez rapidement une version complète du fichier :

```bash
# garder votre version
git checkout --ours chemin/du/fichier

# ou prendre la version distante
git checkout --theirs chemin/du/fichier
```

3. Marquez le fichier comme résolu puis poursuivez la fusion ou le rebase :

```bash
git add chemin/du/fichier
git rebase --continue  # ou git commit si vous étiez en merge
```

Un fichier `.gitattributes` est également fourni pour forcer en dernier recours la stratégie « ours » et empêcher l'apparition de marqueurs de conflit, au prix de l'écrasement des modifications distantes concurrentes.
 main
 main
