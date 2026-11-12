# Transforming Glass Header Implementation Plan

**Goal:** Match the supplied header arrangement, then shrink it to a floating glass pill while scrolling. Rename the CTA to “Gói thành viên” and create its target section.
**Architecture:** A reserved header slot prevents layout shifts; a fixed header changes width, padding, radius and glass treatment past 64px of scroll. Navigation aligns right, beside the dark CTA. Use CSS backdrop filters with an opaque fallback and reduced-motion transitions disabled. Preserve the mobile menu and keyboard controls.
**Tech Stack:** React, CSS, existing Lucide icons and Playwright.
**Spec:** User's header image and follow-up authorization in conversation.

- [x] Verify sticky behavior and membership navigation with browser tests before implementation (both failed on the previous build).
- [x] Extract header, add passive scroll state and cleanup; update CSS for both header states and mobile layout.
- [x] Add #goi-thanh-vien. User explicitly authorized mock plans, prices and benefits: Basic 0đ; Plus 49.000đ/month or 399.000đ/year. Clearly label the section and dialogs as illustrative. Use existing Magic UI BlurFade and BorderBeam.
- [x] Build and run existing plus new tests; inspect desktop, tablet and phone screenshots at top and after scrolling, including reduced motion.

Constraints: Keep existing brand and page content. Do not install dependencies or invent membership products. The workspace has no Git repository.

