# Validation: does the skill change what agents build?

This folder holds a small, controlled experiment: the same briefs built by fresh agents with and without the `authentic-ui-design` skill, rendered, measured, and reviewed blind. It is evidence about this skill on these briefs, not a general benchmark. Every cell is a single sample.

## Summary

- **Without the skill, agents reproduce the look this repository was created to remove.** A vague brief (F, "make it look modern") produced the accent-italic headline formula in five of six headings, tracked eyebrows, a bento grid and numbered steps. Another (G, "a Snake game with a nice UI") produced cream paper, a serif title, forest green and a dashboard sidebar around the canvas.
- **With the skill, the measurable tells disappear and the work gets more specific.** Ornament glyphs, eyebrows and the accent-word formula went to zero or near zero in every skill-guided build, the type scale tightened to 5–9 sizes, and heroes showed the product's own material instead of decoration.
- **The first version over-corrected.** It produced pages quieter than the briefs asked for and, in improve mode, deleted the elements that carried the brand's warmth. A blind reviewer preferred the unguided rewrite in that scenario. The fixes in v1.1 addressed it, and v1.1 won all three re-tested scenarios against same-model baselines.
- **Some of those wins were contaminated by my own worked examples.** The skill's example cards covered products close to scenarios A, B and C, and one reference file described the exact Scenario E failure. Agents copied from them. v1.2 removes that overlap; the clean v1.2 re-test is reported below.
- **Taken together:** the clean evidence (D, F, G, and the v1.2 re-tests) supports the claim that the skill improves specificity and removes default tells without imposing one style. It does not prove that the skill makes designs better in general. The judge is a model, the samples are single runs, and no human preference data was collected.

## Method

- **Agents.** Each output was produced by a fresh general-purpose agent with no conversation history. Rounds 1 and 2 used Claude Fable 5.1. Fable usage credits ran out during the project, so rounds 3 and 4 used Opus 5.5, with fresh Opus 5.5 baselines so that no comparison crosses models.
- **Baseline vs skilled.** Both variants got the identical brief and common constraints (`prompts/common-constraints.md`): one standalone HTML file, Google Fonts only, responsive 390–1440px, accessible, no fabricated proof. For baseline runs the skill directories were moved out of the repository and the agent was told not to read repository files or load skills. Skilled runs got one extra sentence telling them to read and follow the skill's `SKILL.md`. In rounds 3 and 4 the skilled agents read a copy of the skill outside the repository so the baselines running in parallel could not find it.
- **Scenarios.** A sleek tech landing page (A), a dense finance dashboard (B), a playful children's maths game (C), a pixel-art game UI (D), improving one of this repository's AI-generated examples (E), and two deliberately vague briefs (F, G) that mimic how the repository's examples were probably requested. Exact prompts are in `prompts/`.
- **Rendering.** `render.js` captures desktop (1440×900) and mobile (390×844) screenshots, full page and first screen, with reduced motion emulated so scroll-reveal content is visible, and runs the skill's `ui-audit.js` on every variant. Results: `screenshots/` and `screenshots/summary.json`. Touch behavior was checked separately with phone emulation.
- **Blind review.** A separate fresh agent saw only screenshots relabeled V1–V4 in seeded random order, plus the briefs, and rated each variant on visual quality, fidelity to the requested style, coherence, product specificity, distinctiveness, usability, accessibility and responsiveness, then ranked them (`prompts/judge.md`, `prompts/judge-2.md`; full texts in `judge-review.md` and `judge-review-2.md`, each with its label mapping).

| Round | Model | Skill | Scenarios | Reviewed in |
|---|---|---|---|---|
| 1 | Fable 5.1 | none vs v1.0 | A, B, C, D, E | `judge-review.md` |
| 2 | Fable 5.1 | none vs v1.0 | F, G (vague) | `judge-review-2.md` |
| 3 | Opus 5.5 | none vs v1.1 | A, C, E | `judge-review-2.md` (with the round 1 skilled builds as a third variant) |
| 4 | Opus 5.5 | v1.2 (round 3 baselines reused) | A, C, E | `judge-review-3.md` |
| 5 | Opus 5.5 | none vs v1.3 | F, G (vague) | `judge-review-4.md` |

Output folders: `scenarios/<id>/baseline` and `skilled` are rounds 1–2; `baseline-opus` and `skilled-v11-opus` are round 3 (and `baseline-opus` for F and G is round 5); `skilled-v12-opus` is round 4; `skilled-v13-opus` is round 5; `E/original` is the unmodified page.

## Measured signals

From `ui-audit.js` (v1.2 of the script) at 1440px. "Under 11px" counts visible text elements. Lower is better in every column except the last.

| Variant | Text under 11px | Font sizes | Ornament glyphs | Eyebrows | Accent-word headings | Identical card grids | Gradients | Primary faces |
|---|---|---|---|---|---|---|---|---|
| A baseline (Fable) | 0/165 (0%) | 14 | 15 | 7 | 1/7 | 4 | 13 | Inter, JetBrains Mono |
| A skilled v1.0 (Fable) | 0/182 (0%) | 6 | 0 | 0 | 0/6 | 2 | 0 | IBM Plex Sans, IBM Plex Mono |
| A baseline (Opus) | 0/222 (0%) | 16 | 10 | 7 | 0/8 | 2 | 37 | JetBrains Mono, Archivo |
| A skilled v1.1 (Opus) | 0/158 (0%) | 7 | 0 | 0 | 0/6 | 2 | 3 | Saira, Martian Mono |
| B baseline (Fable) | 0/225 (0%) | 7 | 6 | 0 | 0/5 | 1 | 0 | IBM Plex Sans |
| B skilled v1.0 (Fable) | 0/175 (0%) | 6 | 0 | 0 | 0/7 | 0 | 0 | IBM Plex Sans |
| C baseline (Fable) | 0/18 (0%) | 8 | 3 | 0 | 0/4 | 0 | 0 | Nunito, Fredoka |
| C skilled v1.0 (Fable) | 0/35 (0%) | 8 | 0 | 0 | 1/3 | 1 | 0 | Fredoka, Nunito |
| C baseline (Opus) | 0/62 (0%) | 16 | 1 | 0 | 3/4 | 1 | 1 | Fredoka, Lexend |
| C skilled v1.1 (Opus) | 0/59 (0%) | 8 | 0 | 0 | 0/2 | 2 | 0 | Andika, Grandstander |
| D baseline (Fable) | 21/49 (43%) | 11 | 9 | 0 | 2/3 | 0 | 2 | Press Start 2P, VT323 |
| D skilled v1.0 (Fable) | 0/53 (0%) | 4 | 5 | 0 | 3/4* | 0 | 1 | Jersey 10, Jacquard 12 |
| E original | 44/124 (35%) | 19 | 26 | 10 | 6/8 | 2 | 0 | Avenir Next, Georgia |
| E baseline (Fable) | 14/173 (8%) | 21 | 10 | 9 | 7/8 | 4 | 0 | Work Sans, Fraunces |
| E skilled v1.0 (Fable) | 0/105 (0%) | 7 | 0 | 2 | 0/6 | 2 | 0 | Libre Franklin |
| E baseline (Opus) | 7/150 (5%) | 18 | 4 | 0 | 0/7 | 1 | 3 | Schibsted Grotesk, IBM Plex Mono |
| E skilled v1.1 (Opus) | 0/148 (0%) | 7 | 0 | 0 | 1/8 | 0 | 0 | Figtree, Gelasio |
| F baseline (Fable) | 2/117 (2%) | 15 | 0 | 5 | 5/6 | 1 | 0 | Manrope, Instrument Serif |
| F skilled v1.0 (Fable) | 0/121 (0%) | 9 | 0 | 0 | 0/7 | 0 | 0 | Instrument Sans, Literata |
| G baseline (Fable) | 1/29 (3%) | 9 | 0 | 0 | 0/6 | 0 | 0 | Inter, Fraunces |
| G skilled v1.0 (Fable) | 0/14 (0%) | 5 | 0 | 0 | 0/4 | 0 | 0 | Rubik, Alfa Slab One |

\* D skilled's "accent words" are numbered caption boxes, a false positive. Round 4 rows are added in the round 4 section below.

What the numbers say:

- The skill reliably removes the measurable tells and tightens the type scale (for example A: 14–16 sizes → 6–7; E: 18–21 → 7).
- Tiny text, the strongest tell in the repository's own examples (22–70% under 11px), was already low in most baselines here, because the common constraints asked every agent for accessibility. The skill still fixed the cases the constraints did not (D 43% → 0%, E 5–8% → 0%).
- Primary faces vary with the product once the skill is v1.1+ (Saira for a futuristic tool, Andika and Grandstander for young readers, Figtree with a Gelasio serif to keep a warm brand). With v1.0, IBM Plex appeared in two of five builds.

## Round 1 (skill v1.0, Fable 5.1): blind review

| Scenario | Reviewer shipped | Reviewer's reason, condensed | What the shipped variant lost |
|---|---|---|---|
| A sleek tech | **skilled** | "Proves the claim in the hero and is honest throughout"; the other is "the stock dark-SaaS template" | Less sleek and futuristic; half-empty sections, misaligned pricing button, no closing call to action |
| B dashboard | **skilled** | "Looks like a tool in daily use with breach and limit where the data is"; the other is "a KPI-tile dashboard" | Acknowledge actions, a live indicator, a disclaimer |
| C kids' game | **skilled** | Meets the whole checklist and "reads as a maths tool" | Warmth and color, the mascot; a review-style states panel and dead space |
| D pixel game | **skilled** | "Feels like the game": dark-fantasy composition, dithered pause, selection states | A bigger title lockup, an explicit placeholder label |
| E improve existing | **baseline** | Keeps the stated aesthetic and every section while adding studio-specific evidence | — (the skilled version "improves by subtraction", with gold and coral "nearly absent") |

My own reading of the renders agreed and added one pattern the reviewer could only see per scenario: the skill-guided builds converged on a house style of their own (IBM Plex or a neutral grotesk, one muted accent, hairline label/value rows), and each delivered the requested mood more quietly than asked.

## Revisions after round 1 (v1.0 → v1.1)

| Observed failure | Change |
|---|---|
| Requested mood under-delivered (A, C, E) | Direction card gains a first line: *requested character → how it shows*; `framework.md` gains a table turning adjectives (sleek, futuristic, playful, warm, luxurious, industrial…) into concrete levers; a "volume check" of the first screenful |
| The skill's own fixes became a template | A guardrail naming the over-correction look; "no single container for more than two sections in a row"; the reflex-font list now includes the "safe serious" picks; an over-correction table in `diagnostics.md`; `ui-audit.js` flags reflex primary faces |
| Improvement by subtraction (E) | Improve mode inventories the aesthetic's *carriers* and fixes how they are used rather than deleting them; before/after comparison at thumbnail size |
| Finish gaps (A, C) | A finish pass in the craft step and checklist; a closing call to action listed as a convention to keep; required states shown in the product's own frame |
| Measurement bug | Glow detection ignores zero-blur pixel rims |

## Rounds 2 and 3: blind review

Variants per scenario: A and C had the Opus baseline, Opus with v1.1, and Fable with v1.0. E added the original page. F and G had the Fable baseline and Fable with v1.0.

| Scenario | Ranking (best first) | Reviewer's reason for the winner, condensed |
|---|---|---|
| A sleek tech | **v1.1** > Opus baseline > v1.0 | "Proves that a deploy caused the regression in its first screen, with a credible and slightly futuristic finish"; v1.0 is "credible but neither sleek nor futuristic" |
| C kids' game | **v1.1** > Opus baseline > v1.0 | "The most colorful and playful, and shows place value with base-ten blocks"; v1.0 is "too muted for kids" |
| E improve existing | **v1.1** > Opus baseline > v1.0 > original | "Keeps the whole original look and swaps the slogans for one specific idea"; v1.0 "strays furthest from the warm, friendly look"; all three edits beat the original |
| F vague landing | **skilled** > baseline | "Demonstrates every feature with one believable note thread"; the baseline is "the polished modern SaaS template, but generic" |
| G vague game | **skilled** > baseline | "A memorable lawn-and-garter-snake world"; the baseline's "pale board and dashboard sidebar are bland" |

The reviewer also listed a house style repeated across variants, regardless of who built them: visible "sample data / placeholder" chips and build notes, hairline label/value tables, small labels with a leading rule, cream backgrounds nobody asked for, and a "what we won't do" voice. It flagged the skill-guided Snake game as unplayable on phones. A check with touch emulation showed the D-pad exists but is hidden until a game starts and the start dialog only mentions arrow keys; that is a real discoverability failure.

## Contamination

After round 3 I checked the skill's files against the scenarios and found that my own worked examples leaked answers:

| Scenario | What leaked | Visible effect |
|---|---|---|
| A | v1.0 and v1.1 had a direction card for "a developer-facing API monitoring tool" with "the incident chart with the deploy marker" as its memorable thing; v1.0's card named IBM Plex | Both skill-guided A builds used a deploy-marker chart hero; the v1.0 build used IBM Plex |
| B | v1.0 had a card for "a portfolio-manager dashboard" named "Ledger" | The skill-guided B build named its direction "Ledger with limits drawn in" |
| C | v1.0 and v1.1 had a card for "a math game for 8-year-olds"; v1.1's `SKILL.md` gave "a children's maths manipulative" as an example memorable thing | The v1.1 build was built around base-ten blocks (the v1.0 build and the Opus baseline also used base-ten blocks or rods, so this idea is partly independent) |
| E | v1.1's `modes.md` described the round 1 E failure in E's own terms (serif, gold, coral, banner, studio) | The v1.1 build kept exactly those carriers |

D, F and G had no matching example, and the round 1 E failure happened before any E-specific text existed. So the clean evidence from rounds 1–3 is: D, F and G favor the skill, and E in round 1 favors the baseline. Rounds 1 and 3 results for A, B, C, and round 3 for E, are confounded with copying.

v1.2 replaces the three direction cards with unrelated products (an electric-motorcycle companion app, a 12-room mill hotel, a factory work-order tablet), describes type by its qualities instead of naming fonts, removes the list of evaluation scenarios from the skill, and generalizes the improve-mode examples. v1.2 also adds two lessons from round 3: keep honesty notes quiet (one plain note, developer notes in HTML comments), and give every keyboard-driven control a visible touch equivalent.

## Round 4 (skill v1.2, Opus 5.5): clean re-test

Same briefs as rounds 1 and 3; Opus 5.5 baselines from round 3; skill v1.2 with no overlapping examples. Reviewed blind against the baseline only (and the original page for E).

| Variant | Text under 11px | Font sizes | Ornament glyphs | Eyebrows | Accent-word headings | Identical card grids | Gradients | Primary faces |
|---|---|---|---|---|---|---|---|---|
| A skilled v1.2 (Opus) | 0/164 (0%) | 7 | 0 | 0 | 0/6 | 1 | 3 | Archivo, JetBrains Mono |
| C skilled v1.2 (Opus) | 0/50 (0%) | 9 | 0 | 0 | 0/4 | 3† | 0 | Andika, Baloo 2 |
| E skilled v1.2 (Opus) | 0/148 (0%) | 7 | 0 | 0 | 1/8 | 0 | 0 | Nunito Sans, Gelasio |

† The answer tiles and mode choices, which are legitimately parallel.

| Scenario | Ranking (best first) | Reviewer's confidence | The reviewer's reasons, condensed |
|---|---|---|---|
| A sleek tech | **baseline** > skill v1.2 | low, "small difference" | The baseline "delivers every word of the brief, including 'a bit futuristic'" with lime-on-black and instrument framing; the skill-guided page is the better product demo (deploy, latency, 5xx and incident on one axis, a working alert rule) but "futuristic shows up only in the glowing p95 line" and "sky-blue on navy reads as standard SaaS" |
| C kids' game | **skill v1.2** > baseline | low, "small difference" | The skill-guided game's "core ideas come from the subject itself" (a base-ten unit cube as mascot, digits colored by place value, carrying explained in tens and ones); the baseline is more polished and more colorful and uses green for correct, where the skill-guided game used yellow |
| E improve existing | **baseline** > skill v1.2 > original | medium between the two; high that both beat the original | The baseline kept the hero mockup and annotated it with the studio's reasoning, which "shows the studio's expertise instead of claiming it"; the skill-guided page kept more of the original's accents and has the best path to action, but its text-only hero "gives a design studio little visual evidence of its own craft" |

What this means:

- **Against a strong same-model baseline on a precise brief, the skill's effect on judged quality is small and mixed.** Opus 5.5 with a detailed brief and the common constraints already avoids most surface tells and produces specific work. The skill still removed the remaining measurable tells (the A baseline had 7 eyebrows, 10 ornament glyphs and 37 gradients; the skill-guided page had none), but the reviewer did not reward that by itself.
- **The skill's remaining bias is restraint.** Where the baseline won, it committed harder to the requested genre (A) or turned decoration into evidence instead of removing it (E). Where the skill won, its idea came from the subject (C).
- **Contamination mattered less than feared for A.** Without the leaked example, the v1.2 build still made the deploy-marker chart the hero, because the brief itself names deploy markers and the causing deploy. It also chose the same Archivo + JetBrains Mono pairing as the baseline, so the model's own type defaults persist under the skill.

Changes in v1.3, each from a reviewer's reason above: "genre vocabulary is allowed" (use the requested genre on purpose; distinctiveness comes from the product's material); "turn decoration into evidence before deleting it"; "keep semantic colors conventional"; matching rows in the over-correction table. v1.3 is tested only on the vague briefs in round 5.

## Round 5 (skill v1.3, Opus 5.5): vague briefs

Pending. This section is completed when the round 5 builds and review finish.

## Limitations

- One sample per cell; agent output varies run to run.
- Builders, judges and the skill author are all Claude models. The judges never saw the skill, the prompts or the variant names, but they share the builders' training, so their taste is not independent. No human preference judgments were collected; the screenshots are committed so people can judge for themselves.
- The common constraints (accessibility, no fabrication) already pushed baselines away from some tells, so the measured gap understates the difference against an unconstrained prompt.
- The audit script measures surface signals only. Structure and intent were judged from renders.
- Rounds 3 and 4 used a different model from rounds 1 and 2; comparisons are only made within a model.
- In round 4, the C agent's resume message (after a usage-limit interruption) asked it to check touch devices, which the baselines were not told. The v1.2 skill itself also requires this, so the effect should be small.
- Only standalone HTML/CSS pages were tested. Framework apps, native mobile and engine game UIs were not.
