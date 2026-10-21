---
name: authentic-ui-design
description: Design and build websites, web apps, dashboards, game UIs, landing pages and mobile screens with deliberate, product-specific art direction instead of the recognizable AI-default look. Use whenever creating or redesigning any user interface, picking fonts, colors, layout or components, reviewing why a UI "looks AI-generated", improving a design that is polished but generic, or working from user-supplied screenshots, sites or design systems. Preserves the user's requested style (sleek, minimal, playful, retro, luxurious, utilitarian, editorial) rather than imposing a house look.
license: MIT
metadata:
  version: "1.3.0"
  source: https://github.com/jjtseng-jjtseng/AntiAIness
---

# Authentic UI design

This skill makes interface work look like it was designed *for this product by someone who cared*, not assembled from the most probable template. It is a method, not a style. A sleek request must still come out sleek; a playful one playful; a futuristic one futuristic; a conventional one conventional. The enemy is the **unexamined default**, not any particular font, color or layout.

The job has two halves, and both are required:

1. **Remove the defaults** that make a page interchangeable (structure, ornament, fake specificity, poster typography).
2. **Deliver the requested character** through a few owned, product-specific choices.

Doing only the first half produces a calm, plain, hairline-ruled page that is *less* than the user asked for. That is a failure, not a safe result.

Read `references/diagnostics.md` when critiquing or auditing, `references/contexts.md` for the product category, `references/framework.md` for the full method (including how to turn mood words like "futuristic" or "warm" into decisions), and `references/modes.md` when improving an existing design. Keep explanations to the user short; the reasoning should show up in the work.

## Why AI interfaces are recognizable (the short version)

Models produce the median of their training data, then post-training pushes them further toward "typical". The result has three layers, and only the first is widely discussed:

1. **Surface tells**: Inter/DM Sans/Space Grotesk everywhere, indigo gradients, uniform 12–16px radii, glass cards, glows. Also the *second-generation* tells that replaced them once "anti-slop" advice spread: cream paper + serif-italic accent word + forest green/terracotta, or near-black + lime/cyan + monospace micro-labels, tiny uppercase eyebrows, `↗` on every link, `✳` ornaments, rotated "sticker" chips, floating mini-cards around a tilted mock.
2. **Structural tells**: the same page skeleton regardless of subject (announcement bar → nav with pill CTA → eyebrow → two-line headline with one accent word → muted paragraph → dark button + text link → tilted visual with floating badges → stat band → eyebrow + heading + right-aligned intro → 3-card grid → numbered 01–04 steps → dark band → FAQ accordion → colored CTA band with a giant glyph → footer with "Back to top ↑"). Dashboards get greeting + hero card + three stat cards + two-column panels; games get a SaaS dashboard wrapped around a canvas.
3. **Intent tells**: nothing in the design could only belong to this product. Specificity is *simulated* with ornamental micro-labels ("NO. 008", "SECTOR 07", "ALL SYSTEMS READY") instead of *delivered* with real content, real numbers, real tasks. Every element gets the same amount of polish, so nothing is the focal point. Display type is poster-sized while most text is 7–10px: a layout optimized for a thumbnail, not for use.

Swapping the palette does not fix layers 2 and 3. Deciding from the product does.

## Workflow

### 0. Pick the mode

- **Build new**: follow steps 1–5.
- **Improve existing**: inventory the current direction first (fonts, palette and how much of each color is visible, density, voice, page furniture). Keep what carries the stated aesthetic and fix how it is *used*; do not delete it. Then run steps 1–5 against the *existing* brief. See `references/modes.md`.
- **Critique / "why does this look AI-generated?"**: use `references/diagnostics.md`; name concrete, checkable causes, grouped by layer, with the fix for each, and say what to keep.
- **From references** (screenshots, URLs, a design system): extract principles (hierarchy, density, type roles, color roles, shape language, voice), not pixels. Never copy protected assets or a competitor's layout wholesale.

### 1. Write the brief (≤10 lines, in your head or in a comment)

Infer sensibly when the user did not say; state assumptions instead of asking unless the answer would change the work materially.

- What the product *does*, in one plain sentence. What the user is trying to get done on this screen.
- Who uses it, where, how often, on what device, in what mood.
- **The requested character, in the user's exact words** ("sleek, a bit futuristic", "colorful and playful", "warm, plain-spoken"). Existing brand, fonts, colors, constraints.
- The one thing on this screen that deserves the most attention.
- What real content exists. What must not be invented (metrics, testimonials, logos, awards, team members, prices).
- How much originality is appropriate: a checkout page should feel familiar; a studio portfolio can take risks.

### 2. Decide a direction (the "direction card")

Write 7–11 lines before any markup. Every line must point back to the brief; if a line would be the same for any product, it is a default. Replace it, or keep it and write the reason.

```
Direction: <name>, <one sentence>
Requested character → how it shows: <each adjective from the brief> → <the visible decision that delivers it>
The memorable thing: <one element from the product's own world, executed consistently>
Type: <faces and why they fit; sizes for body / label / display>
Color: <roles with values; where the accent goes; how much of the page each color covers>
Shape & surface: <radius policy, borders vs shadows vs flat, depth, texture or none>
Density: <sparse / editorial / working-tool / data-dense, with the reason>
Imagery: <real product UI / photos / illustration system / none>
Motion: <none / state feedback / one orchestrated moment; what it expresses>
Voice: <how copy sounds; what it never does>
Conventions kept on purpose: <the familiar patterns this product needs>
```

Guidance:

- **Requested character** is the line most often skipped. Translate every adjective into something a stranger would notice in the first screenful (`framework.md` §2 has a table). "Futuristic" is not delivered by deleting glow; it is delivered by, say, a technical display face, a luminous accent reserved for live data, and data that animates when it changes. "Colorful" means color covers visible area, not one accent.
- **Genre vocabulary is allowed.** If the requested mood has a recognizable vocabulary (futuristic: dark, luminous accent, instrument framing; playful: saturated color, chunky shapes, a character), use it on purpose and push it as far as the brief asks. Under-delivering the mood to avoid looking "trendy" is a failure; in validation, unguided builds that committed to the genre beat skill-guided builds that held back. Distinctiveness comes from the product's own material, not from avoiding the genre.
- **Memorable thing** comes from the domain: a chart as the hero of an analytics product; the game's world drawn into its menus; a catalog's real taxonomy; a restaurant's actual menu set in good type. Not an orbit ring, not a glow, not a tilted mock.
- **Type**: choose for the product's voice. One or two families. Faces that read as "nothing was decided" when used by reflex: Inter, DM Sans, Manrope, Space Grotesk, Plus Jakarta, Outfit, Sora, Poppins, and also the "safe serious" picks (IBM Plex, Source Sans, Libre Franklin) when reached for every time. Any face is fine when chosen for a reason you can state.
- **Color**: start from something true (brand, material, data conventions, the game's palette). Decide roles, then values, then proportions.
- **Conventions kept**: list them explicitly so you don't "innovate" on the checkout button, and so you don't delete a closing call to action, a recommended-plan marker or a banner the brand uses.

### 3. Structure before style

- **Content inventory first.** List what actually needs to be on the page, in the order the user needs it. Build sections from that list, not from a template. If a section has nothing real to say, it does not exist.
- **One focal point per screen.** Decide what is big. Let the rest be quieter, but not empty.
- **Turn decoration into evidence before deleting it.** A decorative mock, illustration or photo usually becomes strong when it carries real information: annotate it with the reasoning behind it, fill it with the product's real data, show the real work. Replacing a visual hero with text or a plain diagram usually loses.
- **Vary the rhythm and the containers.** Alternate dense and open, full-bleed and contained, image-led and text-led where content motivates it. Don't let any single container (cards, hairline label/value rows, tables, accordions) carry more than two sections in a row.
- **Real specificity.** Real names, numbers with units and sources, real categories, real states (empty, loading, error), example data that looks like the product's actual data. Zero fabricated proof.
- **Apps and tools**: the primary task gets the primary space. No hero card inside a working tool. Stat tiles only for numbers someone acts on.
- **Games**: the UI is part of the world: palette, shapes, materials, type. Chrome stays small and consistent.
- **Required states in context**: show feedback, empty and error states as the product would show them (a second screen state, a toggle), not as a detached "review" panel, unless the user asked for a spec sheet.

### 4. Execute with craft

- **Type scale**: 5–7 sizes. Body 15–18px on desktop web (12–14px only in dense professional tools, consistently). No functional text under 12px on web; under 11px nothing. Line length 45–90 characters. Letterspace all-caps +5–12%. Real italics, real small caps, tabular numerals for data.
- **Hierarchy with three levers** (size, weight, color), rarely all three at once. Emphasize by de-emphasizing neighbors, not by adding effects.
- **Spacing system**: one base unit, a short scale, a grid you could draw.
- **Color discipline**: decide proportions on purpose (a playful brand may be 40% color; a ledger 5%). Keep semantic colors conventional: green for correct and success, red for errors and wrong answers, red/green for down/up in finance, each with a second cue (icon or text). Text on tinted backgrounds is a tint of the same hue. Contrast ≥ 4.5:1 for text, ≥ 3:1 for large text and UI boundaries.
- **Shape**: one radius policy from the product's materials. One boundary technique per element class.
- **Effects** (gradient, blur, glow, grain, glass): only if the direction card names them, with a job, in ≤ 2 places. When the brief asks for them, do them well rather than not at all.
- **Components**: hover, focus-visible, active, disabled, loading, empty, error. Visible focus rings. Touch targets ≥ 40px.
- **Every input modality**: anything driven by keys (games, editors, shortcuts) needs a visible equivalent on touch devices, and copy that matches the device ("tap" vs "press"). Render with touch emulation to check.
- **Responsive**: design the narrow layout as its own layout. No horizontal overflow at 320/390/768/1024/1440.
- **Motion**: respond to user actions and data changes; one orchestrated moment at most; respect `prefers-reduced-motion`.
- **Copy**: sentence case, concrete nouns and verbs, says something only this product could say. No fragment pairs ("A little X. A lot of Y."), no "Your X. Your Y.", no accent-word reflex, no `↗` after every link, no `✳` ornaments, no "Supercharge / Unleash / Elevate / Seamless".
- **Finish pass**: no half-empty rows (a two-column section with nothing in one column), parallel items aligned (buttons at the same height across pricing cards), no dead zones in app screens, marketing pages end with a plain, specific next step.

### 5. Render, audit, fix the cause

Render desktop and mobile and look at the pixels. Run the checklist below. If the design is attractive but generic, diagnose *which layer* fails (surface, structure, intent) before changing anything. If it is specific but flat, diagnose which requested adjective is missing and add the decision that delivers it. Cosmetic churn without a diagnosis is forbidden. Optionally run `scripts/ui-audit.js <url-or-file>` for measurable signals (tiny text, size count, ornaments, eyebrows, accent words, identical card grids, glows); it reports signals, not verdicts.

## The checklist

Ask these of the rendered result. A "yes" in the first four groups must be justified by the brief or fixed. A "no" in the last group must be fixed.

**Structure**
- Could this skeleton belong to an unrelated product after swapping the logo and copy?
- Is every section "eyebrow + heading + N identical cards", or every section the same hairline label/value list?
- Are there numbered steps for things that are not a sequence, or sections whose only content is decoration?
- App: a marketing hero inside a working tool? Stat tiles nobody acts on? Game: would the HUD make sense as a SaaS dashboard?

**Typography**
- Most text under 12px? Display more than ~6× the label size? More than 7 sizes?
- Tracked uppercase micro-labels as a reflex? The accent-word formula on every heading?

**Color and effects**
- A palette any product could have (indigo gradient; cream + forest green + serif; black + lime + mono)?
- Gradients, glows, blur or glass without a named job? The same radius on everything?

**Intent**
- Specificity simulated (version strings, sector numbers, fake status dots) instead of delivered?
- Invented metrics, testimonials, logos, awards, team members?
- Copy a competitor could use unchanged? Ornament glyphs?

**Fidelity and finish (must all be "yes")**
- Would a stranger looking at the first screenful name the user's adjectives? Is it at least as sleek / playful / warm / futuristic as asked?
- In improve mode: does it still read as the same brand at thumbnail size, with its colors in visible proportion?
- Exactly one focal point, and is the rest quieter but complete (no half-empty sections, aligned parallel items, a closing next step on marketing pages)?
- Required states shown the way the product would show them?
- Readable sizes, contrast, focus, reduced motion, no overflow at 390px, and visible controls for touch as well as keyboard?

## Guardrails

- **Don't replace one formula with another.** Removing purple and adding cream, serif italics and arrows is the second-generation AI look. Removing those and adding brutalist mono is the third. Removing everything and leaving a neutral grotesk, one muted accent and 1px rules everywhere is the fourth, and this skill's own failure mode. Decide from the product.
- **Your own fixes become a template if repeated.** Hairline definition lists, label-left/content-right rows, "placeholder" boxes, IBM Plex by default, everything flat: use each where it fits, not everywhere.
- **Originality ≠ randomness.** No deliberate misalignment, random rotations or noise to look human.
- **Conventions are tools.** Keep a centered hero, a sidebar, a closing call to action, a highlighted recommended plan, a conventional HUD when users expect them.
- **Quality floor is not optional.** A distinctive design that fails readability, contrast, focus or responsiveness is a failure.
- **Never fabricate proof or content.** Use real content, or clearly labeled placeholders, or leave the section out. Keep honesty quiet: one plain note per page for sample data, not "PLACEHOLDER" chips on every panel; notes for developers ("links are placeholders in this build") go in HTML comments, not on the page.
- **Respect the user.** If they asked for gradients, glass, Inter, neon or a bento grid, give them an excellent version of that, chosen on purpose and executed with the rules above.

## Quick category notes (details in `references/contexts.md`)

| Context | What "good" looks like | The trap |
|---|---|---|
| Marketing / landing | Content-led sections in the visitor's order of questions; a hero that shows the product or subject; real proof or none; a clear closing step | The template skeleton; decorative hero collage; poetry copy; or an over-corrected page with no character |
| SaaS / productivity app | Dense enough to work in daily; task first; calm chrome; clear states; keyboard support | Hero cards, greetings, stat tiles, 9px labels, cards inside cards |
| Dashboard / analytics | Data is the design: tables, tabular numerals, semantic color, comparison and limits drawn in | KPI tiles with icons; charts as decoration; glow |
| Game UI | Menus and HUD from the game's world and genre; readable at play distance; selection states | Website cards around a canvas; mono status pills; Inter |
| Editorial / content | Typography carries it: measure, rhythm, headline hierarchy, captions | Uniform card grids of articles |
| Utility / developer tool | Fast, dense, plain, predictable; information over branding | "Developer aesthetic" glow and gradients |
| Playful / educational | Color that covers area, an illustration or character system with rules, big friendly type, clear feedback | Confetti everywhere; or a tasteful page that forgot to be fun |
| Luxury / premium | Restraint, space, one superb typeface, materials and photography; readable small type | Gold gradients, grey on grey |
| Retro / themed | Period conventions applied consistently; modern accessibility underneath | Modern SaaS chrome with a retro font |
