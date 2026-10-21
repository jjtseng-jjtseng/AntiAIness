# Worked examples

Direction cards for contrasting briefs, a before/after diagnosis of a real AI-generated page, and what the validation runs taught.

**These cards illustrate reasoning. Do not reuse their typefaces, colors or layouts.** In validation, an agent given an earlier version of card A copied its font pairing for an unrelated product. The next product should get different answers because it has a different world.

## Direction cards

### A. "A sleek, modern, slightly futuristic site for a developer-facing API monitoring tool"

Brief inferred: engineers, daily, long sessions, desktop, often dark rooms, stress when things are red. Requested: sleek, modern, a bit futuristic, credible. Content: real latency/error series, endpoint names, incident timeline.

```
Direction: "Live instrument". Credible because it shows real signal; futuristic because the signal is alive.
Requested character → how it shows: sleek → one large flat product view, few elements, tight display tracking; modern → current type and real UI, no decoration; futuristic → a squared technical display face, a single luminous accent used only on live values, the chart redraws as data arrives, depth from stacked dark surfaces; credible → real units, honest labels, no glow on anything that is not data.
The memorable thing: the incident chart with the deploy marker standing on the line, large in the hero, its live trace in the accent color.
Type: a squared or wide technical display face for headings (chosen for its engineered feel), a plain readable sans for body, a monospace with tabular figures only for endpoints and numbers. Sizes 14/16/20/32/52.
Color: layered blue-black surfaces (three steps), text near-white, one luminous accent for live data and the primary action only (~5% of the page), semantic red for incidents.
Shape & surface: 4px controls, 8px panels; surfaces separated by tone, borders only inside data views; a soft light falloff behind the live chart is allowed because it is the one thing that "emits".
Density: marketing-sparse around a working-dense product view.
Imagery: the product's own views, flat and large.
Motion: the chart trace draws on load (once) and ticks on update; nothing else moves.
Voice: terse, specific ("p95 412 ms, +18% vs 7d").
Conventions kept: pricing table with the recommended plan marked, a closing call to action, sign-in top right.
```

### B. "A playful, colorful math game for 8-year-olds"

```
Direction: "Paper counting toys". Playful means a consistent toy-box world, not confetti.
Requested character → how it shows: colorful → five tile colors covering most of the play area; playful → tiles that press and bounce, a mascot with three states; friendly → rounded heavy type, kind copy; trustworthy → a plain note for adults, no ads, no streak pressure.
The memorable thing: numbers and operators as chunky tactile tiles with a drop shadow that *press* when tapped; every screen is built from the same tiles.
Type: Fredoka (heavy, rounded, open counters) for everything, 20px minimum, 40–64px for the sum being solved.
Color: cream board (#fff6e5), five tile colors with roles (ones = yellow, tens = orange, operators = blue, answers = green, mistakes = soft red), ink #2a2440. Chosen for a toy-material feel and clear semantics for a child.
Shape & surface: 14px radius tiles with a 4px hard shadow; flat board; no gradients.
Density: one problem per screen; big targets (64px); progress as a row of stars at top.
Imagery: tile illustrations only; a single friendly mascot that reacts in three states (idle, cheer, hint) with rules.
Motion: tiles press (80ms), correct answers bounce once, wrong answers wobble once; nothing ambient.
Voice: short, kind, specific ("Try 7 + 5 again"), never sarcastic.
Conventions kept: big "Next" button bottom-right, a visible home button, sound toggle.
```

### C. "A serious financial analytics dashboard for portfolio managers"

```
Direction: "Ledger". Credibility comes from numbers set correctly.
Requested character → how it shows: serious → neutral palette, no decoration; information-dense → 32px rows, everything above the fold; credible → limits drawn where they are breached, benchmark beside every return.
The memorable thing: a dense holdings table with exposure bars inline, sorted by risk contribution, with the day's P&L as the only large number on the screen.
Type: a sans with true tabular numerals and a slightly condensed width for dense columns (12/13/14/18/28); no mono (a ledger, not a terminal).
Color: white surfaces, hairline #d9dde3 borders, text #1b1f24; accent navy #1f3a5f for selection and links only; semantic green/red for up/down with ▲▼ glyphs as the second cue; amber for breaches. Light theme because this is daytime desk work on bright monitors.
Shape & surface: 2px radius; borders only; no shadows; no cards, panels are regions of one grid.
Density: analysis-tool dense: 32px rows, 13px numbers, 12px column headers.
Imagery: none; charts are small multiples with baselines and the comparison (benchmark) drawn in.
Motion: none beyond hover and sort.
Voice: nouns the desk uses (NAV, exposure, tracking error); no "insights".
Conventions kept: red/green, right-aligned numbers, frozen header, export to CSV.
```

## Before/after diagnosis: a real example

The repository's `raspberry-pi-showcase` is a well-made AI-generated landing page: coherent palette (paper, pink, lime), good responsiveness, working components. It still reads as AI. Diagnosis by layer:

**Intent**
1. The memorable thing is a decorative hero collage (tilted photo, two floating cards, orbit rings, a rotated lime sticker) rather than the product's own material. Fix: the board itself, large and flat, with a real annotated spec diagram; or the project idea picker as the hero.
2. Simulated specificity: "01 / 04" counters, "YOUR NEXT SIDE PROJECT, RIGHT HERE ✳", "GOOD THINGS START SMALL" sticker. Fix: real spec table, real project links with titles, real prices (which the page does have; promote them).
3. Copy cadence: "Small board. Big ideas.", "One tiny computer. A long list of 'what if?'", "Make room for what if." Fix: say what the board is and what it costs in the first sentence.

**Structure**
4. Template skeleton: announcement → hero → stat band → tabs section → dark band → models → colored band → FAQ → dark CTA → footer. Fix: reorder by the buyer's questions (what is it, what can I build, which one, what do I need), merge the two CTA bands, cut the "Curiosity is the only prerequisite" band.

**Surface**
5. Measured: 106 of 183 text elements under 11px; dominant sizes 7–9px; h1 91px. Fix: body 16px, labels 12–13px, h1 56px; reduce to 6 sizes.
6. `↗`/`✳` glyphs 30 times; eyebrows with lines on every section; one accent word per heading. Fix: remove the glyph system; kickers only where they carry a category.

What to keep: the pink/lime/paper palette (it is Raspberry Pi-adjacent and lively), Space Grotesk as the display face, the memory-option selector (a real product interaction), the FAQ content (it is real and useful), the responsive behavior.

## What the validation runs taught (v1.0 → v1.1)

Seven scenarios were built twice by fresh agents, with and without this skill, and reviewed blind (`evaluation/` in the repository). With v1.0:

- **What worked**: every skill-guided output removed the measurable tells (tiny text, ornaments, eyebrows, accent words, glows); heroes showed the product's own material (a deploy-marker chart, an editor full of real-looking notes, base-ten blocks, a page plan); dashboards and games gained clearer focal points and states. A blind reviewer preferred the skill-guided version in four of five paired scenarios.
- **What failed**: the outputs were consistently *quieter than asked*. "A bit futuristic" became calm documentation; "colorful and playful" became tasteful; "warm" lost its serif and most of its color in an improvement task, which the reviewer ranked below the unguided rewrite. Three of six outputs chose the same "serious" typeface, and hairline label/value rows appeared in most pages. Finish slipped: half-empty sections, a missing closing call to action, misaligned pricing buttons, a "states" panel that made a game read like a spec.
- **What changed in v1.1**: the "requested character" line in the direction card and the translation table in `framework.md`; the fidelity-and-finish checklist group; "fix carriers, don't delete them" in improve mode; the over-correction table in `diagnostics.md`; cards here that no longer name fonts to copy.

## Evaluation scenarios

Used to validate the skill (see `evaluation/` in the repository). Each has a fixed brief; outputs are rendered and compared with and without the skill.

- **A. Sleek modern technology product**: a landing page for an API monitoring tool; must stay sleek and modern.
- **B. Serious information-dense dashboard**: a portfolio risk dashboard with provided sample data.
- **C. Playful or creative interface**: a math practice game for children.
- **D. Game interface**: a title screen + HUD for a browser arcade game in a specific genre and world.
- **E. Existing design improvement**: improve one of the repository's AI-generated examples while preserving its stated aesthetic and features.

Rubric (qualitative, not a score): visual quality; fidelity to requested style; coherence; product specificity; distinctiveness; presence of default tells by layer; usability; accessibility floor; responsive behavior.
