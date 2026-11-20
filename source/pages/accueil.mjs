/* Accueil MiniWheels, direction « Paddock ». Ordre de lecture : le Park ce samedi, la première fois, les pistes,
   le Shop, Séb, les photos, puis l'appel final. Chaque section a au moins un effet au défilement. */
import { html } from '../../outils/gabarit.mjs';
import { img, prix, titre, appelFinal, familles } from '../gabarits/aides.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

export default (c) => {
  const T = c.donnees.tarifs;
  const fam = familles(c);
  const pit = fam.find((f) => f.id === 'pit-bike');
  const n = c.donnees.catalogue.vehicules.length;
  const marques = ['YCF', 'Sherco', 'Kuberg', 'Hytrack', 'Fox', 'Scott', 'Fasthouse', 'Thor', 'Motul', 'Gaerne', 'Pirelli', 'Kenny'];
  return html`
<section class="hero" id="debut" data-tete>
  ${img(c, 'accueil-ouverture', { classe: 'hero-media', priorite: true, sizes: '100vw', cadrage: '50% 40%', attrs: 'data-fx="parallaxe" data-fx-force="8" data-boucle-css' })}
  <div class="hero-contenu conteneur">
    <p class="surtitre hero-surtitre masque-ecran-tres-bas">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre"><span class="ligne-masque"><span class="h-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="h-ligne">${c.t('accueil.hero.titre2a')} <em>${c.t('accueil.hero.titre2b')}</em></span></span></h1>
    <p class="hero-texte h-suite masque-ecran-bas">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions h-suite">
      ${c.lien('park', { ancre: 'reserver', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('shop', { ancre: 'catalogue', classe: 'bouton bouton--clair', texte: c.t('accueil.hero.action2') })}
    </p>
  </div>
  <a class="badge-park" href="${c.url('park', 'ouverture')}" data-libelle="${c.libelle('park')}" data-iris-centre="disque" data-info-cle data-boucle-css>
    <span class="badge-titre">${c.t('accueil.hero.badgeTitre')}</span>
    <strong class="badge-jour" data-prochain-jour>${c.t('accueil.hero.badgeJour')}</strong>
    <span class="badge-plage">${c.t('accueil.hero.badgePlage')}</span>
    <span class="badge-compte" data-compte-court aria-hidden="true"></span>
  </a>
</section>

<section class="trois clair" id="trois-en-un">
  <div class="conteneur trois-tete">
    ${titre(c, 'accueil.trois')}
    <p class="intro" data-anime>${c.t('accueil.trois.texte')}</p>
  </div>
  <ul class="conteneur trois-grille" data-anime="cascade">
    ${[
      ['park', 'accueil-park', 'park', '', 'parkLieu', 'parkTexte'],
      ['shop', 'accueil-shop', 'shop', 'catalogue', 'shopLieu', 'shopTexte'],
      ['shop', 'atelier-detail', 'atelier', 'atelier', 'atelierLieu', 'atelierTexte'],
    ].map(([pageCle, image, cle, ancre, lieu, texte]) => html`<li class="trois-carte">
      <a href="${c.url(pageCle, ancre)}" data-libelle="${c.libelle(pageCle)}">
        ${img(c, image, { classe: 'trois-media', ratio: '4 / 5', sizes: '(max-width: 760px) 90vw, 33vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
        <span class="trois-texte"><span class="trois-lieu">${c.t('accueil.trois.' + lieu)}</span><strong>${c.t('accueil.trois.' + cle)}</strong><span>${c.t('accueil.trois.' + texte)}</span></span>
      </a>
    </li>`)}
  </ul>
</section>

<section class="samedi sombre" id="samedi">
  <div class="conteneur samedi-grille">
    <div class="samedi-texte">
      <p class="surtitre" data-anime>${c.t('accueil.samedi.surtitre')}</p>
      <h2 class="titre titre--xl" data-anime="lignes">${c.t('accueil.samedi.titre')}</h2>
      <p class="samedi-quand" data-anime><strong data-prochain-long>${c.t('accueil.hero.badgeJour')}</strong> · ${c.t('accueil.hero.badgePlage')}</p>
      <div class="compte" data-effet="compte-session" aria-label="${c.s('accueil.samedi.dans')}">
        <span class="compte-libelle">${c.t('accueil.samedi.dans')}</span>
        <span class="compte-cases" data-compte>
          <span class="compte-case"><b data-c="j">0</b><i>j</i></span><span class="compte-case"><b data-c="h">00</b><i>h</i></span><span class="compte-case"><b data-c="m">00</b><i>min</i></span><span class="compte-case"><b data-c="s" data-effet="compte-session">00</b><i>s</i></span>
        </span>
      </div>
      <p class="petit" data-anime>${c.t('accueil.samedi.meteo')}</p>
    </div>
    ${img(c, 'accueil-samedi', { classe: 'samedi-media', ratio: '4 / 5', alt: c.s('accueil.samedi.photo'), sizes: '(max-width: 760px) 100vw, 45vw', cadrage: '35% 50%', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  </div>
  <ul class="conteneur tuiles" data-anime="cascade">
    <li class="tuile"><strong data-prix>${prix(T.location[0].prix)}</strong><span>${c.t('accueil.samedi.tuile1')}</span><em>${c.t('accueil.samedi.tuile1b')}</em></li>
    <li class="tuile"><strong data-prix>${prix(T.location[1].prix)}</strong><span>${c.t('accueil.samedi.tuile2')}</span><em>${c.t('accueil.samedi.tuile2b')}</em></li>
    <li class="tuile"><strong data-prix>${prix(T.acces[0].prix)}</strong><span>${c.t('accueil.samedi.tuile3')}</span><em>${c.t('accueil.samedi.tuile3b')}</em></li>
    <li class="tuile tuile--verte"><strong>${c.t('accueil.samedi.tuile4')}</strong><span>&nbsp;</span><em>${c.t('accueil.samedi.tuile4b')}</em></li>
  </ul>
  <div class="conteneur samedi-bas" data-anime>
    <p>${c.t('accueil.samedi.inclus')}</p>
    ${c.lien('park', { ancre: 'reserver', classe: 'bouton', texte: c.t('accueil.samedi.action'), attrs: 'data-survol="magnetique"' })}
  </div>
</section>

<section class="etapes clair2" id="premiere-fois">
  <div class="conteneur etapes-tete">
    ${titre(c, 'accueil.etapes')}
    <p class="intro" data-anime>${c.t('accueil.etapes.texte')}</p>
  </div>
  <div class="etapes-defile" tabindex="0" role="region" aria-label="${c.s('accueil.etapes.region')}">
    <div class="conteneur etapes-grille" data-anime="cascade">
      ${c.donnees.etapes.map((e, i) => html`<article class="etape" id="etape-${i + 1}">
        ${img(c, e.image, { classe: 'etape-media', ratio: '4 / 5', sizes: '(max-width: 760px) 74vw, 20vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
        <div class="etape-texte"><span class="etape-n">${String(i + 1).padStart(2, '0')}</span><h3>${e.titre}</h3><p>${e.texte}</p></div>
      </article>`)}
    </div>
  </div>
  <p class="conteneur etapes-action" data-anime>${c.lien('park', { ancre: 'initiation', classe: 'bouton bouton--sombre', texte: c.t('accueil.etapes.action') })}</p>
</section>

<section class="pistes clair" id="pistes">
  <div class="conteneur pistes-grille">
    <div class="pistes-texte">
      ${titre(c, 'accueil.pistes')}
      <p class="intro" data-anime>${c.t('accueil.pistes.texte')}</p>
      <div class="pistes-onglets" role="tablist" aria-label="${c.s('accueil.pistes.titre1')}" data-anime="cascade">
        ${c.donnees.pistes.map((p, i) => html`<button type="button" role="tab" class="piste-onglet" id="onglet-${p.id}" aria-controls="panneau-${p.id}" aria-selected="${i === 0 ? 'true' : 'false'}" data-piste="${p.id}"><strong>${p.nom}</strong><span>${p.pour}</span></button>`)}
      </div>
      <p class="petit" data-anime>${c.t('accueil.pistes.flat')}</p>
      ${c.lien('park', { ancre: 'pistes', classe: 'bouton bouton--sombre', texte: c.t('accueil.pistes.action') })}
    </div>
    <div class="pistes-scene" data-effet="trace-pistes">
      ${c.donnees.pistes.map((p, i) => html`<div class="piste-panneau" role="tabpanel" id="panneau-${p.id}" aria-labelledby="onglet-${p.id}"${i ? html` hidden` : ''}>
        ${img(c, p.image, { classe: 'piste-media', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 55vw' })}
        <div class="piste-carte">
          <svg class="piste-trace" viewBox="0 100 420 110" role="img" aria-label="${c.s('accueil.pistes.schema')} : ${p.nom}"><path d="${p.trace}" pathLength="1"/></svg>
          <p><strong>${p.court}</strong> ${p.texte}</p>
        </div>
      </div>`)}
    </div>
  </div>
</section>

<section class="shop-teaser clair" id="shop">
  <div class="conteneur shop-grille">
    <div class="shop-texte">
      <h2 class="titre titre--xl" data-anime="lignes">${c.t('accueil.shop.titre1')} <span class="surligne">${c.t('accueil.shop.titre2')} ${prix(pit.min)}</span></h2>
      <p class="intro" data-anime>${c.t('accueil.shop.texte')}</p>
      <ul class="familles" data-anime="cascade">
        ${fam.map((f) => html`<li>${c.lien('shop', { ancre: 'catalogue', params: `famille=${f.id}`, classe: 'famille', texte: html`<strong>${f.court}</strong><span>${c.t('accueil.shop.modeles', { n: f.n })}</span><b data-prix>${c.t('accueil.shop.des')} ${prix(f.min)}</b>` })}</li>`)}
      </ul>
      ${c.lien('shop', { ancre: 'catalogue', classe: 'bouton bouton--sombre', texte: c.t('accueil.shop.action', { n }) })}
    </div>
    ${img(c, 'gamme-pilot', { classe: 'shop-media', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 46vw', cadrage: '40% 50%', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  </div>
  <div class="marques" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${marques.map((m) => html`<span>${m}</span> `)}${marques.map((m) => html`<span>${m}</span> `)}</p>
  </div>
</section>

<section class="seb sombre" id="seb">
  <div class="conteneur seb-grille">
    ${img(c, 'seb-portrait', { classe: 'seb-media', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    <div class="seb-texte">
      <p class="surtitre" data-anime>${c.t('accueil.seb.surtitre')}</p>
      ${titre(c, 'accueil.seb', { classe: 'titre--xl' })}
      <p data-anime>${c.t('accueil.seb.texte')}</p>
      <ul class="palmares" data-anime="cascade">
        ${c.donnees.palmares.slice(0, 4).map((p) => html`<li><strong class="palmares-n" data-compteur="${p.n}">${p.n}</strong><span>${p.titre}${p.detail ? html` <em>${p.detail}</em>` : ''}</span></li>`)}
      </ul>
      <blockquote class="citation" data-anime><p>« ${c.t('accueil.seb.citation')} »</p></blockquote>
      ${c.lien('sebastien', { classe: 'bouton', texte: c.t('accueil.seb.action') })}
    </div>
  </div>
</section>

<section class="photos clair" id="photos">
  <div class="conteneur photos-tete">
    ${titre(c, 'accueil.photos')}
    <p class="intro" data-anime>${c.t('accueil.photos.texte')}</p>
  </div>
  <div class="pellicule">
    <ul class="pellicule-rangee" data-sens="1" data-effet="pellicule">${[1, 2, 3, 4, 5].map((k) => html`<li>${img(c, `samedi-${k}`, { ratio: '4 / 3', sizes: '(max-width: 760px) 70vw, 30vw' })}</li>`)}</ul>
    <ul class="pellicule-rangee" data-sens="-1" data-effet="pellicule">${[6, 8, 9, 10].map((k) => html`<li>${img(c, `samedi-${k}`, { ratio: '4 / 3', sizes: '(max-width: 760px) 70vw, 30vw' })}</li>`)}</ul>
  </div>
  <p class="conteneur photos-action" data-anime><a class="bouton bouton--sombre" href="https://www.facebook.com/MiniWheels.Bike" target="_blank" rel="noopener">${c.t('accueil.photos.action')}</a></p>
</section>

${appelFinal(c, 'accueil.fin', { image: 'accueil-appel', photoAlt: c.s('accueil.fin.photo') })}
`;
};
