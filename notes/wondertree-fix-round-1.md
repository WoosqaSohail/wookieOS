# wondertree window — fix round 1 ✅ DONE (Oct 13)

**Rule for this round: plain words, no commit/PR refs, one status term, less on screen, nothing that falls apart under interview questions.**

## Status vocabulary (final)
- shipped work → **live**
- unfinished work → **in progress**

## Fixes — all applied & tested
- [x] pricing status → "in progress" everywhere (overview card + section chip + case study chips)
- [x] one status term: live / in progress only
- [x] third card + page renamed "other work"
- [x] footer mail button → solid blue, no custom hover state
- [x] autism "the page": two-column, media card on the right, clickable → live page; video slot ready (drop `images/autism-scroll.mp4`, swap the `<a>` for a looping `<video>`)
- [x] all commit/PR references removed
- [x] autism case study rewritten around the real reasoning (trust first fold, educated audience → text-heavy on purpose, CTA per scroll with deliberate breaks, illustration-heavy testimonials, research as second trust signal → pricing → FAQ → final CTA)
- [x] bigger study text (`.wtr2-study` scope), fewer pills (max 2 per page)
- [x] pricing "the page": kept as faithful preview — real screenshot from the branch wasn't fetchable on this connection (repo checkout needs to pull heavy assets); drops out for a live screenshot when pricing ships
- [x] pricing case study simplified to the same standard
- [x] other work: reframed around wrong-audience clicks (celebrity listicles) → intent shift → autism page → pricing; freemium → "in progress" (not live)
- [x] ⓘ tooltips on all four stat cards: source + date range (hover or keyboard-focus)

## Known noise (not ours)
- The hidden YouTube music player in index.html spams console errors on flaky internet (stream retries). Candidate for a future cleanup: lazy-init it only when the user opens the music panel.
