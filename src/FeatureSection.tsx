import { useEffect, useState, useSyncExternalStore, type CSSProperties } from 'react'
import { PillBadge } from './components'
import { BlurFade } from './components/magicui/blur-fade'
import { Iphone, type IphoneProps } from './components/magicui/iphone'

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'
function subscribeToReducedMotion(notify: () => void) {
  const preference = window.matchMedia(reducedMotionQuery)
  preference.addEventListener('change', notify)
  return () => preference.removeEventListener('change', notify)
}
const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches

export interface FeatureSectionProps {
  id: string
  badge: string
  quote: readonly [string, string]
  description: string
  screen: string
  screenAlt: string
  screenCrop?: IphoneProps['screenCrop']
  reversed?: boolean
  mascot: { still: string; animated: string; stillContentHeight?: number; animatedContentHeight?: number }
}

export function FeatureSection({ id, badge, quote, description, screen, screenAlt, screenCrop, reversed = false, mascot }: FeatureSectionProps) {
  const [hovered, setHovered] = useState(false)
  const reduceMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotion, () => true)
  const mascotSrc = hovered && !reduceMotion ? mascot.animated : mascot.still
  const contentHeight = hovered && !reduceMotion ? mascot.animatedContentHeight : mascot.stillContentHeight

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(hover: hover)').matches) return
    const preload = new Image()
    preload.src = mascot.animated
  }, [reduceMotion, mascot.animated])

  return <section id={id} className="mood-feature shell section-space" data-reversed={reversed || undefined} aria-labelledby={`${id}-title`}>
    <div className="mood-feature-layout">
      <div className="mood-feature-copy">
        <BlurFade inView blur="0px" className="mood-feature-badge"><PillBadge className="mood-feature-label">{badge}</PillBadge></BlurFade>
        <BlurFade inView blur="0px" delay={.08} className="mood-feature-heading"><h2 id={`${id}-title`}>{quote[0]}<br />{quote[1]}</h2></BlurFade>
        <BlurFade inView blur="0px" delay={.16} className="mood-feature-lead"><p className="mood-feature-intro">{description}</p></BlurFade>
      </div>
      <BlurFade inView blur="0px" delay={.12} className="mood-device-column">
        <figure className="mood-device-figure mood-phone-card" onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }} onPointerLeave={() => setHovered(false)} onPointerCancel={() => setHovered(false)}>
          <Iphone className="mood-device" src={screen} imageAlt={screenAlt} screenCrop={screenCrop} data-ui />
          <img className="mood-corner-mascot" src={mascotSrc} style={{ '--mascot-scale': contentHeight ? .8 / contentHeight : 1 } as CSSProperties} alt="" aria-hidden="true" width="512" height="512" loading="lazy" />
        </figure>
      </BlurFade>
    </div>
  </section>
}
