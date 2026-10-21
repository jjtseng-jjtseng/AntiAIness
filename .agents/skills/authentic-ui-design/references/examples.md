# Worked examples

Three direction cards for contrasting briefs, a before/after diagnosis of a real AI-generated page, and the evaluation scenarios used to validate this skill.

## Direction cards

### A. "A sleek, modern interface for a developer-facing API monitoring tool"

Brief inferred: engineers, daily, long sessions, desktop, often dark rooms, stress when things are red. Requested: sleek, modern. Content: real latency/error series, endpoint names, incident timeline.

```
Direction: "Instrument panel". Sleek means calm precision, not glow.
The memorable thing: a full-width live latency chart as the hero of the app and of the marketing page, with real endpoint names on the y-axis.
Type: IBM Plex Sans for UI (13/14/16/20/28), IBM Plex Mono for endpoint paths and numbers with tabular figures. Chosen: engineered, legible, real mono companion.
Color: near-neutral dark surfaces (#14171c / #1b1f26), text #e6e9ef, muted #8b93a1; one accent for interaction, a desaturated blue (#6ea8ff); semantic red/amber/green reserved for status and never used as decoration. Dark chosen because the audience works at night with many dark tools; a light theme is offered.
Shape & surface: 4px radius on controls, 6px on panels; 1px borders, no shadows except menus; no glow.
Density: working-tool dense: 36px rows, 13px table text.
Imagery: none; the product's own charts and tables are the imagery.
Motion: state feedback only; chart updates animate 150ms.
Voice: terse, specific ("p95 412 ms, +18% vs 7d"), no exclamation.
Conventions kept: sidebar nav, ⌘K search, red = bad.
```

### B. "A playful, colorful math game for 8-year-olds"

```
Direction: "Paper counting toys". Playful means a consistent toy-box world, not confetti.
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
The memorable thing: a dense holdings table with exposure bars inline, sorted by risk contribution, with the day's P&L as the only large number on the screen.
Type: Source Sans 3 for UI (12/13/14/18/28), tabular numerals; no mono (a ledger, not a terminal).
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

## Evaluation scenarios

Used to validate the skill (see `evaluation/` in the repository). Each has a fixed brief; outputs are rendered and compared with and without the skill.

- **A. Sleek modern technology product**: a landing page for an API monitoring tool; must stay sleek and modern.
- **B. Serious information-dense dashboard**: a portfolio risk dashboard with provided sample data.
- **C. Playful or creative interface**: a math practice game for children.
- **D. Game interface**: a title screen + HUD for a browser arcade game in a specific genre and world.
- **E. Existing design improvement**: improve one of the repository's AI-generated examples while preserving its stated aesthetic and features.

Rubric (qualitative, not a score): visual quality; fidelity to requested style; coherence; product specificity; distinctiveness; presence of default tells by layer; usability; accessibility floor; responsive behavior.
