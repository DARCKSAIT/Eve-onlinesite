# Nova Vox Interstellar

Nova Vox Interstellar (NVI) est un média francophone dédié à **EVE Online**. Ce dépôt contient le site statique publié via GitHub Pages.

## Prévisualisation locale
```bash
# depuis la racine du dépôt
./warp.sh
```
Le script lance `python -m http.server 8000`.
Ouvrir ensuite [http://localhost:8000/index.html](http://localhost:8000/index.html) dans un navigateur.

## Structure principale
- `index.html` – accueil et dernières publications
- `archives.html` – liste complète et recherche locale
- `edition-semaine.html`, `analyse-financiere.html`, etc. – pages catégories
- `posts/` – articles individuels
- `assets/` – ressources (CSS, JS, données JSON)

## Ajouter un article
1. Copier un fichier de `posts/` comme gabarit et éditer le contenu.
2. Ajouter une entrée correspondante dans `assets/posts.json`.
3. Vérifier le JSON : `python -m json.tool assets/posts.json`.
4. Commit & push sur `main` pour déclencher le déploiement GitHub Pages.

## Déploiement
Une action GitHub (`.github/workflows/pages.yml`) publie automatiquement la racine du dépôt vers GitHub Pages à chaque push sur `main`.

## Contributions
Les contributions sont les bienvenues via pull requests.
