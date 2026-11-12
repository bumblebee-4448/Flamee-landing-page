# Editorial Journal Hero — 2026-11-04

Approved reference: `public/mockups/hero/02-memory-journal.png`.

Implemented a responsive 40/60 desktop layout with a live two-line Cormorant Garamond 300 italic headline and live anchor CTAs. The page switches to a single column below 768px. The journal asset has genuine alpha transparency and is served as responsive WebP. Its little memory preview is part of the illustration, matching the reference; it is not an interactive app widget.

Artwork: built-in ImageGen edit from the approved reference. Source: `src/assets/flamee-journal.png`, 1448×1086. The instruction retained the book, café/sunset photographs, coral ribbon and memory card; removed the header, left text and background; reframed the ensemble with transparent surrounding space. Original mockup and its full prompt are preserved in `public/mockups/hero/`.

Browser screenshots reviewed at 1672×941, 1440×900, 1366×768, 768×900, 390×844 and 320×740. Headline and CTAs remain HTML, fonts load locally including Vietnamese, images decode successfully, no horizontal overflow was measured. Laptop CTA remains in the first viewport. Header keeps its established dimensions before/after scroll.

Visual review: expanded the desktop hero frame to match the reference's generous artwork scale; increased heading, description and CTA sizes; kept the book within the tablet viewport; faded the grain and warm wash at the section edges. On phones, retained left-aligned text and placed the full journal beneath the CTAs.

The full-page Taste inspector was also run. It is not a clean report: it flags existing membership descriptions as eyebrows, the user-requested Light Rays gradients, existing outlined panels and the sticky header overlapping a price during arbitrary scrolling. Those are outside the hero redesign or explicitly requested treatments. Warnings include the approved cream palette, the existing marquee, absence of video and different hero/header insets (hero matches the approved wider frame while header geometry is preserved). No new hero text/image overlap or horizontal overflow was found in the reviewed screenshots. Raw report: `.taste-skill/journal-inspect/report.json`.

Full image generation prompt and source metadata: `docs/journal-hero-asset.json`.

## Autumn background update

User requested a warm autumn-afternoon background with falling leaves. Replaced the CSS-only warm wash/grain with a generated responsive backdrop, covering the header and hero and fading into the rest of the page. Added slow falling maple/oval SVG leaves with independent flutter and staggered negative delays. Decorations are noninteractive and hidden from assistive technology. Animation pauses offscreen and disappears under reduced motion. Reviewed at 1920×776, 1440×900 and 390×844: no overflow, hero geometry retained. Browser checks confirmed running/paused/hidden states. Build and all 14 Playwright tests passed. Background generation details: `docs/autumn-background-asset.json`.

## Three.js maple upgrade

Replaced the flat SVG animation with a lazy Three.js scene. Three photographic maple variants are atlas textures on curved subdivided meshes. Nine instanced groups supply far/middle/near layers (27 leaves on desktop, 13 on mobile), with perspective, warm front/back lighting, soft-focus texture variants, independent pitch/yaw/roll, wind variation and gentle pointer parallax. Copy sits above the canvas; artwork sits below, allowing foreground leaves to cross the journal. The background remains independent of WebGL.

Measured production effect chunk: ~134 KB gzip; atlas WebP ~157 KB. Vite still warns that the uncompressed lazy engine chunk is above 500 KB (~539 KB); it is already separate from the main page chunk. No additional postprocessing pipeline or React Three Fiber is used.

Browser validation: one running canvas; pause offscreen and on a simulated hidden-tab visibility event; resume on visible; three repeated reduced-motion toggles left exactly one canvas when enabled and zero when reduced; a browser with WebGL disabled retained the title/background and reported fallback. Synthetic 36ms frame scheduling activated economy quality and reduced desktop density from 27 to 15. This validates adaptation, not a cross-device FPS guarantee. Reviewed desktop screenshots at different animation times and a mobile screenshot. Renderer disposal removes RAF, observer, pointer/visibility listeners, textures, geometry, materials and context. Image generation prompt: `docs/maple-atlas-asset.json`.

## Restore approved static hero

User requested removal of the 3D book and restoration of the old hero mockup while preserving falling maple leaves. `Hero.tsx` now renders the original transparent journal artwork from `src/assets/flamee-journal.png` with responsive WebP. Removed the book component, renderer/geometry modules, obsolete book tests, fallback-generation helper and book-only CSS. Three.js remains for the falling leaves, with the current restrained density (10 desktop / 6 mobile). Header/hero shared frame, one-viewport desktop fit, typography and working CTAs remain intact. Reviewed desktop and phone screenshots; browser confirmed no book canvas and a running leaf scene.

## Journal + actual app screen

User requested adding the supplied Timeline mobile screen to improve product credibility. Composed the static journal behind a foreground Magic UI iPhone, using the original `/mobile-image/dòng thời gian.jpg` screenshot without inventing or modifying its UI. The device opens an accessible Radix dialog showing the full screenshot; the existing page-motion callback locks the background and restores focus after dismissal.

Reviewed at 1440×900, 1366×650, 768×900 and 390×844. Device/journal composition stays within its reserved art area; the mobile composition is taller so the app remains recognizable. Existing leaf animation and typography are retained. Production build and all 16 tests passed, including the new real-source screenshot/preview/focus regression.

The user rejected the phone/journal composition. Reverted the phone, preview dialog, caption and related styles/test; restored the prior static journal-only hero. Falling maple leaves remain enabled. Production build and 15 remaining tests passed.
