# Nova Vox Interstellar

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
 codex/set-up-nova-vox-interstellar-static-site-0v0deg
./warp.sh
```

Le script lance `python -m http.server 8000`.
Ouvrir ensuite [http://localhost:8000/index.html](http://localhost:8000/index.html) dans un navigateur.

## Structure principale
- `index.html` – accueil et dernières publications
- `archives-stellaires.html` – liste complète et recherche locale
- `chroniques-hebdo.html`, `oracles-du-marche.html`, etc. – pages catégories
- `posts/` – articles individuels
- `assets/` – `void-theme.css`, `stellar-index.js` et `starlog.json` (index des articles)

## Ajouter un article
1. Copier un fichier de `posts/` comme gabarit et éditer le contenu.
2. Ajouter une entrée correspondante dans `assets/starlog.json` (voir schéma existant).
3. Vérifier le JSON : `python -m json.tool assets/starlog.json`.
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000/index.html](http://localhost:8000/index.html) dans un navigateur.

## Structure principale
- `index.html` – accueil et dernières publications
- `archives.html` – liste complète et recherche locale
- `edition-semaine.html`, `analyse-financiere.html`, etc. – pages catégories
- `posts/` – articles individuels
- `assets/` – `style.css`, `script.js` et `posts.json` (index des articles)

## Ajouter un article
1. Copier un fichier de `posts/` comme gabarit et éditer le contenu.
2. Ajouter une entrée correspondante dans `assets/posts.json` (voir schéma existant).
3. Vérifier le JSON : `python -m json.tool assets/posts.json`.
main
4. Commit & push sur `main` pour déclencher le déploiement GitHub Pages.

## Déploiement
Une action GitHub (`.github/workflows/pages.yml`) publie automatiquement la racine du dépôt vers GitHub Pages à chaque push sur `main`.

## Contributions
Les contributions sont bienvenues via issues ou pull requests. Merci de respecter la ligne éditoriale et les liens relatifs.
