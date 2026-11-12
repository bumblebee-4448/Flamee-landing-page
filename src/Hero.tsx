import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { PillBadge } from './components'
import journalSrc from './assets/flamee-journal.png?w=1280&format=webp'
import journalSrcSet from './assets/flamee-journal.png?w=480;768;1024;1536&format=webp&as=srcset'

export function Hero({ ready }: { ready: boolean }) {
  const reduced = useReducedMotion()
  return <section className="hero" aria-labelledby="hero-title">
    <motion.div className="hero-layout shell" data-ready={ready} inert={!ready} initial={false} animate={{ opacity: ready ? 1 : 0, y: ready || reduced ? 0 : 8 }} transition={{ duration: reduced ? 0 : .65, ease: [.22, 1, .36, 1] }}>
      <div className="hero-copy">
        <PillBadge>ỨNG DỤNG DÀNH CHO CÁC CẶP ĐÔI</PillBadge>
        <h1 id="hero-title"><span>Có những ngày bình thường,</span><em>chỉ muốn giữ cùng bạn.</em></h1>
        <p className="hero-description">Một tấm ảnh chụp vội, vài dòng kể cuối ngày, một cảm xúc chưa kịp nói. Flamee giữ những điều nhỏ ấy trong không gian riêng của hai người.</p>
        <div className="hero-actions"><a className="hero-primary-cta" href="#cam-xuc"><span className="hero-cta-label">Khám phá Flamee</span><span className="hero-cta-arrow" aria-hidden="true"><ArrowRight size={20} /></span></a><a className="hero-secondary-cta" href="#ket-noi">Cách kết nối <ArrowRight size={18} aria-hidden="true" /></a></div>
      </div>
      <div className="hero-artwork">
        <div className="hero-journal-motion"><img src={journalSrc} srcSet={journalSrcSet} sizes="(max-width: 767px) 100vw, 860px" alt="Nhật ký mở lưu những ngày có nhau: buổi hẹn cà phê, hoàng hôn và kỷ niệm của hai mình" width="1448" height="1086" fetchPriority="high" decoding="async" className="hero-journal" /></div>
      </div>
    </motion.div>
  </section>
}
