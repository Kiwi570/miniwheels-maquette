import { chromium } from 'playwright';
import { demarrerServeur } from '../../_audit/serveur.mjs';
const [,, chemin, w] = process.argv;
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: +w, height: 900 }, hasTouch: +w < 800, isMobile: +w < 800 })).newPage();
await p.goto(srv.adresse + chemin); await p.waitForTimeout(3500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 450) { await p.evaluate((v) => scrollTo(0, v), y); await p.waitForTimeout(120); }
const r = await p.evaluate(() => {
  const W = document.documentElement.clientWidth, out = [];
  document.querySelectorAll('body *').forEach((el) => { if (el.closest('.archives, [data-entete], [data-menu], [data-voile], [data-barre-fixe]')) return; const b = el.getBoundingClientRect(); if (b.right > W + 1 && b.width > 0) out.push([el.tagName + '.' + el.className.toString().slice(0, 40) + '|' + (el.parentElement ? el.parentElement.className.toString().slice(0,30) : '') + '|' + el.textContent.slice(0,20), Math.round(b.right), Math.round(b.width)]); });
  return { W, sw: document.documentElement.scrollWidth, out: out.slice(0, 12) };
});
console.log(JSON.stringify(r));
await b.close(); await srv.fermer(); process.exit(0);
