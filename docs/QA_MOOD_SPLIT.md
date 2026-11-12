# Mood feature split redesign — 2026-11-12

Current shared-scale correction: pill nav, hero and every subsequent section now derive from the same `--frame-width`, calculated centrally from `--page-fluid-width`, `--page-max-width` and `--page-scale`. The desktop scale is .86; tablet/mobile restore scale 1 with shared responsive gutters. Removed the mood-only width multiplier, duplicate header width/padding declarations and the separate FAQ width cap. The marquee is now inside the shared content frame. Hero display type follows the same scale to prevent collisions after the frame narrows. Fresh build and browser checks passed at 320, 390, 768, 1024, 1280, 1366, 1440 and 1920px: nav/hero outer widths agree; every section, including FAQ, marquee and footer, aligns to the nav's inner bounds; no horizontal overflow; desktop mood section still fits the viewport. Desktop captures reviewed: `shared-final-hero.png` and `shared-final-mood.png`. Earlier entries describe superseded sizing experiments.

Newest alignment request: shared section width now follows the actual content inside the pill nav, subtracting both its horizontal padding and 1px border. Hero and desktop mood section retain the outer nav frame with matching internal insets. Other sections and the mobile mood section use the inner width directly; FAQ keeps its readable maximum. This supersedes the shared 1600px cap described in earlier entries. The removed “Phóng to giao diện” button and its unused dialog, callback prop and styles are also gone; membership dialogs still work. Final whole-page taste inspection remains at 9 FAIL / 9 WARN; all eight final inspector images were reviewed. Existing requested glass/pill/raised treatments and previously documented page issues remain; the width change is not represented as a full-site taste pass.

Fresh build passed. Browser checks at 1920×1080, 1440×900, 1366×768, 1280×720, 768×1024, 390×844 and 320×844 confirmed the left/right edges of the hero copy, mood layout, marquee heading, connection, membership, closing and footer match the nav's internal bounds. Desktop section still fits under the nav in one viewport, the mood title remains two lines, the mood selector works and no horizontal overflow or JavaScript errors were detected. Reviewed desktop/mobile captures in `.taste-skill/nav-content-alignment/`.

Current follow-up supersedes the wide-frame sizing below: user requested fitting the mood section to the new pill navigation width and within one desktop screen. At widths of 768px and above, this section now uses `--frame-width` and `--frame-inset`, matching both the navigation's outer bounds and its content inset. Other sections retain their shared 1600px cap. Phone width is limited by available viewport height and capped at 342px, with room reserved for the header, section padding and preview caption. Heading size, body size and internal spacing were reduced; a short-desktop treatment applies at heights up to 800px. Body copy stays at 16px, with no clipped content, fixed-height clipping or scale transforms. Mobile remains stacked.

Fresh production build passed. Real-browser checks via the actual hero anchor confirmed identical nav/section widths and complete section visibility below the header at 1920×1080, 1440×900, 1366×768, 1280×720, 1024×768 and 768×1024. At 1280×720 the section ends at 695px; at 1366×768 it ends at 716px. All three mood states continue to fit at the short desktop sizes. Further checks passed at 320×844 and 390×844: mobile order, no overflow or JavaScript errors, functioning tabs, zoom, Escape dismissal and focus return. Captures are under `.taste-skill/mood-fit/`; all seven final whole-page inspector images were reviewed. Full-site taste findings remain 9 FAIL / 9 WARN from requested treatments and previously documented issues; no clean whole-site gate is claimed.

ROUND 1 — viewport-fit follow-up
Seen in one second: the mood story and full app screen share one desktop viewport beneath the navigation.
Idea (one sentence): an actual couple mood screen supports the promise of listening on difficult days.
Live thing: mood selector and image zoom.
Layout words by section: hero=split-artwork / mood=viewport-fit-split / emotions=marquee / connection=diagram / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 6.5 · content 8 → overall 6.0 after whole-page cap.
Caps applied: existing full-page taste findings.
Top three problems (most visible first), each with screenshot and fix:
1. Previous `wide-content-final/section-1536.png`: phone and typography dominated the screen. Fixed with viewport-height phone sizing and a reduced type scale.
2. Initial 1280×720 measurement: the section extended 52px below the available viewport. Fixed with short-desktop spacing; final screenshot `mood-fit/1280x720.png` shows all content.
3. `mood-fit/inspect/mobile-fold.jpg`: original main hero heading still spans three lines. This separate hero issue remains outside the mood-fit request.

Latest follow-up: reduced excessive page margins by increasing the shared `.shell` cap from 1200px to 1600px; the navigation and top hero retain their separate frame. Root cause was the old shared content cap, not a scroll-linked resize. At 1536px viewport width, content now measures 1472px with equal 32px side margins (previously 1200px / 168px). At 1920px it measures 1600px with 160px margins (previously 1200px / 360px). The iPhone scales with viewport width up to 432px, and desktop heading/body sizes scale to balance the wider composition. Tablet/mobile phone sizing and stacked order remain. The mood title also scales down on 320px phones to retain two lines. FAQ retains its separate 820px readable maximum.

Fresh production build passed. Final browser checks passed at 320, 390, 768, 1440, 1536 and 1920px: expected frame and device sizes, symmetric margins, two-line mood heading, no horizontal overflow or JavaScript errors, functioning mood selector, preview/Escape dismissal and annual pricing. Reviewed all seven final inspector screenshots plus full-size 1536/1920px and 320px captures under `.taste-skill/wide-content-final/`. Whole-page inspector reports 9 FAIL / 9 WARN, including the explicitly user-requested glass/pill/shadow treatments and prior unrelated page issues; this is not a clean whole-page taste gate.

ROUND 3
Seen in one second: large mood headline on the left, enlarged actual app screen on the right.
Idea (one sentence): Flamee's real mood screen provides proof beside the invitation to share small feelings.
Live thing: mood selector and zoom dialog.
Layout words by section: hero=split-artwork / mood=wide-split-device / emotions=marquee / connection=diagram / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 6.5 · content 8 → overall 6.0 after whole-page cap.
Caps applied: remaining whole-page inspector findings, including requested decorative treatments.
Top three problems (most visible first), each with screenshot and fix:
1. Initial wide-section captures: the old 326px phone felt undersized in the expanded frame; fixed with viewport-responsive width capped at 432px.
2. 320px browser check: the mood heading wrapped to three lines; fixed with a mobile `clamp()` and verified at two lines.
3. `mobile-page-01.jpg`: the existing floating header can overlap page content while scrolling; a separate header behavior change remains outside this request.

Follow-up: user requested reversing the desktop columns. The final order is content left, iPhone right, implemented by reordering the JSX so reading/tab order follows the desktop layout. Mobile retains title → introduction → phone → details → interaction. Fresh production build passed. Browser checks at 1440, 768 and 390px confirmed the updated positions, preserved mobile order, no horizontal overflow and working zoom/Escape dismissal. Reviewed `swapped-1440.png` and `swapped-390.png` in `.taste-skill/mood-split-final/`. Earlier left-phone references below describe the initial redesign before this follow-up.

The user requested replacing the paired calendar/emotion cards with a split hero: a real iPhone component displaying the supplied Mood check-in screenshot on one side, with descriptive copy on the other.

## Implementation

- `src/MoodFeature.tsx` replaces the previous Features block. Desktop/tablet use iPhone left and copy right; mobile uses title, short introduction, iPhone, details, then mood interaction.
- Reuses the local Magic UI `Iphone` and the exact user-supplied `public/mobile-image/mood checkin.jpg`. The screenshot is not altered or replaced by generated artwork. The device retains its original SVG geometry and theme variants.
- The copy describes weekly emotions and short notes. A visible note identifies the feature as a preview with saving/sharing still being completed. No claim is made that Smart Nudge is available.
- Retains an accessible three-state mascot demo through Radix Tabs. The iPhone image remains the actual screenshot, while the demo changes its companion mascot and sentence.
- Adds a Radix zoom dialog with image description, keyboard dismissal, focus return and the existing Lenis scroll-lock callback.
- Adds optional `imageAlt` and lazy decoding/loading to the shared iPhone component, with decorative frame SVG hidden from assistive technology.
- Navigation now says “Cảm xúc” and targets `#cam-xuc`. The previous `#ky-niem` anchor remains as a compatibility target. Closing and hero actions target the redesigned section.
- Removed the replaced calendar component and its unused styles/imports. No dependencies were installed. Other page sections retain their behavior.

Art direction: user-specified split composition within the existing paper/Flamee palette and type system. No random draw or redraw for this single-section change; retained page direction seed 320732308.

Idea: the couple's actual Mood screen becomes the visual proof beside the emotional promise “Cả những ngày khó nói.” Live thing: mood selector and screenshot zoom.

## Verification

- Production `npm run build`: passed TypeScript and Vite. Existing large chunk warning remains.
- Taste source lint on `MoodFeature.tsx` and `iphone.tsx`: 0 FAIL / 0 WARN.
- Production browser checks: 1920, 1440, 768, 390 and 320px. Supplied image loads and decodes, no horizontal overflow or JavaScript page errors, correct desktop split and mobile reading order, working hero anchor, all internal anchor targets resolve.
- Verified keyboard mood selection with arrow keys, selected panel text, screenshot zoom, Escape dismissal and focus return. Annual pricing still updates correctly.
- Normal-motion desktop: title and phone reveal correctly. Reduced-motion mode verified at all five widths.
- Axe WCAG 2 A/AA and 2.1 AA checks for `#cam-xuc`: zero violations at 1440 and 390px. This is an automated section check, not a full-site accessibility certification.
- Final whole-page taste inspector: 7 FAIL / 9 WARN, compared with 7 FAIL / 10 WARN before redesign. The same existing failure categories remain outside the redesigned section: eyebrow, gradient, shadow, button-fx, outlined-box, original mobile hero headline and fixed-header overlap over the membership price. Outlined boxes decreased from seven to five. No claim is made that the full page passes the taste gate.
- Reviewed all seven final inspector screenshots plus full-size desktop/mobile section captures in `.taste-skill/mood-split-final/`. Element captures taller than the viewport can show a flat band beyond the fixed paper layer; full-page contact sheets were used to verify actual scrolling.

## Critique

ROUND 1
Seen in one second: a Mood check-in screen inside an iPhone, next to a large emotional headline.
Idea (one sentence): Flamee's real couple mood screen supplies proof for the invitation to listen on difficult days.
Live thing: keyboard-accessible mood selector and screen preview dialog.
Layout words by section: hero=split-artwork / mood=split-device / emotions=marquee / connection=diagram / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 6.5 · content 8 → overall 6.0 after existing whole-page cap.
Caps applied: existing whole-page inspector failures cap overall at 6.0; this single section was the requested scope.
Top three problems (most visible first), each with screenshot and fix:
1. Initial mobile `section-390.png`: placing all copy before the phone delayed product proof. Fixed by using title → intro → device → details → demo on mobile.
2. Initial mobile element capture: lazy screenshot was captured before its image decoded. Final captures scroll the phone into view and await `decode()`; actual loaded screen confirmed in final contact sheets.
3. Initial navigation still referred to the removed calendar cards. Fixed by naming the new destination “Cảm xúc” and retaining the old anchor as compatibility support.

ROUND 2
Seen in one second: actual Mood screen and a two-line headline on continuous warm paper.
Idea (one sentence): the couple's real mood interface anchors the story about small daily feelings.
Live thing: mood selector and zoom dialog, both operable by keyboard.
Layout words by section: hero=split-artwork / mood=split-device / emotions=marquee / connection=diagram / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 6.5 · content 8 → overall 6.0 after existing whole-page cap.
Caps applied: same unrelated whole-page inspector failures.
Top three problems (most visible first), each with screenshot and fix:
1. `mobile-fold.jpg`: original main hero has a three-line headline; requires a separate hero copy/type change.
2. `mobile-page-01.jpg`: existing fixed header covers some page content while scrolling; requires a separate header behavior change.
3. `desktop-page-02.jpg`: existing pricing and closing panels retain cool stone surfaces; a broader palette restyle could harmonize them with paper.

No external images, found-photo credits or new fictional proof were introduced. The existing membership prices remain marked as illustrative. The supplied Mood screenshot contains real app preview content and is shown as supplied.
