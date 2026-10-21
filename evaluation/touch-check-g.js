// Renders both round 5 Snake variants on an emulated phone (touch, coarse pointer): start screen and, after tapping start, the playing state.
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch();
  for (const v of ['baseline-m2', 'skilled-v13-m2']) {
    const ctx = await b.newContext({ ...devices['iPhone 13'], reducedMotion: 'reduce' });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', e => errs.push(String(e)));
    await p.goto(`file:///home/user/AntiAIness/evaluation/scenarios/G/${v}/index.html`);
    await p.waitForTimeout(800);
    await p.screenshot({ path: `/home/user/AntiAIness/evaluation/screenshots/G-${v}-touch-start.png`, fullPage: true });
    const visibleButtons = await p.evaluate(() => Array.from(document.querySelectorAll('button')).filter(x => { const r = x.getBoundingClientRect(); const cs = getComputedStyle(x); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.opacity !== '0'; }).map(x => (x.getAttribute('aria-label') || x.textContent).trim().replace(/\s+/g, ' ')).slice(0, 20));
    console.log(v, 'visible buttons:', JSON.stringify(visibleButtons), 'errors:', errs.length);
    await ctx.close();
  }
  await b.close();
})();
