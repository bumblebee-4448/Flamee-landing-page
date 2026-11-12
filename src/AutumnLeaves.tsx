import { useEffect, useRef, useSyncExternalStore } from 'react'
import atlasUrl from './assets/maple-leaves-atlas.png?w=1536&format=webp'
import type { AutumnScene } from './lib/autumnScene'

const motionQuery = '(prefers-reduced-motion: reduce)'
const subscribe = (notify: () => void) => {
  const media = window.matchMedia(motionQuery)
  media.addEventListener('change', notify)
  return () => media.removeEventListener('change', notify)
}
const snapshot = () => window.matchMedia(motionQuery).matches

export function AutumnLeaves() {
  const host = useRef<HTMLDivElement>(null)
  const reduceMotion = useSyncExternalStore(subscribe, snapshot, () => true)

  useEffect(() => {
    const element = host.current!
    if (reduceMotion) {
      element.dataset.state = 'reduced'
      return
    }
    let alive = true
    let scene: AutumnScene | undefined
    element.dataset.state = 'loading'
    const sync = () => scene?.setRunning(!document.hidden)
    document.addEventListener('visibilitychange', sync)
    // The decorative engine is a separate lazy chunk; the page content remains independent.
    import('./lib/autumnScene').then(module => {
      if (!alive) return
      return module.createAutumnScene(element, atlasUrl)
    }).then(renderer => {
      if (!renderer) return
      if (!alive) { renderer.dispose(); return }
      scene = renderer
      sync()
    }).catch(() => {
      if (alive) element.dataset.state = 'fallback'
    })
    return () => {
      alive = false
      document.removeEventListener('visibilitychange', sync)
      scene?.dispose()
    }
  }, [reduceMotion])

  return <div ref={host} className="autumn-leaf-scene" aria-hidden="true" />
}
