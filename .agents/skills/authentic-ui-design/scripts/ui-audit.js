#!/usr/bin/env node
/*
  ui-audit.js — measurable signals of "default" UI patterns from a rendered page.

  Usage:
    node ui-audit.js <url-or-html-file> [--width 1440] [--json] [--screenshot out.png]

  Requires Playwright with Chromium. It tries, in order:
    1. `playwright` resolvable from the current working directory
    2. the global npm root (`npm root -g`)
  If neither is available, it prints how to install and exits non-zero.

  Reports signals, not verdicts. A clean report is not a good design; a noisy
  report is a reason to look at the render. Thresholds come from measuring AI
  generated pages against real production sites (see research/ in the
  AntiAIness repository).
*/
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

function loadPlaywright() {
  const candidates = [
    () => require('playwright'),
    () => require(path.join(process.cwd(), 'node_modules', 'playwright')),
    () => require(path.join(execSync('npm root -g', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(), 'playwright')),
  ];
  for (const c of candidates) { try { return c(); } catch (e) { /* next */ } }
  console.error('Playwright not found. Install with: npm i -D playwright && npx playwright install chromium');
  process.exit(2);
}

const args = process.argv.slice(2);
if (!args.length || args.includes('-h') || args.includes('--help')) {
  console.log('usage: node ui-audit.js <url-or-html-file> [--width 1440] [--json] [--screenshot out.png]');
  process.exit(0);
}
const target = args[0];
const opt = (name, def) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : def; };
const width = parseInt(opt('--width', '1440'), 10);
const asJson = args.includes('--json');
const shot = opt('--screenshot', null);

const url = /^https?:\/\//.test(target) ? target : 'file://' + path.resolve(target);

const COLLECT = () => {
  const vis = el => { const cs = getComputedStyle(el); return cs.display !== 'none' && cs.visibility !== 'hidden' && el.getClientRects().length > 0; };
  const els = Array.from(document.querySelectorAll('body *')).filter(vis);
  const sizes = {}, families = {}, radii = {};
  let textEls = 0, tiny = 0, under12 = 0, upper = 0, shadows = 0, grads = 0, blurs = 0, glows = 0;
  const textColors = new Set();
  const paras = [];
  for (const el of els) {
    const cs = getComputedStyle(el);
    const hasText = Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (hasText) {
      textEls++;
      const fs = parseFloat(cs.fontSize);
      const k = Math.round(fs);
      sizes[k] = (sizes[k] || 0) + 1;
      if (fs < 11) tiny++;
      if (fs < 12) under12++;
      if (cs.textTransform === 'uppercase') upper++;
      const fam = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
      families[fam] = (families[fam] || 0) + 1;
      textColors.add(cs.color);
      if (el.tagName === 'P' && el.textContent.trim().length > 80) {
        const w = el.getBoundingClientRect().width;
        paras.push(Math.round(w / (fs * 0.5)));
      }
    }
    const r = cs.borderTopLeftRadius;
    if (r && r !== '0px') radii[r] = (radii[r] || 0) + 1;
    if (cs.boxShadow && cs.boxShadow !== 'none') {
      shadows++;
      // A glow is a layer with zero offset and a real blur radius (not a 0-blur spread "rim").
      const layers = cs.boxShadow.split(/,(?![^(]*\))/);
      if (layers.some(l => { const n = (l.replace(/rgba?\([^)]*\)/g, '').match(/-?[\d.]+px/g) || []).map(parseFloat); return !/inset/.test(l) && n.length >= 3 && n[0] === 0 && n[1] === 0 && n[2] >= 4; })) glows++;
    }
    if (/gradient/.test(cs.backgroundImage)) grads++;
    if (cs.backdropFilter && cs.backdropFilter !== 'none') blurs++;
  }
  const text = document.body.innerText || '';
  const glyphs = (text.match(/[↗↘↖↙→←↑↓✳✦✧✶✷⋆★☆◆◇•·]/g) || []);
  const glyphCounts = {};
  for (const g of glyphs) glyphCounts[g] = (glyphCounts[g] || 0) + 1;
  // Eyebrow-ish labels directly before a heading: short tracked uppercase text, or the
  // sentence-case variant (a small monospace label, or one led by a drawn rule or a dash)
  let eyebrows = 0;
  for (const h of document.querySelectorAll('h1,h2,h3')) {
    const prev = h.previousElementSibling;
    if (!prev || !vis(prev)) continue;
    const cs = getComputedStyle(prev);
    const t = prev.textContent.trim();
    if (!t || t.length >= 60) continue;
    const tracked = (cs.textTransform === 'uppercase' || /^[A-Z0-9 \/·.\-&,'’]+$/.test(t)) && parseFloat(cs.letterSpacing || '0') > 0;
    const size = parseFloat(cs.fontSize), hSize = parseFloat(getComputedStyle(h).fontSize);
    const mono = /mono|courier|consolas|menlo/i.test(cs.fontFamily);
    const before = getComputedStyle(prev, '::before');
    const rule = (before.content !== 'none' && before.content !== 'normal' && parseFloat(before.height) <= 2 && parseFloat(before.width) >= 8) || /^[—–]/.test(t);
    const label = !/[.!?]$/.test(t) && size <= 14 && size < hSize * 0.6 && (mono || rule);
    if (tracked || label) eyebrows++;
  }
  // Repeated card grids: parents with >=3 same-tag children that each have border or shadow or background and similar size
  let cardGrids = 0;
  for (const parent of els) {
    const kids = Array.from(parent.children).filter(vis);
    if (kids.length < 3 || kids.length > 8) continue;
    const tag = kids[0].tagName;
    if (!kids.every(k => k.tagName === tag)) continue;
    const boxes = kids.map(k => k.getBoundingClientRect());
    const w0 = boxes[0].width, h0 = boxes[0].height;
    if (w0 < 120 || h0 < 80) continue;
    const similar = boxes.every(b => Math.abs(b.width - w0) < 8 && Math.abs(b.height - h0) < 40);
    const styled = kids.every(k => { const cs = getComputedStyle(k); return cs.borderStyle !== 'none' || cs.boxShadow !== 'none' || (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== getComputedStyle(parent).backgroundColor); });
    if (similar && styled) cardGrids++;
  }
  // Accent-word reflex: headings with an inline child in a different color or italic
  let accentWords = 0, headings = 0;
  for (const h of document.querySelectorAll('h1,h2')) {
    headings++;
    const hc = getComputedStyle(h);
    for (const c of h.querySelectorAll('em,span,i,b,strong')) {
      const cc = getComputedStyle(c);
      if (cc.color !== hc.color || cc.fontStyle === 'italic' || cc.fontFamily !== hc.fontFamily) { accentWords++; break; }
    }
  }
  const h1 = document.querySelector('h1');
  const top = o => Object.entries(o).sort((a, b) => b[1] - a[1]);
  const sizeList = top(sizes).map(([k, v]) => `${k}px×${v}`);
  return {
    textEls, tiny, under12, upper, textColors: textColors.size,
    sizes: sizeList, distinctSizes: Object.keys(sizes).length,
    families: top(families).slice(0, 5).map(([k, v]) => `${k}×${v}`),
    radii: top(radii).slice(0, 6).map(([k, v]) => `${k}×${v}`),
    distinctRadii: Object.keys(radii).length,
    shadows, glows, grads, blurs,
    glyphs: glyphCounts, glyphTotal: glyphs.length,
    eyebrows, headings, accentWords, cardGrids,
    h1: h1 ? { text: h1.textContent.trim().slice(0, 80), size: getComputedStyle(h1).fontSize, family: getComputedStyle(h1).fontFamily.split(',')[0] } : null,
    paraMeasure: paras.length ? { min: Math.min(...paras), max: Math.max(...paras), n: paras.length } : null,
    sections: document.querySelectorAll('section').length,
    overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
    title: document.title,
  };
};

(async () => {
  const { chromium } = loadPlaywright();
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  const browser = await chromium.launch(proxy && /^https?:\/\//.test(url) && !/^(https?:\/\/)(localhost|127\.)/.test(url) ? { proxy: { server: proxy } } : {});
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(800);
  const r = await page.evaluate(COLLECT);
  if (shot) await page.screenshot({ path: shot, fullPage: true });
  await browser.close();

  const notes = [];
  const pct = n => Math.round(100 * n / Math.max(1, r.textEls));
  if (pct(r.tiny) >= 20) notes.push(`${pct(r.tiny)}% of text elements render under 11px (real sites: 0–5%). Raise label and body sizes; aim for ≤ 7 sizes.`);
  else if (pct(r.under12) >= 30) notes.push(`${pct(r.under12)}% of text elements render under 12px. Fine for a dense tool if deliberate; check it is readable.`);
  if (r.distinctSizes > 9) notes.push(`${r.distinctSizes} distinct font sizes. A scale of 5–7 reads as designed.`);
  if (r.h1 && parseFloat(r.h1.size) > 64 && pct(r.under12) > 30) notes.push(`h1 is ${r.h1.size} while most text is small: poster-scale contrast. Bring display and body closer.`);
  if (r.glyphTotal >= 6) notes.push(`${r.glyphTotal} ornament glyphs in visible text (${Object.entries(r.glyphs).map(([k, v]) => k + v).join(' ')}). Arrows-after-links and ✳/✦ ornaments are a known tell.`);
  if (r.eyebrows >= 3) notes.push(`${r.eyebrows} eyebrow labels directly above headings (tracked uppercase, or small mono / rule-led labels). Keep only where the label carries a real category.`);
  if (r.headings && r.accentWords / r.headings >= 0.5) notes.push(`${r.accentWords}/${r.headings} h1/h2 use an accent-colored or italic word. Once, for a reason, or not at all.`);
  if (r.cardGrids >= 3) notes.push(`${r.cardGrids} grids of 3–8 identical styled cards. Check each: would a list, table, paragraph or single image serve better?`);
  if (r.grads >= 6) notes.push(`${r.grads} gradient backgrounds. Gradients should have ≤ 2 named jobs.`);
  if (r.glows >= 4) notes.push(`${r.glows} glow-style shadows (0 0 Npx). Only things that emit light should glow.`);
  if (r.blurs >= 2) notes.push(`${r.blurs} backdrop-blur elements. Glass needs a reason in the direction card.`);
  if (r.distinctRadii === 1 && r.radii.length) notes.push(`A single border radius (${r.radii[0]}) on everything. Fine if it is a policy; check controls vs containers.`);
  if (r.upper >= 15) notes.push(`${r.upper} uppercase text elements. Tracked-caps micro-labels as the universal label style is a tell.`);
  if (r.paraMeasure && r.paraMeasure.max > 110) notes.push(`Some paragraphs run ~${r.paraMeasure.max} characters per line. Keep running text at 45–90.`);
  if (r.overflowX) notes.push('Horizontal overflow detected at this width.');
  const REFLEX = /^(inter|inter variable|dm sans|manrope|space grotesk|plus jakarta sans|outfit|sora|poppins|ibm plex sans|source sans 3|libre franklin|fraunces|instrument serif)$/i;
  const primary = (r.families[0] || '').split('×')[0];
  if (REFLEX.test(primary)) notes.push(`Primary face is ${primary}, a frequent reflex pick for generated UIs. Fine if chosen for this product; make sure the direction card says why.`);

  if (asJson) { console.log(JSON.stringify({ url, width, ...r, notes }, null, 2)); return; }
  console.log(`\nui-audit  ${url}  @${width}px   "${r.title}"`);
  console.log(`  text elements: ${r.textEls}   <11px: ${r.tiny} (${pct(r.tiny)}%)   <12px: ${r.under12} (${pct(r.under12)}%)   uppercase: ${r.upper}`);
  console.log(`  sizes (${r.distinctSizes}): ${r.sizes.slice(0, 10).join('  ')}`);
  console.log(`  families: ${r.families.join('  ')}`);
  console.log(`  h1: ${r.h1 ? `${r.h1.size} ${r.h1.family} "${r.h1.text}"` : 'none'}`);
  console.log(`  radii (${r.distinctRadii}): ${r.radii.join('  ')}`);
  console.log(`  shadows: ${r.shadows} (glow-like ${r.glows})   gradients: ${r.grads}   backdrop-blur: ${r.blurs}`);
  console.log(`  glyph ornaments: ${r.glyphTotal}   eyebrows: ${r.eyebrows}   accent-word headings: ${r.accentWords}/${r.headings}   identical card grids: ${r.cardGrids}   sections: ${r.sections}`);
  if (r.paraMeasure) console.log(`  paragraph measure: ${r.paraMeasure.min}–${r.paraMeasure.max} chars (${r.paraMeasure.n} paragraphs)`);
  console.log(`  page height: ${r.height}px   overflow-x: ${r.overflowX}`);
  console.log('\n  signals:');
  if (!notes.length) console.log('  (none triggered — look at the render anyway; structure and intent are not measurable here)');
  for (const n of notes) console.log('  - ' + n);
  console.log('');
})().catch(e => { console.error(String(e)); process.exit(1); });
