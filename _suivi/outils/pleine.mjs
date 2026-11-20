/* Capture pleine page après un défilement lent (apparitions déclenchées) : node _suivi/outils/pleine.mjs /page largeur hauteur sortie.jpg */
import { chromium } from 'playwright';
import { demarrerServeur } from '../../_audit/serveur.mjs';
const [,, chemin = '/', w = '1440', h = '900', out = '_suivi/vues/pleine.jpg'] = process.argv;
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, hasTouch: +w < 800, isMobile: +w < 800 });
const p = await ctx.newPage();
const err = [];
p.on('console', (m) => { if (m.type() === 'error') err.push(m.text()); });
p.on('pageerror', (e) => err.push(String(e)));
await p.goto(`${srv.adresse}${chemin}`);
await p.waitForTimeout(3500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += Math.round(+h * 0.5)) { await p.evaluate((v) => window.scrollTo(0, v), y); await p.waitForTimeout(260); }
await p.waitForTimeout(800);
await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(900);
/* Les scènes épinglées faussent une capture pleine page : on les libère pour la vue d'ensemble. */
await p.evaluate(() => { window.ScrollTrigger && window.ScrollTrigger.getAll().forEach((t) => t.pin && t.kill(true)); });
await p.waitForTimeout(400);
await p.screenshot({ path: out, fullPage: true, type: 'jpeg', quality: 60 });
console.log('hauteur', H, 'erreurs', err.slice(0, 8));
await b.close(); await srv.fermer(); process.exit(0);
