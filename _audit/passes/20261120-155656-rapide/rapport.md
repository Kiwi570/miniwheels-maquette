# Rapport d’audit

Projet : `miniwheels-maquette` · 20/11/2026 17:03:08 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **359 échec(s)**
- Passe : `20261120-155656-rapide` · version ?v=1
- Échecs : **359**
- À regarder : **16**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (6), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (9), souris immobile (1), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | — dispensé | v11 : objet à manipuler non obligatoire ; calculateur de session et catalogue filtrable à la place |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | — dispensé | v11 : pas de fil imposé ; palette et damier tiennent le site |
| 5. Un titre fait l’événement sur chaque page | — dispensé | v11 : conseil seulement |
| 6. La scène est un geste du métier | — dispensé | v11 : conseil seulement |
| 7. L’action principale a un retour physique | — dispensé | v11 : conseil seulement |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — https://www.instagram.com/miniwheels.bike/
- **lien vers le site actuel** — `contact.html` — https://www.instagram.com/miniwheels.bike/
- **lien vers le site actuel** — `index.html` — https://www.instagram.com/miniwheels.bike/
- **lien vers le site actuel** — `park.html` — https://www.instagram.com/miniwheels.bike/
- **lien vers le site actuel** — `sebastien.html` — https://www.instagram.com/miniwheels.bike/
- **lien vers le site actuel** — `shop.html` — https://www.instagram.com/miniwheels.bike/

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `park.html` — fichier introuvable : /assets/partage/park-fr.jpg
- **image de partage** — `sebastien.html` — fichier introuvable : /assets/partage/sebastien-fr.jpg
- **image de partage** — `shop.html` — fichier introuvable : /assets/partage/shop-fr.jpg

### langues (330)

- **langues** — texte manquant en en : commun.appelerShop
- **langues** — texte manquant en en : commun.appelerPark
- **langues** — texte manquant en en : commun.mentions
- **langues** — texte manquant en en : commun.introNom
- **langues** — texte manquant en en : commun.lieuxTitre
- **langues** — texte manquant en en : commun.suivre
- **langues** — texte manquant en en : commun.statutCharge
- **langues** — texte manquant en en : commun.reseauFacebook
- **langues** — texte manquant en en : commun.reseauInstagram
- **langues** — texte manquant en en : commun.itineraire
- **langues** — texte manquant en en : commun.faites
- **langues** — texte manquant en en : pages.park.titre
- **langues** — texte manquant en en : pages.park.description
- **langues** — texte manquant en en : pages.park.nav
- **langues** — texte manquant en en : pages.park.partageAlt
- **langues** — texte manquant en en : pages.park.accroche
- **langues** — texte manquant en en : pages.shop.titre
- **langues** — texte manquant en en : pages.shop.description
- **langues** — texte manquant en en : pages.shop.nav
- **langues** — texte manquant en en : pages.shop.partageAlt
- **langues** — texte manquant en en : pages.shop.accroche
- **langues** — texte manquant en en : pages.sebastien.titre
- **langues** — texte manquant en en : pages.sebastien.description
- **langues** — texte manquant en en : pages.sebastien.nav
- **langues** — texte manquant en en : pages.sebastien.partageAlt
- **langues** — texte manquant en en : pages.sebastien.accroche
- **langues** — texte manquant en en : pages.contact.titre
- **langues** — texte manquant en en : pages.contact.description
- **langues** — texte manquant en en : pages.contact.nav
- **langues** — texte manquant en en : pages.contact.partageAlt
- **langues** — texte manquant en en : pages.contact.accroche
- **langues** — texte manquant en en : statut.ouvert
- **langues** — texte manquant en en : statut.ouvreAuj
- **langues** — texte manquant en en : statut.ouvreDemain
- **langues** — texte manquant en en : statut.ouvreJour
- **langues** — texte manquant en en : statut.parkOuvert
- **langues** — texte manquant en en : statut.parkProchain
- **langues** — texte manquant en en : statut.dans
- **langues** — texte manquant en en : accueil.hero.surtitre
- **langues** — texte manquant en en : accueil.hero.titre2a
- … et 290 autres (rapport.json)

### débordement horizontal (7)

- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(11) « PIRELLI » — page large de 3735 px pour un écran de 1560 px _(390×844 sansJs)_
- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(12) « KENNY » — dépasse aussi à droite _(390×844 sansJs, 320×568 sansJs)_
- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(13) « YCF » — dépasse aussi à droite _(390×844 sansJs)_
- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(14) « SHERCO » — dépasse aussi à droite _(390×844 sansJs)_
- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(9) « MOTUL » — page large de 3735 px pour un écran de 1280 px _(320×568 sansJs)_
- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(10) « GAERNE » — dépasse aussi à droite _(320×568 sansJs)_
- **débordement horizontal** — `/` — section#shop > div.marques:nth-of-type(2) > p > span:nth-of-type(11) « PIRELLI » — dépasse aussi à droite _(320×568 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/` — section#debut > div.hero-contenu.conteneur > p.surtitre.hero-surtitre:nth-of-type(1) « SHOP & PARK BY SÉB GUILLAUME » — 2.31:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.h-ligne > em « PODIUM » — 2.94:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .hero-surtitre ; span[data-audit-surimage="1"] ; span[data-audit-surimage="2"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### accessibilité (axe) : listitem (1)

- **accessibilité (axe) : listitem** — `/` — #etape-1 ; #etape-2 ; #etape-3 — <li> elements must be contained in a <ul> or <ol> _(390×844 normal)_

### ouverture : plus de 3 s (1)

- **ouverture : plus de 3 s** — `/` — 3350 ms depuis le premier octet _(1366×768 film)_

### intro pas accélérée par une touche (1)

- **intro pas accélérée par une touche** — `/` — fin 1877 ms après l'action _(1366×768 intro)_

### épinglage : image isolée différente (flash) (4)

- **épinglage : image isolée différente (flash)** — `/` — à 317 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 333 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 350 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 433 ms (films/epinglage-1.png) _(1366×768)_

### effet du plan absent (1)

- **effet du plan absent** — « catalogue-tri » : aucun élément data-effet="catalogue-tri"

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### texte de contenu sous 13 px (ordinateur) (5)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > a.badge-park > span.badge-compte:nth-of-type(3) « dans 21 h 02 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.trois-carte:nth-of-type(1) > a > span.trois-texte > span.trois-lieu:nth-of-type(1) « LONGNES (78) » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.trois-carte:nth-of-type(2) > a > span.trois-texte > span.trois-lieu:nth-of-type(1) « LE MESNIL-SIMON (28) » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.trois-carte:nth-of-type(3) > a > figure.media.trois-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li#etape-1 > figure.media.etape-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansJs, 320×568 sansJs)_

### typographie française (4)

- **typographie française** — `/` — div.conteneur.seb-grille > div.seb-texte > blockquote.citation > p « « MiniWheels et la Seb'One Academy me permettent d » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — h2.titre.titre--xl > div.fx-ligne-mask > div.fx-ligne > em:nth-of-type(2) « SAMEDI ? » — espace insécable manquante avant ou après « ? » _(1366×768 normal)_
- **typographie française** — `/` — footer#pied > div.conteneur.pied-grille:nth-of-type(2) > div.pied-lieu:nth-of-type(1) > p.pied-horaires:nth-of-type(3) « Mardi au vendredi : 9 h 30-12 h 30 · 14 h-19 h Sam » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — footer#pied > div.conteneur.pied-grille:nth-of-type(2) > div.pied-lieu:nth-of-type(2) > p.pied-horaires:nth-of-type(3) « Samedi, toute l'année : 14 h-18 h Accueil et snack » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### transition : changement brusque (1)

- **transition : changement brusque** — `/ → /park` — à 259 ms (différence 21 %) (films/transition-vers-park-1366.png) _(1366×768 film)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/park` — à 239 ms (différence 27 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### ouverture : changement brusque (1)

- **ouverture : changement brusque** — `/` — à 2333 ms (différence 33 %) (films/ouverture-390.png) _(390×844 film)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 1591 ms (différence 24 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.pellicule — pellicule : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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
- Audit rapide : étapes lourdes sur /.
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : objet à manipuler non obligatoire ; calculateur de session et catalogue filtrable à la place.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : pas de fil imposé ; palette et damier tiennent le site.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 6. La scène est un geste du métier » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 7. L’action principale a un retour physique » dispensé (config.json) : v11 : conseil seulement.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (390×844) : 2585 ms depuis le premier octet
- Bords de l’écran : 19 images d’intro, 6 de voile et 4 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 454, tâche la plus longue 68 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1373, tâche la plus longue 0 ms
- Vitesse / : 1.11 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,parcours,ecran,mouvement
```
