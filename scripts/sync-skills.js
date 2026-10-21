#!/usr/bin/env node
/*
  Copies the canonical skill from .agents/skills/<name>/ (the vendor-neutral
  Agent Skills location, read by Codex and other agents) into
  .claude/skills/<name>/ (read by Claude Code), byte for byte.

  Why copies instead of symlinks: symlinks are unreliable in Git checkouts on
  Windows and in some cloud sandboxes, and both agents must work on a fresh
  clone with no build step.

  Usage: node scripts/sync-skills.js [--check]
    --check   exit 1 if the copy is out of date instead of writing
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, '.agents', 'skills');
const DST = path.join(ROOT, '.claude', 'skills');
const check = process.argv.includes('--check');

function walk(dir, base = dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p, base));
    else out.push(path.relative(base, p));
  }
  return out;
}

let drift = 0;
for (const skill of fs.readdirSync(SRC)) {
  const srcDir = path.join(SRC, skill);
  if (!fs.statSync(srcDir).isDirectory()) continue;
  const dstDir = path.join(DST, skill);
  const files = walk(srcDir);
  const dstFiles = fs.existsSync(dstDir) ? walk(dstDir) : [];
  for (const rel of files) {
    const s = fs.readFileSync(path.join(srcDir, rel));
    const d = path.join(dstDir, rel);
    const same = fs.existsSync(d) && Buffer.compare(fs.readFileSync(d), s) === 0;
    if (same) continue;
    drift++;
    if (check) { console.log(`out of date: .claude/skills/${skill}/${rel}`); continue; }
    fs.mkdirSync(path.dirname(d), { recursive: true });
    fs.writeFileSync(d, s);
    console.log(`synced .claude/skills/${skill}/${rel}`);
  }
  for (const rel of dstFiles) {
    if (files.includes(rel)) continue;
    drift++;
    if (check) { console.log(`stale: .claude/skills/${skill}/${rel}`); continue; }
    fs.unlinkSync(path.join(dstDir, rel));
    console.log(`removed stale .claude/skills/${skill}/${rel}`);
  }
}
if (check) {
  if (drift) { console.log(`${drift} file(s) differ. Run: node scripts/sync-skills.js`); process.exit(1); }
  console.log('skills in sync');
} else if (!drift) {
  console.log('already in sync');
}
