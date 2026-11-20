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
