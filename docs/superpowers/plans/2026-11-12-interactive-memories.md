# Interactive Memories Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans for continuous inline execution. User approved the interaction and horizontal photo movement in conversation.

**Goal:** Ship a usable draggable memory timeline matching the selected paper/editorial concept.

**Architecture:** `MemoriesTimeline.tsx` owns pointer, range, filtering, accessible dialogs and one progress state; a separate data module owns six illustrative stories. Existing Motion/Radix and common frame are retained. A requestAnimationFrame easing loop settles progress after release without interfering with page scroll.

**Tech Stack:** React, TypeScript, existing Motion/Radix, CSS, Playwright. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-12-interactive-memories.md`.

## Constraints and review focus

- Match shared frame and paper concept; no phone frame or repeated feature layout.
- Touch axis locking must allow vertical scrolling, including diagonal gestures.
- Clamp progress at both ends; resize/year filtering must keep selection valid.
- Cancel pointer interaction safely and keep all controls usable with reduced motion.
- Dialog closing must restore focus and timeline position; no Lenis lock leak.
- Photos and stories are illustrative and must not be presented as real customer memories.

## Tasks

- [x] Write `tests/memories.spec.ts`; observe failure because the feature does not yet exist.
- [x] Generate/save six local photo assets and `src/memories.ts` data with date/title/story/alt.
- [x] Implement `src/MemoriesTimeline.tsx`: shared progress, year filters, dates, drag/swipe, snap, arrows, keyboard range and story dialog. Connect `onPreviewChange` and integrate after Tiny Mission.
- [x] Add scoped timeline styling in `src/styles.css`; responsive three-moment desktop and single-moment phone; curve and drag handle follow progress.
- [x] Build, run the browser tests and inspect desktop/tablet/mobile plus reduced-motion and dialog behavior. Fix observed issues, review screenshots and record QA.

No git commit is planned: the workspace has no git repository. Generated assets and prompts stay in the project.
