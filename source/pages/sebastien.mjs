/* Séb & Seb'One Academy : « SÉB » géant derrière le portrait en noir et blanc (lettres qui s'écartent au défilement),
   palmarès, frise 2014-2018, archives de course, stages de l'Academy. */
import { html } from '../../outils/gabarit.mjs';
import { img, prix, titre, appelFinal } from '../gabarits/aides.mjs';

export const page = { cle: 'sebastien', fichier: 'sebastien', imagePartage: 'seb-portrait-784.webp' };

export default (c) => html`
<section class="page-seb-tete" id="debut" data-tete>
  <p class="seb-geant" aria-hidden="true" data-audit-ignorer>${['S', 'É', 'B'].map((l) => html`<span data-effet="seb-geant">${l}</span>`)}</p>
  <div class="seb-tete-media" data-iris-centre>
    ${img(c, 'seb-portrait', { priorite: true, sizes: '(max-width: 760px) 100vw, 46vw', cadrage: '35% 40%' })}
  </div>
  <div class="seb-tete-texte">
    <p class="surtitre h-suite">${c.t('seb.tete.surtitre')}</p>
    <h1 class="titre"><span class="ligne-masque"><span class="h-ligne">${c.t('seb.tete.titre')}</span></span></h1>
    <p class="intro h-suite">${c.t('seb.tete.texte')}</p>
    <p class="tete-actions h-suite"><a class="bouton" href="#academy" data-action-principale data-survol="magnetique">${c.t('seb.tete.action')}</a><span class="statut" data-info-cle>${c.t('seb.tete.info')}</span></p>
  </div>
</section>

<section class="sombre" id="palmares" style="padding-top:clamp(32px,5vw,64px)">
  <div class="conteneur">
    ${titre(c, 'seb.palmares')}
    <p class="intro" data-anime>${c.t('seb.palmares.texte')}</p>
    <ul class="palmares palmares--grand" data-anime="cascade">
      ${c.donnees.palmares.map((p) => html`<li><strong class="palmares-n" data-compteur="${p.n}">${p.n}</strong><span>${p.titre}${p.detail ? html` <em>${p.detail}</em>` : ''}</span></li>`)}
    </ul>
  </div>
</section>

<section class="sombre" id="frise" style="padding-top:0">
  <div class="conteneur">
    ${titre(c, 'seb.frise')}
    <ol class="frise" data-anime="cascade">
      <li><strong>${c.t('seb.frise.a1')}</strong><p>${c.t('seb.frise.t1')}</p></li>
      <li><strong>${c.t('seb.frise.a2')}</strong><p>${c.t('seb.frise.t2')}</p></li>
      <li><strong>${c.t('seb.frise.a3')}</strong><p>${c.t('seb.frise.t3')}</p></li>
    </ol>
    <div style="position:relative;height:3px;margin-top:-3px"><span class="frise-trait" data-effet="frise" aria-hidden="true"></span></div>
  </div>
</section>

<section class="clair" id="archives">
  <div class="conteneur">
    ${titre(c, 'seb.archives')}
    <p class="intro" data-anime>${c.t('seb.archives.texte')}</p>
  </div>
  <div class="archives" tabindex="0" role="region" aria-label="${c.s('seb.archives.region')}" data-anime="cascade">
    ${[1, 2, 3, 4, 5, 6, 7].map((k) => html`<div class="archive">${img(c, `archive-${k}`, { ratio: '1', sizes: '(max-width: 760px) 70vw, 24vw', attrs: 'data-fx="vitesse"' })}</div>`)}
  </div>
</section>

<section class="clair2" id="academy">
  <div class="conteneur bloc-grille" style="align-items:start">
    <div>
      <p class="surtitre" data-anime>${c.t('seb.academy.surtitre')}</p>
      ${titre(c, 'seb.academy')}
      <p class="intro" data-anime>${c.t('seb.academy.texte')}</p>
      <div class="academy-prix" data-anime="cascade">
        <div><strong data-prix>${prix(45)}</strong><span>${c.t('seb.academy.prix1')}</span></div>
        <div><strong data-prix>${prix(400)}</strong><span>${c.t('seb.academy.prix2')}</span></div>
      </div>
      <div class="academy-fiches" data-anime="cascade">
        ${['format', 'niveau', 'moto', 'equipement', 'licence'].map((k) => html`<div><h3>${c.t('seb.academy.' + k)}</h3><p>${c.t('seb.academy.' + k + 'Texte')}</p></div>`)}
      </div>
      <p data-anime><b>${c.t('seb.academy.dates')}</b></p>
      <p class="tete-actions" data-anime>
        <a class="bouton bouton--sombre" href="tel:${c.site.contact.telephoneLien}">${c.t('seb.academy.action')} · ${c.site.contact.telephone}</a>
        ${c.lien('contact', { ancre: 'ecrire', params: 'sujet=stage', classe: 'bouton bouton--contour', texte: c.t('contact.formulaire.titre1') })}
      </p>
    </div>
    <div style="display:grid;gap:16px">
      ${img(c, 'academy-stage', { ratio: '4 / 5', alt: c.s('seb.academy.photo'), sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
      <div style="display:flex;gap:16px;align-items:center" data-anime>
        ${img(c, 'academy-badge', { classe: 'academy-badge', ratio: '1', sizes: '150px' })}
        ${img(c, 'academy-seb', { ratio: '4 / 5', sizes: '200px', classe: 'academy-badge' })}
      </div>
    </div>
  </div>
</section>

${appelFinal(c, 'seb.fin', { image: 'seb-appel' })}
`;
