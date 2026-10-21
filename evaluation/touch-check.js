// Renders the two Snake variants with iPhone 13 emulation (touch, coarse pointer) and lists visible buttons.
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch();
  for (const v of ['skilled','baseline']) {
    const ctx = await b.newContext({ ...devices['iPhone 13'], reducedMotion: 'reduce' });
    const p = await ctx.newPage();
    await p.goto('file:///home/user/AntiAIness/evaluation/scenarios/G/' + v + '/index.html');
    await p.waitForTimeout(800);
    const info = await p.evaluate(() => ({ coarse: matchMedia('(pointer: coarse)').matches,
      buttons: Array.from(document.querySelectorAll('button')).filter(x => x.getClientRects().length && getComputedStyle(x).visibility !== 'hidden').map(x => (x.getAttribute('aria-label') || x.textContent).trim()).slice(0, 14) }));
    console.log(v, JSON.stringify(info));
    await p.screenshot({ path: '/home/user/AntiAIness/evaluation/screenshots/G-' + v + '-touch-full.png', fullPage: true });
    await ctx.close();
  }
  await b.close();
})();
