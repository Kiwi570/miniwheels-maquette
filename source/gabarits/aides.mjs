/* Aides communes aux pages de MiniWheels : images du plan, prix, titres en deux temps, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Images générées par Grok : rangées dans assets/images/grok/ (mention « Illustration générée » posée par c.media). */
const GROK = new Set(['atelier-ouverture', 'atelier-detail', 'equipement']);

export function img(c, nom, o = {}) {
  const e = (c.donnees.images || {})[nom] || {};
  return c.media({
    nom: GROK.has(nom) ? `grok/${nom}` : nom,
    alt: o.alt ?? e.alt ?? '',
    cadrage: o.cadrage || '50% 50%',
    cadrageMobile: o.cadrageMobile,
    sizes: o.sizes || '100vw',
    priorite: !!o.priorite,
    classe: o.classe || '',
    ratio: o.ratio,
    legende: o.legende,
    attrs: o.attrs || '',
  });
}

export const prix = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

/* Titre de section : une première partie, puis un mot ou groupe mis en valeur (vert sur fond sombre, surligné sur fond clair). */
export function titre(c, cle, { niveau = 2, classe = '', id = '' } = {}) {
  const t2 = c.s(`${cle}.titre2`);
  return html`<h${niveau} class="titre ${classe}"${id ? brut(` id="${id}"`) : ''} data-anime="lignes">${c.t(`${cle}.titre1`)}${t2 ? html` <em>${t2}</em>` : ''}</h${niveau}>`;
}

/* Appel final, commun à toutes les pages : photo forte propre à la page (ou visuel), deux lieux, deux actions. */
export function appelFinal(c, cle, { image, photoAlt } = {}) {
  return html`<section class="fin sombre" id="fin">
  ${image ? img(c, image, { classe: 'fin-media', alt: photoAlt, sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' }) : ''}
  <div class="conteneur fin-contenu">
    <h2 class="titre titre--xl" data-anime="lignes">${c.t(`${cle}.titre1`)} <em>${c.t(`${cle}.titre2`)}</em></h2>
    <p class="fin-texte" data-anime>${c.t(`${cle}.texte`)}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('park', { ancre: 'reserver', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneParkLien}">${c.t('commun.appelerPark')} · ${c.site.contact.telephonePark}</a>
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appelerShop')} · ${c.site.contact.telephone}</a>
    </p>
  </div>
  <div class="damier" aria-hidden="true"></div>
</section>`;
}

/* Minimum de prix par famille, calculé sur le catalogue. */
export function familles(c) {
  const v = c.donnees.catalogue.vehicules;
  return c.donnees.catalogue.familles.map((f) => {
    const liste = v.filter((x) => x.famille === f.id);
    return { ...f, n: liste.length, min: Math.min(...liste.map((x) => x.prix)) };
  });
}

/* Petite pit bike dessinée en code : elle roule sur la piste des cinq étapes (roues qui tournent). */
export const moto = html`<svg class="moto" viewBox="0 0 64 44" aria-hidden="true">
  <g class="roue" style="transform-origin:13px 32px"><circle cx="13" cy="32" r="9"/><path d="M13 23v18M4 32h18"/></g>
  <g class="roue" style="transform-origin:51px 32px"><circle cx="51" cy="32" r="9"/><path d="M51 23v18M42 32h18"/></g>
  <path class="cadre" d="M13 32 L26 19 L40 19 L51 32 M26 19 L22 11 M40 19 L45 9 L51 9"/>
  <path class="selle" d="M23 17 L42 17 L38 23 L28 23 Z"/>
</svg>`;

/* Pictogrammes dessinés en code pour les véhicules sans photo sûre. */
export const quad = html`<svg class="picto" viewBox="0 0 72 44" aria-hidden="true">
  <g class="roue" style="transform-origin:16px 32px"><circle cx="16" cy="32" r="9"/></g>
  <g class="roue" style="transform-origin:56px 32px"><circle cx="56" cy="32" r="9"/></g>
  <path class="cadre" d="M8 22 L22 18 L48 18 L64 22 M30 18 L33 10 M44 18 L48 9 L56 9 M25 32 L47 32"/>
  <path class="selle" d="M30 16 L46 16 L43 21 L33 21 Z"/>
</svg>`;
export const ssv = html`<svg class="picto" viewBox="0 0 80 46" aria-hidden="true">
  <g class="roue" style="transform-origin:17px 34px"><circle cx="17" cy="34" r="9"/></g>
  <g class="roue" style="transform-origin:62px 34px"><circle cx="62" cy="34" r="9"/></g>
  <path class="cadre" d="M6 26 L72 26 L74 20 L56 18 L46 6 L24 6 L18 18 L8 20 Z M26 34 L53 34 M30 6 L30 18 M46 6 L52 18"/>
</svg>`;
