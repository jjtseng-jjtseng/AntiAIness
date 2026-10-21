# Modes: new, improve, critique, from references

## Build new

1. Brief (`framework.md` §1). Infer, state assumptions.
2. Direction card (§2). Check each line against "same for any product?".
3. Content inventory and ranking. Build sections from it. Cut sections with no real content.
4. Layout from the ranking: one focal point; rhythm varied by content; containers chosen by content type.
5. Implement with the craft rules (§3–§10). Write states.
6. Render; run the checklist; fix causes; stop.

Deliver the direction card as a short comment at the top of the stylesheet or in a 5-line note. Don't lecture.

Show required states (feedback, empty, error, selected) in the product's own frame: a second state of the same screen, a toggle, or a sequence of screens. Use a detached "states" panel only when the user asked for a spec sheet; it makes a product page read like a review document.

## Improve an existing interface

The user wants *their* design better, not a different design.

1. **Inventory what exists**: typefaces and their roles, sizes, palette, *how much of the page each color covers*, radius/shadow policy, density, section order and page furniture (banners, bands, footers), voice, components. Note which decisions look intentional and which look defaulted.
2. **Find the stated aesthetic** in the brief, README, brand, or the design itself. Write it in one sentence. That sentence is the constraint. List its **carriers**: the specific elements that make the aesthetic visible (e.g. for a bakery, "homely" might be carried by the hand-drawn logo, the wood-tone photography and the bread-crust accent color; for a toy shop, "playful" by the mascot, the bright yellow and the bouncy buttons).
3. **Diagnose by layer** (`diagnostics.md`): intent → structure → surface. Rank.
4. **Plan the smallest change set** that fixes the ranked findings *within* the stated aesthetic. High-value moves: replace decoration with the product's real material; reorder or merge sections; fix the type scale; make one thing the focal point; rewrite the headline and key sentences with concrete nouns; remove ornaments (`↗ ✳`), floating badges, fake specificity.
5. **Fix carriers, don't delete them.** If a display face or emphasis style is used by reflex on every heading, keep it and use it where it carries voice. If an accent color appears as decoration everywhere, give it one job in visible proportion rather than removing it. If a banner, band, mascot or other page furniture is part of the brand, make its content useful rather than cutting it. Deleting a carrier changes the aesthetic the user asked you to keep.
6. **Preserve**: the palette family and its proportions, the typefaces if they fit (or close relatives if they are pure defaults), every section and functional requirement, all working behavior.
7. Implement, render, and compare before/after **side by side at thumbnail size**: it should read as the same brand, clearly improved. Then at full size: more specific, more readable, no tells, and at least as warm / sleek / playful as before.

Improvement by subtraction alone fails this mode. In the validation runs, an agent that removed every tell but also removed the brand's display face, most of its accent colors and a page banner produced a cleaner page that a blind reviewer ranked *below* a less disciplined rewrite that kept the warmth and added specific evidence of how the business works.

Do not: switch light to dark "for impact", replace a serif with a mono "to be distinctive", swap the brand's typeface for a neutral grotesk, add animation, add sections, invent proof.

## Critique

Follow the procedure and format in `diagnostics.md`. Always include "what to keep". If the design is good and simply conventional on purpose, say so; conventional is not a defect.

## From user-provided references

References can be screenshots, URLs, a design system, brand guidelines, or code.

1. **Extract principles**, not pixels: hierarchy and focal point strategy; density; type roles, faces and sizes; color roles and where the accent goes; shape and boundary language; imagery approach; voice; motion policy; conventions kept.
2. **Write what you will adopt and what you won't**, one line each, with a reason tied to this product.
3. **Translate**: the reference's *reasoning* applied to this product's material. A reference's chart-as-hero becomes this product's data-as-hero, not a copied chart.
4. **Boundaries**: no copying protected layouts, illustrations, photography, copy, or trademarks; no competitor clone with the logo swapped; when the reference is itself generic, say so and keep only its sound intentions.
5. If references conflict with the stated aesthetic, ask which wins (this is a case where asking is worth it).

## Without references

Use `framework.md` §11. Offer 2–3 directions (two lines each) only when the brief is genuinely open and the user wants to choose; otherwise decide, state the assumption, proceed.

## When the user asks for a known "AI-ish" element on purpose

Gradients, glass, a bento grid, Inter, a dark neon theme: give them an excellent, deliberate version. Put it in the direction card with its job, apply the craft rules (readable sizes, contrast, states, limited uses), and make the rest of the design specific to the product so the element reads as a choice, not a default.
