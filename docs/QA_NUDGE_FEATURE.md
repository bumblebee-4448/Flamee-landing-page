# Gợi ý quan tâm — shared feature section

Replaced the complete “Ngày nào cũng có nhau” mascot marquee with `NudgeFeature`, immediately after Mood Check-in. Main section order is now hero → Kết nối → Cảm xúc → Gợi ý quan tâm → membership → FAQ. The old strip, pause control, sticker list and unused styles/imports were removed.

The new section uses the same `FeatureSection` as Connection and Mood. It matches Connection's desktop composition: copy left, iPhone right. The shared page frame, badges, warm diffuse shadow, corner mascot and straight hover lift are retained. Mobile keeps the established stacked reading order. The existing header's `#goi-y-quan-tam` link now reaches the section.

Badge: “Gợi ý quan tâm”. Quote: “Quan tâm đúng lúc, gần nhau hơn.” Description: “Một gợi ý hỏi thăm khi người ấy cần được quan tâm. Xem lời nhắn gợi ý, chỉnh lại theo cách của mình và chọn lúc phù hợp để chia sẻ.”

The supplied `public/mobile-image/nudge-screen-mockup.png` is shown through the shared iPhone's existing non-destructive SVG screen crop. Its UI and text are unchanged. This is a marketing screen preview; no message sending or nudge backend was implemented or claimed successful.

## Generated assets

Built-in image_gen created a six-frame transparent sprite master using the existing happy mascot as the character reference. The caring mascot holds a coral speech bubble with a white heart, blinks and offers the message forward. No metrics, text or customer proof were invented.

- Static PNG: `public/sticker_images_v2/care-nudge.png`, 384×384.
- Animated GIF: `public/gif_sticker_emote/care-nudge.gif`, six frames, infinite loop, genuine alpha transparency.
- Source master: `.taste-skill/nudge-feature/mascot-source.png`.
- Exact generation prompt: `docs/care-nudge-prompt.txt`.
- Encoding and alpha-content normalization: `docs/care-nudge-asset.json`.

The six generated cells were extracted and encoded using sharp; the original generator output remains intact. The existing common mascot sizing uses measured visible-content fractions, keeping the new sticker consistent with the preceding sections.

## Verification

- Fresh TypeScript/Vite production build passed. Existing large JavaScript chunk warning remains.
- Browser checks at 1920, 1440, 1366, 1280, 1024, 768, 390 and 320px passed: old marquee absent, exact section order, unique nudge anchor, working desktop/mobile header link, correct supplied image path, PNG loads, two-line quote, intended desktop column order and viewport fit, no horizontal overflow or page errors.
- Normal-motion hover activates `care-nudge.gif`, lifts straight 8px with no rotation, and restores PNG on leave. Multiple GIF screenshots have different hashes, confirming animation plays.
- Shared feature reduced-motion handling now subscribes directly to the media preference. The installed Motion hook only reads its initial value; changing the preference during an active hover exposed that limitation. All three sections now immediately swap to static PNG when reduced motion is enabled and resume their own GIF when disabled.
- Reviewed full-size desktop/mobile and hover captures, generated PNG, and all eight final whole-page inspector images under `.taste-skill/nudge-feature/inspect-final/`.
- Whole-page taste report: 10 FAIL / 9 WARN. Requested badges, shadows, italic quote and established styling conflict with several taste house rules. The `few-pictures` check counts only three pictures because two supplied raster app screens are rendered through SVG viewBoxes; they are real supplied images, not invented SVG interfaces. Other existing main-hero and layout findings remain. No full-site taste pass is claimed.

ROUND 1
Seen in one second: a gentle caring quote beside the actual nudge screen and heart-message mascot.
Idea (one sentence): a small heart-shaped message makes a caring check-in feel easy to offer.
Live thing: floating phone hover activates its own caring-mascot GIF.
Layout words by section: hero=split-artwork / connection=copy-and-device / mood=device-and-copy / nudge=copy-and-device / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 7 · content 8 → overall 6.0 after whole-page cap.
Caps applied: remaining full-page taste findings and requested decorative treatments.
Top three problems and resolutions:
1. Old marquee occupied the nudge location; replaced it completely with the new anchored feature.
2. Provided screen already includes its phone frame; reused the shared crop to avoid doubling the frame/island.
3. Runtime reduced-motion toggle left GIF active due to the library's initial-only hook; fixed the shared media subscription and verified all three sections.
