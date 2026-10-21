# What makes an interface read as AI-generated

A research report. Sources are the rendered repository examples (`01-repository-examples.md`), ~25 real production sites rendered the same way (`03-external-references.md`), the published commentary and the small amount of peer-reviewed work on the subject. Evidence-backed claims are marked **(evidence)**; plausible but unproven mechanisms are marked **(hypothesis)**.

## 1. The conventional explanation is incomplete

Most commentary names the same surface features: indigo-to-violet gradients, Inter, three rounded cards in a row, glassmorphism, glow, uniform radii, line icons, "Build faster. Ship smarter." copy. These are real and we observed them. But they explain only first-generation output, and the repository examples show what happens once a model has absorbed that advice: not one of the seven uses a purple gradient, and all seven still read as generated. The examples use what the Anthropic `frontend-design` plugin itself now lists among defaults to avoid: cream backgrounds with terracotta/forest accents, near-black with acid green, identical rounded cards, middle-dot meta strings, arrows on links. A second-generation default has replaced the first. **(evidence)**

So the question is not "which colors give it away" but "what property survives a palette swap". We found three layers.

## 2. Layer 1: surface

Surface tells are the fastest to spot and the least important to fix alone.

- **Type faces**: Inter, DM Sans, Manrope, Space Grotesk, Plus Jakarta, Outfit, Sora chosen without a reason. Six of seven examples use DM Sans or Inter; the seventh uses a system stack with Georgia italics. **(evidence)**
- **Micro-typography**: tracked uppercase eyebrows, 7–10px labels, 70–90px display. See §5. **(evidence, measurable)**
- **Palette generations**: (1) indigo/violet gradient on white or near-black; (2) cream + serif italic accent + forest green / terracotta / coral; (3) near-black + lime/cyan + mono + glow. Generations 2 and 3 cover all seven examples. **(evidence)**
- **Ornament system**: `↗` after links, `→` on buttons, `✳ ✦ ✧` as logos and section decorations, `·` meta strings, rotated "sticker" labels, orbit rings and halos, floating annotation cards, tilted mock windows with traffic-light dots, glowing status dots. 7–30 ornament glyphs per example page versus 0–2 on real sites. **(evidence, measurable)**
- **Effects**: gradient primary buttons, glow shadows (`0 0 Npx`), backdrop blur on overlays, border + shadow + radius stacked on one element.

Each of these is fine somewhere. The tell is their co-occurrence without a reason.

## 3. Layer 2: structure

Structural tells survive a restyle. They are the reason a professionally polished page can still be identified in a one-second squint.

**The marketing skeleton.** Four unrelated subjects (a construction company, a charity, a single-board computer, a web studio) received the same eleven-part page, in the same order, with the same component in each slot (see `01-repository-examples.md`). The skeleton is the highest-probability landing page in the training distribution; absent a reason to deviate, the model emits it. **(evidence)**

**The dashboard skeleton.** Greeting → hero card → three KPI tiles with icons → two-column panels → sidebar tip card. Applied to a debate-practice app whose actual first task is a timer. **(evidence)**

**The game-as-dashboard skeleton.** Two independently generated browser games are nearly interchangeable: dashboard chrome (cards, kbd chips, status pills, mono labels, gradient CTA) around a canvas, with no trace of the game's world in its UI. **(evidence)**

**Even rhythm.** Every section has the same padding, the same eyebrow + heading + intro opening, and the same visual weight. Nothing is allowed to be plain, so nothing is the focal point. Real sites are lumpier: Apple gives a product a whole screen and a product row almost nothing; Stripe follows a huge headline with a dense logo row and a dense feature grid; Wikipedia is one typographic column with a utilitarian sidebar. **(evidence)**

**Containers by reflex.** Cards for everything, including things that are better as rows, lists, tables or a paragraph. **(evidence)**

**Filler sections.** "The X difference", "process" steps for non-processes, proof bands with two facts, colored CTA bands whose only content is a giant glyph. These exist to make the page "complete", a notion inherited from templates rather than from the visitor's questions. **(evidence)**

## 4. Layer 3: intent

The deepest layer is whether the design is *about* the product. This is where "polished but AI" lives.

**Specificity simulated, not delivered.** The examples are full of texture that imitates a real product's detail without carrying any: "NO. 008", "SECTOR 07", "FLIGHT SYSTEMS NOMINAL", "HOME / 01", "01 / 04", "v01.0", glowing "LIVE" dots, version strings, coordinates. We call this *manufactured specificity*. Real products are specific in a different way: Stripe's headline says what the product does and footnotes a real number; Are.na says "for the last 15 years and 73 days"; craigslist's specificity is its taxonomy; Supergiant's is its art and its sourced review quotes; TradingView's is a live chart. **(evidence)**

**Uniform polish.** Human-directed work has a hierarchy of care: one thing is designed hard and the rest is left plain so the one thing reads. Generated work spreads polish evenly, which is why it photographs well in thumbnails and feels manufactured at full size. **(evidence, from side-by-side renders)**

**Interchangeability.** Swap the logo and copy and the page fits another company. The direct test for this layer. **(evidence)**

**Designed for the screenshot, not the session.** Dashboards with 8–9px text; marketing pages whose captions are 6–7px; games whose HUD text is 7px mono. These sizes are chosen for how the whole page looks reduced, not for reading. Apple's minimum body size is 11pt on iOS and 10pt on macOS with 17pt and 13pt defaults; Butterick recommends 15–25px web body text; Microsoft's 10-foot guidance sets 15 epx minimum. None of the examples would pass these in their small text. **(evidence)**

**Copy that says nothing.** Fragment pairs ("A little X. A lot of Y."), "Your X. Your Y.", "what if" poetry, "Good things take shape", motivational lines in tools. Grammatically perfect, semantically empty. This is the textual face of the same phenomenon: cadence learned, content absent. **(evidence)**

## 5. The measurable signal nobody talks about: tiny text

Across the seven examples, 22–70% of visible text elements render below 11px; on five of them it is the majority. Dominant sizes are 7–11px. On ~25 real sites rendered the same way, the share is 0–5% almost everywhere (Wikipedia 0 of 1,625; The Guardian 0 of 674; Nintendo 0 of 658; GitHub 0 of 201; Figma 0 of 228; Mercury 0 of 227; Linear 23 of 675; Steam 22 of 1,019; Apple 2 of 397). The exceptions are instructive: Hacker News (9px Verdana, uniformly, as a deliberate utility choice), Stripe (10px footnotes and legal under a 48px headline), and Basecamp (text inside an embedded product illustration). **(evidence)**

We believe this happens because the model is optimizing the *composition* of the page as an image, in which small tracked labels are a design texture, rather than the page as something read at 100%. **(hypothesis)** Whatever the cause, it is a cheap, honest diagnostic: measure the share of text under 11px and the number of distinct font sizes. The skill's `ui-audit.js` does this.

## 6. Why models produce these patterns

- **Training distribution.** Landing-page templates, Tailwind UI demos, shadcn examples, Dribbble shots and component-library documentation are over-represented and structurally alike. The model's unconditioned output is their median. **(hypothesis, widely argued; consistent with everything observed)**
- **Typicality bias in post-training.** Zhang et al. (2025, "Verbalized Sampling") show that preference data used for alignment systematically favors familiar text, and that this drives mode collapse (loss of output diversity) independent of the algorithm. A designer-rater who prefers the familiar layout teaches the model to emit it. **(evidence, for text; extension to layout is a hypothesis)**
- **Empirical UX result.** Romero et al. (2026, "Usable but Conventional") had 92 participants rate AI-generated and human prototypes blind: AI prototypes scored well on pragmatic qualities (usability, efficiency) and neutral-to-negative on hedonic ones (originality, innovation). The authors conclude generative tools "tend to reinforce visual and structural patterns". This matches our observation that the examples are functionally sound and structurally generic. **(evidence)**
- **Underspecified prompts.** "A modern landing page for X" fixes format and mood but not audience, hierarchy, content or constraints; the gaps are filled with the most probable choices. Every analysis of the problem agrees on this, and it is the lever a skill can pull. **(evidence, by construction)**
- **Advice absorption.** Once "avoid purple gradients and Inter" entered the training data, the model learned a replacement default (cream/serif/green; black/lime/mono) rather than learning to decide. This is the strongest argument that the fix must be a *method* and not a *banned list*: any banned list becomes the next default. **(evidence, from the repository examples themselves)**
- **Self-reinforcement.** Generated pages are deployed and scraped, so the next model sees more of them. **(hypothesis, plausible, unmeasured)**
- **Screenshot optimization.** Agents that render and evaluate their own work judge a downscaled screenshot, where tiny labels look like texture and big headlines look confident. **(hypothesis)**

## 7. Polish versus authenticity

The examples show that *polish* (alignment, consistency, working states, responsiveness) and *authenticity* (decisions traceable to this product and these users) are independent. The Raspberry Pi page is highly polished and fully generic. craigslist and Berkshire Hathaway are unpolished and fully authentic: their plainness is a decision that serves their users, and their users say so.

Authenticity is not irregularity. None of the real sites we examined use random rotations, deliberate misalignment or "hand-made" noise to feel human; the repository examples are the ones that rotate stickers and tilt windows. Authenticity comes from:

1. **Content as design.** The hero is the product, the data, the art, the catalog, the headline, not a decoration around it.
2. **Hierarchy of care.** One thing designed hard; the rest plain.
3. **Delivered specificity.** Real names, real numbers with sources, the user's vocabulary, real states.
4. **Conventions kept knowingly.** Apple's centered hero, Linear's sidebar, TradingView's red/green are conventions chosen because the audience relies on them.
5. **Typography for reading.** Sizes, measure, leading and a short scale.
6. **A few owned choices executed consistently.** Duolingo's one green and its character system; The Guardian's headline serif and section colors; Steam's blue-black and game key art; Arc's wavy section edges.

## 8. Implications for a skill

1. Teach a **decision procedure** (brief → direction → content inventory → structure → craft → render → diagnose), not a banned list.
2. Make the **structural and intent layers** explicit, with tests ("would this skeleton fit another product?", "is specificity simulated or delivered?", "what is the one focal point?").
3. Give **measurable floors** for typography (sizes, count of sizes, measure) because they are the one tell that is both objective and nearly universal in generated output.
4. Name the **second- and third-generation defaults** explicitly so the model does not treat "not purple" as the goal.
5. Insist on **preserving the requested aesthetic** and on **keeping conventions** where they serve, so the skill does not become a new house style.
6. Require **rendering and diagnosis by layer** before any cosmetic iteration.

## Sources

Primary observation: the seven repository examples and the ~25 reference sites listed in `03-external-references.md`, rendered October 2026.

Literature and commentary consulted (links in `03-external-references.md`): Zhang et al., "Verbalized Sampling: How to Mitigate Mode Collapse and Unlock LLM Diversity" (arXiv 2510.01171); Romero et al., "Usable but Conventional: An Empirical Study on the UX of AI-Generated Interface Prototypes" (arXiv 2605.15124); the Anthropic `frontend-design` plugin (anthropics/claude-code); the "unslop-ui" skill's self-reported complaint analysis; 925studios, smoothui, dev.to and Medium essays on the "purple problem" and "why every AI site looks the same"; Adam Wathan's reported remarks on Tailwind UI's indigo default; Matthew Ström on UI density; Butterick's Practical Typography; Apple Human Interface Guidelines (typography); Microsoft's "Designing for Xbox and TV"; Khan Academy's color-system write-up; Wikimedia's Vector 2022 visual refinements; analyses of McMaster-Carr, craigslist, Linear, Stripe, Persona 5, Hades and Breath of the Wild; Laws of UX; Tufte's data-ink ratio; Dieter Rams' ten principles.
