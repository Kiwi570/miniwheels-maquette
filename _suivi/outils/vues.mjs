/* Captures de travail : node _suivi/outils/vues.mjs /page largeur hauteur nb-ecrans sortie-prefixe */
import { chromium } from 'playwright';
import { demarrerServeur } from '../../_audit/serveur.mjs';
const [,, chemin = '/', w = '1440', h = '900', n = '6', pre = '_suivi/vue'] = process.argv;
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, hasTouch: +w < 800, isMobile: +w < 800 });
const p = await ctx.newPage();
const err = [];
p.on('console', (m) => { if (m.type() === 'error') err.push(m.text()); });
p.on('pageerror', (e) => err.push(String(e)));
await p.goto(`${srv.adresse}${chemin}`);
await p.waitForTimeout(3600);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
const pas = Math.max(1, Math.floor((H - +h) / Math.max(1, +n - 1)));
for (let i = 0; i < +n; i++) {
  await p.evaluate((y) => window.scrollTo(0, y), i * pas);
  await p.waitForTimeout(1300);
  await p.screenshot({ path: `${pre}-${i}.jpg`, quality: 70, type: 'jpeg' });
}
console.log('hauteur', H, 'erreurs', err.slice(0, 8));
await b.close(); await srv.fermer(); process.exit(0);
