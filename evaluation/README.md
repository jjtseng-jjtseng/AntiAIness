# Validation: does the skill change what agents build?

This folder holds a small, controlled experiment: the same briefs built by fresh agents with and without the `authentic-ui-design` skill, rendered, measured, and reviewed blind. It is evidence about this skill on these briefs, not a general benchmark.

## Method

- **Agents.** Each output was produced by a fresh general-purpose agent with no conversation history, running Claude Fable 5.1 (the model used for the whole project; the orchestrating session switched to Opus 5.5 near the end, but all build and judge agents ran on Fable 5.1).
- **Baseline vs skilled.** Both variants got the identical brief and identical common constraints (`prompts/common-constraints.md`): one standalone HTML file, Google Fonts only, responsive 390–1440px, accessible, no fabricated proof. For baseline runs the skill directories were moved out of the repository and the agent was told not to read repository files. Skilled runs got one extra sentence: read and follow `.agents/skills/authentic-ui-design/SKILL.md`.
- **Scenarios.** A sleek tech landing page (A), a dense finance dashboard (B), a playful children's maths game (C), a pixel-art game UI (D), improving one of this repository's AI-generated examples (E), plus two deliberately vague briefs (F "a landing page for a note-taking app, make it look modern", G "a Snake game with a nice UI") that mimic how the repository's examples were probably requested. Exact prompts are in `prompts/`.
- **Rendering.** `render.js` captures desktop (1440×900) and mobile (390×844) screenshots, full page and first screen, with reduced motion emulated so scroll-reveal content is visible, and runs the skill's `ui-audit.js` on every variant. Results: `screenshots/` and `screenshots/summary.json`.
- **Blind review.** A separate fresh agent saw only screenshots relabeled V1/V2/V3 in random order, with the briefs, and rated each variant on visual quality, fidelity to the requested style, coherence, product specificity, distinctiveness, usability, accessibility and responsiveness, then chose what to ship (`prompts/judge.md`; full text in `judge-review.md`).
- **One run per cell.** Every variant is a single sample. Differences between two single samples are suggestive, not statistically meaningful.

## Measured signals (skill v1.0)

From `ui-audit.js` at 1440px. "Under 11px" counts visible text elements; lower is better for every column except the last.

| Variant | Text under 11px | Font sizes | Ornament glyphs | Eyebrows | Accent-word headings | Identical card grids | Gradients | Primary faces |
|---|---|---|---|---|---|---|---|---|
| A baseline | 0/165 (0%) | 14 | 15 | 7 | 1/7 | 4 | 13 | Inter, JetBrains Mono |
| A skilled | 0/182 (0%) | 6 | 0 | 0 | 0/6 | 2 | 0 | IBM Plex Sans, IBM Plex Mono |
| B baseline | 0/225 (0%) | 7 | 6 | 0 | 0/5 | 1 | 0 | IBM Plex Sans |
| B skilled | 0/175 (0%) | 6 | 0 | 0 | 0/7 | 0 | 0 | IBM Plex Sans |
| C baseline | 0/18 (0%) | 8 | 3 | 0 | 0/4 | 0 | 0 | Nunito, Fredoka |
| C skilled | 0/35 (0%) | 8 | 0 | 0 | 1/3 | 1 | 0 | Fredoka, Nunito |
| D baseline | 21/49 (43%) | 11 | 9 | 0 | 2/3 | 0 | 2 | Press Start 2P, VT323 |
| D skilled | 0/53 (0%) | 4 | 5 | 0 | 3/4* | 0 | 1 | Jersey 10, Jacquard 12 |
| E original | 44/124 (35%) | 19 | 26 | 10 | 6/8 | 2 | 0 | Avenir Next, Georgia |
| E baseline | 14/173 (8%) | 21 | 10 | 9 | 7/8 | 4 | 0 | Work Sans, Fraunces |
| E skilled | 0/105 (0%) | 7 | 0 | 2 | 0/6 | 2 | 0 | Libre Franklin |
| F baseline | 2/117 (2%) | 15 | 0 | 5 | 5/6 | 1 | 0 | Manrope, Instrument Serif |
| F skilled | 0/121 (0%) | 9 | 0 | 0 | 0/7 | 0 | 0 | Instrument Sans, Literata |

\* D skilled's "accent words" are numbered caption boxes, a false positive. Glow counts are omitted: v1.0 of the script counted zero-blur pixel rims as glows (fixed in v1.1).

What the numbers say:

- The skill reliably removes the measurable tells: ornament glyphs, eyebrows and the accent-word formula go to zero or near zero, and the type scale tightens (A: 14 → 6 sizes; E: 19–21 → 7).
- Tiny text, the strongest tell in the repository's own examples (22–70% under 11px), was **already low in most baselines here**. The common constraints asked every agent for accessibility and readable contrast, and that alone fixed most of it. The skill still fixed the cases the constraints did not (D 43% → 0%, E 8% → 0%).
- The vague brief F reproduced the repository's look without the skill (accent-italic word in 5 of 6 headings, eyebrows, bento grid, numbered steps) and lost it with the skill.

## Blind review (skill v1.0)

The reviewer chose (mapping revealed afterwards; see `judge-review.md`):

| Scenario | Shipped | Reviewer's reason, condensed | What the reviewer said the shipped variant lost |
|---|---|---|---|
| A sleek tech | **skilled** | "Proves the claim in the hero and is honest throughout"; the other is "the stock dark-SaaS template" | Less sleek and futuristic; empty right columns, misaligned pricing button, no closing call to action |
| B dashboard | **skilled** | "Looks like a tool in daily use with breach and limit where the data is"; the other is "a KPI-tile dashboard" | Acknowledge actions, a live indicator, a disclaimer |
| C kids' game | **skilled** | Meets the whole checklist and "reads as a maths tool" (base-ten blocks, worked examples) | Warmth and colour, the mascot; a review-style states panel and dead space by the hint |
| D pixel game | **skilled** | "Feels like the game": dark-fantasy composition, dithered pause, selection states | A bigger title lockup, an explicit placeholder label |
| E improve existing | **baseline** | Keeps the stated aesthetic and every section while adding studio-specific evidence | — (the skilled version "improves by subtraction", with gold and coral "nearly absent" and the warmth gone) |

The reviewer identified the original page in E correctly from its copy and furniture, not its palette.

## What I saw in the renders

- **Specificity improved everywhere.** Skilled heroes show the product's own material: Pulse's 5xx chart with the deploy marker standing on the spike (A), the breach drawn in the holdings row and the 30% limit drawn on the sector bar (B), base-ten blocks as the motif of a maths game (C), a five-page site plan as the studio's own artifact (E), an editor full of believable notes and a real Markdown cheat-sheet (F).
- **The baselines were not bad.** B and D baselines were competent and credible; D's baseline was strong. The skill's advantage was smaller where the brief was already precise and larger where it was vague (F).
- **The skill created its own house style.** IBM Plex in A and B, a neutral grotesk in E, one muted accent, hairline label-left/content-right rows in A, E and F. Each choice was defensible; together they are a recognizable "anti-AI" look.
- **Fidelity to mood slipped.** "A bit futuristic" (A), "colorful, playful" (C) and "warm" (E) were each delivered more quietly than asked. The skill v1.0 said a lot about what to remove and little about how to deliver an adjective.
- **Finish slipped in the same places.** Half-empty two-column sections and a missing closing call to action (A), a detached "Feedback states" panel and dead space (C), a dropped banner (E).

## Revisions made (v1.0 → v1.1)

Each change maps to an observed failure:

| Observed failure | Change |
|---|---|
| Requested mood under-delivered (A, C, E) | Direction card gains a first line: *requested character → how it shows*; `framework.md` gains a table turning adjectives (sleek, futuristic, playful, warm, luxurious, industrial…) into concrete levers; a "volume check" of the first screenful |
| The skill's own fixes became a template | Guardrail naming the over-correction look; "no single container for more than two sections in a row"; the reflex-font list now includes the "safe serious" picks; `diagnostics.md` gains an over-correction table; `ui-audit.js` flags reflex primary faces |
| Worked example was copied verbatim (A copied card A's typefaces) | Examples no longer name fonts to copy and carry an explicit "do not reuse" note; card A now shows how to deliver "futuristic" deliberately |
| Improvement by subtraction (E) | Improve mode now inventories the aesthetic's *carriers* and says to fix how they are used rather than delete them; before/after thumbnail comparison |
| Finish gaps (A, C) | A finish pass in the craft step and in the checklist; closing call to action listed as a convention to keep; required states shown in the product's own frame |
| Measurement bug | Glow detection ignores zero-blur rims |

## Re-test (skill v1.1)

See the section appended below once the re-test runs complete.

## Limitations

- One sample per cell; agent output varies run to run.
- Builder, judge and skill author are all Claude models. The judge never saw the skill, the labels or the prompts that produced each variant, but it shares the builders' training, so its taste is not independent. No human preference judgments were collected; the screenshots are committed so people can judge for themselves.
- The common constraints (accessibility, no fabrication) already pushed baselines away from some tells, so the measured gap understates the difference against an unconstrained prompt and overstates nothing.
- The audit script measures surface signals only. Structure and intent were judged from renders.
- Scenario D's brief named the genre conventions explicitly, which helped the baseline; Scenario G tests the same domain with a vague brief.
- Only HTML/CSS single-page outputs were tested. Framework apps, native mobile and engine game UIs were not.
