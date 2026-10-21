# The design framework (full version)

`SKILL.md` carries the compressed workflow. This file is the longer method: how to derive decisions from the product, and the craft rules that keep the result excellent. Read the section you need.

## 1. The brief

Good interfaces are specific because the designer knew specific things. Before any visual decision, know:

| Question | Why it changes the design |
|---|---|
| What does the product do, in one plain sentence? | Determines what the hero *shows* and what nouns the UI uses |
| What is the user trying to get done on *this* screen? | Determines the focal point and the primary action |
| Who, where, how often, how long, on what device, in what state of mind? | Determines density, type size, dark/light, motion, tone |
| What did the user ask for aesthetically, in their own words? | The direction must be a faithful, excellent version of *that* |
| What brand, fonts, colors, components, or constraints already exist? | Reuse them; don't fight them |
| What real content exists (copy, data, images)? What must not be invented? | Sections are built from real content; invented proof is forbidden |
| What conventions do these users rely on? | Keep them deliberately |
| How much originality is appropriate? | A tax form and a studio portfolio sit at opposite ends |

Infer confidently when unstated; write the assumptions in a comment or a two-line note. Ask the user only when the answer would materially change the work (e.g. the audience is unknown and the two plausible audiences want opposite things).

## 2. The direction card

Six to ten lines, written before markup. The test for every line: *would this line be the same for an unrelated product?* If yes, it is a default. Either replace it with something derived from the brief, or keep it and write the reason (conventions are allowed; unexamined defaults are not).

```
Direction: <name>, <one sentence>
The memorable thing: ...
Type: ...
Color: ...
Shape & surface: ...
Density: ...
Imagery: ...
Motion: ...
Voice: ...
Conventions kept on purpose: ...
```

### Translating the requested character into decisions

Removing defaults tends to make pages calmer and plainer. That is right when the brief asked for calm and plain, and wrong otherwise. Every adjective in the brief needs at least one *visible* decision, and the result should be recognizable from the first screenful. These are starting levers, not recipes; pick the ones that fit the product and say why.

| The user says | Levers that deliver it | What does not deliver it |
|---|---|---|
| sleek | Few elements, precise alignment, large confident type with tight display tracking, generous space, one saturated or luminous accent, smooth 150–250ms transitions, product imagery large and flat | Removing everything until it is merely sparse |
| modern | Current, not dated: clear hierarchy, contemporary type, real product UI, responsive polish. It is vague: pair it with a second adjective derived from the product | Defaulting to the current trend (glass, bento, gradient) |
| futuristic | A technical, geometric, wide or squared display face; monospace for real data; a luminous accent reserved for live or changing values; depth through layered dark surfaces; motion when data changes; precise grids and measurements that carry real information | Gradient text, random glow blobs, fake coordinates, deleting all of it and calling the result "credible" |
| minimal | Fewer elements, not smaller ones; large type; one color; everything still present and findable | Tiny grey text; hiding navigation |
| playful / colorful | 3–5 saturated colors with roles that cover real area (backgrounds, tiles, illustrations), an illustration or character system with rules, heavy rounded type, brief springy feedback, big targets | One accent on white; confetti everywhere; random rotations |
| warm / friendly | Warm neutrals and accents in visible proportion, a humanist sans or soft serif, italics as a voice (used deliberately), conversational copy, real people and places | Stripping the serif and the color because they were "tells" |
| serious / professional / trustworthy | Neutral palette, density, tables, precise numerals, restrained motion, honest disclaimers | Startup gradients; KPI tiles; oversized headlines |
| luxurious / premium | A refined serif or high-contrast face at a few large sizes, space, superb photography or material, slow motion, two or three tones | Gold gradients; tiny grey text as "elegance" |
| editorial | A typographic system: headline face, deck, byline, measure, columns, captions, rules | Uniform article cards |
| bold / energetic | Big type at scale, high-contrast color fields, tight rhythm, decisive motion | Loudness everywhere with no focal point |
| retro / period | The era's palette limits, type, chrome and copy tone, applied consistently | A retro font on modern SaaS chrome |
| industrial / utilitarian | Grotesk or mono, visible grids and labels, high density, minimal color with hazard-style accents for status | "Industrial" textures without function |
| dark / moody | Dark because of use or world, with layered surfaces, controlled highlights, readable text | Black background plus glow by default |
| experimental | One strong idea carried through the whole page, navigation still conventional enough to use | Many unrelated novelties |

Volume check: after rendering, show the first screenful to yourself as a stranger. If you would not name the user's adjectives, the direction card is not yet visible in the work.

### Finding "the memorable thing"

It should come from the domain's own material, and it should be *one* thing executed consistently, not five gestures:

- **Data products**: the data itself, shown honestly and large (a real chart, a real table, a live number with a source).
- **Physical products**: the object, photographed or rendered honestly; its materials inform palette and shape.
- **Games**: the world's palette, shapes, typography and materials carried into menus and HUD; a signature motif (a sigil, a frame, a texture, a sound).
- **Catalogs and tools**: the taxonomy, the search, the density; craft shows in the quality of lists and tables.
- **Services and places**: the real place, people, menu, schedule; typography that matches the tone of the service.
- **Editorial**: the typographic system itself: headline face, deck, byline, measure, rhythm.
- **Brands with identity**: the owned element (a color used one specific way, a mascot with rules, a wordmark, a shape language).

Not a memorable thing: orbit rings, halos, floating badges, gradient blobs, glass cards, giant background glyphs, a tilted mock window, a sticker rotated 4°.

## 3. Typography

Typography is where most AI output fails measurably, and where most real sites quietly succeed.

**Sizes.** Pick 5–7 sizes for the whole product. Desktop web body 15–18px; dense professional tools 12–14px, applied consistently (Linear, Steam, GitHub run on 12–16px). Smallest functional text on web: 12px; 11px only for dense tables. Nothing under 11px. Mobile body 16–17px (Apple's default is 17pt, minimum 11pt). TV/console UI: minimum ~23pt equivalent (Apple tvOS) / 15 epx (Microsoft 10-foot guidance). Display sizes should be proportionate: a 72px headline over 9px labels is a poster, not a page.

**Measure.** 45–90 characters per line for running text (Butterick). Narrow columns for short labels, wide for prose, never a full-width 1400px paragraph.

**Leading.** 1.2–1.5 depending on size: tighter for display, looser for small and for serif text.

**Tracking.** +5–12% on all-caps and small caps; negative tracking only on large display sizes (and only if the face wants it). Never negative-track body text.

**Faces.** One or two families. Choose for the product's voice and the content's needs:

- Long reading → a text face with real italics and good numerals (serif or humanist sans).
- Data → tabular numerals; a mono or a sans with `font-variant-numeric: tabular-nums`.
- Kids/playful → rounded, heavy, generous counters; big sizes.
- Luxury → a refined serif or a geometric sans with wide spacing, used sparingly and large.
- Utility/native → the platform system stack is a legitimate, honest choice.
- Games → the face that matches the world (period, culture, genre), with a plain functional companion for small UI text.

Faces that signal "nothing was decided" when used by reflex: Inter, DM Sans, Manrope, Space Grotesk, Plus Jakarta Sans, Outfit, Sora, Poppins. After anti-default advice, a second set becomes the reflex: IBM Plex, Source Sans, Libre Franklin, Fraunces, Instrument Serif. All are fine faces; use them when chosen for this product, not because they are the safe "serious" or "tasteful" pick. When two products in a row get the same face from you, that is a default.

**Hierarchy.** Three levers: size, weight, color. Use one or two per level. Make secondary text quieter rather than making primary text louder. Don't use tiny tracked uppercase as the universal "label" style; sentence-case labels at 12–13px in a muted color are often better and always more readable.

**The accent-word reflex.** Setting one word of every headline in the accent color or an italic serif is a tell when done by habit. Use it once, for a reason, or not at all.

## 4. Color

Decide **roles** before values: background, surface, surface-raised, border, text, text-muted, accent (interactive), accent-strong, and the semantic set (success, warning, danger, info; up/down for markets). Then assign values from something true: the brand, the materials, the data's conventions, the game's palette.

Rules of thumb:

- One accent does real work (links, primary actions, selection). A second accent only if the product has a second kind of thing to highlight.
- Semantic colors are not decoration and must not collide with the accent.
- Text on tinted backgrounds is a darker/lighter tint of the same hue, not grey.
- Contrast: 4.5:1 for text, 3:1 for large text and for UI boundaries. Check it.
- Dark themes: decide from use (night, long sessions, media, developer preference), not from category. Dark surfaces need lighter-than-you-think text and less saturated accents.
- Gradients: allowed when they do one job (a brand ribbon, a chart fill, a heat scale). Not as the default background of cards, buttons and headlines.
- Palettes that are now defaults in their own right: indigo/violet gradient on white or near-black; cream + forest green + terracotta/coral; near-black + lime/cyan. Fine if the brief leads there; a tell if reached for.

## 5. Layout and structure

- **Content inventory → hierarchy → layout.** List what must be on the page, rank it, then draw the layout around the rank. The template skeleton appears when this step is skipped.
- **One focal point per screen.** Decide what is big. Then make the rest plainer than feels comfortable.
- **Rhythm is a decision.** Vary section height, width (contained vs full-bleed), density and media type where the content motivates it. Uniform padding and uniform section shape read as generated.
- **Choose containers by content.** Cards for card-like things (comparable, selectable, parallel). Tables for records. Lists for sequences. Prose for explanation. A single large image for a single thing. Not everything needs a box. Equally, not everything is a hairline label/value list: after removing cards, agents tend to turn every section into the same ruled two-column list, which is a new template.
- **Finish the composition.** No section where one column is full and the other empty; parallel items aligned (actions at the same height across pricing cards); no dead zones in app screens; marketing pages end with a plain, specific next step (a closing call to action is a convention to keep; what reads as generated is the decorative band, giant glyph and slogan around it).
- **Grids you could draw.** Columns, gutters and a base spacing unit (4 or 8px) applied consistently. Alignment is the cheapest form of craft.
- **Density is a product decision.** Daily tools: denser. First-visit pages: sparser, but still full of real content. UI density is value delivered per unit of space and time, not pixels per inch.
- **Responsive is a second layout, not a collapse.** Decide what stacks, what hides, what changes form at 390px. Test 320/390/768/1024/1440. No horizontal overflow.

## 6. Shape, surface, effects

- Pick a **radius policy** from the product's materials and voice: 0–2px (editorial, industrial, pro tools), 4–8px (most apps), 12–16px (consumer, friendly), pills only for things that are pills (tags, toggles, some CTAs). Vary by role (container vs control), not randomly.
- One boundary technique per element class: border, *or* shadow, *or* flat tonal contrast. Shadows imply elevation; use them for things that are actually above the surface (menus, dialogs, dragged items).
- Effects (blur, glow, grain, glass, gradient mesh) need a line in the direction card and ≤ 2 uses with a reason. "It looks premium" is not a reason.
- Decorative shapes (orbits, halos, blobs, rings) are almost never the right answer. If you need a visual in a hero and have no real image, prefer type, a diagram of the real thing, or honest empty space.

## 7. Imagery and iconography

- Real product UI, real photographs, real data visualizations beat any illustration you invent. Label stock imagery honestly if the user requires it.
- If drawing illustrations in code or SVG, give them a consistent system (stroke weight, palette, perspective) and keep them to a few.
- Icons: a single consistent family, used for wayfinding and status, sized to the text they sit with. No icon-topped marketing bullets by reflex. No emoji as icons.
- Mock windows with traffic-light dots, floating annotation cards and tilted screenshots are a known tell; show the real screen flat and large instead.

## 8. Components and states

Every interactive element gets: default, hover, focus-visible (a real ring), active, disabled, loading. Every data view gets: empty, loading, error, partial, overflow (long text, many items). Forms get: validation, inline errors, success. These states are where "designed for a screenshot" is exposed. Design them.

Touch targets ≥ 40px; keyboard operability for everything a mouse can do; `prefers-reduced-motion` respected; semantic HTML and labels.

## 9. Motion

Motion should respond to the user and show what changed. One orchestrated moment per experience at most (a page intro, a game start). Durations 120–250ms for state feedback, longer only for spatial transitions. No ambient animation on marketing pages by default, no hover-lift on every card, no marquee tickers unless the brief is a ticker.

## 10. Copy and voice

Interface copy is part of the design. It is the fastest place to add real specificity.

- Sentence case. Concrete nouns and verbs. Say what the product does and for whom.
- Headlines that could not be moved to a competitor's site.
- No fragment-pair cadence ("A little X. A lot of Y."), no "Your X. Your Y." reflex, no "what if" poetry, no "Supercharge / Unleash / Elevate / Seamless / Effortless".
- No `↗` after links, no `✳ ✦ ✧` ornaments, no `·`-separated meta strings, no "Back to top ↑" as a footer reflex.
- Micro-labels in all caps tracked out should exist only where a real category or status needs them.
- Errors are specific and non-apologetic. Empty states say what to do next.
- In tools: label with the user's nouns (what *they* call things), not product-marketing nouns.

## 11. Working without references

When the user supplies no references, derive a direction from the product:

1. Name the product's world (the objects, places, people, data and vocabulary that belong to it).
2. Pick one element of that world to be the memorable thing.
3. Choose type for the voice the product should have when it speaks.
4. Choose a palette from a material or convention of that world.
5. Choose density from how it is used.
6. Write the direction card; check each line against "would this be the same for any product?"

Offer two or three distinct directions in two lines each if the brief is genuinely open and the choice is the user's to make; otherwise decide and state the assumption.

## 12. Working from references

- Extract **principles**: hierarchy, density, type roles and sizes, color roles, shape language, voice, how the focal point is made, how conventions are kept.
- Say what you are adopting and what you are not, and why.
- Do not copy layouts, assets, illustrations, copy or protected marks. Do not reproduce a competitor's page with the logo swapped.
- When a reference is itself a generic AI-looking design, say so gently and propose which of its intentions to keep.

## 13. Evaluate the render

Screenshot desktop and mobile. Then, in this order:

1. Is the direction card visibly true? (If the card says "the chart is the hero" and the hero is a gradient blob, fix the hero.)
2. Is the requested character visible in the first screenful? (Volume check above.)
3. Run the checklist in `SKILL.md`.
4. Check the quality floor: sizes, contrast, focus, overflow, states. Then the finish: half-empty sections, misaligned parallel items, dead zones, a missing closing step.
5. If it is attractive but generic, diagnose by layer (`diagnostics.md`), then change the smallest set of things. Do not add effects.
6. If it is specific but flat, find the adjective that is missing and add the decision that delivers it (table above). Do not add ornaments.
7. Stop when it passes. Don't keep polishing.
