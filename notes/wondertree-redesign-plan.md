# wondertree window — redesign plan (v2)

**Status: awaiting your go-ahead. Reply with step numbers, e.g. "do 1–3".**
Nothing below is built yet except the hero you already approved.

---

## What you asked for, translated

- One window, but **pages, not one long scroll** — the long scroll lost the context of each piece of work
- A **sticky top nav** in the window: `overview · autism page · pricing · other work`
- Each work page opens with its own mini-hero, then **two sub-tabs**:
  - **"the page"** → the actual designed page shown as a demo (screenshots presented like the live site, scroll animations, more color)
  - **"the case study"** → the process side (what I did and why — the PM story), kept SIMPLE
- The hero you liked stays as the overview page
- Kill the "how i work" section as it exists (too complicated) — its two user stories fold into the overview page as small cards
- More elements, more color, scroll animations
- Pixel "W" logo (from your jpg) replaces my made-up dot-tree icon

## Structure at a glance

```
┌──────────────────────────────────────────────────┐
│ wondertree — case study                    [×][–]│
│ ┌──────────────────────────────────────────────┐ │
│ │ overview · autism page · pricing · other     │ │  ← sticky tab nav
│ └──────────────────────────────────────────────┘ │
│                                                  │
│  [OVERVIEW]  hero (kept) + 3 big colorful        │
│              "what's inside" cards → click       │
│              jumps to that tab                   │
│                                                  │
│  [AUTISM PAGE]  mini-hero: "traffic that         │
│    ├─ the page     wouldn't convert → now it     │
│    │               converts"                     │
│    │              · full-width live screenshot   │
│    │              · scroll-animated beats        │
│    └─ case study   problem → 4 moves → result    │
│                    (max 6 elements, plain words) │
│                                                  │
│  [PRICING]  same sub-tab pattern                 │
│    ├─ the page     plan cards vignette +         │
│    │               calculator punchline          │
│    └─ case study   the wrong-license insight,    │
│                    decisions, 95% status         │
│                                                  │
│  [OTHER WORK]  3 simple cards, one line each:    │
│                20→4 consolidation · freemium     │
│                rollout · talk-to-us funnel       │
│                (+ numbers strip at the bottom)   │
│                                                  │
│  footer: navy bar, yellow CTA, contact link      │
└──────────────────────────────────────────────────┘
```

Sub-tab names (draft, change if you want): **"the page"** and **"the case study"**.

---

## Design direction

Keep everything you approved from the current pass (WonderTree's own system: Bebas Neue caps, Raleway body, ink `#1b1a1a`, blue `#0066ff`, yellow `#ffcc00`, graph-grid background, white cards with hard ink shadows) and add:

- **More color**: their palette also has green `#3FA34D`, teal `#4FC3A5`, cream `#fefbed`, navy `#0b1e59`, pale blue `#dce7ff` — section accents, colored number chips, colored card corners instead of all-blue-everything
- **Scroll animations**: sections and cards fade/slide in as you scroll (IntersectionObserver, staggered, respects reduced-motion)
- **Simpler case studies**: each one is exactly — 1 problem line → 3–4 "what I did" beats → 1 result line. No more than that on screen at once
- **Font hardening**: local font fallbacks so a bad connection can't wreck the layout (this is likely why it looked like it was "crashing" on your side — the code itself has no errors, verified)

---

## Steps

Each step is independent and testable after it lands.

| # | step | what happens |
|---|------|--------------|
| 1 | **Font hardening + crash check** | font-display + local fallback stack so offline never breaks layout; full console-error sweep |
| 2 | **Tab shell** | sticky top nav (4 tabs), page switching with fade transition, switches reset scroll to top, tab state survives minimize |
| 3 | **Overview page** | keep the approved hero, add three big colorful "what's inside" cards (autism / pricing / other) that jump to their tabs |
| 4 | **Autism page** | mini-hero + the-page/case-study sub-tabs; page side = live screenshot in a fake-browser frame + animated beats; case-study side = the 6-element simple version |
| 5 | **Pricing page** | same sub-tab pattern; page side = plan cards vignette + calculator punchline (labeled "ships this week"); case-study side = wrong-license insight + decisions |
| 6 | **Other work page** | 3 cards: 20→4 consolidation (+cannibalization evidence), freemium rollout (incl. the revert), talk-to-us funnel — one line each + link to full timeline md |
| 7 | **Scroll animations** | IntersectionObserver fade-up on all sections/cards, staggered, reduced-motion respected |
| 8 | **Color + polish pass** | green/teal/cream accents across tabs, numbers, and cards so sections feel distinct |
| 9 | **Pixel W icon** | swap the desktop icon to the real logo: black W + blue/teal/yellow/blue dots (from your jpg) |
| 10 | **Full test** | every tab + sub-tab in the browser, console clean, mobile view, cleanup |

---

## Notes

- The separate prd.doc window stays retired; its two user stories live on the overview page, the full PRD remains "available on request" in copy
- Hope & Cope icon stays as-is (you approved it); its window redesign is a later phase
- All WonderTree facts/numbers stay as confirmed in `notes/wondertree-timeline.md`
