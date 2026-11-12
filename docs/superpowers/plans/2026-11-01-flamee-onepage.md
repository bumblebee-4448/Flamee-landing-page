# Flamee One-page Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement task-by-task.

**Goal:** Build the actual Vietnamese Flamee landing page with the approved split-stage idea and latest user instructions, skipping mockups as requested.

**Architecture:** React single-page site, semantic anchored sections. One interactive calendar preview and Radix dialog; CSS sticky supports the paired composition, GSAP controls scroll motion with reduced-motion fallback. No backend or fabricated app download links.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, GSAP + @gsap/react, @radix-ui/react-dialog, lucide-react; local Lora and Be Vietnam Pro font packages.

**Spec:** User's latest instructions override docs/design and the rejected v1/v2 designs. Hero must use `public/flamee-couple-phone-mockup.png`; keep docs palette and documented feature availability.

## Global Constraints

- One-page scroll, concept “Một bên bạn, một bên mình”.
- Four raster images total allowed as supporting evidence: hero, two selectable calendar images, mood crop. Avoid screenshot repetition.
- Headlines at most two lines; cream/coral brand; readable Vietnamese.
- No store links, testimonials, metrics, pricing or API success claims invented.
- No full-page scroll hijacking. Native anchors, keyboard controls, visible focus and reduced motion.
- Existing workspace has no Git repository; work in current workspace, no commits/worktree needed.

## Review Focus

- Calendar switching updates image, accessible selected state and dialog consistently.
- Dialog closes with Escape and returns focus to trigger.
- Mobile navigation closes after selecting an anchor and exposes expanded state.
- Reduced motion shows all content and keeps controls usable.
- No overflow, broken images, invisible scroll-reveal content or three-line headings at 1440/768/390px.

## Task 1 — Functional page

Files: package.json, index.html, vite.config.ts, tsconfig.json, src/main.tsx, src/App.tsx, src/styles.css, tests/landing.spec.ts, playwright.config.ts.

- [x] Create React/Vite/Tailwind configuration and install requested dependencies.
- [x] Write browser acceptance tests for calendar switching, dialog keyboard/focus, mobile navigation and reduced-motion visibility; verify failure before page implementation.
- [x] Build hero, memories split section, pairing process, honest development preview, FAQ, closing CTA/footer.
- [x] Use Tailwind utilities for layout/state and theme CSS for art direction; local fonts. Real image paths only.
- [x] Implement calendar controls, Radix dialog and responsive nav; add GSAP entrance and scroll picture motion with cleanup.
- [x] Run typecheck/build and browser tests; fix observed failures.

## Task 2 — Visual QA and delivery

- [x] Run taste source lint and production inspector at 1440/768/390.
- [x] Open every screenshot, record critique, fix visible issues and rerun relevant checks.
- [x] Independent final review, address substantive findings.
- [x] Document npm commands, library roles, incomplete external store links, final check evidence.

Ruling: User explicitly skipped mockup/design approval and directed the stack and hero; execute inline without another approval gate. No deployment requested; serve local preview.

Final: user approved landing-experience libraries; implemented and verified. See docs/QA_LANDING_PAGE.md for latest stack, tests, image paths and deviations.

