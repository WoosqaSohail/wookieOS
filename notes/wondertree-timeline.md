# wondertree.co — work timeline since June 2026

**woosqa (Woosqa Sohail) · designer-developer (product) · Jun 1 – Oct 13, 2026**
Repo: `usmankaiz/wondertree-website` · my commits land under `WoosqaSohail` and inside `arkhamkxd`'s branches (I researched, decided, designed and specced; he merged — I was part-time and couldn't commit to main directly).

> How to read this: everything below is reconstructed from the git history (commits, branches, PRs), the live site, and GSC/Clarity data. All interpretations confirmed by woosqa (Oct 13, 2026).

---

## TL;DR — the four workstreams

| # | workstream | status | the one-line |
|---|---|---|---|
| 1 | **Autism landing page (v1 → v2)** | shipped | high-traffic, blog-looking pages rebuilt into a product-intent page that converts |
| 2 | **Pricing page v2 (EN + AR + institutions)** | 95% done (Oct 13), shipping soon | individual-vs-institution confusion was selling the wrong license; rebuilt with DataCamp as reference |
| 3 | **Content & SEO consolidation** | shipped | 20 competing pages → 4 canonical ones; spam recovery; WordPress migration |
| 4 | **Site-wide systems** | shipped | freemium rollout, tawk.to, Talk-to-Us funnel, performance, Arabic program |

---

## The story in one paragraph

The landing pages got plenty of traffic but converted terribly — they read like blog pages, not product pages. I rebuilt the autism landing page around actual product intent: real evidence figures, a progress-report mockup, skills reframed to what parents actually search for, a hero video (the 45-second muted loop I scripted and cut), and game cards that say why each game matters for a child with autism. Same underlying fix for pricing: interviews with OTs, real customers and institutions-package buyers showed people couldn't tell individual and institution pricing apart, so they bought the wrong license — the new pricing page (DataCamp as reference, ChatGPT-style plan framing) leads with a comparison grouped by Play/Progress/Support and a therapy-cost calculator that makes the value math unmissable. Underneath all of it: 20 cannibalizing content pages consolidated into 4, the 14-day trial replaced with freemium because the trial wasn't converting, and an EN/AR SEO program to hold it all together.

---

## Month-by-month

### June 2026 — arrival + blog & who-we-help foundations
- `0f4221c` (my commit, Jun 9): migrated understanding-autism + CP celebrities articles, improved CTAs across all blog posts, fixed button shake animation
- PR #133 `fix/who-we-help` — **Who-We-Help & Skills pages redesigned**, SEO improved, game data refreshed (`9fb65a5`, merged Jun 17)
- Blog migrations: celebrity articles + blog listing redesign + category filters (`a5355a0`), H2 category sections + game CTAs + FAQs (`453b1cc`), sitewide canonical tags (`c849312`)
- SEO scaffolding: hreflang + canonicals for Arabic/English, translation-pending pages (`a3053ec`, `1447aa3`), trailing-slash 301s (`25d6b06`)

### July 2026 — recovery + the autism page begins
- PR #138 `hotfix/favicon-v2` — new favicon EN+AR
- **Blog recovery** (`4cc7cd2`, Jul 4): rewrote spam-update-hit pages, retired thin posts, added verified expert content. `29ea674` literally flags articles "for woosqa to clean AI stuff out of" — that was me doing the cleanup
- SPED who-we-help page + banner (`d8e0f80`)
- Freemium banner redesign + the localStorage dismissal edge-case fix (`bc45ab1`, `43b7d4a` — "change localStorage key so old dismissals don't block redesigned banner")
- **Pricing research & first build**: DataCamp-inspired rebuild starts (`259795f` Jul 16), institutions page EN/AR (`77fc89d`), TM logo + T&C (`fe451cb`)
- my commit `0249281` (Jul 27): "woosqa changes"

### August 2026 — autism page v1 + pricing
- **Autism (ASD) page v1 → v1.1 → v1.2** (`9f1e066` → `f2ed431` → `c77d9c5`, Aug 24–27)
- my commit `1664bf3` (Aug 12): pricing page changes
- **HubSpot → tawk.to migration** (PR #145, `ececc99`) + privacy policy update; tawk integrated (`21bbc8a` back in June)
- T&C attribution/white-labelling clauses (`db0fd93`)
- Arabic pages restored + metadata (`7037fbf`, Sep 1)

### September 2026 — autism v2 ships + content consolidation + systems
- **Autism page v2 shipped** (PR #152/#153, Sep 29):
  - skills realigned to parent intent + hero video (`848284a`)
  - real evidence figures + new report mockup (`8dd1c69`) — "Ship /who-we-help/autism"
  - game taglines emphasizing relevance (`6d0d0e5`), sources/links updated (`9086105`)
  - Arabic autism page + hreflang correctness (`b09cbb2`, `9beaca1`, `8e48196`)
  - partner logos: Majra, MBRIF, age fixed to 4–14, logos linked to real sources (`6fc6aba`, `5ebc52d`)
- **Content consolidation** (Sep 9): autism games cluster **11 pages → 3** (`4c406d3`), cognitive development cluster **9 pages → 1** (`980c774`)
- **WordPress migration** (PR #148): 8 Tier-A pages (`4e50a20`), top 9 pages + audit fixes (`dbd7b34`), gross-motor article + a post validator (`95c4040`)
- **Blog system v2** (PRs #150/#151): article hero redesign across 12 posts (`4f4d3aa`), key-takeaways stepper (`be38651`), popular-games sidebar (`e326444`), category pages with unique titles (`ec6e243`), citations accuracy pass (`a64c08e`), new ADHD task-initiation + sensory-integration articles (`4c3e0b4`)
- my commit `c4c2c20` (Sep 17): freemium-rollout branch merge
- **Performance batch**: Lighthouse fixes (`7039d93`), assets overhaul, ASD page final polish (`c21a114`)
- SEO/AI sitewide pass: og:image + FAQ schema, CTR metas, dedup titles (`0397971`)

### October 2026 — freemium, conversion funnel, pricing v2 (in pipeline)
- **Freemium rollout** (Oct 1): 14-day trial → freemium sitewide; shipped, reverted, re-shipped (`92f6abd` → `e3caf66` → `7aa2673`). Reason on record: **the trial wasn't converting**
- **Pricing FAQ → autism card component** (`992da33`), remaining freemium sections onto the autism design system (`33a7d25`), institutions page port + Arabic pricing rebuild + Pricing nav dropdown (`374724f`)
- Game pages SEO: meta descriptions, H1s, alt text, AR canonicals (`5905c49`); sitemap +15 pages (`0867193`); leads → HubSpot Forms API (`035d0a3`)
- my commit `3c428f8` (Oct 7): `wwh-landing.js` — shared functionality across landing pages (the landing-page system)
- Perf batches (PRs #155/#156): self-hosted fonts w/ preload (CLS fix), self-hosted Bootstrap/Swiper/AOS — no third-party CSS blocking
- **Talk-to-Us funnel** (PR #157, Oct 12): retired /book-a-demo, top-bar CTA → contact, role dropdown (parent/teacher/school) baked into the message, book-a-call → Microsoft Bookings (`7515d78`, `c041930`)
- VideoObject schema on webinar articles + sticky nav (`ca96876`, PR #158)
- **Pricing page v2** (branch `feat/pricing-page-v2`, 9 commits, 44 files, +5,736/−2,630 — **95% done as of Oct 13, shipping soon**):
  - comparison table grouped **Play / Progress / Support** with icon tiles, billing switch mirrored into the table, CTAs repeated in footer row (`b6a2fe1`)
  - **therapy cost calculator** replaces "Better Together": sessions + cost-per-session sliders → "A whole month of WonderTree costs less than one session" (`b6a2fe1`)
  - sections reordered **by intent**, uniform 72px rhythm from the autism design system (`888047f`)
  - yearly pricing default + label fixes (`142c6eb`), new hero SVG (`a77d38c`)
  - institutions page EN (441 lines) + AR (298 lines), Arabic pricing fully rebuilt

---

## The research behind the decisions

**Autism landing page.** The page had traffic but converted like a blog post. Rebuilt around: evidence figures from the actual product claims, a progress-report mockup (what a parent actually buys), skills sections reordered to match what parents search (not clinical taxonomy), and per-game "who it helps / skills developed" framing. Research inputs: Clarity behavior data, tawk.to conversations, competitor scans.

**Pricing (v2, in pipeline).** Inputs: occupational therapists using the product; customer stories from real users (internal authority, not invented personas); interviews with institutions-package buyers and new customers. The finding: visitors couldn't tell whether WonderTree offered individual or institution pricing at all — so many bought individual licenses because the purpose of the institution package (better reporting, multi-user, etc.) never got said out loud. Decision: follow the DataCamp page structure (with a ChatGPT-style plan framing we discussed as a team), default to yearly, group the comparison by value theme (Play/Progress/Support), and let the therapy-cost calculator do the selling.

**The 14-day trial → freemium.** The trial wasn't converting. We removed it as the site-wide entry story and moved to a free plan — messaging shipped sitewide Oct 1 (with one same-day revert), full pricing experience landing with pricing v2.

---

## Outcomes (measured, 28d vs prior 28d, Oct 2026)

| metric | before | after | delta |
|---|---|---|---|
| clicks | 6,912 | 7,655 | **+10.8%** |
| avg position | 11.7 | 8.5 | **+3 spots** |
| CTR | 2.25% | 2.70% | **+20% rel.** |
| impressions | 306,607 | 283,222 | −7.6% (intentional — see below) |

- Impressions fell on purpose: we stopped chasing impressions from low-intent blog pages and optimized for clicks/intent traffic — better clicks on the pages that convert.
- Clarity baseline: 14,270 sessions/mo, 7.59% dead-click sessions, 201 rage clicks — the behavioral baseline the landing-page work responds to.
- Still broken / next: `asd-level-2` guide ranks ~5 (14k imp/90d) at 0.11% CTR — ranked but invisible; title answers the wrong question.

---

## Full branch index (active since June)

| branch | PR | merged | what |
|---|---|---|---|
| `feat/autism-page-v2` | #152, #153 | Sep 29 | autism landing page v1→v2, Arabic version |
| `feat/pricing-page-v2` | pending | ~now | pricing v2 EN/AR, institutions, calculator |
| `fix/freemium-rollout` | — (direct) | Sep–Oct | trial→freemium sitewide |
| `feat/wordpress-migration` | #148 | Sep 10 | 17+ pages off WordPress |
| `feat/blog-categories` | #151 | Sep 22 | category pages |
| `feat/blog-batch` | #150 | Sep 22 | blog redesign rollout |
| `feat/arabic-blog-review` | #149 | Sep 14 | Arabic articles + motor-skills post |
| `feat/arabic-seo-v1` | #146 | Sep 1 | Arabic pages + metadata |
| `feat/tawk-to-migration` | #145 | Aug 20 | HubSpot → tawk.to |
| `fix/who-we-help` | #133 | Jun 17 | who-we-help + skills redesign |
| `hotfix/favicon-v2` | #138 | Jul 3 | favicon |
| `fix/small-fixes-oct` | #154 | Oct 5 | free-plan copy, autism CTR fixes, Arabic layout |
| `fix/batch-2-cls-perf` | #155 | Oct 9 | CLS + font preload |
| `fix/batch-3-blocking-css` | #156 | Oct 9 | self-host libs, no blocking CSS |
| `fix/talk-to-us` | #157 | Oct 12 | book-a-demo → Talk to Us funnel |
| `fix/video-schema` | #158 | Oct 12 | VideoObject schema, sticky nav |
| `feat/home-redesign` | — | WIP Jun 29 | homepage redesign (started, not shipped) |

---

## Status notes (Oct 13, 2026)

- All interpretations above confirmed by woosqa.
- Pricing v2 is ~95% complete and ships soon — when it merges, update: the TL;DR status, the October section, and the portfolio's pricing tab (flip "in pipeline" → shipped, add post-launch numbers).
- Homepage redesign (`feat/home-redesign`, WIP since Jun 29) remains started-but-not-shipped; the homepage PRD in the portfolio is positioned as a proposal, scope open to revision.
