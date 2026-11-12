# Approved Editorial Journal Hero — Implementation Plan

**Goal:** Implement the user-approved `public/mockups/hero/02-memory-journal.png` as a real responsive hero.
**Spec:** User explicitly approved mockup 02 and requested coding. Use the original journal concept, not the phone variant.
**Architecture:** Live HTML headline, description and working anchor CTAs on the left; isolated generated journal artwork on the right with the small memory preview integrated in the illustration. Keep the established header geometry and glass transition. Warm Linen background and existing Light Rays remain.
**Tech Stack:** React, CSS, existing Motion/GSAP, Fontsource Cormorant Garamond light italic, Vite responsive WebP image processing.

## Visual decisions from approved reference
- Two-line thin italic serif headline; generous line height, dark brown, no hero logo above it.
- Left copy: “Lưu những ngày có nhau, / viết tiếp chuyện hai mình.”
- Coral primary “Khám phá Flamee” and quiet “Cách kết nối” link.
- Right artwork: open cream scrapbook, café and sunset photographs, coral ribbon; no phone mockups.
- Memory card overlaps the lower right of the book, with two photo thumbnails.
- Desktop split around 40/60; tablet and phone adapt to avoid cramped text and horizontal overflow.

## Steps
- [x] Generate a standalone transparent journal asset from the approved reference; install the light italic font.
- [x] Replace only the hero and its obsolete phone styling; keep page content and header behavior intact.
- [x] Retarget the existing subtle parallax to the journal artwork, respecting reduced motion.
- [x] Update stale hero assertions to the approved design; build and run browser tests.
- [x] Inspect desktop, laptop, tablet and mobile screenshots and adjust to match the reference.

No Git repository is present, so no commit is possible.

