# MiniWheels · maquette v2

Maquette du site de MiniWheels (Shop & Park by Séb Guillaume), direction « Paddock » : blanc plaque, noir pneu, le vert du logo (#00ED01), titres Archivo très condensée italique, texte Figtree.

Adresse prévue : https://miniwheels-maquette.vercel.app (site statique, sans étape de construction).

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Intro « grille de départ », prochaine ouverture du Park en direct (compte à rebours qui bascule), trois en un, tarifs, première session en 5 étapes (pit bike qui roule au défilement), trois pistes en profil avec pilote animé, Shop, Séb, photos avec tampon tournant, appel final |
| Le Park | `/park` | Semaine en 7 cases et compte à rebours, pistes, location avec calcul du prix, jauge de temps de roulage et créneau du samedi (simulés), accès avec sa moto, Pass'Park et Fid'Park, initiation, équipement, équipe, FAQ |
| Le Shop & l'atelier | `/shop` | Catalogue filtrable de 65 véhicules (15 à l'arrivée puis « Voir les autres » ; famille, énergie, tri ; filtre gardé dans l'adresse ; pictogrammes pour les véhicules sans photo), paiement en 4 fois, atelier, marques, venir au Shop |
| Séb & Academy | `/sebastien` | Palmarès, frise 2014-2018, archives de course en polaroïds, stages Seb'One Academy avec badge tournant |
| Contact | `/contact` | Les deux lieux avec statut en direct, horaires et itinéraires, carte « Corine vous répond », formulaire simulé (sujet et modèle préremplis depuis le catalogue) |
| 404 | `/404` | « Sortie de piste » |

Pages du site actuel non reprises (possibles dans une version suivante) : fiches produits détaillées, pages de gammes YCF, photos du Park (albums), carte cadeau, règlement intérieur, charte.

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; données : `donnees/*.json` (catalogue, tarifs, horaires, pistes, étapes, palmarès, FAQ, structure schema.org).
- Pages : `source/pages/*.mjs`, gabarits : `source/gabarits/`, style : `assets/css/site.css`, effets : `assets/js/site.js`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les `.html` à la main).
- Images : `plan-images.json`, puis le pipeline de la bibliothèque (`produire.mjs`), puis `sh _suivi/outils/ranger-grok.sh` (les trois images Grok vont dans `assets/images/grok/`, avec la mention « Illustration générée »).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).

## À fournir par le client (à compléter)

- Mentions légales : à compléter. Éléments connus sur le site actuel : S.G.P., EURL au capital de 2 000 €, SIRET 501 466 940 00019, 21 route de Mantes, 28260 Le Mesnil-Simon, directeur de la publication Sébastien Guillaume. L'hébergeur deviendra Vercel Inc. (adresse à vérifier sur vercel.com au moment de la mise en ligne).
- Politique de confidentialité (RGPD) : à compléter (la mention a été retirée du formulaire de contact en v2 ; à rajouter avec un lien quand la page existera).
- Adresse e-mail de contact : aucune sur le site actuel.
- Crédits photos : photos du Park (Coco), photos constructeur YCF, Sherco, Kuberg, quads ; à confirmer.
- Crédits des illustrations générées : trois images créées par IA (atelier, chaîne, équipement), marquées « Illustration générée ». Garder cette mention sur le site final.
- Assurances et qualifications : Brevet d'État de Séb (cité sur le site actuel) ; homologation FFM des pistes (citée) : numéro ou attestation si le client veut l'afficher.

## Retiré ou remplacé faute d'information

- Prix du Pass'Park : non affiché (le site actuel donne 100 € et 150 € pour 12 entrées, et aucun prix pour les non licenciés). La maquette dit seulement « 12 entrées pour le prix de 10 ».
- Dates des stages Seb'One Academy : publiées en image et en PDF sur le site actuel ; la maquette dit « dates données par téléphone ».
- Âges et tailles conseillés par moto, fiches techniques : absents du site actuel, non affichés.
- Horaires du Shop le lundi et le dimanche : non mentionnés sur le site actuel ; la maquette les considère fermés (à confirmer).
- Jours fériés et fermetures exceptionnelles : inconnus ; le statut « ouvert » ne les connaît pas.
- Avis clients : aucun avis reproduit (le site actuel renvoie vers Facebook, Yelp et Pages Jaunes).
- Lien YouTube : non repris (adresse exacte à confirmer).
- Photos de véhicules : 28 véhicules sur 65 ont leur photo dans la maquette (celles dont le modèle est sûr) ; les autres ont un pictogramme (pit bike, quad ou SSV).

## Incohérences du site actuel à signaler au client

- Pit bikes « à partir de 1 049 € » sur la page Shop, alors que la YCF Lite 88 S et la Lite 125 sont listées à 999 € ; quads « à partir de 569 € » (499 € dans la liste) ; Sherco « à partir de 3 085 € » (3 499 € dans la liste). La maquette calcule les prix d'appel sur le catalogue.
- Pass'Park FFM : deux prix différents.
- Park ouvert « 14 h-18 h », location « 14 h 30-18 h ».
- Location « 80 cc » dans un titre, « 88 cc » dans le texte.
- Tarifs « au 1er janvier 2023 », modèles Sherco 2023, copyright 2014-2023 : à mettre à jour.
- Albums photo : #164 daté du 8 juin 2014, albums #111 et suivants en double.
- « Seb'One », « Séb'One » et « Séb'one » : une seule graphie à choisir (la maquette écrit Seb'One).

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), réservation et formulaire simulés (à brancher sur un vrai service ou à remplacer par le téléphone), mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les trois images créées par IA.
