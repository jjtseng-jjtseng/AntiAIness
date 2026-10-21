// Starts the skill-guided Snake game on an emulated phone and reports the D-pad buttons once playing.
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'], reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  await p.goto('file:///home/user/AntiAIness/evaluation/scenarios/G/skilled/index.html');
  await p.waitForTimeout(600);
  await p.getByRole('button', { name: 'Start' }).tap();
  await p.waitForTimeout(700);
  const r = await p.evaluate(() => Array.from(document.querySelectorAll('button')).filter(x => /Up|Down|Left|Right/.test(x.getAttribute('aria-label')||x.textContent)).map(x => { const b = x.getBoundingClientRect(); const cs = getComputedStyle(x); return [x.getAttribute('aria-label')||x.textContent.trim(), Math.round(b.width), Math.round(b.height), Math.round(b.top), cs.opacity, cs.display]; }));
  console.log(JSON.stringify(r));
  await p.screenshot({ path: '/home/user/AntiAIness/evaluation/screenshots/G-skilled-touch-playing.png', fullPage: true });
  await b.close();
})();
