import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { demarrerServeur } from '../../_audit/serveur.mjs';
const [,, chemin, w, h] = process.argv;
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: +w, height: +h } })).newPage();
await p.goto(srv.adresse + chemin); await p.waitForTimeout(4000);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += Math.round(+h * .7)) { await p.evaluate((v) => scrollTo(0, v), y); await p.waitForTimeout(110); }
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);
await p.addScriptTag({ content: readFileSync('_audit/axe.min.js', 'utf8') });
const r = await p.evaluate(async () => { const x = await axe.run(document, { runOnly: ['color-contrast'] }); return x.violations.map((v) => v.nodes.map((n) => [n.target.join(' '), n.any.map((a) => a.message + JSON.stringify(a.data)).join(' ')])); });
console.log(JSON.stringify(r, null, 1).slice(0, 2500));
await b.close(); await srv.fermer(); process.exit(0);
