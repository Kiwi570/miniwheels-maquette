/* Effets propres à MiniWheels (direction « Paddock »). Le socle gère l'ouverture, le voile, l'en-tête, le menu,
   les mesures et la bibliothèque d'effets posés par attributs dans les pages. Chaque effet propre porte data-effet :
   grille-depart (intro), compte-session, trace-pistes, pellicule, calcul-session, catalogue-tri, balises, etiquette,
   seb-geant, frise. */
import { demarrer, versObjet, quand, rafraichir } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Heure de Paris et horaires (une seule source : donnees/horaires.json, injecté dans la page) ---------- */
const D = (() => { try { return JSON.parse($('#donnees-horaires').textContent); } catch (e) { return null; } })();
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
/* Heure murale de Paris codée comme une date UTC : les écarts se calculent sans fuseau. */
function maintenantParis() {
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  const p = Object.fromEntries(f.formatToParts(new Date()).map((x) => [x.type, x.value]));
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
}
const minutes = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const heure = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`; };
const remplir = (t, v) => t.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');

/* Prochaine plage d'un lieu : { ouvert, debut, fin (dates murales), jourDebut } */
function plageSuivante(lieu, maintenant = maintenantParis()) {
  const plages = (D && D.horaires[lieu] && D.horaires[lieu].plages) || {};
  const jour0 = new Date(maintenant);
  for (let k = 0; k < 8; k++) {
    const d = new Date(Date.UTC(jour0.getUTCFullYear(), jour0.getUTCMonth(), jour0.getUTCDate() + k));
    const liste = plages[String(d.getUTCDay())] || [];
    for (const [a, b] of liste) {
      const debut = d.getTime() + minutes(a) * 60000, fin = d.getTime() + minutes(b) * 60000;
      if (maintenant < fin) return { ouvert: maintenant >= debut, debut, fin, a, b, k, jour: d };
    }
  }
  return null;
}
function texteStatut(lieu) {
  const p = plageSuivante(lieu); if (!p || !D) return '';
  const T = D.textes;
  if (p.ouvert) return remplir(lieu === 'park' ? T.parkOuvert : T.ouvert, { h: heure(p.b) });
  if (p.k === 0) return remplir(T.ouvreAuj, { h: heure(p.a) });
  if (p.k === 1) return remplir(T.ouvreDemain, { h: heure(p.a) });
  return remplir(T.ouvreJour, { jour: JOURS[p.jour.getUTCDay()], h: heure(p.a) });
}

function statuts() {
  $$('[data-statut]').forEach((el) => { const t = texteStatut(el.dataset.statut); if (t) el.textContent = t; });
  const p = plageSuivante('park'); if (!p) return;
  const d = p.jour, court = `${JOURS[d.getUTCDay()]} ${d.getUTCDate()} ${MOIS[d.getUTCMonth()]}`;
  $$('[data-prochain-jour]').forEach((el) => { el.textContent = p.ouvert ? "aujourd'hui" : court; });
  $$('[data-prochain-long]').forEach((el) => { el.textContent = p.ouvert ? "aujourd'hui, en ce moment" : `${JOURS[d.getUTCDay()]} ${d.getUTCDate()} ${MOIS[d.getUTCMonth()].replace('.', '')}`; });
}

/* Compte à rebours jusqu'à la prochaine ouverture du Park (ou jusqu'à la fermeture s'il roule). */
function compteSession() {
  const cases = $('[data-compte]'), court = $$('[data-compte-court]');
  if (!cases && !court.length) return;
  const champs = cases ? { j: $('[data-c="j"]', cases), h: $('[data-c="h"]', cases), m: $('[data-c="m"]', cases), s: $('[data-c="s"]', cases) } : null;
  if (champs && champs.s) champs.s.setAttribute('data-effet', 'compte-session');
  const tic = () => {
    const now = maintenantParis(), p = plageSuivante('park', now); if (!p) return;
    const cible = p.ouvert ? p.fin : p.debut, r = Math.max(0, Math.round((cible - now) / 1000));
    const j = Math.floor(r / 86400), h = Math.floor(r % 86400 / 3600), m = Math.floor(r % 3600 / 60), s = r % 60;
    if (champs) {
      champs.j.textContent = String(j); champs.h.textContent = String(h).padStart(2, '0');
      champs.m.textContent = String(m).padStart(2, '0'); champs.s.textContent = String(s).padStart(2, '0');
      if (gsap && champs.s.getBoundingClientRect().bottom > 0 && champs.s.getBoundingClientRect().top < innerHeight) gsap.fromTo(champs.s, { yPercent: -18, opacity: .55 }, { yPercent: 0, opacity: 1, duration: .45, ease: 'back.out(3)' });
    }
    court.forEach((el) => { el.textContent = p.ouvert ? 'en piste' : `dans ${j ? j + ' j ' : ''}${h} h ${String(m).padStart(2, '0')}`; });
  };
  tic();
  let id = setInterval(tic, 1000);
  document.addEventListener('visibilitychange', () => { clearInterval(id); if (!document.hidden) { tic(); id = setInterval(tic, 1000); } });
}

/* ---------- Les trois pistes : onglets et tracés qui se dessinent ---------- */
function tracer(svg) {
  const path = svg && $('path', svg); if (!path || !gsap) return;
  gsap.fromTo(path, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' });
}
function pistes() {
  const scene = $('.pistes-scene'); if (!scene) return;
  const onglets = $$('.piste-onglet');
  const choisir = (b, focus) => {
    onglets.forEach((o) => { const oui = o === b; o.setAttribute('aria-selected', String(oui)); o.tabIndex = oui ? 0 : -1; $('#' + o.getAttribute('aria-controls')).hidden = !oui; });
    const pan = $('#' + b.getAttribute('aria-controls'));
    if (gsap) gsap.fromTo($('.piste-media', pan), { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: .7, ease: 'power3.out', clearProps: 'clipPath' });
    tracer($('.piste-trace', pan));
    if (focus) b.focus();
  };
  onglets.forEach((b, i) => {
    b.tabIndex = i ? -1 : 0;
    b.addEventListener('click', () => choisir(b));
    b.addEventListener('keydown', (e) => {
      const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]; if (!k) return;
      e.preventDefault(); choisir(onglets[(i + k + onglets.length) % onglets.length], true);
    });
  });
  if (!gsap || !ST()) return;
  const premier = $('.piste-panneau:not([hidden]) .piste-trace path', scene);
  if (premier) gsap.set(premier, { strokeDashoffset: 1 });
  ST().create({ trigger: scene, start: 'top 75%', once: true, onEnter: () => tracer($('.piste-panneau:not([hidden]) .piste-trace', scene)) });
  gsap.fromTo(scene, { y: 40 }, { y: -40, ease: 'none', scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
}

/* ---------- Le samedi en images : deux rangées qui glissent en sens opposés ---------- */
function pellicule() {
  if (!gsap || !ST()) return;
  $$('.pellicule-rangee').forEach((r) => {
    r.setAttribute('data-effet', 'pellicule');
    const sens = +r.dataset.sens || 1;
    const course = () => Math.max(0, r.scrollWidth - document.documentElement.clientWidth) * 0.6 + 80;
    gsap.fromTo(r, { x: () => (sens > 0 ? 0 : -course()) }, { x: () => (sens > 0 ? -course() : 0), ease: 'none',
      scrollTrigger: { trigger: r.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
  });
}

/* ---------- Ouvertures des pages intérieures ---------- */
function ouverturesInterieures() {
  if (!gsap || !ST()) return;
  const balises = $('.balises');
  if (balises) gsap.fromTo(balises, { xPercent: 0 }, { xPercent: -12, ease: 'none', scrollTrigger: { trigger: balises.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.5 } });
  const etiquette = $('.etiquette');
  if (etiquette) gsap.fromTo(etiquette, { rotate: -12 }, { rotate: 14, ease: 'none', scrollTrigger: { trigger: etiquette.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.6 } });
  const geant = $$('.seb-geant span');
  geant.forEach((s, i) => gsap.fromTo(s, { x: 0 }, { x: (i - 1) * 40, ease: 'none', scrollTrigger: { trigger: s.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.6 } }));
  const trait = $('.frise-trait');
  if (trait) gsap.fromTo(trait, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: trait.parentElement, start: 'top 85%', end: 'top 40%', scrub: 0.6 } });
}
/* Mouvement d'ouverture propre à chaque page, joué à la fin de l'intro ou pendant le retrait du voile. */
let ouvertureJouee = false;
function ouvertureProjet(tl, t) {
  const ici = (s) => $(s);
  if (ici('[data-tete] .h-ligne')) {
    const lignes = $$('[data-tete] .h-ligne'), suite = $$('[data-tete] .h-suite');
    const a = () => {
      ouvertureJouee = true;
      gsap.fromTo(lignes, { yPercent: 118, y: 0 }, { yPercent: 0, y: 0, duration: .85, stagger: .1, ease: 'power4.out' });
      gsap.fromTo(suite, { y: 18, yPercent: 0, opacity: 0 }, { y: 0, yPercent: 0, opacity: 1, duration: .6, stagger: .08, delay: .25, ease: 'power3.out' });
      if (ici('.balises')) gsap.fromTo('.balises', { scaleX: 0 }, { scaleX: 1, duration: 1, delay: .2, ease: 'power3.inOut' });
      if (ici('.etiquette')) gsap.fromTo('.etiquette', { scale: 0, rotate: -60 }, { scale: 1, rotate: -12, duration: .9, delay: .35, ease: 'back.out(1.8)' });
      if (ici('.seb-geant span')) gsap.fromTo('.seb-geant span', { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, stagger: .08, ease: 'power3.out' });
      if (ici('.badge-park')) gsap.fromTo('.badge-park', { rotate: -180 }, { rotate: 0, duration: .8, ease: 'power3.out', clearProps: 'transform' });
    };
    if (tl) tl.call(a, null, t); else a();
  }
}

/* ---------- Calculateur de location (page Park) ---------- */
function calculateur() {
  const f = $('[data-calc]'); if (!f) return;
  const total = $('[data-calc-total]', f), duree = $('[data-calc-duree]', f), message = $('[data-calc-message]', f);
  const lignes = $$('[data-calc-ligne]', f);
  const params = new URLSearchParams(location.search);
  if (params.get('formule')) { const l = lignes.find((x) => x.dataset.calcLigne === params.get('formule')); if (l) $('output', l).value = '1'; }
  let affiche = 0;
  const calc = (anime = true) => {
    let eur = 0, min = 0;
    lignes.forEach((l) => { const n = +$('output', l).value; eur += n * +l.dataset.prix; min += n * +l.dataset.duree; $('output', l).textContent = n; });
    duree.textContent = `${min} min`;
    const vers = eur, depuis = affiche; affiche = eur;
    if (!gsap || !anime) { total.textContent = `${vers} €`; return; }
    const o = { v: depuis };
    gsap.to(o, { v: vers, duration: .5, ease: 'power2.out', onUpdate: () => { total.textContent = `${Math.round(o.v)} €`; } });
    gsap.fromTo(total, { scale: 1.12 }, { scale: 1, duration: .45, ease: 'back.out(3)' });
  };
  lignes.forEach((l) => {
    const out = $('output', l);
    $$('button', l).forEach((b) => b.addEventListener('click', () => {
      out.value = String(Math.max(0, Math.min(12, +out.value + (+b.dataset.pas)))); calc();
    }));
  });
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const n = lignes.reduce((s, l) => s + +$('output', l).value, 0);
    const h = ($('input[name="creneau"]:checked', f) || {}).value;
    if (!n) { message.hidden = false; message.textContent = f.dataset.erreurSession; return; }
    if (!h) { message.hidden = false; message.textContent = f.dataset.erreurCreneau; return; }
    message.hidden = false;
    message.textContent = remplir(f.dataset.confirme, { n, total: total.textContent, h: heure(h) });
    rafraichir && rafraichir();
  });
  calc(false);
}

/* ---------- Catalogue filtrable (page Shop) ---------- */
function catalogue() {
  const zone = $('[data-catalogue]'); if (!zone) return;
  const cartes = $$('.vehicule', zone), filtres = $$('[data-famille-filtre]'), energie = $('[data-energie]'), tri = $('[data-tri]');
  const compte = $('[data-resultats]'), aucun = $('[data-aucun]'), grille = $('.grille-vehicules', zone);
  let famille = new URLSearchParams(location.search).get('famille') || 'tout';
  if (!filtres.some((b) => b.dataset.familleFiltre === famille)) famille = 'tout';
  const appliquer = (anime = true) => {
    const avant = new Map(cartes.map((c) => [c, c.getBoundingClientRect()]));
    const e = energie.value, t = tri.value;
    filtres.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.familleFiltre === famille)));
    const visibles = cartes.filter((c) => (famille === 'tout' || c.dataset.famille === famille) && (e === 'tout' || c.dataset.energie === e));
    cartes.forEach((c) => { c.hidden = !visibles.includes(c); });
    const ordre = [...cartes].sort((a, b) => t === 'prix' ? a.dataset.prix - b.dataset.prix : t === 'prix-desc' ? b.dataset.prix - a.dataset.prix : t === 'nom' ? a.dataset.nom.localeCompare(b.dataset.nom, 'fr') : a.dataset.ordre - b.dataset.ordre);
    ordre.forEach((c) => grille.appendChild(c));
    compte.textContent = compte.dataset.modele.replace('{n}', visibles.length);
    aucun.hidden = visibles.length > 0;
    const url = new URL(location.href);
    if (famille === 'tout') url.searchParams.delete('famille'); else url.searchParams.set('famille', famille);
    history.replaceState(history.state, '', url);
    if (anime && gsap) {
      visibles.forEach((c, i) => {
        const a = avant.get(c), b = c.getBoundingClientRect();
        if (a.width) gsap.fromTo(c, { x: a.left - b.left, y: a.top - b.top }, { x: 0, y: 0, duration: .55, ease: 'power3.out', clearProps: 'transform' });
        else gsap.fromTo(c, { opacity: 0, scale: .94 }, { opacity: 1, scale: 1, duration: .45, delay: Math.min(i, 12) * .02, ease: 'power2.out', clearProps: 'transform,opacity' });
      });
    }
    rafraichir && rafraichir();
  };
  filtres.forEach((b) => b.addEventListener('click', () => {
    const top = zone.getBoundingClientRect().top;
    famille = b.dataset.familleFiltre; appliquer();
    if (top < 0) zone.scrollIntoView({ block: 'start' });
  }));
  energie.addEventListener('change', () => appliquer());
  tri.addEventListener('change', () => appliquer());
  grille.setAttribute('data-effet', 'catalogue-tri');
  if (gsap && ST()) gsap.fromTo(grille, { y: 30 }, { y: 0, ease: 'none', scrollTrigger: { trigger: zone, start: 'top bottom', end: 'top 30%', scrub: 0.5 } });
  appliquer(false);
}

demarrer({
  preparer() {
    statuts();
    compteSession();
    pistes();
    pellicule();
    ouverturesInterieures();
    calculateur();
    catalogue();
    setInterval(statuts, 60000);
    /* Formulaire de contact prérempli depuis le catalogue (?modele=…). */
    const modele = new URLSearchParams(location.search).get('modele'), msg = $('#f-message');
    if (modele && msg && !msg.value) msg.value = (msg.dataset.modelePrefixe || '') + modele;
    /* Filet : si l'intro a été passée avant le mouvement d'ouverture, il se joue tout de suite. */
    quand('pret', ({ mode } = {}) => { if (mode !== 'retour' && mode !== 'secours' && !ouvertureJouee) ouvertureProjet(null); });
  },
  /* Intro « grille de départ », moins de 3 s : la grille se dresse, tombe en avant, puis le badge roule
     jusqu'à l'objet d'ouverture de la page ([data-iris-centre]) et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-logo', { scale: .6, rotate: -120, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: .4 }, 0)
      .fromTo('.grille-barre', { scaleY: 0 }, { scaleY: 1, duration: .28, stagger: .03, ease: 'back.out(2)' }, 0.02)
      .fromTo('.grille-barre b', { rotateX: 0 }, { rotateX: -88, duration: .26, stagger: .018, ease: 'power2.in' }, 0.48)
      .to('.ouverture-ligne', { opacity: 0, duration: .15 }, 0.5)
      .to('.ouverture-logo', { rotate: 360, duration: .5, ease: 'power2.inOut' }, 0.7);
    versObjet(tl, { a: 0.7, duree: 0.45, ouverture: 0.6 });
    /* Mouvement d'ouverture de la page, dans la timeline : il s'accélère et se passe avec elle. */
    const lignes = $$('[data-tete] .h-ligne'), suite = $$('[data-tete] .h-suite');
    if (lignes.length) {
      ouvertureJouee = true;
      tl.fromTo(lignes, { yPercent: 118, y: 0 }, { yPercent: 0, y: 0, duration: .6, stagger: .08, ease: 'power4.out' }, 1.15)
        .fromTo(suite, { y: 18, yPercent: 0, opacity: 0 }, { y: 0, yPercent: 0, opacity: 1, duration: .45, stagger: .05 }, 1.3);
      if ($('.balises')) tl.fromTo('.balises', { scaleX: 0 }, { scaleX: 1, duration: .6, ease: 'power3.inOut' }, 1.2);
      if ($('.etiquette')) tl.fromTo('.etiquette', { scale: 0, rotate: -60 }, { scale: 1, rotate: -12, duration: .6, ease: 'back.out(1.8)' }, 1.25);
      if ($('.seb-geant span')) tl.fromTo('.seb-geant span', { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .6, stagger: .06 }, 1.15);
    }
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('[data-tete] .h-ligne, [data-tete] .h-suite, .seb-geant span', { clearProps: 'transform,opacity' });
    gsap.set('.etiquette', { scale: 1, rotate: -12 });
    gsap.set('.balises', { scaleX: 1 });
  },
  arrivee() {
    if (!gsap) return;
    ouvertureProjet(null);
  },
});
