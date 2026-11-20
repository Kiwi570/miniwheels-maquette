/* Le Park : ouverture coupée en deux (titre et statut à gauche, vue d'en haut à droite, balises qui défilent),
   puis quand rouler, les pistes, la location avec calcul et créneau, avec sa moto, l'équipement, l'équipe, la FAQ. */
import { html } from '../../outils/gabarit.mjs';
import { img, prix, titre, appelFinal } from '../gabarits/aides.mjs';

export const page = { cle: 'park', fichier: 'park', imagePartage: 'park-ouverture-1280.webp' };

export default (c) => {
  const T = c.donnees.tarifs, H = c.donnees.horaires.park;
  return html`
<section class="page-park-tete" id="debut" data-tete>
  <div class="park-tete-texte">
    <p class="surtitre h-suite">${c.t('park.tete.surtitre')}</p>
    <h1 class="titre"><span class="ligne-masque"><span class="h-ligne">${c.t('park.tete.titre1')}</span></span><span class="ligne-masque"><span class="h-ligne"><span class="surligne">${c.t('park.tete.titre2')}</span></span></span></h1>
    <p class="intro h-suite masque-ecran-bas">${c.t('park.tete.texte')}</p>
    <p class="tete-chiffres h-suite masque-ecran-tres-bas">${c.t('park.tete.chiffres')}</p>
    <p class="tete-actions h-suite">
      <a class="bouton" href="#reserver" data-action-principale data-survol="magnetique">${c.t('park.tete.action')}</a>
      <span class="statut statut--clair" data-statut="park" data-info-cle>${H.lignes[0][0]} · ${H.lignes[0][1]}</span>
    </p>
  </div>
  <div class="park-tete-media" data-iris-centre>
    ${img(c, 'park-ouverture', { priorite: true, sizes: '(max-width: 760px) 100vw, 56vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div class="balises" data-effet="balises" aria-hidden="true"></div>
  </div>
</section>

<section class="sombre" id="ouverture">
  <div class="conteneur">
    <h2 class="titre" data-anime="lignes">${c.t('park.ouverture.titre')}</h2>
    <p class="intro" data-anime>${c.t('park.ouverture.texte')}</p>
    <ul class="horaires-cartes" data-anime="cascade">
      ${H.lignes.map((l) => html`<li class="horaire"><span>${l[0]}</span><strong>${l[1]}</strong></li>`)}
    </ul>
    <div class="compte" style="margin-top:28px">
      <span class="compte-libelle">${c.t('accueil.samedi.dans')} · <span data-prochain-long>${c.t('accueil.hero.badgeJour')}</span></span>
      <span class="compte-cases" data-compte>
        <span class="compte-case"><b data-c="j">0</b><i>j</i></span><span class="compte-case"><b data-c="h">00</b><i>h</i></span><span class="compte-case"><b data-c="m">00</b><i>min</i></span><span class="compte-case"><b data-c="s" data-effet="compte-session">00</b><i>s</i></span>
      </span>
    </div>
    <p class="petit" data-anime>${H.reserve}</p>
  </div>
</section>

<section class="clair2" id="pistes">
  <div class="conteneur">
    <h2 class="titre" data-anime="lignes">${c.t('park.pistes.titre1')}</h2>
    <p class="intro" data-anime>${c.t('park.pistes.texte')}</p>
    <ul class="pistes-liste" data-anime="cascade">
      ${c.donnees.pistes.map((p) => html`<li class="piste-fiche" id="piste-${p.id}">
        ${img(c, p.image, { ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 33vw', attrs: 'data-fx="zoom"' })}
        <div class="piste-fiche-corps"><h3>${p.nom}</h3><p class="pour">${p.pour}</p><p>${p.texte}</p>${p.citation ? html`<p class="petit"><em>« ${p.citation} »</em></p>` : ''}</div>
      </li>`)}
    </ul>
    <p class="petit" data-anime style="margin-top:20px">${c.t('accueil.pistes.flat')}</p>
  </div>
</section>

<section class="sombre" id="reserver">
  <div class="conteneur bloc-grille" style="align-items:start">
    <div>
      <p class="surtitre" data-anime>${c.t('park.location.surtitre')}</p>
      ${titre(c, 'park.location', { classe: 'titre--xl' })}
      <p class="intro" data-anime>${c.t('park.location.texte')}</p>
      <div class="formules" data-anime="cascade">
        ${T.location.map((f) => html`<div class="formule"><strong data-prix>${prix(f.prix)}</strong><span><b>${f.nom}</b> · ${c.t('park.location.minutes', { n: f.duree })}</span><span class="petit">${f.moto} · ${f.public}</span></div>`)}
      </div>
      <p data-anime><b>${c.t('park.location.inclus')} :</b> ${T.inclus.join(' · ')}.</p>
      <p class="petit" data-anime>${c.t('park.location.apporter')}</p>
      ${img(c, 'park-location', { ratio: '4 / 3', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
    </div>
    <form class="calc" data-calc data-effet="calcul-session" novalidate
      data-confirme="${c.s('park.location.confirme')}" data-erreur-session="Ajoutez au moins une session." data-erreur-creneau="Choisissez un créneau.">
      <h3>${c.t('park.location.calcTitre')}</h3>
      ${T.location.map((f) => html`<div class="calc-ligne" data-calc-ligne="${f.id}" data-prix="${f.prix}" data-duree="${f.duree}">
        <span><b>${f.nom}</b></span>
        <span class="pas"><button type="button" data-pas="-1" aria-label="${c.s('park.location.moins')} session : ${f.nom}">−</button><output aria-live="polite" aria-label="${c.s('park.location.sessions')} : ${f.nom}">0</output><button type="button" data-pas="1" aria-label="${c.s('park.location.plus')} session : ${f.nom}">+</button></span>
        <small>${c.t('park.location.parSession', { prix: f.prix, duree: f.duree })}</small>
      </div>`)}
      <label class="calc-case"><input type="checkbox" name="initiation" checked> ${c.t('park.location.initiation')}</label>
      <div class="calc-total"><span>${c.t('park.location.total')} · <span data-calc-duree>0 min</span> ${c.t('park.location.duree')}</span><strong data-calc-total aria-live="polite">0 €</strong></div>
      <fieldset class="creneaux"><legend>${c.t('park.location.creneau')}</legend>
        ${T.creneaux.map((h) => html`<label><input type="radio" name="creneau" value="${h}"><span>${h.replace(':', ' h ').replace(' h 00', ' h')}</span></label>`)}
      </fieldset>
      <button type="submit" class="bouton">${c.t('park.location.reserver')}</button>
      <p class="calc-message" data-calc-message aria-live="polite" hidden></p>
      <p class="petit" style="margin:0">${c.t('park.location.simule')}</p>
      <a class="bouton bouton--sombre" href="tel:${c.site.contact.telephoneParkLien}">${c.t('commun.appelerPark')} · ${c.site.contact.telephonePark}</a>
    </form>
  </div>
</section>

<section class="clair" id="initiation">
  <div class="conteneur bloc-grille">
    <div>
      <h2 class="titre" data-anime="lignes">${c.t('accueil.etapes.titre1')} <em>${c.t('accueil.etapes.titre2')}</em></h2>
      <p class="intro" data-anime>${c.t('accueil.etapes.texte')}</p>
      <ol class="liste-coches" data-anime="cascade">${c.donnees.etapes.map((e) => html`<li><span><b>${e.titre}</b> · ${e.texte}</span></li>`)}</ol>
    </div>
    ${img(c, 'etape-briefing', { ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="clair2" id="avec-ta-moto">
  <div class="conteneur bloc-grille bloc-grille--inverse">
    <div>
      ${titre(c, 'park.moto')}
      <p class="intro" data-anime>${c.t('park.moto.texte')}</p>
      <div class="formules" data-anime="cascade">
        ${T.acces.map((a) => html`<div class="formule" style="box-shadow:none;background:var(--noir);color:var(--blanc)"><strong data-prix>${prix(a.prix)}</strong><span><b>${a.nom}</b> · ${c.t('park.moto.parEntree')}</span><span class="petit" style="color:#c9ccc8">${a.detail}</span></div>`)}
      </div>
      <div class="cartes-fid" data-anime="cascade">
        <div class="carte-fid"><h3>${c.t('park.moto.pass')}</h3><p>${c.t('park.moto.passTexte')}</p></div>
        <div class="carte-fid"><h3>${c.t('park.moto.fid')}</h3><p>${c.t('park.moto.fidTexte')}</p></div>
      </div>
    </div>
    ${img(c, 'park-avec-ta-moto', { ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="clair" id="equipement">
  <div class="conteneur equipement-grille">
    ${img(c, 'equipement', { ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <h2 class="titre" data-anime="lignes">${c.t('park.equipement.titre1')}</h2>
      <div class="equipement-liste" data-anime="cascade">
        <div><h3>${c.t('park.equipement.prete')}</h3><p>${c.t('park.equipement.preteListe')}</p></div>
        <div><h3>${c.t('park.equipement.apporter')}</h3><p>${c.t('park.equipement.apporterListe')}</p></div>
        <div class="interdit"><h3>${c.t('park.equipement.interdit')}</h3><p>${c.t('park.equipement.interditListe')}</p></div>
      </div>
      <p class="petit" data-anime style="margin-top:16px">${c.t('park.equipement.mineurs')}</p>
    </div>
  </div>
</section>

<section class="sombre" id="equipe">
  <div class="conteneur">
    ${titre(c, 'park.equipe')}
    <ul class="equipe" data-anime="cascade">
      ${[['equipe-seb', 'seb'], ['equipe-coco', 'coco'], ['equipe-chouchou', 'chouchou']].map(([im, k]) => html`<li>${img(c, im, { ratio: '1', sizes: '96px' })}<div><h3>${c.t('park.equipe.' + k)}</h3><p>${c.t('park.equipe.' + k + 'Role')}</p></div></li>`)}
    </ul>
    <div class="snack" data-anime>
      ${img(c, 'park-snack', { ratio: '4 / 3', sizes: '220px' })}
      <div><p>${c.t('park.equipe.snack')}</p><p><b>${c.t('park.equipe.photos')}</b></p></div>
    </div>
  </div>
</section>

<section class="clair" id="faq">
  <div class="conteneur faq-liste">
    <h2 class="titre" data-anime="lignes">${c.t('park.faq.titre')}</h2>
    <div data-anime="cascade">${c.donnees.faq.park.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}</div>
  </div>
</section>

${appelFinal(c, 'park.fin', { image: 'park-appel', photoAlt: c.s('park.fin.photo') })}
`;
};
