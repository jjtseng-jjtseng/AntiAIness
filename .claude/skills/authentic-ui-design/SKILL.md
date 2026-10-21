---
name: authentic-ui-design
description: Design and build websites, web apps, dashboards, game UIs, landing pages and mobile screens with deliberate, product-specific art direction instead of the recognizable AI-default look. Use whenever creating or redesigning any user interface, picking fonts, colors, layout or components, reviewing why a UI "looks AI-generated", improving a design that is polished but generic, or working from user-supplied screenshots, sites or design systems. Preserves the user's requested style (sleek, minimal, playful, retro, luxurious, utilitarian, editorial) rather than imposing a house look.
license: MIT
metadata:
  version: "1.0.0"
  source: https://github.com/jjtseng-jjtseng/AntiAIness
---

# Authentic UI design

This skill makes interface work look like it was designed *for this product by someone who cared*, not assembled from the most probable template. It is a method, not a style. A sleek request must still come out sleek; a playful one playful; a conventional one conventional. The enemy is the **unexamined default**, not any particular font, color or layout.

Read `references/diagnostics.md` when critiquing or auditing, `references/contexts.md` for the product category you are working in, and `references/framework.md` when you need the full design method. Keep explanations to the user short; the reasoning should show up in the work.

## Why AI interfaces are recognizable (the short version)

Models produce the median of their training data, then post-training pushes them further toward "typical". The result has three layers, and only the first is widely discussed:

1. **Surface tells**: Inter/DM Sans/Space Grotesk everywhere, indigo gradients, uniform 12–16px radii, glass cards, glows. Also the *second-generation* tells that replaced them once "anti-slop" advice spread: cream paper + serif-italic accent word + forest green/terracotta, or near-black + lime/cyan + monospace micro-labels, tiny uppercase eyebrows, `↗` on every link, `✳` ornaments, rotated "sticker" chips, floating mini-cards around a tilted mock.
2. **Structural tells**: the same page skeleton regardless of subject (announcement bar → nav with pill CTA → eyebrow → two-line headline with one accent word → muted paragraph → dark button + text link → tilted visual with floating badges → stat band → eyebrow + heading + right-aligned intro → 3-card grid → numbered 01–04 steps → dark band → FAQ accordion → colored CTA band with a giant glyph → footer with "Back to top ↑"). A construction firm, a charity, a dev board and a web studio all get this skeleton. Dashboards get greeting + hero card + three stat cards + two-column panels; games get a SaaS dashboard wrapped around a canvas.
3. **Intent tells**: nothing in the design could only belong to this product. Specificity is *simulated* with ornamental micro-labels ("NO. 008", "SECTOR 07", "ALL SYSTEMS READY") instead of *delivered* with real content, real numbers, real tasks. Every element gets the same amount of polish, so nothing is the focal point. Display type is poster-sized (70–90px) while most text on the page is 7–10px: a layout optimized for a thumbnail, not for use.

Swapping the palette does not fix layers 2 and 3. Deciding from the product does.

## Workflow

### 0. Pick the mode

- **Build new**: follow steps 1–5.
- **Improve existing**: inventory the current direction first (fonts, palette, density, voice), keep what is intentional and requested, then run steps 1–5 against the *existing* brief. Do not rebuild in an unrelated style. See `references/modes.md`.
- **Critique / "why does this look AI-generated?"**: use `references/diagnostics.md`; name concrete, checkable causes, grouped by layer, with the fix for each. No vague "it feels generic".
- **From references** (screenshots, URLs, a design system): extract principles (hierarchy, density, type roles, color roles, shape language, voice), not pixels. Say which you are adopting and why. Never copy protected assets or a competitor's layout wholesale.

### 1. Write the brief (≤10 lines, in your head or in a comment)

Answer, inferring sensibly when the user did not say (state assumptions instead of asking, unless the answer would change the work materially):

- What the product *does*, in one plain sentence. What the user is trying to get done on this screen.
- Who uses it, where, how often, on what device, in what mood (a trader at 9:30am ≠ a parent at 9:30pm).
- The requested aesthetic, in the user's words. Existing brand, fonts, colors, constraints.
- The one thing on this screen that deserves the most attention. The things that must be fast to find.
- What real content exists (text, data, imagery). What does *not* exist and must not be invented (metrics, testimonials, logos, awards, team members, prices).
- How much originality is appropriate: a checkout page should feel familiar; a studio portfolio can take risks.

### 2. Decide a direction (the "direction card")

Write 6–10 lines before any markup. Every line must point back to the brief; if a line would be the same for any product, it is a default — replace it or justify it.

```
Direction: <name>, <one sentence>
The memorable thing: <the one element people will remember: a type treatment, a motif from the domain, a color used in a specific way, a layout idea>
Type: <display face + text face, or one family; why they fit; sizes for body/label/display>
Color: <roles with values: background, surface, text, muted text, one or two accents, semantic colors; where the accent is allowed to appear>
Shape & surface: <radius policy, borders vs shadows vs flat, texture or none>
Density: <sparse / editorial / working-tool / data-dense, with the reason>
Imagery: <real photos / product UI / illustration / none; what to do when there is none>
Motion: <none / state feedback only / one orchestrated moment>
Voice: <how copy sounds; what it never does>
Conventions kept on purpose: <the familiar patterns this product needs>
```

Guidance for filling it:

- **Memorable thing** comes from the domain: a chart as the hero of an analytics product; the game's world drawn into its menus; a catalog's real taxonomy; a restaurant's actual menu set in good type. Not an orbit ring, not a glow.
- **Type**: choose for the product (a research tool wants a text face with real italics and numerals; a kids' game wants rounded, heavy, friendly forms; a terminal wants a real monospace at readable size). One or two families. Default to the *system* stack only when the product is a utility that should feel native. Avoid faces that read as "AI chose this" unless the brief calls for them: Inter, DM Sans, Manrope, Space Grotesk, Plus Jakarta, Outfit, Sora as *unexamined* picks.
- **Color**: start from something true (brand, material, the data's semantic colors, the game's palette). Decide roles before values. One accent doing real work beats three doing decoration. Semantic colors (error, success, up/down) are not accents.
- **Density**: decide from how often and how long people use it. Tools people live in are denser than you think; marketing pages are sparser but not emptier.
- **Conventions kept**: list them explicitly so you don't "innovate" on the checkout button.

### 3. Structure before style

- **Content inventory first.** List what actually needs to be on the page, in the order the user needs it. Build sections from that list, not from a template. If a section has nothing real to say (no testimonials, no metrics, no partner logos), it does not exist.
- **One focal point per screen.** Decide what is big. Everything else is subordinate; most of it is plain.
- **Vary the rhythm on purpose.** Alternate dense and open, full-bleed and contained, image-led and text-led where the content motivates it. Avoid the "every section = eyebrow + heading + 3 cards" cadence. Don't use a card when a list, a table, a paragraph or a plain row would communicate better.
- **Real specificity.** Real names, real numbers with units and sources, real categories, real states (empty, loading, error), real example data that looks like the product's actual data. Zero fabricated proof.
- **Apps and tools**: the primary task gets the primary space. No "hero card" inside a working tool. No greeting unless the product is social. Stat tiles only for numbers someone acts on. Navigation labeled with the user's nouns.
- **Games**: the UI is part of the world. Menus, HUD and overlays use the game's palette, shapes, materials and type, not a website's. Non-diegetic chrome (settings, kbd hints) stays small and consistent. See `references/contexts.md`.

### 4. Execute with craft

- **Type scale**: 5–7 sizes total. Body 15–18px on desktop web (12–14px only in dense professional tools, applied consistently). No functional text under 12px on web; under 11px nothing at all. Labels are not decoration: if it's worth showing, it's worth 12px. Line length 45–90 characters. Line height 1.2–1.5 by size. Letterspace all-caps +5–12%; negative tracking only on large display sizes. Use the typeface's real italic, real small caps, tabular numerals for data.
- **Hierarchy with three levers** (size, weight, color), rarely all three at once. Emphasize by de-emphasizing neighbors, not by adding effects.
- **Spacing system**: one base unit, a short scale, applied consistently. Alignment to a grid you could draw.
- **Color discipline**: 60/30/10 is a fine start. Text color on tinted backgrounds is a tint of the same hue, not grey. Contrast ≥ 4.5:1 for text, ≥ 3:1 for large text and UI boundaries.
- **Shape**: one radius policy derived from the product (sharp for industrial/editorial, soft for consumer, pill only for things that are actually pills). Not every box needs a border *and* a shadow *and* a radius.
- **Effects**: gradients, blur, glow, texture only if the direction card names them and they appear in ≤ 2 places with a reason.
- **Components**: write states (hover, focus-visible, active, disabled, loading, empty, error) for every interactive element. Focus rings are visible. Hit targets ≥ 40px on touch.
- **Responsive**: design the narrow layout as its own layout (stack order, what collapses, what stays). No horizontal overflow at 320/390/768/1024/1440.
- **Motion**: respond to user actions and show what changed. One orchestrated moment at most. Respect `prefers-reduced-motion`.
- **Copy**: sentence case, concrete nouns and verbs, says something only this product could say. No "A little X. A lot of Y." fragment pairs, no "Your X. Your Y." headline formula, no accent-colored italic second line as a reflex, no "↗" after every link, no "✳" ornaments, no middle-dot meta strings, no "Supercharge/Unleash/Elevate/Seamless".

### 5. Render, audit, fix the cause

If a browser or screenshot tool is available, render desktop and mobile and look at the actual pixels. Then run the checklist below. If the design is attractive but still generic, diagnose *which layer* is failing (surface, structure, intent) before changing anything; cosmetic churn without a diagnosis is forbidden. Stop when the checklist passes and the direction card is visibly true in the screenshot. Optionally run `scripts/ui-audit.js <url-or-file>` for measurable signals (tiny-text ratio, glyph ornaments, uniform radii, repeated card grids); it reports signals, not verdicts.

## The default-tells checklist

Ask these of the rendered result. A "yes" is not automatically wrong; it must be *justified by the brief* or fixed.

**Structure**
- Could this skeleton belong to an unrelated product after swapping the logo and copy?
- Is every section "eyebrow + heading + N identical cards"? Are there numbered 01–04 steps for things that are not a sequence?
- Is there a section whose only content is decoration (orbits, halos, giant glyphs, floating badges)?
- In an app: is a marketing hero sitting inside a working tool? Are there stat tiles for numbers nobody acts on?
- In a game: would the menus and HUD still make sense as a SaaS dashboard?

**Typography**
- Are most text elements under 11px? Is the display size more than ~6× the label size?
- More than 7 distinct font sizes? Tiny uppercase tracked labels used as a reflex?
- The "accent word" formula: one word of the headline in the accent color or italic serif, on every heading?

**Color and effects**
- Palette that any product could have (indigo/violet gradient; cream + forest green + serif; black + lime/cyan)?
- Gradients, glows, blur or glass without a reason the brief can name? Same radius on everything?
- Dark mode chosen because it looks "techy", not because the product is used in the dark or by people who prefer it?

**Intent**
- Is specificity simulated (version strings, sector numbers, "SYSTEMS NOMINAL", fake status dots) instead of delivered (real data, real tasks, real names)?
- Are there invented metrics, testimonials, logos, awards, team members?
- Is there exactly one focal point, and is the rest allowed to be plain?
- Does the copy say anything a competitor couldn't? Any `↗`, `✳`, `·` meta strings, "A little… A lot…" patterns?
- Does the design fit how the product is *used* (frequency, duration, device, lighting, attention) rather than how it photographs?

## Guardrails

- **Don't replace one formula with another.** Removing purple and adding cream, serif italics and arrows produces the second-generation AI look. Removing those and adding brutalist mono and harsh borders produces the third. Decide from the product.
- **Originality ≠ randomness.** No deliberate misalignment, random rotations, noise or "quirk" to look human. Distinctiveness comes from a few owned choices executed consistently.
- **Conventions are tools.** Keep a centered hero, a sidebar, a standard checkout, a conventional HUD when the product's users expect them. Say so in the direction card.
- **Quality floor is not optional.** Readable sizes, visible focus, contrast, reduced-motion support, responsive behavior, real states. A distinctive design that fails these is a failure.
- **Never fabricate proof or content.** Use real content, clearly-labeled placeholders, or leave the section out.
- **Respect the user.** If they asked for gradients, glass, Inter or a bento grid, give them an excellent version of that, chosen on purpose and executed with the rules above.

## Quick category notes (details in `references/contexts.md`)

| Context | What "good" looks like | The trap |
|---|---|---|
| Marketing / landing | Content-led sections in the visitor's order of questions; one strong hero that shows the product or the subject; real proof or none | The template skeleton; decorative hero collage; poetry copy |
| SaaS / productivity app | Dense enough to work in daily; task first; calm chrome; clear states; keyboard support | Hero cards, greetings, stat tiles, 9px labels, cards inside cards |
| Dashboard / analytics | Data is the design: tables, tabular numerals, semantic color, comparison baked in; density by role | Three KPI tiles with icons; charts as decoration; glow |
| Game UI | Menus/HUD drawn from the game's world and genre; readable at play distance; diegetic where it helps; chrome minimal | Website cards around a canvas; mono status pills; Inter |
| Editorial / content | Typography carries it: measure, rhythm, hierarchy of headlines and decks; images with captions | Card grids of articles with uniform thumbnails |
| Utility / developer tool | Fast, dense, plain, predictable; system or well-chosen mono; information over branding | "Developer aesthetic" glow and gradients |
| Playful / educational | Color and illustration with a consistent character; big friendly type; clear feedback; restraint in motion | Confetti everywhere; random rotations; mascots without a system |
| Luxury / premium | Restraint, space, one superb typeface, materials and photography; small type sizes that are still readable | Gold gradients, thin grey text on grey |
| Retro / themed | Period-accurate conventions (palette limits, pixel grids, bevels, type) applied consistently; modern a11y preserved | Modern SaaS chrome with a retro font |
