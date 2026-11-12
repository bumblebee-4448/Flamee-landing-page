# Continuous paper background — 2026-11-12

Request: carry the existing warm paper material through the landing page.

Implementation: reuse the project's generated `autumn-ivory-paper.png` as a decorative fixed viewport-sized layer. Keep the existing maple hero above it. Remove the full-width solid fill from the mood strip. Keep content-panel fills, typography, layout, navigation and interactions. The image is served as responsive WebP, without a new dependency or external asset.

Direction: retain the existing design, seed 320732308; no draw or redraw for this material-only change. Idea: Flamee's memory journal continues onto a paper surface throughout the page. Existing live interactions: mood selection, calendar, membership billing and previews. No new sample content or image credits.

Validation:

- `npm run build`: passed (TypeScript and production Vite build). Existing large JavaScript chunk warning remains.
- Production browser checks passed at 1440, 768 and 390px, with reduced motion: paper image loads, its layer covers the viewport at memories, connection, membership, FAQ and footer, no horizontal overflow, no JavaScript page errors.
- At all three widths, calendar selection and preview, mood selection, annual pricing, membership dialog, FAQ and navigation passed. Mobile menu opens and closes after navigation.
- Taste inspection: before 7 FAIL / 11 WARN; after 7 FAIL / 10 WARN. The dev-server warning disappears on production. The same pre-existing failures remain: eyebrow, gradient, shadow, button-fx, outlined-box, mobile headline-lines and covered-text from the fixed header. This background change introduces no new failure category. The entire page does not pass the taste gate; its unrelated design was kept within the requested scope.
- Source taste lint: 25 FAIL / 10 WARN from existing gradients, shadows, eyebrows, outlines and glass. Added paper-layer rules contain none of these patterns.
- Opened all eight before screenshots and all eight final screenshots. Reports and contact sheets: `.taste-skill/paper-before/` and `.taste-skill/paper-after/`.

ROUND 1
Seen in one second: an open memory journal on warm autumn paper.
Idea (one sentence): the paper material around Flamee's journal continues behind the rest of its story.
Live thing: existing mood and calendar selection, membership toggle and previews.
Layout words by section: hero=split / memories=paired-panels / moods=marquee / connection=diagram / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7 · usability 7 · creativity 6 · content 7 → overall 6.0 after cap.
Caps applied: overall capped at 6.0 because existing inspector failures remain.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. `mobile-fold.jpg`: the existing main headline occupies three lines. A future typography change can shorten it or adjust its measure; outside the background request.
2. `desktop-page-01.jpg`: stone-filled memory and Tiny Mission panels contrast more coolly against warm paper. A future panel-palette change can harmonize them; existing card fills remain.
3. `mobile-page-01.jpg`: the existing fixed glass header overlaps content during scrolling. A future header behavior change can address this; interactive navigation remains functional.

Background result: continuous warm paper reaches the footer at every checked width; hero leaves remain restricted to the opening scene, and cards remain readable.

## Follow-up: clearer paper fibres

User requested slightly more visible paper. Added a repeating code-native SVG fibre layer at 16% opacity with multiply blending, plus `contrast(1.08) saturate(.95)` on the existing paper image. Fibres retain their 256px tile scale at every viewport. The final noise frequencies are `0.22 0.58`, refined from an initial more directional texture to avoid visible cloth-like streaks. No raster assets were edited, no external images were added, and the existing direction is retained without redraw.

Fresh production build passed. Browser checks passed at 1440, 768 and 390px: final SVG embedded in built CSS, paper covers viewport at the footer, no horizontal overflow or page errors, mood controls remain clickable. Final inspector remains at the same 7 FAIL / 10 WARN; source lint remains at the same 25 FAIL / 10 WARN. These existing failures are listed above. Opened all eight final inspector screenshots and the desktop/mobile full-size detail screenshots in `.taste-skill/paper-clearer-final/`.

ROUND 2
Seen in one second: a warm memory journal, with visible fine paper through the lower page.
Idea (one sentence): Flamee's journal material continues as a finely textured paper backdrop.
Live thing: existing mood and calendar selectors, membership controls and previews.
Layout words by section: hero=split / memories=paired-panels / moods=marquee / connection=diagram / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7 · usability 7 · creativity 6 · content 7 → overall 6.0 after cap.
Caps applied: pre-existing inspector failures cap overall at 6.0.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. `mobile-fold.jpg`: existing three-line main headline; future copy/typography adjustment.
2. `desktop-page-01.jpg`: existing cool stone panel fills against warm paper; future panel palette adjustment.
3. `mobile-page-01.jpg`: existing header overlap while scrolling; future header behavior adjustment.

The requested material change is visible at normal scale, while the small grain remains behind all text and interactive controls.
