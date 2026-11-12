# 3D memory journal

Requested design: retain the cream scrapbook composition, café/sunset memories, coral ribbon and memory card, with genuine 3D pages that gently turn. Leaf density reduced from 27/13 to 10/6 desktop/mobile.

The renderer builds rounded cover geometry, a cylindrical spine, nine stepped paper layers per side, curved printed page surfaces, a fabric-like ribbon and a double-sided subdivided turning sheet. Page positions/normals are deformed during the turn, and the sun casts dynamic shadows onto the paper. Two generated flat spread textures are printed page content, not an image of an already-rendered book. Textures are illustrative and match the approved mockup's story. Prompt set: `docs/journal-3d-assets.json`.

Rest period: 10 seconds; turn duration: 3.2 seconds. Hover/focus pauses future automatic turns, while manual click/Enter can turn immediately. Offscreen/hidden state pauses the clock. GPU rendering occurs only for a turn or resize. Shared Three.js stays in a separate lazy chunk; no new dependencies were added for the book. The existing static artwork remains a fallback during loading, reduced motion and WebGL failure.

Visual iteration: enlarged the initial book, softened the ground shadow, adjusted cream paper/cover lighting, repaired ribbon continuity and cut its tail, made the timeline card HTML with photo thumbnails, and added vertical overscan so the raised sheet does not clip at the original image frame. Reviewed initial, middle and completed turns plus the phone layout.

Validation: production build; existing landing/header tests plus keyboard turning, offscreen pause, automatic turning and reduced-motion cleanup. Browser with WebGL disabled showed the original image and a disabled turn control. Verified desktop/mobile leaf counts 10/6. Page motion is procedural and stylized; it preserves the reference's visual elements rather than making a pixel-identical physical reconstruction.

## Book-shape correction after user review

The first model still read as two flat image boards. Root cause: flat paper-layer plates, insufficient visible thickness, a raised gutter rather than a recessed binding, and turning-sheet coordinates that compressed length at mid-turn. Rebuilt the paper structure in `src/lib/journalGeometry.ts`: two solid blocks with curved upper profiles, a recessed binding, separate overhanging rounded covers and a cylindrical spine. Mipmapped fine paper-edge texture replaces high-contrast vertex bands to reduce mobile aliasing. The ribbon now follows the actual gutter profile continuously. Removed the detached rectangular ground shadow; retained soft contact shading and page-on-page shadows.

The turning sheet now integrates each segment by arc length. Tests verify that the binding sits below the paper arch, that the block has volume, and that sheet length stays constant at 0/25/50/75/100% of a turn. A gentle camera pullback during the turn keeps the lifted page within the scene. Reviewed fresh desktop rest/turn and phone screenshots. Visual acceptance remains based on the user's reference and review, independently of automated test results.

## Alignment, ribbon and card revision

User accepted the book shape and requested a more balanced, less skewed view, a softer ribbon and removal of the memory card. Rebalanced the book to rotation (-0.32, 0.13, 0.055) and centered it in the artwork frame. Replaced the straight ribbon with a gutter-following surface and a twisted Catmull-Rom drape over the lower edge. Added fine cloth weave and satin-like sheen. The free tail is kept inside the visual frame.

Removed the memory card markup, icon import and all related styles. Replaced the old fallback illustration (which contained a baked-in card) with `src/assets/journal-rest.png`, a transparent native render of the current Three.js model, so loading/reduced-motion/WebGL fallback states also omit the card. Reproduce the fallback with `node scripts/render-journal-fallback.mjs` after build + preview; the helper's temporary preserved framebuffer is not enabled in production.

Reviewed 1920×870 and phone views and verified zero memory-card elements and the card-free reduced-motion image. Existing 18 tests passed after geometry, material, markup and fallback changes.

## Restore prior pose, remove ribbon, shallow turn and shared frame

User requested the earlier book pose, no ribbon, a shallower page motion, balanced spacing and equal header/hero width. Restored rotation (-0.55, -0.17, 0.14), removed ribbon geometry/materials/helper, lowered the paper arch from 0.49 to 0.20 and raised the binding base. Reduced turning curl compensation and camera retreat (1.8 to 0.35) to avoid the sinking/shrinking impression. A geometry regression samples turn positions and verifies that the sheet stays above the resting paper while retaining its arc length.

Header and hero now share `--frame-width` and matching content insets. Removed oversized artwork spill outside the grid and balanced desktop columns at 44/56. Browser checks measured equal frame widths and left edges; a regression verifies these plus logo/title alignment at desktop/tablet/phone widths. The sticky header still keeps its geometry through its glass transition. Regenerated the native fallback without ribbon or card. Reviewed desktop rest/turn and phone live/fallback views; mobile frames both measured 358px at a 390px viewport with no horizontal overflow.

## Projection and tactile page correction

User identified combined roll/pitch, perspective asymmetry, warped portraits/captions, clipping and plastic-like material. Replaced the perspective camera with a fixed orthographic projection and removed yaw/roll; only a mild -0.20-radian pitch remains. There is no camera retreat during a turn. A 6.9-unit visible height and the existing overscan preserve transparent breathing room around the book.

The page profile is now planar over the printed photo/caption region (8–92% width), with curvature isolated to the binding and outer margin. Added a soft recessed-gutter occlusion band and separate thin photo mounts with planar printed faces, rather than bending portraits across a broad page arch. Reduced the block/cover thickness and overhang, made the cover fully rough, and gave paper/photo regions different micro-bump and roughness treatments. Paper fibers are suppressed over photographs. Mounted photo groups switch with the spread; the moving sheet clears their raised surfaces.

Reviewed both spreads and the turn, plus desktop/short-laptop/phone layouts; no horizontal overflow measured. Added a geometry regression requiring the photo/caption region to stay planar. The existing no-penetration and arc-length regressions remain. Re-rendered the ribbon/card-free fallback from the current model. Full suite: 21 tests passed.

## Prompt-based hardcover journal

User supplied a new explicit photographic prompt, including a wide coral fabric bookmark; this supersedes the earlier ribbon-removal preference. Generated a standalone visual reference on plain beige using built-in ImageGen and saved it to `public/mockups/hero/06-prompt-journal.png` (native 1448×1086). Full prompt: `docs/journal-prompt-redesign.json`.

Updated the live model's tilt to exactly 12 degrees with yaw/roll remaining zero. Added caramel-brown leather grain on the visible rounded cover, adjusted cover overhang, and restored a wider woven coral bookmark following the curved gutter and draping beyond the lower edge. Ribbon cross-section blends into the free tail without an exposed gap. Retained cream paper, flat mounted café/sunset photographs, date label/caption and slow page turning. Expanded the model framing to 7.3 world units for safe bookmark margins and regenerated the native fallback. The standalone reference follows the prompt's plain beige background; the existing landing-page background remains separate from the transparent live book.
