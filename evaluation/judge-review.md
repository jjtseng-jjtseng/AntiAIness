# Blind judge review (scenarios A–E)

A fresh agent (same model family, no conversation history, no access to the skill or the scenario files) reviewed the renders with variants relabeled V1/V2/V3 in random order. Its full text follows unedited. The label mapping, revealed only after the review was written:

```
{
 "A": {
  "V1": "baseline",
  "V2": "skilled"
 },
 "B": {
  "V1": "skilled",
  "V2": "baseline"
 },
 "C": {
  "V1": "baseline",
  "V2": "skilled"
 },
 "D": {
  "V1": "baseline",
  "V2": "skilled"
 },
 "E": {
  "V1": "skilled",
  "V2": "original",
  "V3": "baseline"
 }
}```

Prompt: `prompts/judge.md`. Note that this is an AI judgment by a model related to the one that produced the designs; it is used as a second, uncontaminated opinion, not as ground truth. See README.md for the author's own comparison and the limitations.

---

# Design review: five scenarios, blind variants

Method: every render was viewed (desktop-full, mobile-fold, and the C problem screens). The tall desktop pages for A and E were also split into 1500px tiles so type and spacing could be inspected at native size. Judgements are based only on what is visible in the images.

Rating scale: weak / adequate / strong.

---

## Scenario A: Pulse, API monitoring landing page

### What each variant attempts

**V1** is a black-and-cyan SaaS landing page: gradient headline ("Know every endpoint's p99 before your users do"), a browser-chrome dashboard mock with sparklines and an incident timeline, a four-card feature grid, SDK tabs, an alert-rule example, a three-column pricing block with a highlighted middle plan, a glowing closing CTA card and a multi-column footer. It aims for "sleek and futuristic" and reads as a polished product site.

**V2** is a flatter, amber-accented page in a Plex-style type family, organised as stacked hairline-separated sections: a literal headline ("Per-endpoint latency, error rate and throughput, lined up against your deploys"), a hero mock that actually plots a 5xx spike with a deploy marker and shaded incident window, a definition-list of what is recorded, a "where alerts go" table, a retention table, a compliance note and plain pricing. It aims for engineering credibility and reads closer to a well-written docs site than a marketing page.

### Ratings

| Quality | V1 | V2 |
|---|---|---|
| Visual quality | **strong** — consistent 8px rhythm, well-aligned cards, controlled contrast between white headings and grey body; the glow effects are restrained. | **adequate** — type and tables are clean, but the right half of the SDK and retention sections is empty, the Free pricing card's button floats higher than Team's, and the page ends abruptly without a closing CTA. |
| Fidelity to brief | **adequate** — nails "sleek, modern, a bit futuristic, dark"; the gradient headline and glow are exactly what "futuristic" usually means, but it is less obviously "credible to senior engineers". | **adequate** — nails "credible to senior engineers" (real chart, honest SOC 2 wording, retention table) but is barely "sleek or futuristic"; it looks like documentation. |
| Coherence | **strong** — one cyan accent, one card language, one mono/sans pairing throughout. | **strong** — one amber accent, hairlines and tables throughout, no element breaks the system. |
| Product specificity | **adequate** — endpoint names, deploy #4821 and the alert rule block are specific, but the hero timeline is an abstract pill and the feature grid could belong to any observability tool. | **strong** — the hero chart demonstrates the exact claim (deploy marker next to the 5xx spike), the "What Pulse records" list references the numbers shown above it, and "Where alerts go" explains the three channels by use. |
| Distinctiveness | **weak** — gradient headline, pill eyebrow, icon cards and glowing CTA are the default dark-SaaS look; you would not remember it. | **adequate** — amber on charcoal and the incident chart hero are memorable; the rest is plain. |
| Usability | **strong** — clear hierarchy, two CTAs with obvious primary, pricing is scannable with a recommended plan. | **adequate** — hierarchy is clear and the "Chart values as a table" disclosure is thoughtful, but there is no final CTA, and placeholder notes ("Sign-up links are placeholders in this build") sit inside the pricing block. |
| Accessibility floor | **adequate** — body copy is ~17px light grey on black, fine; mono card footers ("p50 · p95 · p99") are ~12px dim grey and the "illustrative" badge is small amber on dark. | **adequate** — body copy ~15-16px grey on charcoal, readable; caption under the hero mock and pricing footnote are ~12px low-contrast. |
| Responsive | **strong** — mobile fold keeps the big headline, stacks both CTAs full-width and begins the mock; nothing clips. | **strong** — mobile fold keeps headline and both CTAs, and the endpoint table collapses to three readable columns. |

### Template-like / AI-generated patterns

**V1**
- Gradient text on the second and third lines of the hero headline (white → cyan → violet).
- Pill eyebrow with a glowing dot: "● API MONITORING FOR ENGINEERING TEAMS" above the hero.
- Browser-chrome mock with three traffic-light dots and a fake URL bar at the top of the hero.
- Four equal feature cards with a rounded-square icon tile in the top-left (section "What Pulse records").
- Check-mark bullet lists under the SDK section and inside every pricing card.
- "MOST TEAMS" badge on the middle pricing card with a brighter border and the only filled button.
- Glowing, radial-gradient closing CTA card ("Put your p99 on a chart tonight").
- Three-column footer with "PRODUCT / RESOURCES" headings.
- Mono uppercase section eyebrows in cyan ("INTEGRATION", "ALERTING", "PRICING").

**V2**
- Hero copy followed by a "Primary button + ghost button" pair and a small grey caption underneath.
- Underlined tab strip (Node / Python / Go / Java) above a two-line comment-only code block.
- Three equal pricing cards with a single highlighted card (Business) and dash-bulleted features.
- Hairline-separated definition list with bold left label, grey right description, repeated in three sections.
- Status pill "● SOC 2 Type II: audit in progress" with a coloured dot.

### Verdict

I would ship **V2**. The brief's audience is senior engineers and the one thing that convinces them is a chart that proves the claim, which V2 puts in the hero with a deploy marker, a shaded incident and a table fallback, while its copy is honest about the audit, the placeholder snippet and the sample data without hiding any of it in a footnote. V1 is more polished and better matches "futuristic", but it is the stock dark-SaaS template and its product proof (a pill on a timeline, sparklines) is decorative.

What V2 loses: V1's stronger hero typography and mobile fold, a real closing CTA band, the recommended-plan signal in pricing, and a general sense of finish (V2's empty right columns and misaligned pricing buttons would need a pass before launch).

---

## Scenario B: portfolio risk dashboard

### What each variant attempts

**V1** is a single-screen terminal-style layout on a light grey ground: a one-line header with tabs and "As of" timestamp, a three-panel summary row (Day P&L, return-vs-benchmark table, VaR/tracking error/beta), then a holdings table with inline weight and risk-contribution bars beside a right rail holding alerts and a sector-exposure bar list with a 30% limit tick. It tries to look like a tool that is already in daily use.

**V2** is a card-based dashboard: breadcrumb header with "Live" indicator, four KPI tiles, a row of three cards (return table plus a duplicate mini bar chart, sector bars, alerts with Acknowledge buttons), and a full-width holdings table below. It tries to be the same product in a slightly more "modern dashboard" idiom with more interactive affordances.

### Ratings

| Quality | V1 | V2 |
|---|---|---|
| Visual quality | **strong** — tight 34px rows, right-aligned numerics in a tabular face, bars sit in their own column, one accent blue, red only for breach. | **adequate** — clean, but the mini bar chart's axis labels do not align with its bars, the alerts card has a large empty area, and "[User name]" is a literal placeholder in the header. |
| Fidelity to brief | **strong** — serious, dense, light, and it looks like something a PM has used for years. | **adequate** — serious and light, but the KPI-tile row and uppercase card headers read as "startup dashboard", the opposite of the brief's warning. |
| Coherence | **strong** — same panel style, same bar treatment, same type scale everywhere. | **adequate** — mixes tiles, cards, a chart and a table with three different header treatments (sentence case tiles, uppercase cards, sentence-case table). |
| Product specificity | **strong** — the breach is flagged in the holdings row itself (red bar, "Breach" label), the 30% limit tick is drawn on the IT bar, the "1.12% of NAV" subtext shows the VaR convention. | **adequate** — same data, but the breach is a small red dot after "Nvidia" with the legend in a footnote, and the duplicate mini chart adds nothing a PM needs. |
| Distinctiveness | **adequate** — it is deliberately unshowy; the inline weight bars and the limit tick are the memorable details. | **weak** — KPI tiles over three cards over a table is the generic admin-dashboard arrangement. |
| Usability | **strong** — one glance gives P&L, active return, VaR, breach and sector limit; the alert panel is adjacent to the breached row. | **adequate** — Acknowledge buttons are a real affordance V1 lacks, but the table (the thing used most) is pushed below the fold on a 1440 screen and the "Live" state is unexplained. |
| Accessibility floor | **adequate** — 13-14px throughout, high-contrast navy on white; green/red is always paired with a sign; small grey header labels (~12px) are the floor. | **adequate** — similar sizes; status tags carry text as well as colour; grey "vs MSCI ACWI, annualised" sublabels are small. |
| Responsive | **strong** — stacks into one column with the summary panels still complete; nothing breaks (brief is desktop-first so this is a bonus). | **adequate** — KPI tiles go 2-up and leave "Beta" as an orphan tile; the mini chart begins to clip at the fold. |

### Template-like / AI-generated patterns

**V1**
- Left-side app title with square icon + tab bar is a standard shell (header).
- "BREACH" / "WARNING" rectangular tags with pastel backgrounds in the alerts panel.
- Grey track bars with a filled segment in the Weight and Contrib. columns.

**V2**
- Four equal KPI tiles in a row at the top with label / big number / grey sub-label.
- Uppercase letter-spaced card titles ("RETURN VS BENCHMARK", "EXPOSURE BY SECTOR", "ACTIVE ALERTS").
- Pill count badges "1 breach" / "2 warnings" in the alerts card header.
- Outlined "Acknowledge" buttons under every alert row.
- Mini horizontal bar chart with a two-swatch legend duplicating the table directly above it.
- Breadcrumb "Portfolio Risk / Global Equity Core" and a green "● Live" dot in the header.
- "[User name]" placeholder text in the header.

### Verdict

I would ship **V1**. It reads as a financial product, not a demo: the data a PM acts on is above the fold, the breach is visible in the row where the position lives, and the sector limit is drawn where it is breached rather than written in a footnote. V2's extra affordances do not compensate for the KPI-tile idiom, the redundant chart and a placeholder username in the header.

What V1 loses: the Acknowledge actions, a Live/stale indicator, base currency in the title row, a VaR total in the table footer and the "indicative intraday values" disclaimer, all of which could be added without changing V1's layout.

---

## Scenario C: Sumwise, maths practice for ages 7-9

### What each variant attempts

**V1** is a warm cream-and-purple home screen: a big rounded display wordmark with an offset shadow, a smiling star mascot, a "What do you want to practise?" card with three icon tiles, a "Who's playing?" card with a name field and star pill, and a large purple Play button with a 3D bottom edge. Its problem screen is a single white card with a 22 + 35 sum, four chunky answer tiles, a progress bar and a Hint button.

**V2** is a pale-blue page holding both screens in stacked white cards: a two-tone wordmark, a base-ten blocks illustration (tens rods and ones), three practice options with example sums, an orange Play button and a parents/teachers note; then the 47 + 28 problem with a ten-dot progress track at "3 of 10", four outlined answer tiles, "Show a hint", and a third "Feedback states" panel that previews the correct (green) and incorrect (red) answer states.

### Ratings

| Quality | V1 | V2 |
|---|---|---|
| Visual quality | **strong** — generous radii, consistent card shadows, big friendly numerals, tidy alignment; the only misstep is the problem screen leaving the lower half of a 1440×900 viewport empty. | **adequate** — clean and well-spaced, but the "Show a hint" button sits in the bottom-left corner with a large dead gap above it, and the three stacked cards make the screen look like a review document rather than a game. |
| Fidelity to brief | **adequate** — strongly "colourful, playful, friendly"; the trustworthiness cue for parents is only the small footer line, and the required feedback states are not visible in any render. | **adequate** — strongly "trustworthy to parents and teachers" (base-ten blocks, the "for parents and teachers" note, feedback states shown) but the blue/orange palette is more worksheet than playground. |
| Coherence | **strong** — one rounded, shadowed, purple-and-cream system on both screens. | **strong** — one card/outline language, same blue and orange, carried through all three panels. |
| Product specificity | **adequate** — the plus/minus/± tiles and "numbers up to 100" are specific; the star mascot is any children's app. | **strong** — the tens-and-ones blocks are a maths-pedagogy artefact, the hint is described as "shows the problem as tens and ones", and the option cards show example sums. |
| Distinctiveness | **adequate** — the chunky wordmark and 3D Play button are memorable; the mascot is not. | **adequate** — the base-ten illustration is memorable; the rest is tidy but plain. |
| Usability | **adequate** — targets are tablet-sized and the flow is obvious, but the problem screen shows "Problem 1 of 10" and 22 + 35 rather than the specified state, and no correct/incorrect feedback is visible. | **strong** — answer tiles are 180×85 and 7.5 tiles apart, progress dots mark the current problem, feedback copy is child-readable ("Not 65. Have another go."), Next is only offered on a correct answer. |
| Accessibility floor | **strong** — large type throughout; navy on cream; the lowest-contrast text is the grey footer line. | **strong** — equally large numerals; green and red states carry icon and text, not colour alone. |
| Responsive | **strong** — mobile fold keeps wordmark, mascot and the first two option tiles with full-width targets; nothing clips. | **strong** — mobile fold keeps wordmark, blocks, all three options and the Play button visible. |

### Template-like / AI-generated patterns

**V1**
- Soft multi-stop pastel gradient background with a faint dot grid.
- Smiling mascot inside a pale circle at the top-right of the hero.
- Three option tiles each with a coloured rounded-square icon (red +, blue −, green ±).
- Lozenge user chip "M Maya · ⭐ 12 stars" in the top-right corner.
- Thick bottom-border "3D" buttons (Play, Home, answer tiles, Hint).
- Horizontal gradient progress bar (teal to blue) on the problem screen.

**V2**
- Card-inside-card layout on a tinted page background.
- Dashed-outline "?" placeholder box in the equation.
- Ten small rounded-square progress dots under "Problem 3 of 10".
- Lightbulb-icon "Show a hint" button and check/cross icon feedback bars.
- Option cards with icon tile on the left, bold title and grey sub-label (the "feature card" micro-pattern).

### Verdict

I would ship **V2**. It answers the brief's whole checklist, including the 47 + 28 problem at 3 of 10 and both feedback states, and it is the one a teacher would recognise as a maths tool rather than a generic kids' app, thanks to the base-ten blocks and the worked examples on the option cards. V1 is the warmer, more playful screen, but it is missing the feedback states entirely and its problem screen does not show the requested state.

What V2 loses: V1's warmth and colour, the mascot, the satisfying 3D Play button, a visible name-entry field, and a better-filled problem screen; V2's hint button placement and three-card page would need tidying into real screens.

---

## Scenario D: Hollow Vale, pixel-art roguelike UI mock

### What each variant attempts

**V1** presents three bordered screens under a mono header ("HOLLOW VALE · UI MOCK · 3 SCREENS · 16 COLORS"): a title with a chunky gold-to-orange pixel wordmark over mountains, a "last run" bar and a menu; a HUD with HP/stamina panel, Gold/Floor panel, a brick-and-tile dungeon with a torch-bearing player and a skeleton, a log box, a three-slot item bar and a labelled minimap placeholder; and a dimmed pause screen with a "Paused" dialog. It leans arcade: big bitmap type, saturated accents.

**V2** presents the same three screens with numbered captions: a blackletter "Hollow Vale" title over a night scene with dead trees, torches flanking an arched door and water at the foot; a HUD with HP/stamina, Gold/Floor with icons, a room-graph map panel, a pillar, a barred wooden door with a gold lock, a chest, a skull and a selected item slot; and a pause screen where the whole scene is dithered to a checker pattern behind the dialog. It closes with a strip of the 16-colour palette. It leans dark fantasy: gothic type, muted purples, firelight.

### Ratings

| Quality | V1 | V2 |
|---|---|---|
| Visual quality | **adequate** — the panels are crisp and the HUD widgets are well built, but the "Last run" bar overlaps the door, the title menu has no cursor, and the floor/wall rendering is a noisy mix of checker textures. | **strong** — scene composition (door, torches, water, trees) is readable, HUD widgets are evenly inset, the dithered pause effect is authentic and the item bar's selected-slot highlight is clear. |
| Fidelity to brief | **adequate** — retro and pixel, but the gradient-filled gold title and bright blue tiles feel more arcade than dark fantasy. | **strong** — blackletter title, firelight, dead trees and muted purple-grey stone are squarely dark fantasy; the 16-colour palette is shown explicitly. |
| Coherence | **adequate** — the title's warm gradient type and the dungeon's cold palette feel like two moods; the pause dialog uses a different (smoother) face from the title. | **strong** — the same palette, same bitmap face and same panel borders run through all three screens. |
| Product specificity | **adequate** — HP 34/50, stamina pips, Floor 4, Torch/Rusted Key/Potion ×2 and the log line are all present, but the scene could be any tile roguelike. | **strong** — the locked wooden door, chest, skull-and-bone, room-graph map and the "Floor 4 · 412 gold" subtitle in the pause dialog are the game's own objects. |
| Distinctiveness | **adequate** — the chunky title is memorable; the dungeon is not. | **strong** — the blackletter title over the arched door and the dithered pause are the images you would remember. |
| Usability | **adequate** — HUD is legible and key hints are present, but the title menu gives no indication of what is selected. | **strong** — ▶ cursor on "New run" and "Resume", selected item slot outlined in gold, key hints bottom-right, log bottom-left. |
| Accessibility floor | **adequate** — HUD numbers are clear; log text and key hints are ~11-12px bitmap grey on near-black. | **adequate** — HUD and dialog text are larger and higher-contrast; key hints and the "Esc pause" are still small. |
| Responsive | **adequate** — the screens scale as images so all text shrinks; the title wraps to two lines and the "Last run" bar still overlaps the door. | **strong** — the title screen reflows (menu and stats above the scene at full text size) and the HUD keeps its widgets at readable size. |

### Template-like / AI-generated patterns

**V1**
- Page-level mono header with "01 TITLE 02 HUD 03 PAUSE" nav links, i.e. a website wrapper around the mock.
- Tab-style labels ("02 IN-GAME HUD", "03 PAUSE MENU") attached to the top-left of each frame.
- Gradient-filled (gold to orange) display title with a hard drop shadow.
- Uniform rounded "key cap" hint badges in a bar under every screen.
- Centred text-only menu with no cursor, the HTML-list default.

**V2**
- Boxed small-number captions ("1 Title screen", "2 In-game HUD") above each frame.
- Palette swatch strip with a caption line at the end of the page.
- Outlined "key cap" hint badges in the bottom-right corner of each screen.
- The "Map" panel is a node-and-edge diagram rather than tiles; it reads as an abstraction rather than an in-game minimap.

### Verdict

I would ship **V2**. It feels like a frame of the game rather than a page about one: the scene has depth, the pause state is rendered the way a 16-colour game would render it, and every required HUD element is present with a selection state. V1 is competent but its title screen has visible layout faults and its mood drifts between arcade and dungeon.

What V2 loses: V1's bigger, instantly readable title lockup, the explicit "Minimap · placeholder" label the brief asked for (V2 labels it "Map"), larger stamina pips, and the log prompt line ("›") that hints at more messages.

---

## Scenario E: CodeCraft landing page, original vs two improvements

### Which is the original

**V2 is the unmodified original.** The evidence is in the copy and the furniture, not the palette (all three use paper, navy, gold and coral):

- Its language is slogan-shaped and interchangeable with any studio: "Your work is one of a kind. Your website should be, too.", "Everything you need. Nothing off the shelf.", "Care in the code. Care in the details.", "No mystery, no maze", "We listen first / We find the right shape / We make it real".
- It carries the generic apparatus that both other variants remove or rewrite: a marquee strip of three slogans separated by asterisks, three icon cards with abstract glyphs (✦ ↗ ⌘), ↗ arrows on every link and button, a floating browser mock for a plant shop ("field & fern") with decorative code-snippet and note cards, and a lowercase "codecraft / WEBSITES, MADE WITH INTENTION" lockup.
- Both V1 and V3 add the same credibility fixes that are absent from V2: a disclaimer that the Red Cross concept is not affiliated with the organisation, concrete deliverables ("Page plan, design, build, mobile layout..."), and specific numbers (page counts, a thirty-minute call, a month-later check-in). Two independent rewrites converging on the same fixes is a strong signal they share a parent.
- V2 and V1 share the exact four FAQ questions; V3 rewrites them. V2 and V3 share a top announcement banner; V1 drops it. The skeleton (hero with mock, two projects, three offers, four steps, three or four values, FAQ, brief form, footer "Independent CodeCraft showcase concept") is identical across all three, which fits "keep all sections".

Residual doubt: V1 is plain enough that someone could read it as the original, but its copy is already concrete and it includes the affiliation disclaimer, so it reads as an edit of V2 rather than the thing V2 was edited from.

### What the two improvements attempt

**V1** strips the ornament: a sans-serif system throughout, a hero that replaces the mock with a "Page plan" diagram (Home → Services / About / Contact plus three things always included), three offers as a two-column table with "INCLUDES" lines, four stages each ending with a "You bring / You get / You give / You keep" line, three principles, four FAQs and the form. It bets on plainness as the credibility signal.

**V3** keeps the warmth and adds specificity: serif display with italic emphasis on a dotted paper texture, an annotated bike-repair mock with coral callouts explaining three decisions, a five-promise strip, concept cards with bullet rationale, offers and steps annotated with small mono labels (USUALLY / INCLUDES / "Within a few days"), four "house rules", seven FAQs, a form with an optional field and a vivid placeholder, and a footer line "This page itself: two fonts, no tracking, no cookies, no build step." It bets on showing the studio's thinking.

### Ratings (V1 and V3 as improvements; V2 shown for reference)

| Quality | V1 | V3 | V2 (original) |
|---|---|---|---|
| Visual quality | **adequate** — clean grid, consistent 160px gutters, good measure; but almost no typographic contrast, so sections blur together, and the hero's diagram box has more visual weight than the headline. | **strong** — serif/sans/mono roles are consistent, section rhythm alternates paper/navy/sand, the annotated mock is carefully aligned; the hero headline is long (five lines at 1440). | **adequate** — polished but busy: overlapping tilted cards in the hero, a marquee strip, icon cards, decorative circle arcs in the navy sections. |
| Fidelity to brief | **adequate** — paper, navy and "plain-spoken" are all there, but gold and coral are nearly absent and the "friendly" warmth is gone. | **strong** — paper, navy, gold, coral all present and working; voice is friendly and plain ("Flat tyre? Bring it in."). | **adequate** — palette correct, voice is marketing rather than plain-spoken. |
| Coherence | **strong** — one system, nothing stray. | **strong** — one system; the mono labels are the only extra register and they are used consistently. | **adequate** — the sections borrow from several landing-page idioms at once. |
| Product specificity | **strong** — the page-plan diagram, "Phone number in the header. Tap-to-call on mobile.", "Old web addresses are redirected", "You keep: the domain, the hosting account and the files." | **strong** — the bike-shop mock with "why" annotations, "No carousel. Nothing moves unless you ask it to.", "a fixed price... that number doesn't move unless the plan does", the two-fonts/no-tracking footer. | **weak** — nothing on the page could only be said by this studio. |
| Distinctiveness | **adequate** — the page-plan hero is memorable; the rest is deliberately forgettable. | **strong** — annotated mock, serif italics, the five-promise strip and the footer line stick. | **weak** — would be hard to distinguish from other studio sites. |
| Usability | **strong** — clear hierarchy, single primary CTA repeated, short sections, form is simple. | **strong** — same, with a clearer brief form (field hints, "optional"), though the page is long (6220px). | **adequate** — hierarchy fine; the ↗ on every link makes primary and secondary actions look alike. |
| Accessibility floor | **strong** — 17-18px sans body, high contrast navy on paper; smallest text is ~13px grey. | **adequate** — body ~16px, good contrast; the mono labels (USUALLY / INCLUDES) and footer are ~11-12px, and the coral annotation text is italic ~14px. | **adequate** — body ~15px; marquee and eyebrow labels ~11px letter-spaced. |
| Responsive | **strong** — mobile fold shows headline, lede, both CTAs and the diagram begins without clipping. | **strong** — mobile fold shows banner, headline, lede, CTA and the first bullets; nothing clips. | **adequate** — mobile fold is fine but the tilted mock card and side notes are cropped at the right edge. |

### Template-like / AI-generated patterns

**V1**
- Alternating navy/paper/sand full-bleed section bands.
- Two-column "label left, content right" sections repeated three times (What we build, How a project goes, Questions).
- "+" accordion FAQ rows with hairlines.
- Three-column principle grid ("Phones first / Plain English / Nothing held hostage") with bold title and grey text.
- Dark card form on a navy band with a full-width navy button.

**V3**
- Coloured-dot eyebrow labels before every section heading ("● WEBSITES FOR INDEPENDENT BUSINESSES").
- Italic serif accent on the last words of most headings ("Two examples, *up close*", "Four steps, *no surprises*", "Tell us what you're *building*").
- ↗ arrows on CTAs and circular ↗ buttons on the project cards (inherited from the original).
- Numbered 01-04 step list with hairlines; "+" circle accordions on the FAQ.
- Dotted-grid paper background texture.
- Gold checkmark circles beside the three reassurance bullets next to the form.

**V2 (original)**
- Top announcement bar with a coloured lead phrase.
- Coloured-dot eyebrow labels on every section.
- Marquee strip of three slogans separated by ✳.
- Tilted, overlapping browser mock with floating code and note cards in the hero.
- Three icon cards with abstract glyph tiles on a navy band.
- 01-04 numbered steps each with a small circular arrow button.
- ↗ arrow on every button and link; "Back to top ↑" in the footer.
- Decorative large circle outlines in the corners of the navy sections.

### Verdict

I would ship **V3**. It is the only variant that keeps everything the brief said to keep (palette, banner, all sections and the form) while turning the page from a description of a studio into evidence of one: the annotated bike-shop mock, the fixed-price promise, the house rules and the footer line about the page itself are things only this studio could say. V1 achieves credibility too, but by removing the aesthetic rather than fulfilling it, and it drops the banner.

What V3 loses relative to V1: the page-plan diagram (the single best explanatory device in any of the three), V1's terser "You bring / You get" lines, V1's larger and more accessible body type, and about 1400px of page length.

---

## Summary of ship decisions

| Scenario | Ship | One-line reason |
|---|---|---|
| A: Pulse | V2 | Proves the claim in the hero and is honest everywhere; V1 is the stock dark-SaaS template. |
| B: Portfolio risk | V1 | Looks like a tool in daily use, breach and limit live where the data is; V2 is a KPI-tile dashboard with a placeholder username. |
| C: Sumwise | V2 | Meets the full checklist (47 + 28, 3 of 10, feedback states) and reads as a maths tool; V1 is warmer but incomplete. |
| D: Hollow Vale | V2 | Feels like the game: dark-fantasy composition, dithered pause, selection states; V1 has layout faults and a split mood. |
| E: CodeCraft | V3 (V2 is the original) | Keeps the stated aesthetic and every section while adding specific, studio-only evidence; V1 improves by subtraction and drops the banner. |
