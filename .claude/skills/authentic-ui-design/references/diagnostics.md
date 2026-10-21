# Diagnostics: why a UI reads as AI-generated, and what to do about it

Use this when asked "why does this look AI-generated?", when auditing your own render before shipping, or when a design is attractive but still generic. The goal is a short list of **concrete, checkable causes with fixes**, grouped by layer. Never answer with "it feels generic".

Evidence behind this file: seven AI-generated examples in the AntiAIness repository (four marketing sites, one SaaS app, two browser games) rendered and measured, compared with ~25 real production sites rendered the same way, plus the published literature on the phenomenon. See the repository's `research/` folder for the full analysis.

## The procedure

1. **Render it.** Desktop (1440) and narrow (390). Full page and above the fold. Look at pixels, not code.
2. **Name the direction the design is attempting** in one sentence. (If you cannot, that is finding #1: no direction.)
3. **Walk the three layers below**, noting only what is present. For each finding, write: *what*, *where*, *why it reads as a default*, *when it would be fine*, *fix*.
4. **Rank by layer.** Intent and structure findings matter more than surface ones; fixing surface alone produces the second-generation AI look.
5. **Propose the smallest set of changes** that resolves the ranked findings while preserving the requested aesthetic. Do not propose a restyle.

## Layer 1: Surface tells

| Tell | Why it reads as a default | When it is fine | Fix |
|---|---|---|---|
| Inter / DM Sans / Manrope / Space Grotesk / Plus Jakarta / Outfit as the only face | They are the faces models reach for when nothing was decided | A product that wants to feel neutral and native; a design system that already uses them | Choose for the product's voice; or keep the face and make every other decision deliberate |
| Indigo → violet gradient; gradient text | Tailwind demo defaults propagated through training data | Brand is actually purple; gradient has one job (e.g. a hero ribbon) | Palette from something true about the product; accent in ≤ 2 places |
| Cream/paper background + serif italic accent word + forest green / terracotta / coral | The "tasteful" replacement default once purple became a tell | Editorial, hospitality, craft brands where warmth is the brief | Pick a paper that matches the brand's materials, or go white; drop the accent-word reflex |
| Near-black + lime/cyan + monospace micro-labels + glow | The "developer/sci-fi" replacement default | Terminals, dev tools, actual sci-fi games, where mono is functional | Use mono at readable size for actual data; glow only on the one thing that emits light |
| Uniform radius on every box (often 12–16px, or 4px everywhere) | A single token applied without a shape idea | A soft consumer product; a sharp editorial one; consistency itself is good | Decide a radius policy from the product's materials; vary by element role (container vs control vs chip) |
| Border + shadow + radius + inner highlight on the same element | Layered "polish" without hierarchy | Elevated overlays (menus, dialogs) | One boundary technique per element class |
| Glass / backdrop blur, orbit rings, halos, floating badges, rotated "sticker" chips, tilted device mocks | Composed "hero collage" that photographs well | A product that is itself about layering/glass; a single playful mark in a playful brand | Show the real product, real photo, real data; or a single illustrated element with a reason |
| Tiny uppercase tracked eyebrow above every heading, often with a dot or a short line | Editorial habit applied to everything | Editorial kickers that carry a category; one per section at most | Use the category only where it informs; otherwise cut |
| `↗` after links, `→` on every button, `✳`/`✦`/`✧` ornaments, `·` meta strings | Ornament standing in for personality | A brand that owns the glyph and uses it once | Plain links; one arrow on the primary action if any |
| Status dots that glow, "LIVE"/"READY" pills with no live system behind them | Simulated dynamism | Real status (connection, build, market open) | Remove, or wire to a real state |
| Mini-mock windows with three traffic-light dots | Shorthand for "software" | A page about a browser/desktop app, drawn once, honestly | Show an actual screenshot of the real UI, or nothing |
| Emoji as icons; thin interchangeable line icons for abstract "features" | No icon system | Consistent custom set, or a well-chosen icon family used for real functions | Icons only for wayfinding and status; no icons for marketing bullets |

## Layer 2: Structural tells

| Tell | Why it reads as a default | When it is fine | Fix |
|---|---|---|---|
| The template skeleton: announcement bar → nav + pill CTA → eyebrow → 2-line headline → muted paragraph → dark button + text link → visual with floating badges → stat band → sections (eyebrow + heading + right-aligned intro) → 3-card grid → 01–04 steps → dark band → FAQ → colored CTA band → footer | The highest-probability landing page. In the repository examples, a construction firm, a charity, a hardware showcase and a web studio all got it | Each piece is fine *on its own* if the content demands it | Start from a content inventory in the visitor's order of questions; build only sections that have real content; vary the rhythm |
| Every section is `heading + N identical cards` | Cards are the universal container when no decision was made | Genuinely parallel, comparable items (plans, products) | Lists, tables, prose, a single large image, a comparison; cards only for actually card-like things |
| Numbered 01–04 steps for things that are not a sequence | "Process" sections as filler | A real sequence (onboarding, checkout) | Describe the real process or cut |
| Stat band of 3–4 big numbers | Simulated proof | Real, sourced numbers that matter to the visitor | Real numbers with units and source, or none |
| Perfect symmetry and even rhythm; every section the same height and padding | Nothing was weighted | Catalog grids, pricing tables | Give the important thing more space; let plain things be plain and short |
| Dashboard = greeting + hero card + three stat tiles + two-column panels + "tip" card | The SaaS dashboard template | Rarely as a whole; stat tiles when they drive action | Primary task in primary space; data in tables with comparison; tiles only for action-worthy numbers |
| Game = SaaS dashboard chrome (cards, kbd chips, status pills) around a canvas | Website defaults applied to a game | A game whose fiction is a dashboard | HUD and menus from the game's world, palette, shapes and type; chrome minimal |
| Decorative sections with no content (giant glyph in a colored band; "the X difference" trio) | Filler to reach a "complete" page | Never as filler | Cut |
| Floating-card annotations on a photo ("Up to 3× faster") | Simulated product detail | A real annotated diagram | Put facts in the text or a real spec table |

## Layer 3: Intent tells

| Tell | Why it reads as a default | When it is fine | Fix |
|---|---|---|---|
| Nothing could only belong to this product; swap logo and copy and it fits anything | Design made from the category, not the product | Never | Find the domain's own material: its data, objects, vocabulary, imagery, rituals; make one of them the memorable thing |
| Manufactured specificity: "NO. 008", "SECTOR 07", "FLIGHT SYSTEMS NOMINAL", "v01.0", fake coordinates, fake version strings | Ornament imitating the texture of a real product | A game whose fiction includes them, used consistently | Replace with real specificity (real names, real numbers, real states) |
| Fabricated proof: testimonials, metrics, partner logos, awards, team members, "since 1881" | Models fill proof slots | Never | Real proof, labeled placeholders, or omit |
| Uniform polish: every element has the same amount of design | No hierarchy of care, so no focal point | Never | One focal point per screen; most of the rest plain |
| Poster-scale contrast: 70–90px display with most text at 7–10px | Optimized for the thumbnail, not for use | Never for functional text | Body 15–18px; labels ≥ 12px; display proportionate |
| Copy that says nothing a competitor couldn't: "A little X. A lot of Y.", "Your X. Your Y.", "Make room for what if", "Build faster. Ship smarter." | Marketing cadence without content | A tagline that is actually true and specific | Say what the product does, for whom, with a concrete noun |
| Greeting + motivational line in a working tool ("Good afternoon, Maya. A focused rep beats an hour of unfocused prep.") | Consumer-app warmth applied to a tool | Social or wellness products where it is the point | Put the task first |
| Dark mode or neon because the category "looks techy" | Mood instead of use | Products used in the dark, by people who prefer it, or whose brand is dark | Decide from use context |
| Design that fits a screenshot but not a session: nothing for empty, loading, error, long text, many items | The happy path only | Never | Design the states |

## Measurable signals (signals, not verdicts)

From rendering the repository examples versus real sites (desktop, 1440px):

| Signal | AI examples in this repo | Real production sites |
|---|---|---|
| Share of text elements rendered under 11px | 22–70% (most pages > 50%) | 0–5% on nearly all; exceptions are deliberate dense utilities (Hacker News 9px Verdana) and text inside embedded product illustrations |
| Dominant font sizes | 7, 8, 9, 10, 11px | 12, 13, 14, 15, 16, 17px |
| h1 size | 68–91px on marketing pages | 28–56px typical; large only when the headline is the content |
| Ornament glyphs (`↗ → ✳ ✦ ✧`) in visible text | 7–30 per page | 0–2 |
| Distinct font sizes | 12–15 | 5–8 |
| Elements with box-shadow (page total) | 2–30 | 0–60 (Steam, itch use many on product tiles; marketing sites few) |

Use `scripts/ui-audit.js` to measure a page. A clean result does not mean good design; a bad result means look closer.

## Writing the critique

Format:

```
Direction attempted: <one sentence, or "none identifiable">

Intent
1. <what, where> — reads as <default> because <reason>. Fix: <specific change>.
Structure
2. ...
Surface
3. ...

Smallest change set that keeps the requested style: <3–6 bullets>
What to keep: <the decisions that are already intentional and good>
```

Rules: cite locations (section names, selectors, coordinates in the screenshot). Prefer three precise findings over twelve vague ones. Always include "what to keep"; a critique that only removes produces a bland result.

## Polished-but-generic: the special case

When a design is well-executed and still reads as AI, the surface is usually fine and the failure is in layers 2–3. Check in this order:

1. **Specificity**: is the memorable thing from the product's own world, or from the catalog of hero decorations? Replace decoration with the product's material (its data, objects, photography, vocabulary).
2. **Skeleton**: does the section order follow a template or the visitor's questions? Reorder, merge, cut.
3. **Hierarchy of care**: is one thing clearly the most designed? Make the rest plainer rather than making the one thing fancier.
4. **Copy**: does it say anything? Rewrite two sentences with concrete nouns; often the design snaps into place.
5. **Micro-typography**: tiny labels, tracked caps, accent-word reflex. Normalize sizes.

Do not add effects, animation, more sections or more "sophistication". Generic + more = louder generic.
