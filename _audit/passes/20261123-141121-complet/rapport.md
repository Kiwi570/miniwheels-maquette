# Rapport d’audit

Projet : `miniwheels-maquette` · 23/11/2026 15:31:44 · 20 min · 6 page(s) · audit complet

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261123-141121-complet` · version ?v=2
- Échecs : **6**
- À regarder : **17**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), souris immobile (5), vitesse (5), captures (1)

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

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — div.conteneur.photos-tete:nth-of-type(1) > div.tampon > span.tampon-coeur > strong « 238 » — avec div.conteneur.photos-tete:nth-of-type(1) > div.tampon > span.tampon-coeur > span « SÉANCES » _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### débordement horizontal (3)

- **débordement horizontal** — `/` — section#photos > div.conteneur.photos-tete:nth-of-type(1) > div.tampon > svg.tampon-tour — page large de 325 px pour un écran de 320 px _(320×568 sansJs)_
- **débordement horizontal** — `/` — section#photos > div.conteneur.photos-tete:nth-of-type(1) > div.tampon > svg.tampon-tour — page large de 379 px pour un écran de 375 px _(375×667 sansJs)_
- **débordement horizontal** — `/park` — body#haut > div:nth-of-type(4) « Appeler Réserver » — page large de 394 px pour un écran de 392 px _(390×844 normal)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/park` — div.conteneur.bloc-grille > figure.media.fx-fini > picture > img « Un papa règle la moto de son enfant casqué avant d » — gamme-parent (4/5, faible, 48 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/park` — div.conteneur.bloc-grille > figure.media > picture > img « Un papa règle la moto de son enfant casqué avant d » — gamme-parent (4/5, faible, 42 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### section sans visuel (4)

- **section sans visuel** — `/park` — section#ouverture « QUAND ROULER ? Le Park ouvre toute l'année le same » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/park` — section#faq « QUESTIONS FRÉQUENTES À partir de quel âge peut-on  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sebastien` — section#palmares « LE PALMARÈS D'UN CHAMPION Quinze ans de carrière,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sebastien` — section#frise « DE LA COURSE À LA TRANSMISSION AVRIL 2014 Le Shop  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 182 ms (différence 27 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 84 ms (différence 50 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 151 ms (différence 29 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (3)

- **retour avant : changement brusque** — `/park` — à 75 ms (différence 46 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/park` — à 109 ms (différence 33 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/park` — à 50 ms (différence 46 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/sebastien` — écran différent à la même position après rechargement (4.5 %), voir comparaisons/rechargement-sebastien-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/shop` — écran différent à la même position après rechargement (5.8 %), voir comparaisons/rechargement-shop-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/park` — span.jauge-pleine — calcul-session : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/shop` — ul.grille-vehicules — catalogue-tri : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — div.compte — compte-session : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : objet à manipuler non obligatoire ; calculateur de session et catalogue filtrable à la place.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : pas de fil imposé ; palette et damier tiennent le site.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 6. La scène est un geste du métier » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 7. L’action principale a un retour physique » dispensé (config.json) : v11 : conseil seulement.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : glisse voulue : voile noir à bords en damier, le drapeau de course.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2031 ms depuis le premier octet
- Ouverture /contact (1366×768) : 1970 ms depuis le premier octet
- Ouverture /park (1366×768) : 2143 ms depuis le premier octet
- Ouverture /sebastien (1366×768) : 2039 ms depuis le premier octet
- Ouverture /shop (1366×768) : 2075 ms depuis le premier octet
- film de l'ouverture /shop 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 1989 ms depuis le premier octet
- Ouverture /contact (390×844) : 1966 ms depuis le premier octet
- Ouverture /park (390×844) : 2027 ms depuis le premier octet
- film de l'ouverture /park 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sebastien (390×844) : 2037 ms depuis le premier octet
- Ouverture /shop (390×844) : 2044 ms depuis le premier octet
- film de l'ouverture /shop 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /sebastien 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 337 images d’intro, 16 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /contact : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /park : aucune section épinglée ou plein écran.
- Tient dans l'écran /sebastien : aucune section épinglée ou plein écran.
- Tient dans l'écran /shop : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 433, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 190, tâche la plus longue 0 ms
- Fluidité /park 1366×768 (molette) : 0 % d'images lentes sur 449, tâche la plus longue 0 ms
- Fluidité /sebastien 1366×768 (molette) : 1 % d'images lentes sur 278, tâche la plus longue 0 ms
- Fluidité /shop 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1369, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /park 390×844 (doigt) : 0 % d'images lentes sur 1354, tâche la plus longue 0 ms
- Fluidité /sebastien 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /shop 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Vitesse / : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /park : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /sebastien : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /shop : 0.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/park --seulement=fichiers,mesures
```
