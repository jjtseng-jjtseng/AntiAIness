# Worked examples

Three direction cards for contrasting briefs, a before/after diagnosis of a real AI-generated page, and what validation taught.

**These cards illustrate reasoning, not answers.** Do not reuse their type, colors, layouts or memorable things for another product. In validation, agents given cards for products similar to theirs copied the card's choices instead of deciding; the cards below were deliberately chosen from categories you are unlikely to be building, so that only the reasoning transfers. Type is described by its qualities on purpose: pick a face that has those qualities *for your product*.

## Direction cards

### 1. "A sleek, slightly futuristic companion app for an electric motorcycle" (mobile)

Brief inferred: owners, a few times a week, outdoors and in garages, phone in one hand, often with gloves; cares about range, charge state, ride history, security. Requested: sleek, slightly futuristic, premium. Content: real battery percentage, estimated range, charging curve, lock state, recent rides.

```
Direction: "Instrument cluster in your pocket". The phone continues the bike's dashboard.
Requested character → how it shows: sleek → one number per screen at large size, generous space, no chrome around it; slightly futuristic → a wide, squared display face for numerals echoing the bike's cluster, a single electric accent reserved for live charge flow, the range arc redraws as charge rises; premium → photography of the actual bike in the owner's color, restrained motion, no badges.
The memorable thing: the range arc that fills as the bike charges, the same arc the bike's own dashboard shows.
Type: a wide squared display face for numerals only; a calm humanist sans for everything else; numerals tabular. Body 17px, large numerals 64–96px.
Color: near-black surfaces in two steps (it is often used in garages at night), the bike's paint color as the secondary accent, one electric accent only on charge flow and the primary action, red only for security alerts.
Shape & surface: large radii echoing the bike's tank lines on the hero card only; controls simple and flat.
Density: sparse; one task per screen.
Imagery: the owner's bike, rendered in its actual color; no lifestyle stock.
Motion: the arc fills while charging; lock/unlock has a short confirming animation; nothing ambient.
Voice: short, factual ("142 km left · full by 06:40").
Conventions kept: tab bar with four items, platform sheets for settings, Face ID for unlock.
```

### 2. "A warm, quietly luxurious booking site for a 12-room hotel in a converted grain mill"

Brief inferred: couples and small groups planning a weekend, on phones and laptops, comparing a few places; they need to feel the building and see real availability. Requested: warm, luxurious, calm. Content: real room photos, the building's history, a room-by-room price list, an availability calendar.

```
Direction: "The mill, room by room". Luxury here is the building and the attention, not gold.
Requested character → how it shows: warm → color sampled from the mill's timber, brick and river light in visible proportion; luxurious → very large photography, a refined high-contrast serif used at a few large sizes, slow page rhythm; calm → no carousels, no countdowns, one action per section.
The memorable thing: each of the twelve rooms has its own page section with its real photo, its floor-plan sketch, and its own name; booking starts from the room, not from a generic form.
Type: a high-contrast serif for room names and headlines only (chosen because the mill's original signage is lettered); a quiet sans for prices, dates and forms. Body 18px.
Color: timber brown as text, brick as the accent for actions, river grey for surfaces; white space is warm, not cream-by-reflex (sampled from the plaster).
Shape & surface: square photo edges; thin rules; no cards.
Density: sparse but full: every section has a real room, a real price, a real date.
Imagery: the actual rooms at the actual time of day; no stock people.
Motion: photos fade in once; no parallax.
Voice: second person, specific ("The Hopper Room faces the weir; you'll hear it at night").
Conventions kept: a sticky "Check availability" action, a standard date picker, prices with tax shown before checkout.
```

### 3. "A work-order app for maintenance technicians on a factory floor" (rugged tablet, often with gloves)

Brief inferred: technicians on 12-hour shifts, standing, in noise and variable light; they need the next job, the machine's history, the parts, and a fast way to close the order. Requested: utilitarian, industrial, fast. Content: real machine IDs, fault codes, parts numbers, shift handover notes.

```
Direction: "Clipboard you can wear gloves with". Industrial means legible at arm's length and impossible to mis-tap.
Requested character → how it shows: utilitarian → no decoration, every pixel a field or an action; industrial → a condensed grotesk with very clear numerals, hazard-style amber only for safety lockouts, visible grid and labels like the plant's own signage; fast → the next job is the first screen, closing an order is two taps.
The memorable thing: the machine's own asset tag reproduced at the top of each order (ID, line, last service), matching the physical tag on the machine.
Type: a condensed grotesk with distinct 0/O and 1/l; 20px body, 28px for IDs, never under 16px.
Color: high-contrast light theme for bright halls with a dark option for night shift; amber only for lockout/tagout, red only for stopped lines, the rest neutral.
Shape & surface: 64px minimum targets, 8px radius, thick 2px borders that survive glare.
Density: one order per screen, all its facts visible without scrolling.
Imagery: the machine's schematic for the fault location; no illustrations.
Motion: none, except a clear confirmation when an order closes.
Voice: the plant's own vocabulary and codes; imperative ("Isolate line 3 before opening guard B").
Conventions kept: the plant's existing fault-code numbering, a barcode-scan button for parts, offline mode.
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

What to keep: the pink/lime/paper palette (it is Raspberry Pi-adjacent and lively), the display face, the memory-option selector (a real product interaction), the FAQ content (it is real and useful), the responsive behavior.

## What validation taught

Briefs were built by fresh agents with and without this skill and reviewed blind (`evaluation/` in the source repository). In summary:

- **Removing tells is reliable; delivering character is not automatic.** Early versions removed every measurable tell but produced pages quieter than the brief asked for, and in improve mode deleted the elements that carried the brand's warmth. The direction card's "requested character" line and the "fix carriers, don't delete them" rule fixed this in re-tests.
- **Agents copy worked examples.** When an example was close to the task, agents adopted its typeface, palette and memorable thing. Hence the rule at the top of this file.
- **Over-correction becomes a house style.** Neutral grotesk, one muted accent, hairline label/value rows everywhere, and visible "sample data / placeholder" chips on every panel recurred across unrelated products.
- **Test every input modality.** A game that read arrow keys rendered an invisible touch D-pad; nobody saw it until the page was rendered with touch emulation.
