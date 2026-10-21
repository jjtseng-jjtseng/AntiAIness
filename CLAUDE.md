# AntiAIness

Research and a reusable Agent Skill for building interfaces that do not look AI-generated, without imposing a house style.

- The skill: `.claude/skills/authentic-ui-design/` (Claude Code copy) and `.agents/skills/authentic-ui-design/` (canonical copy, read by Codex and other agents). Edit the canonical copy, then run `node scripts/sync-skills.js`; validate with `node scripts/check-skills.js`.
- For any task that creates, redesigns or critiques a user interface in this repository (websites, apps, dashboards, game UI), use the `authentic-ui-design` skill (`/authentic-ui-design`). It is not needed for backend, build or data work.
- The example sites and games in the top-level folders (`codecraft.html`, `aj-and-j-construction/`, `flowstate-pf-coach/`, `neon-tetris/`, `raspberry-pi-showcase/`, `red-cross-support/`, `starfall-courier/`) are research material: preserve them as-is. Make redesigns in `evaluation/scenarios/` or another isolated copy.
- Research reports live in `research/`; the validation report and test outputs in `evaluation/`; usage instructions in `docs/USAGE.md`.
