# Rapport d’audit

Projet : `miniwheels-maquette` · 20/11/2026 17:32:46 · 4 min · 6 page(s) · audit standard (étapes : fichiers, mesures, films)

## Résumé

- Statut : **11 échec(s)**
- Passe : `20261120-162817-standard-partiel` · version ?v=1
- Échecs : **11**
- À regarder : **9**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), films d’ouverture (10), films de transition (10)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-155656-rapide | rapide | toutes | toutes | 359 | 16 | 1 | échecs |
| 20261120-160714-standard | standard | toutes | toutes | 47 | 11 | 1 | échecs |
| **20261120-162817-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, films | 11 | 9 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — span[data-audit-surimage="1"] ; span[data-audit-surimage="2"] ; em[data-audit-surimage="3"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — .bouton--clair — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### contraste sur image (1)

- **contraste sur image** — `/404` — h1.titre.titre--xl > span.ligne-masque:nth-of-type(2) > span.h-ligne > em « DE PISTE » — 2.63:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur > p.tete-actions.h-suite:nth-of-type(3) > span.statut.statut--clair « Ouvert jusqu'à 19 h » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur > p.tete-actions.h-suite:nth-of-type(3) > span.statut.statut--clair « Mardi au vendredi · 9 h 30-12 h 30 · 14 h-19 h » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/shop` — section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette « 999 € » _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/shop` — section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette « DÈS 999 € » _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s147 > div.vehicule-plaque:nth-of-type(1) > span « YCF SUNDAY » — avec li#v-ycf-sunday-s147 > span.vehicule-badge « Nouveauté » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s187 > div.vehicule-plaque:nth-of-type(1) > span « YCF SUNDAY » — avec li#v-ycf-sunday-s187 > span.vehicule-badge « Nouveauté » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > small « DÈS » — avec section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > strong « 999 € » _(1366×768 sansJs)_

### débordement horizontal (1)

- **débordement horizontal** — `/sebastien` — page large de 331 px — largeurs : 320 px _(balayage 320–1920 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (4)

- **section sans visuel** — `/park` — section#ouverture « QUAND ROULER ? Le Park ouvre toute l'année le same » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/park` — section#faq « QUESTIONS FRÉQUENTES À partir de quel âge peut-on  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/sebastien` — section#palmares « LE PALMARÈS D'UN CHAMPION Quinze ans de carrière,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sebastien` — section#frise « DE LA COURSE À LA TRANSMISSION AVRIL 2014 Le Shop  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### ouverture : changement brusque (1)

- **ouverture : changement brusque** — `/contact` — à 1817 ms (différence 20 %) (films/ouverture-contact-1366.png) _(1366×768 film)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/park` — à 157 ms (différence 33 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/park` — à 67 ms (différence 46 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 173 ms (différence 21 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 57 min de travail pour 75 min de budget, 10 min d’attente de l’utilisateur.
- Journal : « plans, images du site et document Grok » 16 min pour 10 prévues.
- Audit standard : étapes lourdes sur /, /contact, /park, /sebastien, /shop.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2068 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2016 ms depuis le premier octet
- Ouverture /park (1366×768) : 2144 ms depuis le premier octet
- Ouverture /sebastien (1366×768) : 2085 ms depuis le premier octet
- film de l'ouverture /sebastien 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /shop (1366×768) : 2229 ms depuis le premier octet
- film de l'ouverture /shop 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2037 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 1993 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /park (390×844) : 2092 ms depuis le premier octet
- Ouverture /sebastien (390×844) : 2069 ms depuis le premier octet
- Ouverture /shop (390×844) : 2135 ms depuis le premier octet

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/contact,/shop,/sebastien --seulement=fichiers,mesures
```
