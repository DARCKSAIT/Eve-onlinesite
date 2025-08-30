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
