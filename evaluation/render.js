// Renders every scenario variant to screenshots and runs the skill's audit on each.
// Usage: node evaluation/render.js [scenarioLetter ...]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SCEN = path.join(__dirname, 'scenarios');
const OUT = path.join(__dirname, 'screenshots');
const AUDIT = process.env.AUDIT_SCRIPT || path.join(ROOT, '.agents', 'skills', 'authentic-ui-design', 'scripts', 'ui-audit.js');
fs.mkdirSync(OUT, { recursive: true });
const only = process.argv.slice(2);

(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const summary = {};
  for (const scen of fs.readdirSync(SCEN).sort()) {
    if (only.length && !only.includes(scen)) continue;
    for (const variant of fs.readdirSync(path.join(SCEN, scen)).sort()) {
      const file = path.join(SCEN, scen, variant, 'index.html');
      if (!fs.existsSync(file)) continue;
      const id = `${scen}-${variant}`;
      for (const [vp, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
        const ctx = await browser.newContext({ viewport: { width: w, height: h } });
        const page = await ctx.newPage();
        const errors = [];
        page.on('pageerror', e => errors.push(String(e)));
        await page.goto('file://' + file, { waitUntil: 'load' });
        await page.waitForTimeout(1200);
        await page.screenshot({ path: path.join(OUT, `${id}-${vp}-fold.png`) });
        await page.screenshot({ path: path.join(OUT, `${id}-${vp}-full.png`), fullPage: true });
        // Scenario-specific extra states (so toggled screens are also captured)
        if (scen === 'C') {
          try {
            const play = page.getByRole('button', { name: /play|start/i }).first();
            if (await play.count()) { await play.click(); await page.waitForTimeout(600); await page.screenshot({ path: path.join(OUT, `${id}-${vp}-problem.png`), fullPage: true }); }
          } catch (e) { /* static variant */ }
        }
        if (vp === 'desktop') summary[id] = { errors };
        await ctx.close();
      }
      try {
        const json = execFileSync(process.execPath, [AUDIT, file, '--json'], { env: process.env }).toString();
        const a = JSON.parse(json);
        summary[id].audit = { textEls: a.textEls, tiny: a.tiny, under12: a.under12, distinctSizes: a.distinctSizes, sizes: a.sizes.slice(0, 6), families: a.families.slice(0, 3), h1: a.h1, glyphTotal: a.glyphTotal, eyebrows: a.eyebrows, accentWords: `${a.accentWords}/${a.headings}`, cardGrids: a.cardGrids, grads: a.grads, glows: a.glows, blurs: a.blurs, distinctRadii: a.distinctRadii, overflowX: a.overflowX, height: a.height, notes: a.notes };
      } catch (e) { summary[id].auditError = String(e).slice(0, 200); }
      console.log('rendered', id);
    }
  }
  fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 2));
  await browser.close();
})();
