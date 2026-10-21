# External reference research

Browsing was available through the session proxy. Real sites were rendered in Chromium at 1440×900 (desktop) with the same measurement script used on the repository examples; the literature was read through fetch summaries. Screenshots of third-party sites are **not** committed (they are the sites' copyrighted content); observations and measurements are recorded here instead. Numbers are "text elements under 11px / total visible text elements" at 1440px, with the dominant font sizes, as rendered on 2026-10-21. Treat them as indicative: some pages were partially blocked by consent dialogs, bot walls or lazy loading.

## Reference sites, by category

### Modern consumer / developer technology

| Site | Measured | What works and why |
|---|---|---|
| stripe.com | 124/495 under 11px (10px footnotes, legal, logo-row labels); dominant 16px; h1 48px; one custom family (Söhne) | The headline *is* the content: it says what the product does and footnotes a real number ("Global GDP running on Stripe: 1.73%"). One memorable thing: the multicolor gradient ribbon, used once. Then a dense logo row and dense feature sections. Gradients are a brand system here (24 on the page), not a default; they would be a tell anywhere else. |
| apple.com | 2/397; dominant 12px (nav/legal) and 17px; h1 40–56px; pill buttons (980px radius) | Centered-hero convention executed with total confidence; the product photo carries the page; nothing under 12px; two buttons; a black band for the next product. Shows that conventional + specific = credible. |
| linear.app | 23/675; dominant 14/12/13/15px; Inter Variable + Berkeley Mono; pill radii on tags | Dense marketing page for a dense product; product screenshots, not illustrations; mono only for code; small text but not micro. Also the origin of the "dark SaaS" trend others copy without the reasoning. |
| github.com | 0/201; dominant 14/16/18px; Mona Sans | A purple-glow dark hero (so the "AI look" has real ancestors), but every size readable, one CTA, real product below. |
| cursor.com | 4/624; dominant 12/14/16px; custom gothic + Berkeley Mono | The hero is a real product screenshot inside a painting; mono used where the product uses mono. |
| arc.net | 0/71; serif display + sans body; wavy section edges | One owned gesture (the scalloped edge) and a serif headline on a saturated blue; the product screenshot is the hero. |
| figma.com | 0/228; 16/24/44px; custom sans | Big plain type, black CTA, real product shots; a custom display face appears once, for the event banner. |
| mercury.com | 0/227; 16/12/18px; serif for body | Note: a real fintech using an AI-generated-looking landscape hero. Real sites chase trends too; the difference is everything else on the page is specific (real disclaimers, real product). |
| basecamp.com | 353/650 under 11px, almost all inside an embedded product screenshot (6–8px); page text 17–19px | A dense, real product screenshot as the hero; a link list with specific claims; a bold headline that says what it does. Also shows the measurement's blind spot (text inside illustrations). |

### Serious / enterprise / utility

| Site | Measured | What works and why |
|---|---|---|
| mcmaster.com (login wall; home analyzed from markup + literature) | 0/66; 13/11/16px; Helvetica/Arial | Built around one user goal (find the part); omits promotions, carousels, animations; grayscale product images; spec-based filters; inline engineering explainers. Designers disliked it; users tested well on it (2005 SIGIA thread). The literature warns it does not transfer to brand-led products. |
| news.ycombinator.com | 177/318 under 11px (9px Verdana, uniformly) | A deliberate utility: uniform tiny type, zero decoration, link-first. The uniformity is the point; this is the exception that proves the small-text rule is about *mixing* poster headlines with micro labels. |
| sfbay.craigslist.org | 3/503; 14px Open Sans | The taxonomy is the design; dense link columns; one purple; nothing else. Newmark: users asked for simple and fast; only designers wanted a redesign. |
| berkshirehathaway.com | 7/32; 16px Times | Plain HTML, every document one click away; matches the company's voice; Buffett: "always liked the simple layout". Honest criticism: no mobile layout. |
| en.wikipedia.org (Vector 2022) | 0/1,625; 14/16/13px | 16px base chosen from reading research; limited line length; restrained chrome; link colors raised to 3:1. A documented, researched typographic system. |
| are.na | 13/177; 13/19/16px | Type-only hero with specific, true, witty copy ("for the last 15 years and 73 days"); lettered list; plain buttons. |

### Financial / analytical

| Site | Measured | What works and why |
|---|---|---|
| tradingview.com/markets | 57/965 under 11px (10px axis/labels); 16/14/12/11px; system font | The live chart is the hero; red/green semantic; tabular numbers; index chips with real values; a huge plain headline. Data as design. |
| bloomberg.com | bot wall; Terminal analyzed from literature | Extreme density, uniform color coding, keyboard-driven, colors reviewed for ~20,000 color-vision-deficient users (Bloomberg's own accessibility post). Density justified by expertise and task. |
| play.grafana.org | did not render (JS app) | Literature: monitoring walls put big numbers only where someone acts on them. |

### Editorial

| Site | Measured | What works and why |
|---|---|---|
| theguardian.com | 0/674; 15/17/12/14/20px; Guardian Headline + Guardian Text Sans | A bespoke headline serif and text sans, a section-color system, many readable sizes and none tiny. The 2018 redesign brief: "easier to read… confident and impactful". |
| nytimes.com | blocked | — |

### Education / playful

| Site | Measured | What works and why |
|---|---|---|
| duolingo.com | 0/144; 15/13/17px; custom rounded sans + Feather | One green does all the work; an illustrated character system with rules; all-caps bold buttons as a deliberate brand voice; big friendly type. Playful as a system. |
| khanacademy.org | error page rendered; design system analyzed from Khan's own blog | Color tokens organized by domain/layer/context/intensity; a narrow set of distinct hues; contrast computed for every pairing; "Instructive" replaces "brand/primary"; semantic colors with defined purposes. |

### Games and game interfaces

| Site | Measured | What works and why |
|---|---|---|
| store.steampowered.com | 22/1,019; 12/14/11/16px; Motiva Sans | Dense, dark blue-black, imagery-led; each game's own typography carries its tile; the store chrome stays plain. |
| supergiantgames.com/games/hades-ii | 2/87; 14/16/13px | The custom logotype and key art are the identity; the site chrome is deliberately ordinary; proof is real quotes with sources (IGN 10/10). From the literature: hundreds of consistent icons, motion-ready UI, art direction over the UI. |
| nintendo.com | 0/658; 16/12/18px; Geologica | One brand red, key art, generous rounded containers, readable everywhere. |
| itch.io | 0/566; 12/14/18px; Lato | Dense, bold, imagery-led, tags as real taxonomy; many shadows on tiles because tiles are the content. |
| interfaceingame.com | 12/296; 22/13/14px; DIN | A game-UI reference library: key art hero, uppercase nav as a deliberate genre voice. |

Game UI literature: Persona 5 (stylized menus that still group the four most-used actions; Atlus iterated on readability; Sakurai: "each UI has a different aim"); Hades (visual hierarchy built into UI/VFX behavior); Breath of the Wild (minimal HUD plus a "Pro HUD" that strips it further); Microsoft 10-foot guidance (15 epx minimum text, phone-like density on TV, 200% scale); Apple tvOS (23pt minimum, 29pt default).

### Creative / experimental

readymag.com and are.na rendered; Awwwards' 2025 Site of the Year listings (Messenger by abeto; Lando Norris by OFF+BRAND) were identified but not rendered. Observation: the "edgy portfolio" formula (huge mono, marquee, cursor follower, noise) is now itself a template; the strong creative sites commit to one idea and keep navigation usable.

## What the real sites do that the examples do not

1. **The hero is the content.** Product UI (Basecamp, Cursor, Figma, Arc, Linear), the real object (Apple, Nintendo), the data (TradingView), the art (Steam, Supergiant, itch), the taxonomy (craigslist, McMaster), or the headline itself (Stripe, Are.na, Figma). Never an orbit ring around a tilted mock.
2. **Readable sizes, few of them.** Dominant sizes 12–17px; 5–8 distinct sizes; small text only for genuinely secondary content, and uniformly so on utilities.
3. **One owned thing, consistently.** A ribbon, a green, a headline serif, a scalloped edge, a brand red, a logotype. Not five gestures per section.
4. **Plainness where it belongs.** Section after section of the real sites is just type and layout. The important thing gets the design.
5. **Delivered specificity.** Real numbers with sources, real quotes with attribution, real categories, real prices, real disclaimers.
6. **Conventions kept.** Centered heroes, sidebars, pill CTAs, red/green, all-caps buttons: used when the audience expects them, and named as choices (Duolingo's caps, Apple's center).
7. **Density matched to use.** Tools and stores are dense; product launches are sparse; both are full of real content.

## What is stylistic rather than important

Dark vs light; serif vs sans; rounded vs sharp; gradient vs flat; illustration vs photo. Each appears on excellent sites and on generic ones. They are vocabulary, not grammar. The skill treats them as choices to be made from the brief, never as rules.

## Limitations

- Measurements are from one viewport and one load; consent dialogs and lazy loading affect counts (Khan Academy, Grafana, NYT, Bloomberg did not render usefully).
- The small-text metric counts elements, not characters, and misses text inside images and SVG.
- "Real" sites are not automatically good; Mercury's trend-chasing hero and GitHub's purple glow show the aesthetic has real ancestors. We used real sites to extract *reasoning*, not to crown winners.
- The literature on the AI aesthetic is mostly practitioner blogs and vendor content; we relied on the two peer-reviewed sources above for the mechanism and treated the rest as corroborating observation.

## Links

Specification and tooling
- Agent Skills specification: https://agentskills.io/specification
- Claude Code skills: https://code.claude.com/docs/en/skills
- Codex skills: https://developers.openai.com/codex/skills (redirects to https://learn.chatgpt.com/docs/build-skills)
- Anthropic frontend-design plugin: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design

Mechanism
- Zhang et al., Verbalized Sampling (mode collapse, typicality bias): https://arxiv.org/abs/2510.01171
- Romero et al., Usable but Conventional: https://arxiv.org/abs/2605.15124
- Matthew Ström, UI Density: https://mattstromawn.com/writing/ui-density

Commentary on the AI aesthetic
- https://www.925studios.co/blog/ai-slop-design-tells
- https://www.claudecodehq.com/playbooks/unslop-ui
- https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p
- https://smoothui.dev/blog/ai-design-slop
- https://rectangle.substack.com/p/the-linear-effect
- https://www.925studios.co/blog/linear-design-breakdown-saas-ui-2026

Typography and design principles
- Butterick, Practical Typography, summary of key rules: https://practicaltypography.com/summary-of-key-rules.html
- Apple HIG, Typography (minimum sizes per platform): https://developer.apple.com/design/human-interface-guidelines/typography
- Microsoft, Designing for Xbox and TV: https://learn.microsoft.com/en-us/windows/apps/design/devices/designing-for-tv
- Laws of UX: https://lawsofux.com/
- Wikimedia, Vector 2022 visual refinements: https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Features/Visual_Refinements
- Khan Academy color system: https://blog.khanacademy.org/how-we-rebuilt-khan-academys-color-system-from-the-ground-up

Product and game analyses
- McMaster-Carr: https://www.bedelstein.com/post/mcmaster-carr
- craigslist: https://www.theringer.com/2017/5/4/16039960/craigslist-case-for-bad-design-silicon-valley-67e9e933764e and https://www.npr.org/2020/02/24/808965078/at-25-years-understanding-the-longevity-of-craigslist
- Berkshire Hathaway: https://philip.greenspun.com/blog/2026/02/06/can-llms-bring-the-berkshire-hathaway-web-site-into-the-21st-century-ai-and-css-html/
- Persona 5 visual design: https://mechanicsofmagic.com/2022/04/23/visual-design-of-games-persona-5/
- Sakurai on the aims of UI: https://sourcegaming.info/2016/11/24/the-aims-of-ui-sakurais-famitsu-column-vol-515/
- Hades II UI role (process evidence): https://www.supergiantgames.com/blog/job-opportunity-ui-illustrator-for-hades-ii
- Breath of the Wild Pro HUD: https://zeldauniverse.net/2017/02/08/breath-of-the-wild-will-offer-a-trimmed-down-pro-hud-option/
- Guardian typography redesign: https://www.designweek.co.uk/issues/15-21-january-2018/guardian-introduces-tabloid-format-redesigns-platforms
