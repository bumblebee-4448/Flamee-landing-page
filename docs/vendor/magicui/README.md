# Magic UI source components

Downloaded from the official public registry on 2026-11-02:

- https://magicui.design/r/iphone.json
- https://magicui.design/r/blur-fade.json
- https://magicui.design/r/animated-beam.json
- https://magicui.design/r/marquee.json
- https://magicui.design/r/border-beam.json

Raw registry responses are preserved beside this file. Implementation files are in `src/components/magicui/`. The original MIT license is retained as `LICENSE.md`.

Light Rays was added from https://magicui.design/r/light-rays.json on 2026-11-04. Its local utility import is adjusted, an `opacity` prop controls the decorative layer, and reduced motion disables animated rays while retaining static ambience. The raw response is saved as `light-rays.registry.json`.

Local adaptations: utilities import path changed to `../../lib/utils`; BlurFade gains reduced-motion handling and a visible fallback so animation never blocks reading; Marquee duplicated groups are hidden from assistive technology; iPhone SVG mask/clip IDs use React useId to avoid collisions across devices. Default beam colors are mapped to Flamee's palette. Timing and animation repetition are configured at usage sites. Device screens use supplied Flamee imagery. In-source taste exceptions document the user-requested gradient beam.

Mobile template is a paid product, referenced through its publicly accessible documentation and preview only. No paid template source was downloaded or copied. The implemented layout is original Flamee code using the free components.

- Template: https://magicui.design/docs/templates/mobile
- Preview: https://mobile-magicui.vercel.app/
- Component repository: https://github.com/magicuidesign/magicui

Shimmer Button added from https://magicui.design/r/shimmer-button.json. Registry source preserved as shimmer-button.registry.json; local utility import adapted, decorative layers hidden from assistive technology, CSS animation recipes included with a reduced-motion fallback. Membership uses restrained graphite surfaces and a slow 5s perimeter shimmer.
