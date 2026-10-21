# Analysis of the supplied AI-generated examples

Seven examples live in this repository. All were rendered in Chromium with Playwright at 1440×900 (desktop, full page) and 390×844 (mobile), plus interior app views and in-game states. Screenshots are in `screenshots/` (downscaled JPEGs); rendered-DOM measurements are in `screenshots/rendered-stats.json`. Conclusions below are from the rendered pixels unless marked *(source only)*.

| Example | Type | Stack | Rendered |
|---|---|---|---|
| `codecraft.html` | Web studio marketing page | Single HTML file, inline CSS, system font stack (Avenir Next → Segoe) + Georgia italic | Yes |
| `raspberry-pi-showcase/` | Product showcase landing | HTML + CSS + JS; Google Fonts DM Sans + Space Grotesk; one photo | Yes |
| `aj-and-j-construction/` | Local business marketing site | HTML + CSS + JS; local DM Sans + DM Serif Display; Unsplash photos | Yes |
| `red-cross-support/` | Charity supporter concept | HTML + CSS + JS; Google Fonts DM Sans + Manrope + Georgia | Yes |
| `flowstate-pf-coach/` | SaaS-style debate practice app | HTML + CSS + 66 KB JS SPA; DM Sans + Manrope; localStorage | Yes, 6 views |
| `neon-tetris/` | Browser Tetris | HTML + CSS + JS; Inter + mono | Yes, start + playing |
| `starfall-courier/` | Browser arcade game | Single HTML file; Inter + ui-monospace; canvas | Yes, start + playing |

The AJ & J and Flowstate folders also contain the generating agent's own Playwright QA artifacts (`output/playwright/`, `.playwright-cli/`), which confirms these were produced by an agent that *did* render and verify its work. Functional quality is high across the set: responsive layouts hold at 320–1440, dialogs trap focus, reduced-motion is respected, no console errors. The problem is not competence. It is sameness.

## Measured, across all seven (desktop)

| Page | Text elements | Under 11px | Dominant sizes | h1 size | Ornament glyphs (`↗ → ✳ ✦ ✧`) | Distinct sizes |
|---|---|---|---|---|---|---|
| codecraft | 159 | 52 (33%) | 11, 10, 9, 12 | 76px | 20 | 14 |
| raspberry-pi | 183 | 106 (58%) | 8, 7, 11, 10, 9 | 91px | 30 | 15+ |
| aj-and-j | 256 | 59 (23%) | 12, 11, 10, 9 | 86px | 23 | 14 |
| red-cross | 137 | 30 (22%) | 11, 12, 10, 23 | 68px | 21 | 12 |
| flowstate (overview) | 91 | 64 (70%) | 9, 8, 10, 11 | 25px | 7 | 10 |
| neon-tetris | 88 | 62 (70%) | 8, 7, 22, 9 | 34px | 9 | 12 |
| starfall | 65 | 45 (69%) | 8, 9, 7, 11 | 38px | 10 | 10 |

For comparison, the same measurement on real production sites (see `03-external-references.md`) gives 0–5% under 11px on nearly all of them, dominant sizes of 12–17px, and 0–2 ornament glyphs. This is the single most robust *measurable* difference we found, and it is invisible in the source: every file looks like competent CSS.

## Shared skeleton (the four marketing pages)

Despite four different palettes (navy/gold/coral on paper; pink/lime on paper; forest green on paper; Red Cross red on cream) and three different display faces, the four marketing pages have the *same page*:

1. Announcement bar with a one-line slogan and a link ending in `↗`
2. Header: wordmark with a tiny uppercase tagline under it, 3–4 nav links, pill/dark CTA ending in `↗`
3. Hero: tiny tracked uppercase eyebrow with a dot or short line → two-line display headline whose second line is an italic serif or accent-colored phrase → muted paragraph → dark button + text link (both with arrows) → a "note" line with a `✳` or `✓` → on the right, a tilted photo or mock window with floating annotation cards and a rotated label
4. Stat/ticker band (3–4 numbers, or a marquee of slogans separated by `✳`)
5. Sections each opening with eyebrow + two-line heading (accent second line) + a right-aligned muted intro paragraph
6. A 3- or 4-column grid of cards or columns with a small icon
7. Numbered 01–04 steps
8. A dark or brand-colored band
9. FAQ as `<details>` with a `+` that rotates
10. A full-width colored CTA band with a giant decorative `✳` glyph
11. Footer: wordmark + one-line slogan, "Back to top ↑"

Even the copy follows one cadence. From four unrelated subjects: "A little compassion. A world of difference." / "A little inspiration. A lot of possibility." / "Good work deserves a good website." / "Small board. Big ideas." Headlines use the "Your X. Your Y." or "X. *So can Y.*" formula; the word "little" appears in all four; "what if" appears in two; CTAs are "Let's build something ↗", "Make a difference ↗", "Find your Pi ↗", "Tell us your idea ↗".

This is the core finding of Phase 1: **the recognizable part is not the palette.** Each page has a defensible, even attractive palette. The recognizable part is a structure and a voice that were chosen before the subject was looked at.

## Example-by-example

### codecraft.html (web studio)

*Rendered:* warm paper, navy ink, gold and coral accents, Avenir/Georgia. Hero shows a hand-built mock browser window of a fictional plant shop, rotated 2°, with a code chip rotated −5° and a caption card rotated −3°, inside an orbit ring. Then: slogan ticker, two project cards (the other repo examples), dark services band with three cards, 01–04 process steps, "the CodeCraft difference" trio, FAQ, blue contact band with a form card, footer.

What is good: readable hierarchy at the top; the form works and reports state; mobile layout is sound.

Why it reads as AI: the hero's memorable thing is the decorative collage, not the studio's work; every section follows eyebrow → heading-with-italic → muted intro; `↗` appears 20 times; the services are three interchangeable cards with glyph "icons" (`✦ ↗ ⌘`); the "difference" section is filler; 52 of 159 text elements are under 11px, including 9px form labels. Copy: "Your work is one of a kind. *Your website should be, too.*", "Everything you need. *Nothing off the shelf.*", "Care in the code. Care in the details." Nothing a competitor could not say.

### raspberry-pi-showcase (product landing)

*Rendered:* the most "designed" of the set. Paper background, hot pink and acid lime accents, Space Grotesk display at 91px, DM Sans body. Hero: tilted photo with a white border, two floating fact cards ("Up to 3× faster", "40-pin GPIO"), a dashed orbit, a solid orbit, a rotated lime sticker ("GOOD THINGS START SMALL"), and a tracked caption with a `✳`. Stat band of four specs. A tabbed "project picker" that swaps a mock window and an orb. A dark band with an SVG board illustration and two more floating notes. A memory-option selector (genuinely product-specific and good). A pink band with a 200px `✳`. FAQ. A dark CTA card with a lime "sun" and a tilted chip. Footer.

What is good: the memory selector is a real product interaction; the palette is lively and Pi-adjacent; FAQ content is real; responsive behavior is excellent.

Why it reads as AI, even though it is attractive: it is the clearest instance of **uniform polish**: every one of eight sections has its own decorative composition (orbits, orbs, stickers, suns), so no section is the focal point. Specificity is simulated with counters ("01 / 04", "HOME / 01", "NO EXPERIENCE REQUIRED" eyebrows) rather than delivered (the spec table is four numbers). 106 of 183 text elements are under 11px; captions are 6–7px. Every heading uses the accent-word formula ("Small board. **Big ideas.**", "There's a Pi for **the idea in your head.**", "Make room for **what if.**"). This page proves the brief's point that an exceptionally polished page can still be unmistakably generated.

### aj-and-j-construction (local business)

*Rendered:* paper and forest green, DM Serif Display headlines (86px) with the second line in sage, DM Sans body, Unsplash photos. Hero photo with a floating note card and a `✳`. "Promise bar" with four icon slogans. Four service cards with icons and "FROM $18,000". Filterable gallery with pill tags and round arrow buttons. Split section with 01–03 points. A cost estimator (good; product-specific). 01–03 process columns. FAQ. Green CTA band with a 300px `✳`. Footer.

What is good: the estimator and planner are real, useful interactions; photo quality carries the page; disclosure that the photos are stock is honest; the README refuses to fabricate credentials.

Why it reads as AI: this is the "tasteful default" palette (cream + serif + forest green) that replaced indigo gradients once they became a tell; the structure is the shared skeleton; headlines are the formula ("Your home. Your next *great chapter.*", "Big ideas. Small details. *We're here for all of it.*"); 23 ornament glyphs; eyebrows on every section ("01 / MAKE IT YOURS"); the "promise bar" is filler; floating note card on the hero. 59 of 256 text elements under 11px.

### red-cross-support (charity)

*Rendered:* cream, Red Cross red, Manrope headline (68px) with a Georgia italic red second line, DM Sans body, real Red Cross photography. Hero photo with a 100px top-left radius, an overlaid italic caption and a circled `↗`. A "proof" band ("Since 1881 ↗", "About 40%", `✳` + "Different ways to help"). Three "cause" columns with a line icon and "01 / RELIEF" labels. Image + copy split with a `✳` sign-off. Tabbed giving panel (good). FAQ. Red CTA band with a 280px `✳`. Footer.

What is good: the photography is real and strong; the giving panel is a real interaction; facts are sourced in the README; disclaimers are honest; it is the least decorated of the four.

Why it reads as AI: still the shared skeleton and voice ("Your kindness. *Your kind of impact.*", "You don't have to change everything. *Just someone's next moment.*"); `↗` on 15 links; `✳` used as a logo-like ornament four times; 01/02/03 labels on non-sequential items; the "proof" band presents two facts as a stat strip. Typography is the healthiest of the four (22% under 11px), which is why this page is also the most credible of the four at a glance.

### flowstate-pf-coach (SaaS app)

*Rendered:* white sidebar with a rotated brand mark, team switcher, 8 nav items with line icons, a "Coach's corner" tip card, profile row; topbar with breadcrumbs, ⌘K search, avatar. Overview page: "Good afternoon, Maya." + motivational line → teal **hero card** with an illustrated "speech" shape → three stat cards with icons, all showing 0 → two-column panels (today's plan, pick up where you left off) → right column: dark "session card" with a "READY WHEN YOU ARE" pill, research starters list, coach reminder → a "topic strip". Interior views (Round room, Flow board, Evidence library, Crossfire gym, Progress) are plainer and better: the round timer and speech list are a real tool.

What is good: the interior tool views are usable and specific (NSDA speech order, timers, flow statuses); the data model is honest (no AI, cards default to UNVERIFIED); responsive sidebar works.

Why it reads as AI: the overview is the SaaS dashboard template (greeting + hero card + 3 KPI tiles + panels + tip card) applied to a product where the first thing a debater needs is the round room. 64 of 91 text elements are under 11px (8–9px is the dominant size); every container is a 12px-radius white card with a hairline border; icon-chips at 29px in every stat card; the "session card" has decorative concentric rings. The dashboard is designed for the screenshot, not the session.

### neon-tetris (game)

*Rendered:* near-black with purple/cyan ambient blobs and a faint grid, Inter + monospace micro-labels. Header: rotated brand mark, "ALL SYSTEMS READY / NO. 008", personal best chip. Intro: eyebrow "THE CLASSIC, AFTER DARK", "Find your *flow.*" with a right-aligned motivational couplet. Three-column layout: left panel of stat cards (score card with a glow, lines/level cards, progress card, a quote with a giant `"`), the well in the middle with an overlay card ("A LITTLE SPACE TO THINK / Ready when you are."), right panel with next-piece cards, hold card, controls card, "There is no rush. Until there is." Footer: "MADE FOR THE IN-BETWEEN MOMENTS · 2025".

What is good: the well and piece rendering are crisp; the game works; the touch controls are considerate.

Why it reads as AI: it is a **SaaS dashboard wrapped around a Tetris well**. The game's world is absent: no title treatment, no theme, the pieces are the only game-specific pixels. Status pills ("ALL SYSTEMS READY", "NO. 008") are manufactured specificity. 62 of 88 text elements under 11px with 7–8px mono labels; glow on score, status dots and the primary button; the motivational copy is a wellness app's, not an arcade's.

### starfall-courier (game)

*Rendered:* near-black with two radial tints, Inter + ui-monospace. Header: `✦` mark, "FLIGHT SYSTEMS NOMINAL" status, avatar "P". Intro: eyebrow "FLIGHT DECK / SECTOR 07", "Starlight Courier", a personal-best chip. Card with a game header ("Outer Belt Run · 01 / 03", "STANDBY"), the canvas (stars, dashed orbit arc, glowing crystals and drones), a launch overlay card with an emblem, a "mission" sidebar card with progress bar, objectives, two stat cards, "SHIP INTEGRITY" dots, a "flight controls" card, a tiny mono footer.

What is good: the canvas game itself has charm (particles, boost, screen shake); the sidebar objectives are genuinely useful.

Why it reads as AI: the same dashboard chrome as Neon Drop, with the same manufactured-specificity labels ("SECTOR 07", "01 / 03", "SYSTEMS NOMINAL"), the same glow-dot status, the same mono micro-labels (45 of 65 text elements under 11px), the same gradient primary button with a `→`. The two games were generated independently and are nearly interchangeable at a squint, which is the definition of the problem.

## Distinguishing bad design from AI-recognizable design

These examples are not badly designed in the usual sense: alignment is clean, palettes are coherent, spacing is consistent, responsiveness is handled, accessibility basics are present. The defects are of a different kind:

- **Decisions made before looking at the subject** (the skeleton, the voice, the ornament system).
- **Specificity simulated rather than delivered** (counters, status pills, version strings, stickers).
- **Uniform polish with no focal point** (every section gets its own decoration).
- **Micro-typography optimized for a thumbnail** (poster headline, 7–9px labels).
- **A second-generation "tasteful" palette** that signals "I know purple gradients are a tell" without changing anything structural.

A page can pass every usability heuristic and still fail all five. That is the gap the skill targets.
