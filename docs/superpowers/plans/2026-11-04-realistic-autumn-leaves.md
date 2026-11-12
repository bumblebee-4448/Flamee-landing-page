# Realistic autumn leaves

User asks for more realistic maple leaves, 3D depth and the strongest visual experience, allowing additional libraries.

Use Three.js directly, lazy-loaded for the decorative layer. Keep existing hero composition and background. Generate a transparent atlas with three photographic maple leaves. Render curved textured meshes with warm lighting, depth tiers, soft-focus variants and nonuniform flutter/fall/wind. Render leaves over the artwork but under live copy and controls.

- [x] Add Three.js and generate the leaf atlas.
- [x] Implement a disposable renderer with shared instanced meshes, capped DPR and reduced mobile counts; adaptive quality after sustained slow frames.
- [x] Integrate lifecycle: no WebGL with reduced motion, pause offscreen/hidden tab, resize safely, static background if WebGL fails.
- [x] Remove the old flat SVG leaf animation.
- [x] Build and run existing tests plus renderer/lifecycle checks; inspect screenshots and motion in the browser.

Keep all interactions and viewport fitting intact. No checkout/publishing or external side effects.

