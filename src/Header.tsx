import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Brand } from './components'
import { ShimmerButton } from './components/magicui/shimmer-button'

const links = [
  { href: '#ket-noi', label: 'Kết nối' },
  { href: '#cam-xuc', label: 'Cảm xúc' },
  { href: '#goi-y-quan-tam', label: 'Gợi ý quan tâm' },
  { href: '#nhiem-vu', label: 'Nhiệm vụ' },
  { href: '#ky-niem', label: 'Kỷ niệm' },
  { href: '#goi-thanh-vien', label: 'Gói thành viên' },
]
const membershipLink = links[links.length - 1]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 64)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1201px)')
    const onResize = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', close)
    desktop.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', close)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  return <div className="header-slot">
    <div className="header-positioner">
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <Brand />
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {links.slice(0, -1).map(link => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <ShimmerButton type="button" className="header-cta" background="#F2E8DC" shimmerColor="#FFFFFF" shimmerSize="1px" shimmerDuration="5s" style={{ color: "#513C30" }} onClick={() => { setOpen(false); window.location.hash = membershipLink.href.slice(1) }}><span className="header-cta-label">{membershipLink.label}</span></ShimmerButton>
          <button id="menu-toggle" className="mobile-toggle" aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
        <nav id="mobile-menu" className="mobile-nav" aria-label="Điều hướng chính" hidden={!open}>
          {links.map(link => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}
        </nav>
      </header>
    </div>
  </div>
}
