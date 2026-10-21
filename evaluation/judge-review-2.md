# Second blind review (re-test of skill v1.1, plus vague briefs F and G)

A fresh Opus 5.5 agent with no access to the skill, the prompts or the variant names reviewed screenshots relabeled V1–V4 in a seeded random order. Its text follows unedited. Label mapping, revealed after the review was written:

```
{
 "A": {
  "V1": "skilled-v11-opus",
  "V2": "baseline-opus",
  "V3": "skilled"
 },
 "C": {
  "V1": "baseline-opus",
  "V2": "skilled-v11-opus",
  "V3": "skilled"
 },
 "E": {
  "V1": "skilled-v11-opus",
  "V2": "original",
  "V3": "skilled",
  "V4": "baseline-opus"
 },
 "F": {
  "V1": "baseline",
  "V2": "skilled"
 },
 "G": {
  "V1": "skilled",
  "V2": "baseline"
 }
}```

Variant names: `baseline-opus` = Opus 5.5, no skill. `skilled-v11-opus` = Opus 5.5 with skill v1.1. `skilled` = Fable 5.1 with skill v1.0. `baseline` (F, G) = Fable 5.1, no skill. `original` = the unmodified page.

**Caveat recorded after this review:** skill v1.0 and v1.1 contained worked examples for products close to scenarios A and C. The skill-guided A and C results here are therefore partly contaminated. See README.md, "Contamination".

---

# Blind review: scenarios A, C, E, F, G

I viewed every desktop-full, mobile-fold and (for C) desktop-problem render. I also checked tall pages in 1100px tiles at native resolution.

---

## Scenario A: Pulse (API monitoring, dark, sleek, a bit futuristic, credible to senior engineers)

### 1. What each variant attempts

- **V1**: A near-black page with a squared, techno display face (Saira-like) and one sky-blue accent. The first screen holds a full p50/p95/p99 chart with a 5xx band, and deploy #4821 sits on the incident window. The rest of the page follows that proof: an editable per-endpoint threshold table with Slack/PagerDuty/Email routing, the SDK, pricing, and a plain "Where Pulse stands today" facts table.
- **V2**: Near-black with a lime accent, a wide grotesk display face, mono uppercase eyebrows with leading rules, corner crop marks on panels and a faint dot grid. It tells the longest story of the three: overview panel, latency histogram, incident timeline, threshold-crossing alert card, SDK tabs, pricing, then company facts plus an FAQ.
- **V3**: Navy-black with an IBM Plex-style sans and an amber accent, laid out soberly like documentation. The hero puts an endpoint table beside a 5xx chart. Every later section is a text-first ruled table: what Pulse records, alert destinations, install tabs, retention and compliance, pricing.

### 2. Ratings

| Quality | V1 | V2 | V3 |
|---|---|---|---|
| Visual quality | **strong**: tight grid, consistent hairlines, tabular mono numerals, one restrained accent. The dotted pseudo-code with its "Placeholder" chip is the only unfinished spot. | **strong**: confident display type and a consistent framed-panel system, but the 6,700px page has very large dead gaps between sections. | **adequate**: clean and aligned, but the hero panel has a big empty area under the error/throughput cells and most sections are bare text tables. |
| Fidelity to brief | **strong**: dark and sleek, and the squared display face plus the glowing p95 line give "a bit futuristic" without neon. The data density reads as credible. | **strong**: the most overtly futuristic of the three (lime on black, crop marks, dot grid), and still credible. | **adequate**: dark and credible are delivered and sleek only partly. Futuristic is missing; it reads like a docs site. |
| Coherence | **strong**: one accent, one chart language, and the same three endpoints carried from hero to thresholds. | **strong**: every section uses the same eyebrow, headline and framed panel. | **strong**: one amber accent and consistent ruled tables throughout. |
| Product specificity | **strong**: the deploy marker over the p95 jump and the 5xx window, plus the per-endpoint threshold editor, could only be Pulse. | **strong**: the histogram with p50/p95/p99, the incident window with a deploy diamond, and the threshold-crossing card. However, the hero panel is a table, not the deploy proof the headline promises. | **strong**: all of the content is Pulse fact, and alert destinations are mapped to urgency ("wake someone up" / "can wait until morning"). |
| Distinctiveness | **adequate**: the techno face and hero chart stick, but the section order (hero, features, 3-tier pricing, CTA band) is stock. | **adequate**: striking, but lime on black with mono eyebrows and crop marks is today's fashionable dev-tool look. | **weak**: a generic dark documentation look; nothing to remember beyond the amber. |
| Usability | **strong**: one primary CTA repeated, clear hierarchy, and the threshold table explains alerting by letting you try it. | **adequate**: the CTAs are clear, but the decisive incident chart sits three screens down a very long scroll. | **strong**: very readable, with a clear "Install in two lines" secondary CTA and a "chart values as a table" disclosure. |
| Accessibility floor | **adequate**: body contrast is good, but panel labels ("p95, change vs 7d", "Error rate") are about 11–12px grey on near-black. | **adequate**: many mono labels at about 11px in mid-grey ("SAMPLE DATA", "Endpoints · latency"), and body grey is on the faint side. | **strong**: larger body text, higher contrast, and a table alternative for the chart. Captions are still small. |
| Responsive | **strong**: the headline stacks, CTAs go full-width, and the endpoint list becomes a compact, legible table above the fold. | **adequate**: it stacks, but the mobile CTAs are unequal widths and left-ragged, and the product panel is pushed below the fold. | **strong**: a clean mobile hero with a Menu button, full CTAs and the table starting in view. |

### 3. Template / AI-generated patterns

- **V1**: the code card shows `‹import the Pulse SDK›` pseudo-code with a "Placeholder" chip. "Where Pulse stands today" is a label/value hairline table. Pricing is three cards with the right-hand tier highlighted and a "14-day free trial" tag. The closing CTA band repeats the hero CTAs, and there is a soft radial glow behind the hero.
- **V2**: a mono uppercase eyebrow with a leading dash on every section ("— WHAT PULSE RECORDS", "— INCIDENT TIMELINE"). Corner crop-mark brackets frame panels, there is a dot-grid background and a lime CTA. "SAMPLE DATA", "ILLUSTRATIVE" and "PLACEHOLDER" chips appear throughout. Headlines use the two-short-sentence formula ("Small team. Straight answers.", "Start free. Try Business for 14 days."). Also present: a 2×2 feature mini-grid with right-aligned mono tags, an FAQ accordion, and three-tier pricing with the right-hand tier highlighted.
- **V3**: every feature is a definition list (bold label on the left, paragraph on the right). Build notes are exposed to visitors: "Sign-up links are placeholders in this build" and "Rendered with sample data". Pricing is three cards with dash bullets and the right-hand tier highlighted.
- **Shared across all three**: the same hero composition (headline, CTA pair, framed product panel with an endpoint list plus a chart), "sample data" honesty labels, and the same right-highlighted three-card pricing.

### 4. Ranking: **V1 > V2 > V3**

V1 puts the product's most persuasive proof in the first screen: the p95 jump, the 5xx window and deploy #4821 on one chart. It then lets the visitor play with per-endpoint thresholds, which is exactly what convinces a senior engineer, and the squared display face supplies the "a bit futuristic" without gimmicks. Compared with V2, it gives up some drama and range: V2's lime-on-black and wide display type look more futuristic, and V2 covers more ground (latency histogram, incident detail card, FAQ).

---

## Scenario C: Sumwise (kids 7–9 math game; colorful, playful, friendly, trustworthy to adults, tablet-usable)

### 1. What each variant attempts

- **V1**: A cream graph-paper canvas laid out as a design board, with numbered "Home screen", "Problem screen" and "Feedback states" panels in chunky dark-outlined cards with offset shadows. It has an owl mascot greeting Maya, three color-coded mode tiles, a big orange Play button, pill progress, and feedback that names the carry mistake.
- **V2**: A saturated blue home band over a yellow game band. Base-ten block pictograms act as the mode icons and reappear in the feedback ("7 ones + 8 ones = 1 ten 5 ones"). It adds an editable "Who's playing?" name field, a star count, and a short "For grown-ups" note on how the game teaches.
- **V3**: A pale blue page with white rounded cards: a restrained Sumwise wordmark, a base-ten illustration, small mode chips and an orange Play button. Below are a problem card with square progress pips and outline answer buttons, and a dashed "Feedback states" review box.

### 2. Ratings

| Quality | V1 | V2 | V3 |
|---|---|---|---|
| Visual quality | **strong**: consistent thick outlines, a rounded display face, and well-judged spacing and color. | **strong**: confident color blocking, bevelled buttons and crisp numerals. The small white text on blue is the weak spot. | **adequate**: tidy but timid. The Play button is undersized and left-aligned, and there is a dead gap between the answers and the hint. |
| Fidelity to brief | **strong**: colorful, playful and friendly ("Take your time", "Nothing is taken away"), with tablet-sized targets. | **strong**: the most colorful and playful, plus an explicit grown-ups note for trust. | **weak**: friendly and trustworthy, but neither very colorful nor playful; it reads as a SaaS form. |
| Coherence | **strong**: one card language and palette throughout. | **strong**: the blue/yellow/orange system and the base-ten motif carry through. | **adequate**: soft chips and brutalist answer buttons are two different languages. |
| Product specificity | **adequate**: the regrouping hint is specific, but an owl and three tiles could front any kids' app. | **strong**: base-ten blocks in the mode icons and the regrouping explanation belong only to a place-value arithmetic game. | **adequate**: the blocks illustration is specific, but "Not 65. Have another go." is generic. |
| Distinctiveness | **adequate**: polished, but the owl plus offset-shadow brutalism is Duolingo-adjacent. | **strong**: the color bands and blocks motif are memorable. | **weak**: forgettable. |
| Usability | **adequate**: big targets and an obvious Play button, but both screens and the designer-annotated previews sit side by side, so it is a spec board rather than an app flow. | **strong**: obvious Play, big answers, and a hint that explains. The home and problem share one scroll, which blurs "screens". | **adequate**: clear, but Play is small and the feedback gives no guidance. |
| Accessibility floor | **strong**: large dark-on-light numerals and large targets; only some grey helper text is small. | **adequate**: big numerals and buttons, but the small white "For grown-ups" text on mid-blue and the dark-on-orange Play are borderline. | **adequate**: large numerals, but the mode subtext and helper copy are about 12–13px grey. |
| Responsive | **strong**: mode tiles become full-width list rows and Play goes full-width. | **strong**: block-icon mode rows, the name field and a full-width Play all stack well. | **adequate**: stacks, but Play is not full-width and the illustration sits awkwardly. |

### 3. Template / AI-generated patterns

- **All three**: the "Feedback states" are shown as static previews on the product page itself ("These are static previews…", "Static preview of the two answer states for review"). That is reviewer-facing spec text inside a children's app, and home and problem are visible at the same time.
- **V1**: numbered circled section labels ("① HOME SCREEN"), a graph-paper background, neo-brutalist thick-border cards with offset shadows, a mascot in a greeting banner, and three equal icon-in-square mode tiles.
- **V2**: a "For grown-ups:" disclaimer paragraph, chunky bevelled buttons, and a three-equal-card mode picker.
- **V3**: a "For parents and teachers:" note, a dashed review box, a pale-blue SaaS card stack, and mode chips with icons in tinted squares.
- **Shared by V2 and V3**: the base-ten blocks motif and the parent/teacher reassurance line, the same two ideas repeated.

### 4. Ranking: **V2 > V1 > V3**

V2 delivers "colorful, playful" most fully and makes the math visible: the base-ten blocks on the mode cards come back in feedback that shows regrouping. Its short grown-ups note earns adult trust without clutter. Compared with V1, it is less finished and less calm: V1's card craft, owl, progress pills and hint layout are more polished, while V2's small white-on-blue text is weaker.

---

## Scenario E: CodeCraft (improve the page; keep paper, navy/gold/coral and the plain-spoken voice)

### Which is the original? **V2.**

Its copy is exactly the generic studio voice the brief wants removed: "Your work is one of a kind. *Your website should be, too.*", "Everything you need. *Nothing off the shelf.*", "Care in the code. Care in the details.", and "Good design. Thoughtful details. Code with care." It also has a slogan marquee ("MADE AROUND YOUR GOALS ✳ DESIGNED FOR REAL PEOPLE…"), icon-in-square service cards, and a decorative tilted "field & fern" browser mockup with a floating code chip. The other three share its skeleton and assets (the same two project photos, the same form fields, the same "Independent CodeCraft showcase concept" footer) but rewrite the content toward specifics, which marks them as edits of V2.

### 1. What each variant attempts

- **V1**: Keeps the original look almost completely: paper, navy/gold/coral, pill buttons, the italic serif accent ("*page by page.*") and the announcement bar. The decorative mockup becomes a "Page plan, *first draft*" sheet annotated with red italic margin notes and an "agreed" tick. Every section is rewritten around that one through-line: you approve the page plan before design starts.
- **V2 (original)**: A polished, generic studio page with tight-tracked sans headlines, italic serif second lines, dot eyebrows, a slogan strip, icon cards and a decorative mockup. It sounds warm without saying anything specific.
- **V3**: Strips the look to a sober editorial document: square-cornered buttons, a Franklin-style sans, a sitemap-diagram hero, ruled "What we build" rows with INCLUDES lines, and a numbered process with "You bring / You get / You give / You keep". It drops the announcement bar, the slogan/who-we-build-for strip and the mockup, and coral shifts to rust.
- **V4**: Keeps the field & fern mockup but turns it into evidence: numbered coral pins explain each choice ("Opening hours go in the header…"), with the honest note "Field & Fern isn't a real shop." It uses heavier display type, mono labels ("Written for", "Job to do", "YOU GET"), three-column service rows and a new "When it's finished, it's yours" ownership card.

### 2. Ratings

| Quality | V1 | V2 (orig.) | V3 | V4 |
|---|---|---|---|---|
| Visual quality | **strong**: consistent and airy; the "You get" note cards add a handmade touch. | **adequate**: slick, but the display type is over-tightened and the card copy is tiny. | **adequate**: clean but flat and severe, with long text-only stretches. | **strong**: good type contrast and well-structured rows; the headlines are slightly heavy. |
| Fidelity to brief | **strong**: keeps the paper, palette, friendly voice and every section, including the top bar. | **adequate**: the palette is right, but the voice is slogan rather than plain speech. | **adequate**: the paper and navy/gold survive, but coral is muted to rust, the warmth and rounded shapes are lost, and the top bar and audience strip are dropped. | **strong**: the palette and voice are fully kept ("We'll tell you straight"); only the announcement bar is dropped. |
| Coherence | **strong**: the page-plan motif recurs in services, process step 2 and the form. | **adequate**: consistent styling but no idea underneath it. | **strong**: one documentary register throughout. | **strong**: the "show the working" idea runs from the annotated mockup through "YOU GET". |
| Product specificity | **strong**: "a phone number you can tap", "photos of finished work, each with the town", and per-service links that prefill the brief. | **weak**: interchangeable with any studio. | **strong**: the most concrete copy ("Old web addresses are redirected…", "Nothing held hostage", "not affiliated with the organisation"). | **strong**: "Written for / Job to do" per project, an itemized quote, "logins in your name". |
| Distinctiveness | **adequate**: the annotated page plan is memorable; the rest is conventional. | **weak**: a template look. | **weak**: reads as a well-written document. | **strong**: the pinned-annotation mockup and the ownership section stick. |
| Usability | **strong**: CTAs per service, a clear FAQ and the form. | **adequate**: clear, but the CTAs are vague ("Let's build something", "Take a look around"). | **strong**: very readable and direct. | **strong**: clear rows and CTAs, plus a longer FAQ. |
| Accessibility floor | **strong**: body text is larger than the original's and contrast holds on navy. | **weak**: lots of ~12–13px grey text (process descriptions, the difference strip, card captions). | **strong**: large type and good contrast. | **adequate**: good overall, but the coral mono labels are small (~12px) on cream. |
| Responsive | **strong**: clean mobile hero with the plan sheet below. | **adequate**: the hero is long and the floating code chip is clipped at the edge. | **strong**: clean stack. | **strong**: clean stack with the mockup and pins below. |

### 3. Template / AI-generated patterns

- **V2 (original)**: dot-eyebrows on every section ("● A THOUGHTFUL WEB STUDIO FOR AMBITIOUS PEOPLE"), a sans headline plus italic serif second line in every section, a slogan marquee strip, triplet taglines, icon-in-square service cards, a tilted browser mockup with floating code and "like you" chips, arrow-in-circle card buttons, and a yellow check-circle list beside the form.
- **V1**: the italic serif accent is kept ("page by page"), plus "You get" callout cards, a 2×2 check-icon "In every site" grid, an FAQ accordion and the yellow-check list.
- **V3**: ruled definition-list rows, "You bring / get / give / keep" lines, gold "INCLUDES" labels, and a three-column principles strip.
- **V4**: mono micro-labels ("Written for", "Job to do", "YOU GET", "Who we build for" in mono coral), numbered pin annotations, and a checkbox list card.
- **Repeated across the three improvements (a house move)**: a per-step "You get" deliverable appears in V1, V3 and V4. A "page plan" hero artifact appears in V1 and V3. All three add "Not sure which one you need?" rows and an explicit "concept, not client work / not endorsed by the Red Cross" honesty note.

### 4. Ranking: **V1 > V4 > V3 > V2 (original)**. All three edits are real improvements on V2.

V1 is the only rewrite that keeps every original element (announcement bar, pill buttons, italic accent, coral and gold). It replaces the slogans with one specific, demonstrable through-line, the agreed page plan, so it reads as the same studio, now credible. Compared with V4, it is less visually memorable: V4's pin-annotated mockup and "When it's finished, it's yours" section are bolder and arguably more persuasive. V3 has the most concrete copy, but it departs furthest from the stated warm, friendly aesthetic.

---

## Scenario F: Notely (vague brief: "modern")

### 1. What each variant attempts

- **V1**: A warm off-white page with a bold grotesk and blue italic serif accent words. It has eyebrow labels, a hero app mockup with backlinks, a bento grid of six feature cards with mini illustrations, a "Three habits, *one* app" step row, icon principles, two-tier placeholder pricing, and a dark CTA card with a radial glow.
- **V2**: A quiet white, text-first page built around a believable editor showing a real note thread (Sourdough attempts 1–4). Each later section demonstrates one mechanic with that same content: a markdown-syntax table, search hits highlighted, a backlinks panel, and "files you own". Pricing is an honest placeholder box.

### 2. Ratings

| Quality | V1 | V2 |
|---|---|---|
| Visual quality | **strong**: polished spacing and type, though the bento leaves an orphan "Templates" card with two empty cells. | **adequate**: a careful sans/serif pairing (UI vs. note text), but long plain white stretches, weak section rhythm and a flat ending. |
| Fidelity to brief | **strong**: "modern" by current SaaS convention, unmistakably. | **adequate**: modern in a restrained, tool-like way, but lacks the visual energy most people mean by "modern". |
| Coherence | **strong**: consistent accent and card system. | **strong**: the sourdough example threads through every section. |
| Product specificity | **adequate**: wiki-links and backlinks are shown, but the "Works offline" bar chart and device icons are decorative, and the headline is generic. | **strong**: every claim is demonstrated with concrete note content and syntax. |
| Distinctiveness | **weak**: the archetypal SaaS landing template. | **adequate**: the sourdough thread is memorable; the visual identity is minimal. |
| Usability | **strong**: clear CTAs and scannable cards. | **strong**: clear, honest and easy to follow. |
| Accessibility floor | **adequate**: lots of 13–14px grey card copy on cream, and tiny text inside the illustrations. | **strong**: readable sizes and high contrast; only captions are small. |
| Responsive | **strong**: clean mobile hero with CTA and menu. | **strong**: clean mobile hero with the editor beginning in view. |

### 3. Template / AI-generated patterns

- **V1**: an eyebrow with a leading rule on every section, sans headlines with a blue italic serif accent five times ("keep up", "Nothing it doesn't.", "one", "no surprises.", "one note."), a bento feature grid with icon-in-tinted-square headers, italic 01/02/03 step numerals, an icon list of "principles" with a "What we won't do" anti-feature framing, "PLACEHOLDER" / "PRICE TBD" chips and "$—", a dark rounded CTA card with a radial glow, and a footer theme toggle.
- **V2**: an exposed "PLACEHOLDER" pricing box and a "Placeholder link: download and platform details to be added" footnote. "Your notes are files you own" is a label/description ruled table, and the demo sections alternate left/right. A caption explains the typography ("Notes are set in a reading typeface…"), which is designer commentary on a marketing page.

### 4. Ranking: **V2 > V1**

V2 shows rather than tells: every section is a working demonstration built on the same believable notes, so it could only be this product, and the reading/UI type pairing signals real craft. V1 is the safer reading of "make it look modern" and is more visually lively and polished. V2 gives up visual energy and leaves a bare placeholder pricing section and a flat close.

---

## Scenario G: Snake (vague brief: "simple, nice UI")

### 1. What each variant attempts

- **V1**: Re-themes Snake as a garter snake on a mown lawn: a dark soil surround, a striped grass board with a wooden fence border, a yellow-striped navy snake and an apple. A dark start modal holds a Slow/Normal/Fast control, with Score/Best in the header and keycap hints below.
- **V2**: "Garden Snake": a cream page with a serif title and the board in a soft card with a faint checkerboard. A sidebar of cards holds Score (current/best/length), Settings (speed, walls wrap, sound) and How to play. Mobile gets an on-screen d-pad, and there is a "Clear best score" link.

### 2. Ratings

| Quality | V1 | V2 |
|---|---|---|
| Visual quality | **strong**: a cohesive earthy palette, crisp snake rendering and a clear modal. | **adequate**: tidy, but the board is so pale that the snake and fruit are barely visible at rest; it feels like a settings screen. |
| Fidelity to brief | **strong**: simple, and a genuinely nice UI. | **adequate**: nice, but the settings and instructions panels dilute "simple". |
| Coherence | **strong**: the lawn, fence and garter theme agree in both art and copy. | **adequate**: the garden name and leaf logo are not carried into the board art. |
| Product specificity | **strong**: it has a game world. | **adequate**: a generic board wrapped in a garden name. |
| Distinctiveness | **strong**: memorable at a glance. | **weak**: cream, serif and a green pill is a common "tasteful" default. |
| Usability | **adequate**: excellent on desktop, but on a phone there are no touch controls and the text says "Or press an arrow key to go". | **strong**: on-screen pad, swipe, wrap/sound options and clear instructions. |
| Accessibility floor | **adequate**: the helper text is about 14px on dark brown and the ghost Pause button is low-contrast. | **adequate**: good text contrast, but the board contents are very low-contrast. |
| Responsive | **weak**: the layout scales, but phone play isn't apparent. | **strong**: the d-pad appears and the cards stack cleanly. |

### 3. Template / AI-generated patterns

- **V1**: keycap `kbd` hints, a centered modal over the board with a segmented control, and big Score/Best numerals in the header next to a ghost Pause button.
- **V2**: a sidebar of uppercase-labeled cards (SCORE / SETTINGS / HOW TO PLAY) borrowed from dashboard layouts, plus the warm cream + serif display + green pill house style (also seen in F V1 and C V1's cream canvas). It also has a "Best score is saved in this browser only" disclaimer and keycap hints.
- **Shared**: both independently turned Snake into a garden/lawn concept ("garter snake around the lawn" / "Garden Snake"), and both use keycap hints and a Slow/Normal/Fast segmented control.

### 4. Ranking: **V1 > V2**

V1 builds an actual little world (striped lawn, fence, garter snake) and a clear start modal, so it is the "nice UI" you would remember and want to play. Compared with V2, it loses on phones (no visible touch controls) and on options and polish around the game: wrap walls, sound, clear best score, and the how-to-play panel.

---

## Cross-scenario house style (repeated "tasteful / anti-template" moves)

These patterns recur across many variants, so they read as a house style rather than per-brief choices.

1. **Honesty scaffolding visible to end users.** Examples include "Sample data", "Illustrative", "Placeholder", "Price TBD", "UI demonstration only", "Rendered with sample data", "Sign-up links are placeholders in this build", and "static previews … for review". This appears in nearly every variant of A, C, E, F and G. It is honest, but it reads as build scaffolding left on a shipped page.
2. **Hairline-ruled label | description tables instead of card grids.** Seen in A V1/V2/V3, E V3/V4 and F V2.
3. **Mono or uppercase micro-labels with a leading rule or dot.** Seen in A V2, E V2/V4, F V1 and G V2.
4. **Sans headline with an italic serif accent word.** Seen in E V1/V2 and F V1.
5. **Warm cream/paper backgrounds where none were requested.** Seen in C V1, F V1 and G V2.
6. **Plain-spoken "what we won't do / we'd rather say so" voice.** Examples: "Pulse is not SOC 2 certified yet", "No feeds, no streaks", "Nothing held hostage", "We'll tell you straight".
7. **"You get" deliverables per process step.** Seen in E V1, V3 and V4.
8. **Three-tier pricing with the right-hand tier highlighted.** Seen in all A variants. **FAQ accordions** appear in A V2 and all E variants.
9. **Designer meta-commentary on product surfaces.** Examples: the typeface caption in F V2, the spec-board numbering and preview notes in C V1/V3, and the build notes in A V3.

---

## Summary

| Scenario | Ranking | One-line reason |
|---|---|---|
| A: Pulse | **V1 > V2 > V3** | V1 proves deploy-to-regression correlation in the hero with a credible, slightly futuristic finish. V2 is more striking but longer and trend-driven. V3 is credible but not sleek or futuristic. |
| C: Sumwise | **V2 > V1 > V3** | V2 is the most colorful and playful and makes place value visible with base-ten blocks. V1 is more polished but more generic. V3 is too muted for kids. |
| E: CodeCraft | **V1 > V4 > V3 > V2 (original = V2)** | V1 keeps the full original aesthetic and swaps slogans for one specific through-line (the agreed page plan). V4 is bolder and more distinctive. V3 is the most specific but loses the warmth. All three beat the generic original. |
| F: Notely | **V2 > V1** | V2 demonstrates every feature with one believable note thread. V1 is the more "modern" polished SaaS template, but it is generic. |
| G: Snake | **V1 > V2** | V1 has a memorable lawn-and-garter-snake game world and a clear start. V2 is better on mobile and settings, but its pale board and dashboard sidebar are bland. |
