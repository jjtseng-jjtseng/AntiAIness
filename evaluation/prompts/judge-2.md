# Second judge prompt (re-test of skill v1.1)

Run on a fresh model 2 agent with screenshots relabeled V1–V4 in a seeded random order (mapping in `../judge-review-2.md`). Variants per scenario:

- A, C: model 2 baseline, model 2 with skill v1.1, model 1 with skill v1.0
- E: the original page, plus the same three improvements
- F, G (vague briefs): model 1 baseline, model 1 with skill v1.0

Instructions given (abridged; the brief texts were the same as in `judge.md`):

1. Describe in two sentences what each variant attempts.
2. Rate each on visual quality, fidelity to the requested style ("does it deliver every adjective the client used?"), coherence, product specificity, distinctiveness, usability, accessibility floor and responsive behavior: weak / adequate / strong with one sentence each.
3. List template-like or AI-generated patterns, including any "tasteful" or "anti-template" house style repeated across variants or scenarios.
4. Rank all variants for the scenario; explain the winner and what it loses to the runner-up. For E, identify the original and say whether each improvement is actually better than it.

The reviewer could only read the screenshot folder and crop tiles for close inspection.
