import { chromium } from 'playwright';
const [,, url, out, w, h] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w || 1920, height: +h || 1000 } });
await p.goto(url); await p.waitForTimeout(800);
await p.screenshot({ path: out, fullPage: true });
await b.close();
