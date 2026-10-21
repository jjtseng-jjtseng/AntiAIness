# AntiAIness

Research and a reusable Agent Skill for building interfaces that do not look AI-generated, without imposing a house style.

- The skill is at `.agents/skills/authentic-ui-design/` (canonical; also copied to `.claude/skills/` for Claude Code). Invoke it with `$authentic-ui-design` in Codex, or read its `SKILL.md` and follow it.
- Use it for any task that creates, redesigns or critiques a user interface in this repository (websites, apps, dashboards, game UI). It is not needed for backend, build or data work.
- The example sites and games in the top-level folders are research material: preserve them as-is. Make redesigns in `evaluation/scenarios/` or another isolated copy.
- After editing the skill, run `node scripts/sync-skills.js` and `node scripts/check-skills.js`.
- Research reports: `research/`. Validation report and test outputs: `evaluation/`. Usage: `docs/USAGE.md`.
