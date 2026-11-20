import { chromium } from 'playwright';
import { demarrerServeur } from '../../_audit/serveur.mjs';
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch();
for (const [w, h, m] of [[1440, 900, false], [390, 844, true]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: m, hasTouch: m });
  for (const pg of ['/', '/park', '/shop', '/sebastien', '/contact', '/404']) {
    const p = await ctx.newPage();
    await p.goto(srv.adresse + pg); await p.waitForTimeout(3800);
    await p.screenshot({ path: `_suivi/vues/ouv-${w}-${pg.replace('/', '') || 'accueil'}.jpg`, type: 'jpeg', quality: 70 });
    await p.close();
  }
  await ctx.close();
}
await b.close(); await srv.fermer(); process.exit(0);
