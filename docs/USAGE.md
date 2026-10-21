# Using the `authentic-ui-design` skill

The skill lives in two identical copies so that both agents find it on a fresh clone with no build step:

| Agent | Path it reads | Explicit invocation |
|---|---|---|
| Claude Code | `.claude/skills/authentic-ui-design/SKILL.md` | `/authentic-ui-design` at the start of a message, e.g. `/authentic-ui-design build the pricing page` |
| Codex (CLI, IDE, app) | `.agents/skills/authentic-ui-design/SKILL.md` | `$authentic-ui-design` in the prompt, or `/skills` to pick it |
| Other Agent-Skills-compatible agents (Cursor, Gemini CLI, Amp, …) | `.agents/skills/` is the vendor-neutral location most of them scan; otherwise copy the folder to the agent's skills directory | per agent |

The canonical copy is `.agents/skills/authentic-ui-design/`. Edit that one and run `node scripts/sync-skills.js`; `node scripts/check-skills.js` validates both copies against the Agent Skills specification and checks they match.

## Automatic invocation

Both agents load only the skill's `name` and `description` at startup and read the full `SKILL.md` when a task matches the description. The description names the triggers (creating or redesigning a UI, choosing fonts/colors/layout, "why does this look AI-generated", working from references), so ordinary UI requests should activate it. Automatic triggering is a model judgment and is **not guaranteed**: the agent may skip it on a request it reads as pure plumbing (a form handler, a CSS bug), and Codex shortens or drops descriptions when many skills compete for its context budget. When it matters, invoke it explicitly.

The repository's `CLAUDE.md` and `AGENTS.md` add a one-line pointer so that UI work in this repository uses the skill; they do not force it onto backend tasks.

## What it does when it runs

1. Writes a short brief (what the product does, who uses it, the requested aesthetic, what content is real).
2. Writes a 6–10 line "direction card" (memorable thing, type, color roles, shape, density, imagery, motion, voice, conventions kept), each line justified by the brief.
3. Builds the structure from a content inventory, not a template.
4. Executes with the craft rules (type scale and sizes, color roles, spacing, states, responsive, accessibility).
5. Renders, runs the default-tells checklist, diagnoses by layer, fixes causes.

For critique requests it follows `references/diagnostics.md` and returns concrete findings with fixes and a "what to keep" list.

## Example prompts

Claude Code:

```
/authentic-ui-design Build a landing page for our bike-repair booking app. Playful, friendly, trustworthy. Content is in content/landing.md.
```

```
/authentic-ui-design Why does app/dashboard/page.tsx look AI-generated? Keep our existing design tokens.
```

Codex:

```
$authentic-ui-design Redesign the settings screen in src/screens/Settings.tsx. Keep the current dark theme and component library; make it feel like our product, not a template.
```

Any agent, explicitly:

```
Read .agents/skills/authentic-ui-design/SKILL.md and follow it. Then build the title screen and HUD for our pixel-art roguelike in game/ui/.
```

## Measuring a page

```
node .agents/skills/authentic-ui-design/scripts/ui-audit.js http://localhost:3000/        # or a .html file
node .agents/skills/authentic-ui-design/scripts/ui-audit.js dist/index.html --width 390 --json
```

Requires Playwright with Chromium (`npm i -D playwright && npx playwright install chromium`, or a global install). It reports the share of text under 11px, the number of font sizes, ornament glyphs, eyebrows, accent-word headings, identical card grids, gradients/glows/blur, paragraph measure and horizontal overflow. These are signals; the checklist in `SKILL.md` and a look at the render are the judgment.

## Using it in another repository

Copy `.agents/skills/authentic-ui-design/` into the other repository's `.agents/skills/` (Codex and most agents) and `.claude/skills/` (Claude Code). The folder is self-contained: `SKILL.md`, `references/`, `scripts/ui-audit.js`. Nothing else in this repository is required. For a personal install that applies to every project, copy it to `~/.agents/skills/` and `~/.claude/skills/`.

## Keeping the user's aesthetic

The skill is not a style. If you ask for glass, gradients, a bento grid, Inter, neon or a conventional centered hero, it gives you a deliberate, well-executed version of that and makes everything else specific to the product. If a result drifts toward a house look (cream + serif + green, black + lime + mono, brutalist mono), that is a failure of the skill; report it as such.
