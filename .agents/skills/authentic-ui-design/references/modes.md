# Modes: new, improve, critique, from references

## Build new

1. Brief (`framework.md` §1). Infer, state assumptions.
2. Direction card (§2). Check each line against "same for any product?".
3. Content inventory and ranking. Build sections from it. Cut sections with no real content.
4. Layout from the ranking: one focal point; rhythm varied by content; containers chosen by content type.
5. Implement with the craft rules (§3–§10). Write states.
6. Render; run the checklist; fix causes; stop.

Deliver the direction card as a short comment at the top of the stylesheet or in a 5-line note. Don't lecture.

## Improve an existing interface

The user wants *their* design better, not a different design.

1. **Inventory what exists**: typefaces, sizes, palette and roles, radius/shadow policy, density, section order, voice, components. Note which decisions look intentional (consistent, tied to the brand or content) and which look defaulted.
2. **Find the stated aesthetic** in the brief, README, brand, or the design itself. Write it in one sentence. That sentence is the constraint.
3. **Diagnose by layer** (`diagnostics.md`): intent → structure → surface. Rank.
4. **Plan the smallest change set** that fixes the ranked findings *within* the stated aesthetic. Typical high-value moves: replace decoration with the product's real material; reorder/cut sections; fix the type scale (sizes up, fewer sizes, labels readable); make one thing the focal point and quiet the rest; rewrite the headline and two sentences with concrete nouns; remove ornaments (`↗ ✳`), accent-word reflex, floating badges.
5. **Preserve**: the palette family if it was chosen, the typeface if it fits, the layout where it already serves the content, the functional requirements, all working behavior.
6. Implement, render, compare before/after side by side, confirm the aesthetic sentence is still true.

Do not: switch light to dark "for impact", replace a serif with a mono "to be distinctive", add animation, add sections, invent proof.

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
