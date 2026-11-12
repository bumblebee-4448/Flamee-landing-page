# Warm Linen Background Implementation Plan

**Goal:** Apply the approved `#F2EDE6` background and warm Magic UI Light Rays.
**Architecture:** Keep paper surfaces separate from the page background. Place a decorative, noninteractive rays layer behind the header and hero, fading out before subsequent sections.
**Tech Stack:** Existing React, CSS and Motion; official Magic UI registry source.
**Spec:** User-approved palette and Light Rays proposal in this conversation.

## Task: Background treatment
- [x] Add background token `#F2EDE6`; preserve existing paper surfaces, typography and layout.
- [x] Import official Light Rays, adapt the local utility import, expose opacity and respect reduced motion with static ambience.
- [x] Use warm rays `rgba(255, 225, 185, 0.35)`, opacity 0.5, blur 48, speed 18.
- [x] Build, run existing browser tests, inspect desktop/mobile screenshots and check background, stacking and reduced motion in the browser.

No dependencies or new tests needed for this reversible visual change. The folder has no Git repository, so no commit is possible.

