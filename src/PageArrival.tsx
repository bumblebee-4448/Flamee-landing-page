import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Brand } from './components'
import './page-motion.css'

export function PageArrival({ ready }: { ready: boolean }) {
  const [show, setShow] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (ready) return
    // Cached visits finish before this delay, avoiding a loading badge flash.
    const timeout = setTimeout(() => setShow(true), 180)
    return () => clearTimeout(timeout)
  }, [ready])

  return <AnimatePresence>{show && !ready && <motion.div className="page-arrival" role="status" aria-live="polite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .3 }}>
    <div className="page-arrival-brand" aria-hidden="true" inert><Brand /></div>
    <span>Đang mở không gian của hai mình…</span><span className="page-arrival-track" aria-hidden="true"><span /></span>
  </motion.div>}</AnimatePresence>
}
