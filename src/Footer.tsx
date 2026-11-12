import { ArrowUp } from 'lucide-react'
import { Brand } from './components'
import { BlurFade } from './components/magicui/blur-fade'
import './footer.css'

const links = [
  ['#ket-noi', 'Kết nối cảm xúc'],
  ['#cam-xuc', 'Cảm xúc'],
  ['#goi-y-quan-tam', 'Gợi ý quan tâm'],
  ['#nhiem-vu', 'Nhiệm vụ'],
  ['#ky-niem', 'Kỷ niệm'],
  ['#goi-thanh-vien', 'Gói thành viên'],
] as const

export function Footer() {
  return <footer className="flamee-footer shell">
    <BlurFade inView className="flamee-footer-main">
      <div className="flamee-footer-brand"><Brand /><p>Không gian chung của hai người.<br />Kết nối, chia sẻ và lưu giữ kỷ niệm.</p></div>
      <nav className="flamee-footer-nav" aria-label="Khám phá Flamee"><p>Khám phá Flamee</p><div>{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</div></nav>
      <a className="flamee-footer-up" href="#dau-trang" aria-label="Về đầu trang"><ArrowUp size={20} aria-hidden="true" /></a>
    </BlurFade>
    <BlurFade inView delay={.08} className="flamee-footer-bottom"><p>© {new Date().getFullYear()} Flamee.</p><span>Một không gian. Hai người.</span><a href="#dau-trang">Về đầu trang ↑</a></BlurFade>
  </footer>
}
