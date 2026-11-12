import backgroundSrc from './assets/autumn-paper-maple-v2.png?w=1600&quality=90&format=webp'
import backgroundSrcSet from './assets/autumn-paper-maple-v2.png?w=768;1280;1920&format=webp&quality=90&as=srcset'
import mobileBackgroundSrcSet from './assets/autumn-paper-maple-mobile-v2.png?w=480;768&quality=90&format=webp&as=srcset'
import paperSrc from './assets/autumn-ivory-paper.png?w=1600&quality=90&format=webp'
import paperSrcSet from './assets/autumn-ivory-paper.png?w=480;768;1280;1920&quality=90&format=webp&as=srcset'

export function AutumnBackground() {
  return <>
    <div className="paper-background" aria-hidden="true">
      <img src={paperSrc} srcSet={paperSrcSet} sizes="(max-aspect-ratio: 1672/941) 178vh, 100vw" alt="" width="1672" height="941" decoding="async" />
    </div>
    <div className="autumn-background" aria-hidden="true">
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileBackgroundSrcSet} sizes="100vw" />
      <img className="autumn-backdrop" src={backgroundSrc} srcSet={backgroundSrcSet} sizes="100vw" alt="" width="1672" height="941" decoding="async" />
    </picture>
    </div>
  </>
}
