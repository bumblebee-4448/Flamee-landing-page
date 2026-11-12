# Tiny Mission section

Renamed the header item “Gửi khoảnh khắc” to “Nhiệm vụ” with anchor `#nhiem-vu`. Added `TinyMissionFeature` immediately after Gợi ý quan tâm and before membership. It uses the existing shared `FeatureSection`, with iPhone left/copy right on desktop to continue the alternating composition, and the established mobile reading order. No independent page-width or hover implementation was introduced.

Badge: “Tiny Mission”. Quote: “Cùng làm điều nhỏ, gần nhau mỗi ngày.” Description: “Những nhiệm vụ nhỏ để cùng làm mỗi ngày: gửi một tấm ảnh, nhắn lời động viên hay lên kế hoạch cuối tuần. Mỗi việc nhỏ là thêm một lần quan tâm.” The exact supplied `public/mobile-image/tiny-mission.jpg` is displayed inside the device. Points, task completion and rewards remain the screen's supplied preview data; no task/reward backend was added.

Built-in image_gen created a new six-frame transparent mascot sprite master, using the existing happy Flamee mascot as the character reference. The mascot holds a clipboard with a sage checkmark and coral heart, blinks and gently lifts the completed task. The master cells were extracted and encoded with sharp:

- `public/sticker_images_v2/tiny-mission.png` — 384×384 transparent static sticker.
- `public/gif_sticker_emote/tiny-mission.gif` — six-frame transparent infinite-loop GIF.
- `docs/tiny-mission-prompt.txt` — exact generation prompt.
- `docs/tiny-mission-asset.json` — provenance, encoding and visible-size measurements.
- `.taste-skill/tiny-mission/mascot-source.png` — copied generated master; original output preserved.

Validation: fresh TypeScript/Vite build passed. Browser checks passed at 1920, 1440, 1366, 1280, 1024, 768, 390 and 320px: old header label removed, new anchor works, mobile menu closes, correct section order, supplied screen and mascot load, quote stays on two lines, reversed desktop layout fits the viewport, no horizontal overflow or page errors. Hover switches PNG to the generated GIF and lifts straight 8px; distinct captured GIF frames confirm animation. Leaving restores PNG, and reduced motion keeps it static. Reviewed full-size desktop/mobile and static mascot captures, plus all eight final taste screenshots in `.taste-skill/tiny-mission/inspect/`.

Whole-page taste inspector: 11 FAIL / 9 WARN. These include the explicitly requested pill/shadow/serif treatments, existing main hero and fixed-header overlap findings, and a picture-count limitation for supplied screens rendered through SVG crops. This is not a clean whole-site taste gate.

ROUND 1
Seen in one second: a small shared activity screen, a warm quote and a cheerful task-check mascot.
Idea (one sentence): small acts completed together become occasions to show care.
Live thing: straight phone hover activates the mission mascot GIF.
Layout words by section: hero=split-artwork / connection=copy-device / mood=device-copy / nudge=copy-device / mission=device-copy / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 7 · content 8 → overall 6.0 after whole-page cap.
Caps applied: requested treatments and remaining full-page inspection findings.
Top three concerns and resolutions:
1. Menu named a different feature; renamed it and verified the real desktop/mobile anchor.
2. New artwork could break mascot sizing; normalized PNG/GIF visible-content height using the existing common mechanism.
3. Screen contains preview points and rewards; preserved the source and did not invent live completion or redemption behavior.
