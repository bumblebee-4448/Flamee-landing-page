# Interactive memories timeline

Red-thread refinement: timeline is now a 1.1px rounded SVG curve with a five-stop dusty rose/peach gradient; milestone knots are 2.7px centers on soft paper discs. The native range thumb is reduced to a 16px pearl with rose/peach shading and retains its 32px interaction rail and clear keyboard focus. Updated range geometry matches the smaller thumb. Settling time constant increased from 65ms to 135ms; release momentum is capped at .004 milestones/ms and projected 80ms, reducing fast jumps while direct dragging remains immediate. Fresh build and six interaction tests passed. Additional desktop/mobile captures reviewed under `red-thread-1440.png` and `red-thread-390.png`; no overflow. Normal-motion browser check confirmed intermediate progress before exact endpoint settling. Requested gradients intentionally override the taste house restriction for this component.

Latest user revision: fixed the badge's typography by scoping intro copy styles to `.memory-intro` (the old `.memory-heading p` rule overrode the reusable badge). Badge now matches feature badge computed type, padding and surface. Replaced subtitle with “Lưu ảnh và lời kể, xem lại theo từng cột mốc.” Year filters use the shared `.pill-control` liquid surface rather than the large segmented container. Removed `.memory-event` opacity reduction so every photo stays fully opaque. Removed the entire lower toolbar, arrows, selected-date label and footnote as requested; timeline dragging, range keyboard controls, year filters and dialogs remain. Updated the six browser tests for keyboard/range navigation instead of removed arrows: all six pass. Fresh build passed. At 1440, 390 and 320px, verified computed badge equality, every photo's opacity=1, removed footer, exact subtitle and no overflow; reviewed `.taste-skill/memories/revised-1440.png`.

Implemented the user-approved horizontal timeline after Tiny Mission at `#ky-niem`, using the existing common content frame. Six illustrative moments span 2024–2026. The paper/serif/photo concept is retained with staggered photos and a coral curve. A single progress state drives translation, selection, interpolated date and control position. Photo drag follows the pointer, then settles to a milestone; arrows, date buttons, native range keyboard controls and year filters navigate the same state.

Desktop shows three moments, tablet two, phone one with the next partially visible. On phones a full-width scrub rail below the photos makes all six moments easy to select; the short visible curve segment is not used as a cramped touch slider. Vertical touch gestures continue scrolling the page; horizontal gestures lock to the timeline. No wheel hijacking or new dependency was added.

Clicking a photo opens a Radix story dialog with its full image and prose. Progress is frozen and preserved, close restores the trigger focus without scrolling, and Lenis is unlocked. Reduced motion retains immediate navigation and all controls. Neighboring assets are preloaded. Three initially visible photos load eagerly.

## Assets and illustrative content

Six standalone photos generated with built-in image_gen using the selected fictional-couple mockup as style/character reference. Saved locally as WebP in `public/memories/`. Exact prompts: `docs/memories-photo-prompts.json`; output provenance: `public/memories/assets.json`. Dates, titles and stories live in `src/memories.ts` and are illustrative. The section and dialog visibly identify sample content. No real customer memories, backend storage or upload feature is claimed.

## Verification

- Fresh `npm run build`: passed TypeScript and Vite; existing large chunk warning remains.
- `npx playwright test tests/memories.spec.ts --workers=1`: six passed. Covers year selection, keyboard Home/End, mouse drag and no accidental dialog, range snapping and clamping, resize, phone vertical pan versus horizontal touch swipe, arrows, dialog focus return and neighboring-photo position preservation.
- Actual CDP touch events exposed implicit child pointer capture bubbling; guarded lost-capture handling now ignores descendant events. A second review confirmed the fix. Review also found opening a neighboring image moved progress; opening now freezes it instead. Regression tests pass for both.
- Supplemental browser checks at 1920, 1440, 1366, 768, 390 and 320px: route, year filters, image decoding and no horizontal overflow or JS page errors.
- Axe checks for the timeline and open story dialog at desktop/mobile: zero WCAG A/AA violations. Darkened small selection/footer text after the first contrast check.
- Normal-motion settling, preserved timeline progress, resumed page wheel scrolling after close and existing membership dialog were verified.
- Source taste lint for `MemoriesTimeline.tsx` and `memories.css`: 0 FAIL / 0 WARN.
- Full-page taste inspector: 10 FAIL / 9 WARN, including existing/user-requested pill, shadows, cream/orange palette, mobile main-hero wrap and fixed-header overlap elsewhere. No full-site taste pass claimed. Reviewed all ten final inspector screenshots and explicit desktop/mobile section/dialog captures. Inspector contact sheets captured some photos before decode; direct final captures explicitly await image decode and show all six valid local assets.
- Fresh independent code review: both concrete interaction bugs fixed; no further high-confidence correctness/accessibility issue found. Browser automation coverage is Chrome.

ROUND 1
Seen in one second: a paper photo journey with real dates on a coral curve.
Idea (one sentence): visitors can move through six small shared moments as a continuous story.
Live thing: direct photo drag, curve scrub, year filters, keyboard navigation and full-story dialog.
Layout words by section: hero=split-artwork / connection=copy-device / mood=device-copy / nudge=copy-device / mission=device-copy / memories=staggered-photo-timeline / membership=paired-plans / FAQ=list / closing=statement.
Scores: design 7.5 · usability 8 · creativity 7.5 · content 8 → overall 6.0 after whole-page cap.
Caps applied: remaining full-page taste findings outside this implementation and established requested treatments.
Top three problems and fixes:
1. Phone touch swipe cancelled on implicit capture transfer; fixed bubbling capture-loss guard and verified real touch gestures.
2. Opening a neighboring story moved the timeline; removed navigation from opening and added preservation regression test.
3. Phone curve's visible span made scrubbing too small; provided a full-width mobile range rail, keeping curve/thumb navigation on desktop.

Ruling: native range plus one requestAnimationFrame settle loop was used instead of adding a carousel/physics dependency. All required drag, snap, resize and keyboard interactions are covered by browser checks.
