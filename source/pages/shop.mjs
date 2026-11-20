/* Le Shop & l'atelier : grand titre puis bandeau (étiquette de prix qui tourne au défilement), catalogue filtrable,
   paiement, atelier en plein cadre, marques, venir au Shop. */
import { html } from '../../outils/gabarit.mjs';
import { img, prix, titre, appelFinal, familles } from '../gabarits/aides.mjs';

export const page = { cle: 'shop', fichier: 'shop', imagePartage: 'shop-ouverture-1280.webp' };

export default (c) => {
  const cat = c.donnees.catalogue, fam = familles(c), H = c.donnees.horaires.shop;
  const nomFam = Object.fromEntries(cat.familles.map((f) => [f.id, f]));
  const min = Math.min(...cat.vehicules.filter((v) => v.famille === 'pit-bike').map((v) => v.prix));
  const energieDe = (v) => nomFam[v.famille].energie || (/800W|électrique/i.test(v.nom) ? 'électrique' : 'thermique');
  return html`
<section class="page-shop-tete" id="debut" data-tete>
  <div class="conteneur shop-tete-haut">
    <div>
      <p class="surtitre h-suite">${c.t('shop.tete.surtitre')}</p>
      <h1 class="titre"><span class="ligne-masque"><span class="h-ligne">${c.t('shop.tete.titre1')}</span></span><span class="ligne-masque"><span class="h-ligne">${c.t('shop.tete.titre2')} <span class="surligne">${prix(min)}</span></span></span></h1>
    </div>
    <p class="etiquette" data-effet="etiquette" data-iris-centre="disque"><strong>${cat.vehicules.length}</strong><small>${c.t('shop.tete.vehicules')}</small></p>
  </div>
  <div class="conteneur shop-tete-bas">
    <p class="h-suite masque-ecran-bas">${c.t('shop.tete.texte')}</p>
    <p class="tete-actions h-suite" style="margin:0">
      <a class="bouton" href="#catalogue" data-action-principale data-survol="magnetique">${c.t('shop.tete.action')}</a>
      <span class="statut statut--clair" data-statut="shop" data-info-cle>${H.lignes[0][0]} · ${H.lignes[0][1]}</span>
    </p>
  </div>
  ${img(c, 'shop-ouverture', { classe: 'shop-bandeau', priorite: true, sizes: '100vw', cadrage: '50% 62%', attrs: 'data-fx="parallaxe" data-fx-force="14"' })}
</section>

<section class="clair2" id="catalogue">
  <div class="conteneur" data-catalogue>
    ${titre(c, 'shop.catalogue')}
    <p class="intro" data-anime>${c.t('shop.catalogue.texte')}</p>
    <div class="filtres" role="group" aria-label="${c.s('shop.catalogue.filtres')}">
      <button type="button" class="filtre" data-famille-filtre="tout" aria-pressed="true">${c.t('shop.catalogue.tout')}</button>
      ${fam.map((f) => html`<button type="button" class="filtre" data-famille-filtre="${f.id}" aria-pressed="false">${f.court} · ${f.n}</button>`)}
    </div>
    <div class="filtres-bas">
      <p class="resultats" data-resultats data-modele="${c.s('shop.catalogue.resultats')}" aria-live="polite">${c.t('shop.catalogue.resultats', { n: cat.vehicules.length })}</p>
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <label>${c.t('shop.catalogue.energie')} <select data-energie><option value="tout">${c.t('shop.catalogue.tout')}</option><option value="thermique">${c.t('shop.catalogue.thermique')}</option><option value="électrique">${c.t('shop.catalogue.electrique')}</option></select></label>
        <label>${c.t('shop.catalogue.tri')} <select data-tri><option value="ordre">—</option><option value="prix">${c.t('shop.catalogue.triPrix')}</option><option value="prix-desc">${c.t('shop.catalogue.triPrixDesc')}</option><option value="nom">${c.t('shop.catalogue.triNom')}</option></select></label>
      </div>
    </div>
    <ul class="grille-vehicules" data-effet="catalogue-tri">
      ${cat.vehicules.map((v, i) => html`<li class="vehicule" id="v-${v.id}" data-famille="${v.famille}" data-energie="${energieDe(v)}" data-prix="${v.prix}" data-nom="${v.nom}" data-ordre="${i}">
        <div class="vehicule-plaque">
          ${v.image ? img(c, v.image, { alt: `${v.nom}, photo du constructeur`, sizes: '(max-width: 760px) 90vw, 300px' }) : html`<span aria-hidden="true">${v.cc ? v.cc + ' cc' : (nomFam[v.famille].marque || nomFam[v.famille].court)}</span><small>${nomFam[v.famille].court}</small>`}
        </div>
        ${v.badge ? html`<span class="vehicule-badge">${v.badge}</span>` : ''}
        <div class="vehicule-corps">
          <h3>${v.nom}</h3>
          <p class="vehicule-infos">${[nomFam[v.famille].court, v.gamme, v.cc ? v.cc + ' cc' : '', v.public].filter(Boolean).join(' · ')}</p>
          <p class="vehicule-prix" data-prix>${prix(v.prix)}</p>
          ${c.lien('contact', { ancre: 'ecrire', params: `sujet=shop&modele=${encodeURIComponent(v.nom)}`, texte: c.t('shop.catalogue.demander') })}
        </div>
      </li>`)}
    </ul>
    <p class="aucun" data-aucun hidden>${c.t('shop.catalogue.aucun')}</p>
    <div class="payer" data-anime>
      <strong>4×</strong>
      <div><h3>${c.t('shop.payer.titre')}</h3><p>${c.t('shop.payer.texte')}</p></div>
    </div>
  </div>
</section>

<section class="atelier-plein" id="atelier">
  ${img(c, 'atelier-ouverture', { sizes: '100vw', cadrage: '60% 50%', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur">
    <div class="atelier-texte">
      <p class="surtitre" data-anime>${c.t('shop.atelier.surtitre')}</p>
      <h2 class="titre titre--xl" data-anime="lignes">${c.t('shop.atelier.titre1')} <em style="color:var(--vert)">${c.t('shop.atelier.titre2')}</em></h2>
      <p class="intro" data-anime>${c.t('shop.atelier.texte')}</p>
      <ul class="atelier-liste" data-anime="cascade">${c.donnees.atelier.map((x) => html`<li>${x}</li>`)}</ul>
      ${c.lien('contact', { ancre: 'ecrire', params: 'sujet=atelier', classe: 'bouton', texte: c.t('shop.atelier.action') })}
    </div>
  </div>
</section>

<section class="clair" id="marques">
  <div class="marques" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${cat.marques.map((m) => html`<span>${m}</span> `)}</p>
    <p data-fx-rangee data-sens="-1">${[...cat.marques].reverse().map((m) => html`<span>${m}</span> `)}</p>
  </div>
  <div class="conteneur bloc-grille" style="margin-top:clamp(48px,7vw,96px)">
    <div>
      ${titre(c, 'shop.venir')}
      <p class="intro" data-anime>${c.t('shop.venir.texte')}</p>
      <dl class="lieu-horaires" data-anime>${H.lignes.map((l) => html`<dt>${l[0]}</dt><dd>${l[1]}</dd>`)}</dl>
      <p class="tete-actions" data-anime>
        <a class="bouton bouton--sombre" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appelerShop')} · ${c.site.contact.telephone}</a>
        <a class="bouton bouton--contour" href="http://bit.ly/MW-Trouver-SHOP" target="_blank" rel="noopener">${c.t('commun.itineraire')}</a>
      </p>
    </div>
    ${img(c, 'shop-facade', { ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

${appelFinal(c, 'shop.fin', { image: 'shop-appel' })}
`;
};
