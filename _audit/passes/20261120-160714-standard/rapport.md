# Rapport d’audit

Projet : `miniwheels-maquette` · 20/11/2026 17:24:34 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **47 échec(s)**
- Passe : `20261120-160714-standard` · version ?v=1
- Échecs : **47**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | — dispensé | v11 : objet à manipuler non obligatoire ; calculateur de session et catalogue filtrable à la place |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | — dispensé | glisse voulue : voile noir à bords en damier, le drapeau de course |
| 4. Quelque chose relie les sections et les pages | — dispensé | v11 : pas de fil imposé ; palette et damier tiennent le site |
| 5. Un titre fait l’événement sur chaque page | — dispensé | v11 : conseil seulement |
| 6. La scène est un geste du métier | — dispensé | v11 : conseil seulement |
| 7. L’action principale a un retour physique | — dispensé | v11 : conseil seulement |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-155656-rapide | rapide | toutes | toutes | 359 | 16 | 1 | échecs |
| **20261120-160714-standard** (celle-ci) | standard | toutes | toutes | 47 | 11 | 1 | échecs |

## Échecs

### élément recouvert (3)

- **élément recouvert** — `/` — ul.familles.fx-fini > li:nth-of-type(2) > a.famille > b « dès 399 € » — par div.conteneur.shop-grille:nth-of-type(1) > figure.media.shop-media > picture > img « Deux pilotes YCF en plein saut dans un sous-bois » _(768×1024 normal)_
- **élément recouvert** — `/` — ul.familles.fx-fini > li:nth-of-type(4) > a.famille > b « dès 1 499 € » — par div.conteneur.shop-grille:nth-of-type(1) > figure.media.shop-media > picture > img « Deux pilotes YCF en plein saut dans un sous-bois » _(768×1024 normal)_
- **élément recouvert** — `/shop` — section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > strong « 999 € » — par section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > small:nth-of-type(2) « PIT BIKE YCF » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — .hero-surtitre ; span[data-audit-surimage="1"] ; span[data-audit-surimage="2"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — .bouton--clair — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-contenu.conteneur > p.hero-actions.h-suite:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver une session » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur > p.tete-actions.h-suite:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — article.lieu:nth-of-type(2) > div.lieu-corps > p.lieu-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « 02 37 64 04 88 · Corine » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **premier écran : bouton principal hors de l’écran** — `/sebastien` — section#debut > div.seb-tete-texte:nth-of-type(2) > p.tete-actions.h-suite:nth-of-type(3) > a.bouton « Les stages de l'Academy » _(844×390 normal, 1920×1080 normal, 1366×768 sansJs)_

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > a.badge-park « LE PARK SAMEDI 14 h-18 h » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur > p.intro.h-suite:nth-of-type(2) « Le Shop et l'atelier au Mesnil-Simon (28), le Park » _(844×390 normal, 1366×768 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/park` — section#debut > div.park-tete-texte:nth-of-type(1) > p.tete-actions.h-suite:nth-of-type(4) > span.statut.statut--clair « Ouvre demain à 14 h » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/park` — section#debut > div.park-tete-texte:nth-of-type(1) > p.tete-actions.h-suite:nth-of-type(4) > span.statut.statut--clair « Samedi, toute l'année · 14 h-18 h » _(1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/sebastien` — section#debut > div.seb-tete-texte:nth-of-type(2) > p.tete-actions.h-suite:nth-of-type(3) > span.statut « Stages de 2 h 30 · 45 € · 8 pilotes au plus » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_

### contraste sur image (4)

- **contraste sur image** — `/404` — section#debut > div.conteneur > p.surtitre.h-suite:nth-of-type(1) « ERREUR 404 » — 3.38:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/404` — h1.titre.titre--xl > span.ligne-masque:nth-of-type(2) > span.h-ligne > em « DE PISTE » — 2.65:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur > p.surtitre.h-suite:nth-of-type(1) « ERREUR 404 » — 2.69:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — h1.titre.titre--xl > span.ligne-masque:nth-of-type(2) > span.h-ligne > em « DE PISTE » — 2.63:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### textes qui se chevauchent (20)

- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(1) « S » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.surtitre.h-suite:nth-of-type(1) « SÉBASTIEN GUILLAUME » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(1) « S » — avec div.seb-tete-texte:nth-of-type(2) > h1.titre > span.ligne-masque > span.h-ligne « SÉB » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(1) « S » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.intro.h-suite:nth-of-type(2) « La moto tout terrain, plus qu'un métier : une pass » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(2) « É » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.surtitre.h-suite:nth-of-type(1) « SÉBASTIEN GUILLAUME » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(2) « É » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.intro.h-suite:nth-of-type(2) « La moto tout terrain, plus qu'un métier : une pass » _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 390×844 sansWebgl, +3)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(3) « B » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.surtitre.h-suite:nth-of-type(1) « SÉBASTIEN GUILLAUME » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(3) « B » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.intro.h-suite:nth-of-type(2) « La moto tout terrain, plus qu'un métier : une pass » _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 390×844 sansWebgl, +3)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(2) « É » — avec div.seb-tete-texte:nth-of-type(2) > h1.titre > span.ligne-masque > span.h-ligne « SÉB » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(3) « B » — avec div.seb-tete-texte:nth-of-type(2) > h1.titre > span.ligne-masque > span.h-ligne « SÉB » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(2) « É » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.tete-actions.h-suite:nth-of-type(3) > a.bouton « Les stages de l'Academy » _(844×390 normal, 1366×768 sansJs)_
- **textes qui se chevauchent** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(3) « B » — avec section#debut > div.seb-tete-texte:nth-of-type(2) > p.tete-actions.h-suite:nth-of-type(3) > a.bouton « Les stages de l'Academy » _(844×390 normal, 1366×768 sansJs)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s147 > div.vehicule-plaque:nth-of-type(1) > small « FLAT TRACK » — avec li#v-ycf-sunday-s147 > span.vehicule-badge « Nouveauté » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s187 > div.vehicule-plaque:nth-of-type(1) > small « FLAT TRACK » — avec li#v-ycf-sunday-s187 > span.vehicule-badge « Nouveauté » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > small:nth-of-type(1) « 65 VÉHICULES » — avec section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > strong « 999 € » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/shop` — section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > strong « 999 € » — avec section#debut > div.conteneur.shop-tete-haut:nth-of-type(1) > p.etiquette > small:nth-of-type(2) « PIT BIKE YCF » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s147 > div.vehicule-plaque:nth-of-type(1) > span « YCF SUNDAY » — avec li#v-ycf-sunday-s147 > div.vehicule-plaque:nth-of-type(1) > small « FLAT TRACK » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s147 > div.vehicule-plaque:nth-of-type(1) > span « YCF SUNDAY » — avec li#v-ycf-sunday-s147 > span.vehicule-badge « Nouveauté » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s187 > div.vehicule-plaque:nth-of-type(1) > span « YCF SUNDAY » — avec li#v-ycf-sunday-s187 > div.vehicule-plaque:nth-of-type(1) > small « FLAT TRACK » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — li#v-ycf-sunday-s187 > div.vehicule-plaque:nth-of-type(1) > span « YCF SUNDAY » — avec li#v-ycf-sunday-s187 > span.vehicule-badge « Nouveauté » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/shop` — section#atelier > figure.media > figcaption.mention-ia « Illustration générée » — avec section#atelier > div.conteneur > div.atelier-texte > a.bouton « Prendre rendez-vous » _(320×568 normal, 320×568 sansJs)_

### contraste insuffisant (3)

- **contraste insuffisant** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(1) « S » — 1.18:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(2) « É » — 1.18:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(3) « B » — 1.18:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte coupé (3)

- **texte coupé** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(1) « S » — coupé par section#debut « S É B SÉBASTIEN GUILLAUME SÉB La moto tout terrain » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(2) « É » — coupé par section#debut « S É B SÉBASTIEN GUILLAUME SÉB La moto tout terrain » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/sebastien` — section#debut > p.seb-geant > span:nth-of-type(3) « B » — coupé par section#debut « S É B SÉBASTIEN GUILLAUME SÉB La moto tout terrain » _(390×844 sansJs, 320×568 sansJs)_

### débordement horizontal (2)

- **débordement horizontal** — `/contact` — page large de 844 px — largeurs : 800, 840, 880, 920 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/sebastien` — page large de 331 px — largeurs : 320 px _(balayage 320–1920 normal)_

### transition : élément visible, caché puis réaffiché (flash) (1)

- **transition : élément visible, caché puis réaffiché (flash)** — `/park → /shop` — section#debut > div.conteneur.shop-tete-haut > p.etiquette « 65 véhicules999 €pit bike YCF » _(1366×768 film, 390×844 film)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (4)

- **section sans visuel** — `/park` — section#ouverture « QUAND ROULER ? Le Park ouvre toute l'année le same » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/park` — section#faq « QUESTIONS FRÉQUENTES À partir de quel âge peut-on  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sebastien` — section#palmares « LE PALMARÈS D'UN CHAMPION Quinze ans de carrière,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sebastien` — section#frise « DE LA COURSE À LA TRANSMISSION AVRIL 2014 Le Shop  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/park` — div.conteneur.bloc-grille > figure.media > picture > img « Un parent et son enfant casqué préparent la moto a » — park-avec-ta-moto (3/5, 42 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### texte de contenu sous 13 px (ordinateur) (2)

- **texte de contenu sous 13 px (ordinateur)** — `/shop` — li#v-mini-ycf-12 > span.vehicule-badge « Autorisé au Park » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/shop` — li#v-mini-ycf-16 > span.vehicule-badge « Autorisé au Park » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/park` — à 155 ms (différence 27 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/sebastien` — écran différent à la même position après rechargement (4.6 %), voir comparaisons/rechargement-sebastien-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/park` — form.calc — calcul-session : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 57 min de travail pour 75 min de budget, 10 min d’attente de l’utilisateur.
- Journal : « plans, images du site et document Grok » 16 min pour 10 prévues.
- Audit standard : étapes lourdes sur /, /contact, /park, /sebastien, /shop.
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : objet à manipuler non obligatoire ; calculateur de session et catalogue filtrable à la place.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : pas de fil imposé ; palette et damier tiennent le site.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 6. La scène est un geste du métier » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 7. L’action principale a un retour physique » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : glisse voulue : voile noir à bords en damier, le drapeau de course.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2201 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2016 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /park (1366×768) : 2098 ms depuis le premier octet
- Ouverture /sebastien (1366×768) : 2124 ms depuis le premier octet
- Ouverture /shop (1366×768) : 2097 ms depuis le premier octet
- Ouverture / (390×844) : 2046 ms depuis le premier octet
- Ouverture /contact (390×844) : 1985 ms depuis le premier octet
- Ouverture /park (390×844) : 2092 ms depuis le premier octet
- Ouverture /sebastien (390×844) : 2038 ms depuis le premier octet
- Ouverture /shop (390×844) : 2084 ms depuis le premier octet
- film de l'ouverture /shop 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 270 images d’intro, 23 de voile et 131 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /contact : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /park : aucune section épinglée ou plein écran.
- Tient dans l'écran /sebastien : aucune section épinglée ou plein écran.
- Tient dans l'écran /shop : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 428, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 181, tâche la plus longue 0 ms
- Fluidité /park 1366×768 (molette) : 0 % d'images lentes sur 438, tâche la plus longue 0 ms
- Fluidité /sebastien 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité /shop 1366×768 (molette) : 0 % d'images lentes sur 496, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /park 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /sebastien 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /shop 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /park : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /sebastien : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /shop : 0.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,films
```
