import { useEffect, useRef } from 'react'
import { useHeroReady } from './useHeroReady'
import { MotionConfig } from 'motion/react'
import { onCLS, onINP, onLCP } from 'web-vitals'
import { Footer } from './Footer'
import { PageArrival } from './PageArrival'
import { Header } from './Header'
import { ScrollProgress } from './components/magicui/scroll-progress'
import { Hero } from './Hero'
import { AutumnBackground } from './AutumnBackground'
import { AutumnLeaves } from './AutumnLeaves'
import { Membership } from './Membership'
import { MoodFeature } from './MoodFeature'
import { ConnectionFeature } from './ConnectionFeature'
import { NudgeFeature } from './NudgeFeature'
import { TinyMissionFeature } from './TinyMissionFeature'
import { MemoriesTimeline } from './MemoriesTimeline'
import { LightRays } from './components/magicui/light-rays'
import { usePageMotion } from './usePageMotion'

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  const heroReady = useHeroReady()
  usePageMotion(root)
  useEffect(() => {
    const report = (metric: { name: string; value: number }) => {
      const target = window as Window & { flameeVitals?: Record<string, number> }
      target.flameeVitals = { ...target.flameeVitals, [metric.name]: metric.value }
    }
    onCLS(report); onINP(report); onLCP(report)
  }, [])
  return <MotionConfig reducedMotion="user"><div id="dau-trang" className="landing-page" ref={root}><PageArrival ready={heroReady} /><AutumnBackground /><AutumnLeaves /><LightRays className="page-light-rays" color="rgba(255, 225, 185, 0.35)" opacity={0.5} blur={48} speed={18} length="min(85vh, 900px)" aria-hidden="true" data-magicui="light-rays" /><a className="skip-link" href="#noi-dung">Đến nội dung</a><Header /><main id="noi-dung"><Hero ready={heroReady} /><ConnectionFeature /><MoodFeature /><NudgeFeature /><TinyMissionFeature /><MemoriesTimeline /><Membership />
    <ScrollProgress aria-hidden="true" />
  </main><Footer /></div></MotionConfig>
}
