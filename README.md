# AntiAIness
No more Ai slop websites, ui, or games (in terms of how they look/feel). Get rid of the 'ainess' feeling.

## What is here

| Path | What it is |
|---|---|
| `.agents/skills/authentic-ui-design/` | The Agent Skill (canonical copy, read by Codex and other Agent-Skills agents) |
| `.claude/skills/authentic-ui-design/` | Identical copy for Claude Code (`node scripts/sync-skills.js` keeps it in sync) |
| `research/` | What makes UIs read as AI-generated: analysis of the examples below, the three-layer model, external references |
| `evaluation/` | Baseline vs skill-guided builds of seven briefs over five rounds, renders, audit numbers, four blind reviews, and what changed in the skill after each |
| `docs/USAGE.md` | How to invoke the skill in Claude Code and Codex, and how to use it in another repository |
| `scripts/` | `sync-skills.js` (copy canonical skill to `.claude/`), `check-skills.js` (validate both copies against the Agent Skills spec) |
| `codecraft.html`, `aj-and-j-construction/`, `flowstate-pf-coach/`, `neon-tetris/`, `raspberry-pi-showcase/`, `red-cross-support/`, `starfall-courier/` | The AI-generated examples studied in `research/`. Preserved as-is |

## The idea in one paragraph

AI-generated interfaces are recognizable on three layers: surface (fonts, gradients, ornaments, tiny tracked labels), structure (the same page skeleton for every subject), and intent (nothing could only belong to this product; specificity is simulated). Banning surface features just produces a new default. The skill instead gives agents a decision procedure: write the brief, translate the requested character into concrete choices, build from a content inventory, execute with measurable craft floors, render, and diagnose by layer. It preserves whatever aesthetic the user asked for.

## Quick start

Claude Code: `/authentic-ui-design build the pricing page`. Codex: `$authentic-ui-design redesign the settings screen`. Details in `docs/USAGE.md`.
