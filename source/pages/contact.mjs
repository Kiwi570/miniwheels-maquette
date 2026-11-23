/* Contact : grand titre, puis les deux lieux côte à côte (statut en direct, horaires, itinéraire), formulaire. */
import { html } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/aides.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'shop-facade-784.webp' };

export default (c) => {
  const H = c.donnees.horaires, C = c.site.contact;
  const lieu = (cle, image, tel, telLien, adresse, itin, attrs = '') => html`<article class="lieu">
    ${img(c, image, { classe: 'lieu-media', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 50vw', priorite: cle === 'shop', attrs })}
    <div class="lieu-corps">
      <h2>${c.t(`contact.${cle}.titre`)}</h2>
      <p><span class="statut" data-statut="${cle}">${H[cle].lignes[0][0]} · ${H[cle].lignes[0][1]}</span></p>
      <p>${adresse}</p>
      <dl class="lieu-horaires">${H[cle].lignes.map((l) => html`<dt>${l[0]}</dt><dd>${l[1]}</dd>`)}</dl>
      <p class="petit">${c.t(`contact.${cle}.texte`)}${cle === 'park' ? html` ${H.park.reserve}` : ''}</p>
      <p class="lieu-actions">
        <a class="bouton${cle === 'park' ? '' : ' bouton--sombre'}" href="tel:${telLien}">${tel} · ${c.t(`contact.${cle}.qui`)}</a>
        <a class="bouton bouton--contour" href="${itin}" target="_blank" rel="noopener">${c.t('commun.itineraire')}</a>
      </p>
    </div>
  </article>`;
  return html`
<section class="page-contact-tete" id="debut" data-tete>
  <div class="conteneur">
    <p class="surtitre h-suite">${c.t('contact.tete.surtitre')}</p>
    <h1 class="titre"><span class="ligne-masque"><span class="h-ligne">${c.t('contact.tete.titre1')}</span></span><span class="ligne-masque"><span class="h-ligne"><span class="surligne">${c.t('contact.tete.titre2')}</span></span></span></h1>
    <p class="intro h-suite masque-ecran-bas">${c.t('contact.tete.texte')}</p>
    <p class="tete-actions h-suite">
      <span class="statut statut--clair" data-statut="shop" data-info-cle>${H.shop.lignes[0][0]} · ${H.shop.lignes[0][1]}</span>
      <a class="bouton" href="tel:${C.telephoneParkLien}" data-action-principale>${c.t('commun.appelerPark')} · ${C.telephonePark}</a>
      <a class="bouton bouton--sombre" href="tel:${C.telephoneLien}">${c.t('commun.appelerShop')} · ${C.telephone}</a>
    </p>
    <div class="lieux" data-anime="cascade" data-iris-centre>
      ${lieu('shop', 'shop-facade', C.telephone, C.telephoneLien, C.adresse, 'http://bit.ly/MW-Trouver-SHOP', 'data-fx="zoom"')}
      ${lieu('park', 'contact-park', C.telephonePark, C.telephoneParkLien, C.adressePark, 'http://bit.ly/MW-Trouver-PARK', 'data-fx="zoom"')}
    </div>
  </div>
</section>

<section class="clair2" id="ecrire">
  <div class="conteneur formulaire-grille">
    <div>
      <h2 class="titre" data-anime="lignes">${c.t('contact.formulaire.titre1')}</h2>
      <p class="intro" data-anime>${c.t('contact.formulaire.texte')}</p>
      <div data-anime>
        <p><b>${c.t('contact.reseaux.titre')}</b><br>${c.t('contact.reseaux.texte')}</p>
        <p class="reseaux">
          <a class="bouton bouton--sombre" href="https://www.facebook.com/MiniWheels.Bike" target="_blank" rel="noopener" aria-label="${c.s('commun.reseauFacebook')}">Facebook</a>
          <a class="bouton bouton--contour" href="https://www.instagram.com/miniwheels.bike/" target="_blank" rel="noopener" aria-label="${c.s('commun.reseauInstagram')}">Instagram</a>
        </p>
      </div>
      <div class="corine" data-anime>
        ${img(c, 'equipe-coco', { ratio: '1', sizes: '96px' })}
        <p><b>${c.t('contact.corine.titre')}</b><br>${c.t('contact.corine.texte')}</p>
      </div>
    </div>
    <form class="formulaire" data-formulaire novalidate data-anime>
      <div class="champs-deux">
        <div class="champ"><label for="f-nom">${c.t('contact.formulaire.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="f-email">${c.t('contact.formulaire.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      </div>
      <div class="champs-deux">
        <div class="champ"><label for="f-tel">${c.t('contact.formulaire.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
        <div class="champ"><label for="f-sujet">${c.t('contact.formulaire.sujet')}</label>
          <select id="f-sujet" name="sujet">
            <option value="park">${c.t('contact.formulaire.sujetPark')}</option>
            <option value="shop">${c.t('contact.formulaire.sujetShop')}</option>
            <option value="atelier">${c.t('contact.formulaire.sujetAtelier')}</option>
            <option value="stage">${c.t('contact.formulaire.sujetStage')}</option>
            <option value="cadeau">${c.t('contact.formulaire.sujetCadeau')}</option>
          </select>
        </div>
      </div>
      <div class="champ"><label for="f-message">${c.t('contact.formulaire.message')}</label><textarea id="f-message" name="message" rows="6" required data-modele-prefixe="Je suis intéressé par : "></textarea></div>
      <p class="mention-donnees">${c.t('contact.formulaire.donnees')}</p>
      <button type="submit" class="bouton bouton--sombre">${c.t('contact.formulaire.envoyer')}</button>
      <p data-message-envoi hidden></p>
    </form>
  </div>
  <div class="damier" aria-hidden="true"></div>
</section>
`;
};
