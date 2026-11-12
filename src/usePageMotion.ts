import { useRef, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function usePageMotion(root: RefObject<HTMLDivElement | null>) {
  const scroll = useRef<Lenis | null>(null)
  const previewOpen = useRef(false)
  useGSAP(() => {
    // Lenis handles reduced motion natively. Toggle only the hero tween below:
    // GSAP matchMedia's global refresh can reset scroll while Radix locks it.
    const lenis = new Lenis({ anchors: { offset: -24 }, duration: .85, smoothWheel: true, respectReducedMotion: true, prevent: node => !!node.closest('[data-lenis-prevent]') })
    scroll.current = lenis
    if (previewOpen.current) lenis.stop()
    const syncNativeJump = () => {
      if (Math.abs(scrollY - lenis.animatedScroll) > 4) lenis.scrollTo(scrollY, { immediate: true })
    }
    const tick = (time: number) => lenis.raf(time * 1000)
    window.addEventListener('scroll', syncNativeJump, { passive: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(tick)
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference)')
    let heroTween: gsap.core.Tween | undefined
    const configureHero = () => {
      heroTween?.scrollTrigger?.kill()
      heroTween?.revert()
      heroTween = undefined
      if (preference.matches) heroTween = gsap.to('.hero-journal-motion', { y: 18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .6 } })
    }
    configureHero()
    preference.addEventListener('change', configureHero)
    return () => {
      preference.removeEventListener('change', configureHero)
      heroTween?.scrollTrigger?.kill()
      heroTween?.revert()
      window.removeEventListener('scroll', syncNativeJump)
      gsap.ticker.remove(tick)
      lenis.destroy()
      if (scroll.current === lenis) scroll.current = null
    }
  }, { scope: root })

  return (open: boolean) => {
    previewOpen.current = open
    if (open) scroll.current?.stop()
    else scroll.current?.start()
  }
}
