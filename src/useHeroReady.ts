import { useEffect, useState } from 'react'

export function useHeroReady() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let active = true
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('.hero-journal, .autumn-backdrop, .paper-background img'))
    // Wait for the selected responsive sources; never reveal an empty image column on a timer.
    Promise.allSettled([document.fonts.ready, ...images.map(image => image.decode())]).then(() => {
      if (active) setReady(true)
    })
    return () => { active = false }
  }, [])
  return ready
}
