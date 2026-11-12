# Shared connection and mood feature sections

`FeatureSection.tsx` owns the shared badge, quote, description, device, corner mascot, warm shadow, straight hover lift and PNG/GIF behavior. `ConnectionFeature.tsx` and `MoodFeature.tsx` supply content and assets. The shared component supports a reversed desktop layout and cropped screen media without duplicating markup or page-width formulas.

Order: hero → `#ket-noi` → `#cam-xuc` → mood marquee → membership → FAQ. Replaced the old connection diagram to avoid duplicate anchor IDs. Header links navigate to the matching sections. Connection keeps copy left/device right; Mood is device left/copy right on desktop. Mobile retains badge → quote → description → device for both. Added a responsive 64–104px gap between the two sections.

Connection uses the supplied `public/mobile-image/kết-nối.png`. An SVG viewBox clips the existing phone/background off the supplied image while preserving its pixels inside the shared iPhone frame; the frame's extra island is omitted when the screen already contains one. No app UI or screenshot text was regenerated. Quote: “Một lời mời, hai người có nhau.” Description accurately describes invite-code pairing.

Assets were generated with built-in image_gen using the current happy Flamee mascot as character reference. Prompt: six equal-cell transparent sprite sheet; two orange Flamee companions leaning affectionately together, holding a coral heart; subtle blink, heart pulse and wing movement; consistent scale/baseline, no text/background. A generated six-frame master was extracted and encoded as:

- `public/sticker_images_v2/connection-pair.png` — transparent 384px static sticker.
- `public/gif_sticker_emote/connection-pair.gif` — transparent six-frame looping GIF.
- `docs/connection-pair-asset.json` — prompt, source and encoding metadata.
- `.taste-skill/connection-feature/mascot-source.png` — generated sprite master copied into the workspace.

Visible mascot height is normalized using alpha-content measurements for each still/GIF asset. This corrects the extra transparent padding in the pair and the larger animated happy pose. The common overlap and hover movement remain shared.

Verification:

- Fresh TypeScript/Vite production build passed; existing large chunk warning remains.
- Browser checks passed at 1920, 1440, 1366, 1280, 1024, 768, 390 and 320px: unique ordered anchors, intended desktop column order, equal visible static mascot heights, gap at least 64px, two-line quotes, viewport fit and no overflow or JS errors.
- Both hovers switch to their own GIF, lift straight 8px with no rotation, and reset to their own PNG. Multiple GIF screenshots have different hashes, confirming actual animation rather than just changing the URL. Reduced motion remains static.
- Real desktop/mobile header clicks reach the matching connection/mood anchors; the mobile menu closes.
- Reviewed full-size final desktop/mobile captures and all seven final taste inspector screenshots under `.taste-skill/connection-feature/`.
- Whole-page inspector: 9 FAIL / 11 WARN, including requested pills, serif emphasis, shadows and pre-existing main-hero issues. No clean whole-site gate is claimed.

ROUND 1
Seen in one second: matching connection and mood stories, alternating device placement with small brand mascots.
Idea (one sentence): a shared visual language connects pairing two people with understanding their daily feelings.
Live thing: each phone lifts and activates its own mascot GIF.
Layout words by section: hero=split-artwork / connection=copy-and-device / mood=device-and-copy / emotions=marquee / membership=paired-plans / FAQ=list / closing=statement / footer=navigation.
Scores: design 7.5 · usability 8 · creativity 7 · content 8 → overall 6.0 after full-page cap.
Caps applied: documented whole-page taste findings and user-requested treatments.
Top three problems and fixes:
1. Unequal mascot padding made the pair appear smaller; corrected with shared visible-height normalization for PNG and GIF.
2. Adjacent device sections felt too close; added a responsive inter-section margin.
3. Supplied connection image already contained a device and island; cropped its screen non-destructively and prevented a duplicate island.
