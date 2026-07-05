# Victor Ng — Portfolio · Project Context

## Who I Am
Senior Product Designer, London UK. Work at Meta (Ads Monetization, AI, VR). Also a potter — founder of Victor Ng Ceramics, Season 8 Great Pottery Throwdown.

## Stack
Pure HTML + CSS. No frameworks, no build tools, no JS libraries. One file per page.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Homepage — all sections live here |
| `project-playable-ads.html` | Case study: Meta Playable Ads |
| `project-ai-workflows.html` | Case study: AI-Native Design Workflows |
| `project-horizon-vr.html` | Case study: Horizon VR Work Events (not yet built) |
| ~~`project-audio-articles.html`~~ | Removed — no longer in portfolio |
| `_dev/experiments/wrapped-header.html` | Text-free recreation of the **Spotify Wrapped 2023 newsroom header animation** (for Victor's Figma presentation deck, not the portfolio site). Canvas, 1920×1080; every frame is a pure function of a 4s loop clock (the source `Header-Desktop-1920_5mbit.mp4` loops its 3.5s→7.5s segment; palette + geometry pixel-sampled from it). Elements: cyclic thermal gradient plate w/ pixel-stair corner (top right), concentric purple/red bloom (static outer silhouette, rings spawn at the core and flow outward, hue cycles purple↔red per loop, pixel-stair cut on its upper-left edge), red gradient egg, two asymmetric rainbow "thermal tube" squiggles (46 layered offset strokes, traveling wave), two boiling lime pixel scribbles (24 stepped boil frames/loop). Seamless loop verified pixel-wise (single 1px AA delta at the seam). `?t=<seconds>` freezes a frame; `?export=1` POSTs 120 PNGs to a localhost:8787 collector for ffmpeg assembly. **Ready-made exports live next to it: `wrapped-header.mp4` (1.6MB, 1080p30) and `wrapped-header.gif` (9.9MB, 960w), both perfect 4s loops for dropping into Figma.** Each element is ALSO exported as an individual transparent-PNG sticker in `figma-spotify/stickers/` (11 files, 2x, alpha-autocropped via scratchpad `wrapped-stickers.html` + `frame_server.py`): squiggle-01/02 (both tubes), scribble-01..04 (2 boil variants each), bloom-01/02 (purple-top / red-top), plate-01/02 (2 hue phases), egg-01. Bloom stickers omit the composition's bg-colored staircase erase (it would show as a purple block on transparency). **A second batch recreates elements from the Wrapped social/press graphics** (Victor's screenshot; same exporter, new parametric draws): vortex-01 (receding yellow/orange ellipse fan w/ periwinkle rims), vortex-02 (blurred glow variant), glass-01 (transparent glass worm: edges-only rim via destination-out hollowing + chromatic glint dashes; faint shadow — looks heavy on black previews, correct on light decks), pixel-loop-01 (loopy periwinkle scrawl), bubble-01/02 (glass bubbles w/ inner dome), splat-01 (spiky green-core/purple starburst), tube-mint-01 (black/white/mint banded 'm' tube), flower-01 (green pixel daisy outline). |
| `_dev/experiments/ai-workflows-terminal.mp4` / `.gif` | **Video/GIF captures of the live hero terminal** from `project-ai-workflows.html` (the "Help me streamline my design workflow 🙏" typewriter), for Victor's Figma presentation deck. Tight-cropped to just the window (no page background), prompt line swapped to `victor@meta ~ %` **in the capture only** (live page still says victor@portfolio), shadow off. **GIF (48KB) has a true transparent background** (drop on any slide color; needed gifsicle -O3 to delta-encode, else 7.7MB); **MP4 (103KB) is on black** (H.264 can't alpha) for dark slides. 850×592 @2x, 25fps, one full 10.4s cycle (type → 4 responses reveal → ~6s hold → clear), loops seamlessly. Captured from the real page DOM (exact fonts/styles) via headless Chrome + CDP **virtual time** stepping (scratchpad `capture_terminal.py`): kill page timers, isolate `.hero-term`, re-drive the same typewriter logic under virtual time (HOLD 6000→6060ms + blink 1050→1040ms so the cycle divides into exactly 260 frames / 10 blinks), screenshot per 40ms step, ffmpeg + gifsicle assemble. |
| `_dev/experiments/timeline.html` | Standalone **horizontal** "Timeline of my journey" component matching Victor's reference screenshot. 6 nodes (Repsol→SAP→Accenture→IBM→Facebook AI→Meta) + dashed "Your company" CTA. Logos static (from `assets/images/home/timeline logo/`), "Before design" bracket over the first 3, "2018" + "I retrained…" arrow annotation (desktop only). **All DM Sans — serif dropped (clashed with the tech brand).** Descriptions **hidden by default, revealed on hover** via a layered animation (left→right clip-wipe + blur-clear + a drawing accent rule); reveal is absolutely positioned so hovering causes **no layout reflow** (track reserves bottom space). **Choreographed entrance**: line draws across (scaleX), dots pop, nodes blur-rise with `:nth-of-type` stagger, triggered by IntersectionObserver (`.is-in`/`.is-drawn`) with a 1.3s safety-net fallback. Touch devices show descriptions in-flow (no hover). Horizontal-scroll on mobile. Verified via browser preview (incl. no-reflow check). Not yet integrated into index.html. |

## Asset Paths
```
assets/
  images/
    projects/
      playable-ads/       ← hero.jpg, process-*.jpg, outcome-*.jpg
      ai-workflows/
      horizon-vr/
      audio-articles/
    ceramics/             ← form-1.jpg, form-2.jpg, etc.
    shared/               ← avatar, og-image, favicon
  videos/
    projects/
      playable-ads/       ← hero.mp4, demo.mp4
      ai-workflows/
      horizon-vr/
      audio-articles/
  fonts/                  ← self-hosted fonts if needed
_inspo/
  references/             ← screenshots of portfolio sites I like
  moodboard/              ← visual direction, color, mood
  typography/             ← font pairing tests
  color/                  ← palette explorations
_dev/
  snippets/               ← reusable CSS/HTML blocks
  experiments/            ← throwaway test pages
```

## Design Tokens (index.html :root)
```css
--ink: #1a1814
--ink-secondary: #5c574f
--ink-muted: #8b8780
--ink-faint: #d8d4cc
--surface: #ffffff
--surface-raised: #f7f5f2
--surface-card: #f5f3ef
--surface-card-hover: #efece6
--border: rgba(0,0,0,0.08)
--border-hover: rgba(0,0,0,0.15)
--accent-craft: #2c4a3e
--accent-forest: #2d6a4f
--accent-blue: #2f6fd6
--sans: 'DM Sans', system-ui, sans-serif
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
--transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)
```
Theme: **Light premium. White surface, warm dark ink, gold/amber accents.**

## Key Classes (index.html)
- `.page-wrapper` — max-width 1280px, 48px horizontal padding
- `.project-card` — 16/9 aspect ratio, single column vertical stack, absolute positioned hero + scrim + inner overlay
- `.project-card__hero` — background gradient layer (swap for real image)
- `.ceramics__media` — 4/5 aspect ratio portrait slots
- `.fade-up` / `.fade-left` / `.fade-right` / `.fade-scale` + `.stagger-1..6` — scroll-triggered entrance animations (opacity + transform + blur clearing to neutral via IntersectionObserver adding `.is-visible`). Honors `prefers-reduced-motion`.
- `.floating-nav` — fixed bottom pill nav
- `.custom-cursor` — green dot cursor, expands + shows arrow on click
- `.hero__role` — each hoverable word in the hero (data-role: product-designer, potter, maker)

## Case Study Template (project-playable-ads.html)
Pattern to reuse for all 4 projects:
- `.top-nav` — fixed back link
- `.cs-hero` — title + tldr + `.metadata-matrix` (role/timeline/platform/team)
- `.split-section` — sticky `.sticky-sidebar` (label + h2) + `.content-col`
- `.media-container` — aspect-ratio media slots (16/9 or 16/10)
- `.metrics-grid` — 3-col impact numbers
- `.callout` — gold left-border quote block
- `.next-project` — footer link to next case study

## Sections (index.html)
1. `.site-header` — 3-col: avatar | name+role+location | connect links
2. `.hero` — centered H1 with `.hero__sub` containing 3x `.hero__role` spans + `.hero__body`
3. `.projects` — single-col `.project-grid` with 3 `.project-card` links (audio articles removed)
4. `.narrative` — 2 paragraphs of about text
5. `.ceramics` — single card linking to victorngceramics.com
6. `.connect` — 2-col grid + `.availability` badge with pulsing dot
7. `.floating-nav` — fixed pill: Work | About | Craft | Connect | Ceramics↗

## Decisions Made
| What | Decision |
|------|----------|
| Theme | **Switched to light premium** — white (`#ffffff`) surface, warm near-black ink (`#1a1814`), gold/amber accent (`#b8860b`, darkened from `#ffe875` for contrast on white), blue accent deepened to `#2f6fd6`. History: started dark red-black (`#230000`) → reverted to pure black (`#000000`) → an earlier light-theme rebuild was rejected once → now switched to light again per Victor's latest direction. Supporting tweaks made for the light surface: `.ceramics__arrow` bg flipped to `rgba(0,0,0,0.03)`, `.ceramics__card.is-expanded .ceramics__title` color changed from hardcoded `#fff` to `var(--ink)`, scroll-vase ghost-outline filter flipped from `brightness(3)` (white wash) to `brightness(0)` (dark silhouette) so it reads against white. |
| Ceramics polaroid borders | Sharpened corners — `.ceramics__slide` and `.ceramics__slide-img` `border-radius` set to `0` (was `12px`/`8px`). Slide border color also switched from `rgba(255,255,255,0.1)` to `rgba(0,0,0,0.1)` to stay visible against the light surface. |
| Hero text order | Product Designer, Potter, Maker |
| Hero interactivity | Each `.hero__role` word will be hoverable with animations — not yet built, hooks are in place via `data-role` attribute |
| Lag/lerp | Lerp was tried on the cursor and removed — Victor prefers native 1:1 tracking speed |
| Folder structure | `/assets`, `/_inspo`, `/_dev` all created. See asset paths above. |
| Case study pages | `project-playable-ads.html` and `project-ai-workflows.html` are built. `horizon-vr` is linked but not yet created. Audio articles removed. |
| Project layout | Switched from 2-col grid to single-col vertical stack (16/9 aspect ratio) after dropping to 3 projects. |
| Scroll vase | Real pot image (`assets/images/ceramics/scrolling pot asset.png`) fixed to left edge, halved. Ghost outline at top, fills with colour as user scrolls via `clip-path: inset()`. Hidden on mobile. |
| Scroll reveal richness | Old `.fade-up` (just opacity + 30px lift) felt flat. Enriched into a small system: `.fade-up` (48px lift + slight scale + 8px blur), `.fade-left`/`.fade-right` (±56px slide + blur), `.fade-scale` (scale 0.9 + 10px blur) — all clear to neutral + `blur(0)` on `.is-visible` over ~1.1s `--ease-out-expo`. Stagger extended to `.stagger-1..6`. Applied for variety: 3 stacked project cards alternate `fade-left`/`fade-right`/`fade-left`; ceramics card + connect grid use `fade-scale`; labels/hero/narrative keep `fade-up`. Observer selector widened to all four classes; `prefers-reduced-motion` disables it all. (Skipped project-hero parallax — would fight the existing hover `transform: scale` and the card's `overflow: hidden`.) |
| Ceramics carousel | Card expands on hover into arc carousel (6 polaroid slides). Arrow nav + dots. Metrics/chips removed from card. |
| Ceramics carousel collapse behavior | Removed collapse-on-`mouseleave` AND collapse-on-scroll entirely — both felt broken. Expanding the carousel shifts page layout (~320px), which nudges `window.scrollY` via scroll anchoring; the scroll listener kept misreading that self-induced jitter as "user scrolled away" and minimized the card mid-interaction (a 900ms grace-window attempt still felt jumpy). The card now simply stays expanded once opened on hover — no auto-collapse. `collapse()` remains defined but unused, in case a deliberate close trigger (e.g. click-away or close button) is wanted later. |
| Floating nav size | Sized up from the `0.8125rem`/`8px 18px` baseline, then trimmed ~20% to land at: link `font-size: 0.98rem`, link padding `10px 22px`, pill padding `10px`, gap `7px`, external-link SVG `14px`. Mobile breakpoint proportional (`font-size: 0.9rem`, padding `9px 17px`, pill padding `7px`). |
| Floating nav theme | Flipped from dark glass (`rgba(20,20,18,0.75)`) to light glass for the white theme: `background: rgba(255,255,255,0.7)` + `box-shadow: 0 8px 30px rgba(0,0,0,0.08)` for lift; hover bg `rgba(255,255,255,0.06)` → `rgba(0,0,0,0.05)`. Links already use `--ink-secondary`/`--ink` (dark text), so they read correctly on the light pill. |
| Ceramics carousel spacing | Polaroid slides are taller than old plain slides, so `.ceramics__carousel` collapsed height raised `220px → 300px` and `margin-top: 28px` added to stop slides overlapping `.ceramics__subtitle` text in the resting state. |
| Ceramics carousel image clicks | Side (non-active) slides are clickable and bring themselves to focus via `goTo(i)`. Clicking the active/centered slide does nothing — external-site click-through was removed (felt distracting); `.ceramics__arrow` corner link remains the one intentional path to victorngceramics.com. |
| Ceramics carousel sizing & motion | Slides double in size on hover/expand (`200px → 400px`), arc spread widened (`translateX` step `130px → 230px`), carousel expanded height raised `380px → 620px` to fit. Expand transitions on card/carousel/slides lengthened `0.5–0.6s → 0.7s` (`--ease-out-expo`) for a more natural, less abrupt expand. |
| Ceramics subtitle copy | Stats of record (per CV): 50K+ followers / 50M+ views / 500+ subscriber newsletter, **sold 1,000+ pots**, cast on Season 8 of The Great Pottery Throwdown; runs brand, sales, marketing, content creation and website solo. NOTE: the live `.ceramics__subtitle` in index.html has since been rewritten to the "solo studio practice" copy and no longer prints these stats — keep this row as the source of truth for the numbers themselves. |
| Ceramics carousel drag | Slides are now draggable/swipeable (mouse + touch via `pointer`-style handlers on `#carousel-track`). Drag past a 50px threshold advances/retreats one slide via `goTo()`; smaller drags snap back via `layoutArc()`. Live drag feedback nudges the active slide's `translateX`. Cursor shows `grab`/`grabbing`. A `wasDragging` flag suppresses the slide click-to-focus handler right after a drag so swipes don't double-trigger navigation. |
| Ceramics polaroids | Cream `#f5f3ef` frame, 4/5 image slot, compact caption (title + detail). Placeholder names — update when real photos are added. |
| Custom cursor | Green dot (`#34d399`) at native speed. Expands to 22px and shows an arrow icon on mousedown. Disabled on touch devices. |
| Hero interactivity | Each `.hero__role` word will be hoverable with animations — not yet built, hooks are in place via `data-role` attribute |
| Case study scroll reveal | `project-playable-ads.html`: hero text pins via `position: sticky`, media panel scrolls over it. Text fades/drifts/blurs via JS scroll listener. Disabled on mobile. |
| AI Workflows Case Study | Built using the Playables template. Added an ROI/Impact metrics grid at the top. Created a custom CSS `.code-window` component to display `.md` prompts as sleek, syntax-highlighted code snippets. Built a custom CSS/HTML flexbox Architecture Diagram for the Pipeline section to avoid relying solely on images. **Deepened from the two source docs (`Making the skill.pdf` + `output of agent marcus`):** (1) added a **provenance** paragraph in §03 — personas + rubric distilled from internal PQS axes / UPB playbook / app-promotion pattern docs (this is the core AI-fluency story Victor wanted foregrounded); (2) added the **5-dimension UPB breakdown** (Success/Efficiency/Errors/Comprehension/Predictability, 0–20 bars) in §04 so the "58" is justified; (3) added a **cross-platform consistency table** (iOS vs Android feature parity) + "UX Consistency 2/5" callout in §04; (4) added the **modular file-tree** code-window in §06 (SKILL.md → agent.md → personas/flows → dogfood-connect.sh, noting CDP browser automation + forkability); (5) fixed metric label "18 Critical Issues" → "18 Usability Issues Surfaced" (4 blocking + 14 fast-follow, not all critical). Verified in preview via DOM geometry (screenshot tool returns blank on deep programmatic scrolls of this sticky/full-bleed page — known quirk, not a layout bug). **Then reworked further per Victor:** (a) **§04 Outcomes rebuilt entirely** — Victor disliked the old version. New flow: lead → **session-summary strip** (persona/flow/platforms/duration/date) → **scoreboard** (18 issues / 4 launch-blocking / 58 UPB / 2-of-5 consistency / 43 screenshots) → **horizontal UPB scorecard** (5 dimension bars with a 14/20 target marker) → **findings split** (2 persona-voice issue cards + `issue_01.yaml` code-window, kept) → cross-platform table + callout → **"From Finding to Filed" impact close** (gradient band: 18 triage-ready tasks, PQS-tagged/rock-sized/screenshot-attached, auto-filed to GSD + session-logged — the "so what", written honestly, no fabricated downstream fixes). (b) **New synthesis diagram in §03** — 5 internal-knowledge inputs (Evaluation Criteria, PQS Quality Axes, Product Quality Process, UPB Measurements, Design-System Patterns) → converging gold SVG → dark **"The Dogfooding Agent"** node → output chip; visualizes the "personas built from internal docs/frameworks" provenance Victor wanted mapped out. §04 swap was done via a marker-based Python splice (between the `04. OUTCOMES` and `05. PIPELINE` comments) to dodge whitespace mismatches. **Then jargon-simplified** (PQS/GSD/UPB/SKAN/rock-size glossed on first use or replaced with plain terms in all prose + UI labels; code-window YAML/config left authentic). **Then expanded from a higher-context draft Victor generated** (4 new pieces + 2 new sections): (1) a **Role** block (solo, end-to-end; design + AI-systems + engineering intersection) after §01; (2) **"The same screen, two verdicts"** Marcus-vs-Priya contrast table in §03 — Priya column explicitly labelled *projected/illustrative* (her run hasn't been executed), proves the persona thesis (Advantage+ = retention risk AND aid); (3) **AI-vs-manual comparison table** in §04 ("18 vs 3–5 issues/session") with an honesty footnote (n=1, baselines = prior experience not a controlled study); (4) **UPB accuracy fix** — the 58 is iOS-only; Android scored 48, combined 53 (now stated); (5) new **§07 The Hard Parts** — 4 "tendency → fix" cards (AI "add-a-tooltip" bias check, keeping-in-character guardrails, CDP-over-SSH-tunnel, React swallowing keystrokes → `Input.insertText`); (6) new **§08 Reflection** — depth-vs-length tradeoff, the full Detect→Classify→File→Fix→Verify arc, reusable-pattern claim, and an **Honest limitations** block. NOTE: the two engineering specifics (`Input.insertText`, CDP-over-SSH) came from Victor's draft, not the 2 source PDFs — flagged to him to confirm accuracy. **Then a content-design / de-AI pass:** removed ALL visible em-dashes (37 prose/UI instances replaced via a checked Python script + 1 missed paragraph fixed by hand; ~22 remain only in invisible CSS/JS comments and the alt-text builder). Also rewrote the AI-generated-sounding tells: "didn't end in X, it ended in Y" → "The session produced…"; "This is the payoff of…" → "Modeling personas as cognitive states… is what makes this work"; "Anyone can prompt an LLM" → "Prompting an LLM is the easy part"; "wasn't Figma pixels, it was…" → "Most of this work lived in systems design…"; "output isn't a wall of text, it's structured data" → "The output is structured data, not a wall of text"; normalized to American spelling (behavior/modeling) for consistency. **Victor will do his own read-through after.** **Then a scan-test tightening pass:** the old §05 "The Pipeline" section (Detect→Classify→File→Fix flexbox diagram) was deleted — it repeated the §04 "From Finding to Filed" close and the §08 arc, making the Detect→Classify→File story appear 3× and fatiguing skimmers. Its 4 real artifact screenshots (report / classified issues / filed task / tracking sheet) were preserved and folded into §04 under a new "The artifacts it generates" subsection. Sections renumbered 06→05, 07→06, 08→07 (now 02–07, sequential). §07 Reflection's "bigger arc" paragraph trimmed to one sentence (dropped the spelled-out "Evaluation → task creation → fix proposal → fix verification" repeat). §06 The Hard Parts kept fully intact (highest-differentiation section). **Hero is now an animated terminal** (replaced the flat `--surface-card` placeholder): a mini macOS-style window (`.hero-term` + shared `.pterm__`/`.pt-` classes) that types `Help me streamline my design workflow 🙏` then streams 4 response lines, holds 6s, loops; reduced-motion shows the final state. Sits above the H1, left-aligned, on the cream hero. **Same terminal component also lives on the homepage** inside the AI Workflows project card (`index.html` `.project-card__terminal`, vertically centered at `top:44%`, starts on scroll-into-view, responses hidden < 768px since the 16:9 card is too short). Standalone prototype kept at `_dev/experiments/hero-terminal.html` (has a 2nd `/run --persona "Enterprise Marcus"` variant if the run-log framing is ever preferred over the "Help me streamline" line). |

## My Contact
- Email: ngvictor11@gmail.com
- LinkedIn: linkedin.com/in/victorng11
- Ceramics: victorngceramics.com

## How to Work With Me
- **Read CLAUDE.md first** — don't re-read files unless asked
- **Paste only the section being edited** — not the whole file
- **Never rewrite the full file** unless explicitly asked
- **Reference tokens by name** from the table above, don't re-derive by reading the file
- **Asset naming** — `[project-slug]-[descriptor]-[sequence].ext` e.g. `playable-ads-hero-01.jpg`
- **No frameworks** — pure HTML + CSS + vanilla JS only
- **No placeholders** — if writing code, write it complete
