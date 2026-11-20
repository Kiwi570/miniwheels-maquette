# Rapport d’audit

Projet : `miniwheels-maquette` · 20/11/2026 17:35:39 · 2 min · 5 page(s) · audit standard ciblé sur /,/404,/contact,/shop,/sebastien (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-163351-standard-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-155656-rapide | rapide | toutes | toutes | 359 | 16 | 1 | échecs |
| 20261120-160714-standard | standard | toutes | toutes | 47 | 11 | 1 | échecs |
| 20261120-162817-standard-partiel | standard | toutes | fichiers, mesures, films | 11 | 9 | 0 | échecs |
| **20261120-163351-standard-cible-partiel** (celle-ci) | standard | /,/404,/contact,/shop,/sebastien | fichiers, mesures | 1 | 3 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .bouton--clair — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (2)

- **section sans visuel** — `/sebastien` — section#palmares « LE PALMARÈS D'UN CHAMPION Quinze ans de carrière,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sebastien` — section#frise « DE LA COURSE À LA TRANSMISSION AVRIL 2014 Le Shop  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 57 min de travail pour 75 min de budget, 10 min d’attente de l’utilisateur.
- Journal : « plans, images du site et document Grok » 16 min pour 10 prévues.
- Audit standard : étapes lourdes sur /, /contact, /sebastien, /shop.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures
```
