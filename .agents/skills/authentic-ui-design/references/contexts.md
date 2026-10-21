# Context-specific guidance

Different products need different design logic. Each section: what good looks like, decisions to make, conventions to keep, the traps, and real-world references that show the principle (study the reasoning, not the pixels).

## Marketing sites and landing pages

**Good looks like**: the visitor's questions answered in order (what is it, is it for me, what does it look like, what does it cost, how do I start) with real content in every section; one hero that shows the actual product or subject; proof that is real or absent; a close that is a plain, specific next step (keep it; just not as a "colored band with a giant glyph"); and the requested mood visible in the first screenful.

**Decide**: what the hero *shows* (product UI, photo of the real thing, the real data, a diagram, or type alone); the section order from the content inventory; which one section gets the most design; density (a dev tool page can be dense and text-led; a consumer product page sparse and image-led).

**Keep**: a conventional nav; a primary CTA that looks like a button; pricing in a table; footers that are useful.

**Traps**: the template skeleton; hero collage (tilted mock + floating badges + orbits); stat band of invented numbers; "process" steps; FAQ as filler; testimonials without people; "A little X. A lot of Y." copy; announcement bar by reflex; marquee tickers.

**References**: Stripe (the headline is the content; one multicolor ribbon as the single memorable thing; real customers; everything else plain and dense); Apple (centered convention executed with huge confidence and real product photography; nothing under 12px); Basecamp (a real, dense product screenshot as the hero; links with specific claims; a bold headline that says what it does); Are.na (type-only hero with specific, witty, true copy: "For the last 15 years and 73 days"); Figma (real product shots, a bold black CTA, a custom display face for the event banner only).

## SaaS and productivity apps

**Good looks like**: a tool people can live in: dense enough to work, calm chrome, the primary task in the primary space, states for everything, keyboard support, consistent navigation labeled in the user's nouns.

**Decide**: the one view users open most and make it excellent; row heights and type sizes (12–14px consistently is normal here); what the sidebar is for; where status is shown and how (icon + color, not color alone); what the empty state teaches.

**Keep**: sidebar + topbar; standard form controls; tables for records; standard shortcuts (⌘K, `/` search) if the audience expects them.

**Traps**: marketing hero cards inside the app; greetings and motivational copy; three stat tiles with icons for numbers nobody acts on; "tip" cards in the sidebar; cards inside cards; 9px labels; every panel the same card style; dark mode because "software".

**References**: Linear (status-first rows, icon + color coding, subtle opacity gradations, 12–15px type, keyboard-first); GitHub (dense, plain, consistent, 14–16px); Cursor's site showing the actual product with mono where mono is functional.

## Dashboards and analytics

**Good looks like**: the data is the design. Tables with tabular numerals, charts that show comparison (vs. target, vs. last period, vs. peers), semantic color that means one thing everywhere, density matched to the user's expertise, and nothing that is not information.

**Decide**: what decision each panel supports (if none, cut it); what is compared to what; number formatting (units, precision, alignment); the semantic palette (up/down, status) and keeping the accent separate from it; whether it is a monitoring wall (glanceable, big numbers, few panels) or an analysis tool (dense, filterable, many panels).

**Keep**: red/green for down/up in finance (with a second cue for color-blind users); standard chart types; sortable tables; a filter bar.

**Traps**: KPI tiles with icons; sparkline decoration; charts without baselines; glow; 3-column symmetry regardless of importance; pie charts; "insights" copy that restates the number.

**References**: TradingView (the chart is the hero, red/green semantic, tabular numbers); Bloomberg Terminal as described in the literature (extreme density, uniform color coding, keyboard-driven, colors accessibility-reviewed); Grafana-style monitoring walls (big numbers only for things that page someone).

## Game UI (menus, HUD, overlays, web games)

**Good looks like**: the interface belongs to the game's world. Menus, HUD and overlays use the game's palette, materials, shapes and type; readable at play distance and during motion; critical information (health, timer, objective) is instant to read; chrome for settings and controls is small, consistent and secondary.

**Decide**: genre conventions (an arcade shooter, a cozy sim, a strategy game and a horror game have different HUD traditions); what is diegetic (in-world) vs. non-diegetic (overlay); the minimum text size for the play distance (desktop browser ≥ 14px for HUD values; TV/console ≥ 23pt equivalent); how the title screen sets the world (key art, logotype, motion); how feedback feels (hit, score, level up) in color, motion and sound; palette limits for retro styles (and stick to them).

**Keep**: known control hints (kbd chips are fine, keep them small and out of the way); pause/settings in expected places; score/time where players look.

**Traps**: a SaaS dashboard around a canvas (cards, stat tiles, status pills, "SYSTEMS NOMINAL" labels, Inter); title screens that are a landing-page hero; micro-labels in mono; website hover-lift on game buttons; a mood (neon, glow) without a world.

**References**: Supergiant's Hades (illustration and a custom logotype carry the identity; UI type is clean and readable; icons consistent and motion-ready); Persona 5 (stylized menus that still prioritize the four most-used actions; the team iterated on readability); Zelda: Breath of the Wild (minimal HUD, with a "Pro HUD" option that strips it further); Steam and itch.io store pages (dense, imagery-led, type from the games themselves).

## Editorial, news, documentation, content sites

**Good looks like**: typography carries the design. A text face chosen for reading, a measure of 45–90 characters, a clear hierarchy of headline / deck / byline / body / caption, images with captions, generous but not empty margins, and navigation that reflects the real sections.

**Decide**: the text face and the display face; the measure; the rhythm (headline sizes by importance, not uniform cards); how sections are distinguished (The Guardian uses section colors); dark mode by reader preference.

**Keep**: article page conventions; a table of contents for long documents; underlined or clearly colored links.

**Traps**: article grids of uniform cards with thumbnails; kickers on everything; 72px headlines over 10px bylines; hero image carousels.

**References**: Wikipedia's Vector 2022 (16px base, limited line length from reading research, restrained chrome); The Guardian (a bespoke headline serif + a text sans; section color system; many readable sizes, none tiny); The New York Times and similar (hierarchy by headline size and position).

## E-commerce and catalogs

**Good looks like**: find → compare → decide → buy with nothing in the way. Real product imagery, real specs, honest prices, filters that use the buyer's vocabulary, dense result lists.

**Decide**: whether the buyer is high-intent (McMaster-Carr: no marketing, grayscale images, spec filters) or browsing (Steam, Nintendo: imagery-led, curated rows); the comparison model (table vs. cards); how variants are chosen.

**Keep**: standard cart/checkout; product cards *here* are legitimate; breadcrumbs; sort and filter.

**Traps**: lifestyle hero over the search; editorial poetry for a hardware store; hiding price; infinite decoration around a thin catalog.

**References**: McMaster-Carr (built around one user goal; omits everything else; filters by engineering specs; inline explainers); Steam (dense, dark, imagery-led, 12–16px); Nintendo (one brand red, key art, 12–18px, friendly rounded containers).

## Mobile apps

**Good looks like**: platform conventions respected (navigation, gestures, system components), 16–17px body, 44pt targets, one primary action per screen, thumb-reachable controls, content first.

**Decide**: native-feeling vs. branded; tab bar vs. drawer per platform; how far to depart from system components (rarely far).

**Traps**: desktop marketing patterns squeezed into a phone (hero + 3 cards + CTA); micro-text; custom controls that break expectations.

## Utility and developer tools

**Good looks like**: fast, dense, predictable, plain. Information over branding. Monospace where alignment matters, at readable size. Keyboard-first.

**Keep**: system fonts or a good mono; terminal conventions; tables.

**Traps**: "developer aesthetic" (dark + lime glow + grid background + scanlines) in place of function; gradient logos; hero sections in CLIs' docs.

**References**: Hacker News and craigslist (uniform, dense, link-first; the lack of decoration *is* the brand); Berkshire Hathaway (plain HTML, every document one click away; fits the company's voice; the honest criticism is mobile support); GitHub (dense and consistent).

## Playful, educational, consumer-friendly

**Good looks like**: color and illustration with a consistent character system (a mascot with rules, a palette with roles, a shape language), big friendly type, instant clear feedback, restraint in motion so the content stays the star. Playful is a *system*, not randomness. Color has to cover real area (tiles, backgrounds, illustrations), not just one accent on white; a pedagogically correct but pale page fails the "colorful" brief.

**Decide**: the one or two brand colors and where they go; the illustration style and its rules; what "fun" feedback looks like (and how not to overdo it); readability for the age group (bigger, higher contrast).

**Traps**: confetti and bounce on everything; random rotations and "hand-made" misalignment; five accent colors; mascots without rules; SaaS cards with a cartoon.

**References**: Duolingo (one green doing everything, a character system, all-caps buttons as a deliberate brand choice, 15–17px text); Khan Academy's color-token system (semantic roles, contrast-tested, a narrow set of distinct hues); Nintendo's site (one brand red, generous type).

## Luxury and premium

**Good looks like**: restraint. Space, one superb typeface used at a few sizes, materials and photography that are the product, slow or no motion, small but readable type, a palette of two or three tones.

**Traps**: gold gradients; grey text on grey; "premium" glass and glow; tiny text as a proxy for elegance (keep ≥ 12px); hero poetry.

## Retro, themed and period styles

**Good looks like**: the period's conventions applied consistently: palette limits (e.g. 4–16 colors), pixel grids with integer scaling, bevels and system chrome of the era, period type, period copy tone. Modern accessibility is preserved underneath (focus, contrast, reduced motion, real text).

**Traps**: a retro font on modern SaaS chrome; mixing eras; blur and anti-aliasing on pixel art; nostalgia as decoration rather than system.

## Experimental and creative sites (portfolios, studios, art)

**Good looks like**: a single strong idea executed completely (typography-only, a grid broken on purpose, a spatial metaphor, generative visuals) with navigation that still works. Risk is appropriate here; incoherence is not.

**Traps**: "experimental" as a coat of paint over the template skeleton; unusable navigation; novelty effects on every element; the edgy-portfolio formula (huge mono, marquee, cursor follower) which is now itself a template.
