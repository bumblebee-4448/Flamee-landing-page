# Page arrival and scroll motion

Hero now has one shared readiness gate for the browser-selected responsive journal image, autumn background, paper background and fonts. Text and image use one parent fade/rise after decoding, rather than independent entrance timers. Hero geometry is reserved throughout loading. Warm HTML/body color is inline to prevent a white document before CSS. Failures settle the readiness promise rather than leaving the hero hidden. There is no image timeout that reveals an empty image column.

The nonblocking loading status only appears if readiness takes more than 180ms and leaves when actual assets are ready. Session-storage skipping and the artificial minimum loading duration have been removed: revisits still validate assets, while cached visits avoid a brief loading-badge flash. Scroll reveals remain once-only with reduced-motion support.

Fresh build and all eight browser tests pass. The loading regression test delays the journal on two consecutive visits and verifies text remains hidden until the image is decoded, then reveals with the image. Additional slow-image captures at 1440 and 390px confirmed stable hero height before/after reveal. Captures: .taste-skill/page-motion/synced-hero-*.png.
