import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent, type KeyboardEvent } from 'react'
import { PillBadge } from './components'
import { BlurFade } from './components/magicui/blur-fade'
import { memoryDate, memoryMoments } from './memories'
import './memories.css'

const clamp = (value: number, max: number) => Math.max(0, Math.min(max, value))
const curveY = (value: number) => 24 + 60 * (1 - Math.cos(Math.PI * value)) / 2
type Drag = { id: number; x: number; y: number; start: number; lastX: number; time: number; velocity: number; locked: boolean }

export function MemoriesTimeline() {
  const threadGradient = useId()
  const [year, setYear] = useState('all')
  const [position, setPosition] = useState(0)
  const [scrubbing, setScrubbing] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [metrics, setMetrics] = useState({ width: 1000, card: 312, gap: 28 })
  const viewport = useRef<HTMLDivElement>(null)
  const range = useRef<HTMLInputElement>(null)
  const positionRef = useRef(0)
  const scrubTarget = useRef(0)
  const animation = useRef(0)
  const drag = useRef<Drag | null>(null)
  const suppressClick = useRef(false)
  const moments = year === 'all' ? memoryMoments : memoryMoments.filter(moment => moment.date.startsWith(year))
  const maximum = moments.length - 1
  const selectedIndex = clamp(Math.round(position), maximum)
  const active = moments[selectedIndex]
  const step = metrics.card + metrics.gap
  const travel = Math.max(0, moments.length * step - metrics.gap - metrics.width)
  const offset = maximum ? position / maximum * travel : 0

  function stop() { cancelAnimationFrame(animation.current) }
  function update(value: number) {
    const next = clamp(value, maximum)
    positionRef.current = next
    setPosition(next)
  }
  function goTo(value: number) {
    stop()
    const target = clamp(value, maximum)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { update(target); return }
    let previous = performance.now()
    const tick = (now: number) => {
      const elapsed = Math.min(40, now - previous)
      previous = now
      const distance = target - positionRef.current
      if (Math.abs(distance) < .001) { update(target); return }
      update(positionRef.current + distance * (1 - Math.exp(-elapsed / 230)))
      animation.current = requestAnimationFrame(tick)
    }
    animation.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const element = viewport.current
    if (!element) return
    const resize = () => {
      const width = element.clientWidth
      const gap = width < 640 ? 18 : 28
      const columns = Math.min(moments.length, width < 880 ? 2 : 3)
      const card = width < 640 ? width * .86 : (width - gap * (columns - 1)) / columns
      setMetrics({ width, gap, card })
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(element)
    return () => observer.disconnect()
  }, [moments.length])

  useEffect(() => {
    // Neighboring images are ready before the visitor reaches the memory section.
    for (const moment of memoryMoments) { const image = new Image(); image.src = moment.image }
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const settle = () => { if (preference.matches) { stop(); update(Math.round(positionRef.current)) } }
    preference.addEventListener('change', settle)
    return () => { stop(); preference.removeEventListener('change', settle) }
  }, [])

  function changeYear(value: string) {
    stop()
    drag.current = null
    setDragging(false)
    setYear(value)
    positionRef.current = 0
    setPosition(0)
  }

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0) || (event.target as HTMLElement).closest('input')) return
    stop()
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, start: positionRef.current, lastX: event.clientX, time: performance.now(), velocity: 0, locked: false }
  }
  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current
    if (!gesture || gesture.id !== event.pointerId) return
    const dx = event.clientX - gesture.x
    const dy = event.clientY - gesture.y
    if (!gesture.locked) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 7) return
      if (Math.abs(dy) > Math.abs(dx)) { drag.current = null; return }
      gesture.locked = true
      event.currentTarget.setPointerCapture(event.pointerId)
      setDragging(true)
    }
    if (event.cancelable) event.preventDefault()
    const pixelsPerMoment = travel / Math.max(1, maximum) || step
    const now = performance.now()
    gesture.velocity = Math.max(-.004, Math.min(.004, -(event.clientX - gesture.lastX) / (pixelsPerMoment * Math.max(1, now - gesture.time))))
    gesture.lastX = event.clientX
    gesture.time = now
    const sensitivity = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : .6
    update(gesture.start - dx / pixelsPerMoment * sensitivity)
  }
  function pointerEnd(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const gesture = drag.current
    if (!gesture || gesture.id !== event.pointerId) return
    drag.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    if (!gesture.locked) return
    setDragging(false)
    suppressClick.current = true
    window.setTimeout(() => { suppressClick.current = false }, 0)
    const momentum = cancelled || performance.now() - gesture.time > 90 ? 0 : gesture.velocity * 35
    goTo(Math.round(clamp(positionRef.current + momentum, maximum)))
  }
  function keyboard(event: KeyboardEvent<HTMLInputElement>) {
    const actions: Record<string, number> = { ArrowLeft: selectedIndex - 1, ArrowDown: selectedIndex - 1, ArrowRight: selectedIndex + 1, ArrowUp: selectedIndex + 1, Home: 0, End: maximum, PageDown: selectedIndex + 1, PageUp: selectedIndex - 1 }
    if (!(event.key in actions)) return
    event.preventDefault()
    goTo(actions[event.key])
  }
  const points = moments.map((_, index) => ({ x: metrics.card / 2 + index * step, y: curveY(index) }))
  let curve = `M 0 ${points[0].y} L ${points[0].x} ${points[0].y}`
  for (let index = 1; index < points.length; index++) {
    const from = points[index - 1], to = points[index], middle = (from.x + to.x) / 2
    curve += ` C ${middle} ${from.y}, ${middle} ${to.y}, ${to.x} ${to.y}`
  }
  curve += ` L ${moments.length * step - metrics.gap} ${points[points.length - 1].y}`
  const leftDate = new Date(moments[Math.floor(position)].date + 'T12:00:00Z').getTime()
  const rightDate = new Date(moments[Math.min(maximum, Math.floor(position) + 1)].date + 'T12:00:00Z').getTime()
  const currentDate = new Date(leftDate + (rightDate - leftDate) * (position % 1)).toISOString().slice(0, 10)

  return <section id="ky-niem" className="memories-section shell section-space" aria-labelledby="memories-title">
    <BlurFade inView blur="0px" className="memory-heading">
      <div><PillBadge className="mood-feature-label memory-badge">Kỷ niệm</PillBadge><h2 id="memories-title">Câu chuyện mình,<br />qua từng ngày nhỏ.</h2><p className="memory-intro">Lưu ảnh và lời kể, xem lại theo từng cột mốc.</p></div>
      <div className="memory-years" role="group" aria-label="Lọc kỷ niệm theo năm">{['all', '2024', '2025', '2026'].map(value => <button className="pill-control" key={value} type="button" aria-pressed={year === value} onClick={() => changeYear(value)}>{value === 'all' ? 'Tất cả' : value}</button>)}</div>
    </BlurFade>

    <BlurFade inView delay={.1}><div ref={viewport} className={`memory-viewport${dragging ? ' is-dragging' : ''}`} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={event => pointerEnd(event)} onPointerCancel={event => pointerEnd(event, true)} onLostPointerCapture={event => { if (event.target === event.currentTarget) pointerEnd(event, true) }} onClickCapture={event => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation() } }} style={{ '--memory-card-width': `${metrics.card}px`, '--memory-gap': `${metrics.gap}px`, '--memory-thumb-offset': `${curveY(position) - 60}px` } as CSSProperties}>
      <div className="memory-track" style={{ transform: `translate3d(${-offset}px, 0, 0)` }}>
        <svg className="memory-curve" width={moments.length * step - metrics.gap} height="110" aria-hidden="true">
          <defs><linearGradient id={threadGradient} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#A45B72" /><stop offset="25%" stopColor="#CC8D80" /><stop offset="50%" stopColor="#A75D74" /><stop offset="75%" stopColor="#D39C85" /><stop offset="100%" stopColor="#A45B72" /></linearGradient></defs>
          <path d={curve} fill="none" stroke={`url(#${threadGradient})`} strokeWidth="1.35" strokeLinecap="round" />
          {points.map((point, index) => <g key={moments[index].id} transform={`translate(${point.x} ${point.y})`} className={selectedIndex === index ? 'memory-knot is-selected' : 'memory-knot'}>
            <path d="M-1 0C-4-5-10-6-9-1C-8 3-4 3-1 0ZM1 0C4-5 10-6 9-1C8 3 4 3 1 0ZM-1 1L-5 7L-2 5L0 7L1 1M1 1L5 7L5 4L8 5L2 0" fill="var(--paper)" stroke={`url(#${threadGradient})`} strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
          </g>)}
        </svg>
        {moments.map((moment, index) => <article key={moment.id} className={`memory-event${selectedIndex === index ? ' is-active' : ''}`} aria-hidden={index * step + metrics.card / 2 < offset || index * step + metrics.card / 2 > offset + metrics.width} style={{ '--memory-event-offset': `${index % 2 ? 60 : 0}px` } as CSSProperties}>
          <button type="button" className="memory-date" tabIndex={index * step + metrics.card / 2 < offset || index * step + metrics.card / 2 > offset + metrics.width ? -1 : 0} aria-label={`Đến mốc ${memoryDate(moment.date)}`} aria-current={selectedIndex === index ? 'date' : undefined} onClick={() => goTo(index)}><time dateTime={moment.date}>{memoryDate(moment.date)}</time></button>
          <h3>{moment.title}</h3>
          <div className="memory-photo"><img src={moment.image} alt={moment.alt} width="1200" height="800" draggable="false" loading={index < 3 ? "eager" : "lazy"} decoding="async" /></div>
          <p>{moment.caption}</p>
        </article>)}
      </div>
      <input ref={range} className="memory-scrubber" type="range" min="0" max="1000" step="1" value={maximum ? Math.round(position / maximum * 1000) : 0} aria-label="Tua dòng thời gian kỷ niệm" aria-valuetext={`${memoryDate(active.date)} — ${active.title}`} onKeyDown={keyboard} onPointerDown={() => { stop(); scrubTarget.current = positionRef.current; setScrubbing(true) }} onChange={event => { scrubTarget.current = Number(event.currentTarget.value) / 1000 * maximum; goTo(scrubTarget.current) }} onPointerUp={() => { setScrubbing(false); goTo(Math.round(scrubTarget.current)) }} onPointerCancel={() => { setScrubbing(false); goTo(Math.round(scrubTarget.current)) }} style={{ left: metrics.card / 2 - 14, width: Math.max(1, metrics.width - metrics.card + 28), top: curveY(position) - 16 }} />
      {scrubbing && <output className="memory-scrub-date" style={{ left: metrics.card / 2 + position / Math.max(1, maximum) * (metrics.width - metrics.card), top: curveY(position) + 18 }}>{memoryDate(currentDate)}</output>}
    </div></BlurFade>

  </section>
}
