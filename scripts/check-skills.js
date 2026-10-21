#!/usr/bin/env node
/*
  Validates every skill under .agents/skills and .claude/skills against the
  Agent Skills specification (agentskills.io/specification) and the documented
  Claude Code / Codex constraints:

    - SKILL.md exists and starts with YAML frontmatter
    - name: 1–64 chars, [a-z0-9-], no leading/trailing/double hyphen, equals the directory name
    - description: 1–1024 chars, non-empty
    - optional: license, compatibility (≤500), metadata (string map), allowed-tools
    - unknown frontmatter keys are reported (Claude Code ignores them; claude.ai
      uploads reject them)
    - SKILL.md body ≤ 500 lines (spec recommendation)
    - relative file references in SKILL.md resolve to existing files

  No dependencies. Usage: node scripts/check-skills.js
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIRS = ['.agents/skills', '.claude/skills'].map(d => path.join(ROOT, d)).filter(fs.existsSync);
const KNOWN = new Set(['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools',
  // Claude Code extras (accepted there, rejected by claude.ai uploads)
  'when_to_use', 'argument-hint', 'arguments', 'disable-model-invocation', 'user-invocable', 'disallowed-tools',
  'model', 'effort', 'context', 'agent', 'background', 'hooks', 'paths', 'shell']);

let problems = 0;
const fail = (where, msg) => { problems++; console.log(`FAIL ${where}: ${msg}`); };
const warn = (where, msg) => console.log(`warn ${where}: ${msg}`);

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return null;
  const fm = {};
  let currentKey = null;
  for (const raw of m[1].split(/\r?\n/)) {
    if (!raw.trim()) continue;
    if (/^\s+/.test(raw) && currentKey) {
      const kv = raw.trim().match(/^([^:]+):\s*(.*)$/);
      if (kv) { fm[currentKey] = fm[currentKey] && typeof fm[currentKey] === 'object' ? fm[currentKey] : {}; fm[currentKey][kv[1].trim()] = kv[2].replace(/^["']|["']$/g, ''); }
      continue;
    }
    const kv = raw.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    currentKey = kv[1];
    fm[currentKey] = kv[2].trim() === '' ? {} : kv[2].trim().replace(/^["']|["']$/g, '');
  }
  return { fm, body: text.slice(m[0].length) };
}

for (const dir of DIRS) {
  for (const skill of fs.readdirSync(dir)) {
    const sdir = path.join(dir, skill);
    if (!fs.statSync(sdir).isDirectory()) continue;
    const where = path.relative(ROOT, sdir);
    const file = path.join(sdir, 'SKILL.md');
    if (!fs.existsSync(file)) { fail(where, 'missing SKILL.md'); continue; }
    const text = fs.readFileSync(file, 'utf8');
    const parsed = parseFrontmatter(text);
    if (!parsed) { fail(where, 'no YAML frontmatter'); continue; }
    const { fm, body } = parsed;
    const name = fm.name;
    if (typeof name !== 'string' || !name) fail(where, 'name missing');
    else {
      if (name.length > 64) fail(where, 'name longer than 64 chars');
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) fail(where, `name "${name}" must be lowercase letters, digits and single hyphens`);
      if (name !== skill) fail(where, `name "${name}" does not match directory "${skill}"`);
    }
    const desc = fm.description;
    if (typeof desc !== 'string' || !desc.trim()) fail(where, 'description missing');
    else if (desc.length > 1024) fail(where, `description is ${desc.length} chars (max 1024)`);
    if (fm.compatibility && String(fm.compatibility).length > 500) fail(where, 'compatibility longer than 500 chars');
    if (fm.metadata && typeof fm.metadata === 'object') {
      for (const [k, v] of Object.entries(fm.metadata)) if (typeof v !== 'string') fail(where, `metadata.${k} must be a string`);
    }
    for (const k of Object.keys(fm)) if (!KNOWN.has(k)) warn(where, `unknown frontmatter key "${k}"`);
    const lines = text.split(/\r?\n/).length;
    if (lines > 500) fail(where, `SKILL.md is ${lines} lines (keep under 500)`);
    const tokensApprox = Math.round(body.length / 4);
    if (tokensApprox > 5000) warn(where, `body is ~${tokensApprox} tokens (spec recommends < 5000)`);
    const refs = [...body.matchAll(/`((?:references|scripts|assets)\/[^`]+)`/g)].map(m => m[1].split(' ')[0]);
    for (const ref of new Set(refs)) {
      if (!fs.existsSync(path.join(sdir, ref))) fail(where, `referenced file not found: ${ref}`);
    }
    console.log(`ok   ${where}  (name=${name}, description=${desc ? desc.length : 0} chars, ${lines} lines, ~${tokensApprox} body tokens, ${refs.length} file refs)`);
  }
}

// Copy parity between the two locations
try {
  require('child_process').execFileSync(process.execPath, [path.join(__dirname, 'sync-skills.js'), '--check'], { stdio: 'inherit' });
} catch (e) { problems++; }

if (problems) { console.log(`\n${problems} problem(s)`); process.exit(1); }
console.log('\nall skills valid');
