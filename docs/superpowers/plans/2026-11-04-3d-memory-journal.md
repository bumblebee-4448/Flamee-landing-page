# 3D memory journal

Approved intent: keep the current cream memory book's layout, angle, paper/photo/ribbon design and memory card; replace the static book illustration with actual 3D geometry and gentle automatic page turning. Reduce falling leaf density.

- [x] Reduce leaves to 10 desktop / 6 mobile, with slower descent.
- [x] Generate flat page texture spreads based on the approved book; these are printed page content, not a flattened image of a book.
- [x] Build cover, spine, layered paper edges, page surfaces and fabric ribbon using Three.js geometry. Curve a double-sided sheet between right and left, with real-time lighting/shadows.
- [x] Keep the first spread's café/sunset story; alternate between two spreads, with a 10-second rest and a 3.2-second turn. Pause automatic turning on hover/focus; manual click/keyboard turns are available.
- [x] Keep a static fallback for reduced motion/WebGL failures, and pause rendering offscreen/hidden tab. Preserve one-viewport hero dimensions.
- [x] Run browser tests; review initial, middle-turn, final, phone and fallback renders.

The generated texture photos remain illustrative, as in the approved mockup. Reuse installed Three.js; no additional dependencies needed.

