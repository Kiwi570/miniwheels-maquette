/* 404 « Sortie de piste » : photo plein cadre, titre et deux chemins pour remonter en selle. */
import { html } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/aides.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="page-404" id="debut" data-tete>
  ${img(c, 'page-404', { priorite: true, sizes: '100vw', cadrage: '55% 40%', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="conteneur">
    <p class="surtitre h-suite">${c.t('introuvable.surtitre')}</p>
    <h1 class="titre titre--xl" data-iris-centre><span class="ligne-masque"><span class="h-ligne">${c.t('introuvable.titre1')}</span></span><span class="ligne-masque"><span class="h-ligne"><em>${c.t('introuvable.titre2')}</em></span></span></h1>
    <p class="intro h-suite" data-info-cle>${c.t('introuvable.texte')}</p>
    <p class="tete-actions h-suite">
      ${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
      ${c.lien('park', { classe: 'bouton bouton--contour', texte: c.t('introuvable.park') })}
    </p>
  </div>
</section>
`;
