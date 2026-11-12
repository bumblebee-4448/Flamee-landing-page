import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ArrowUpRight } from 'lucide-react'

const linkStyles = cva('action group inline-flex items-center justify-center gap-5 font-medium transition-transform active:scale-[.98]', {
  variants: { tone: { coral: 'bg-coral text-ink', dark: 'bg-ink text-paper', paper: 'bg-paper text-ink' }, size: { normal: 'px-7 py-4', small: 'px-5 py-3' } },
  defaultVariants: { tone: 'coral', size: 'normal' },
})

export function ActionLink({ className, children, tone, size, ...props }: ComponentProps<'a'> & VariantProps<typeof linkStyles>) {
  return <a className={twMerge(clsx(linkStyles({ tone, size }), className))} {...props}>{children}<ArrowUpRight size={19} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
}

export function PillBadge({ className = '', children, ...props }: ComponentProps<'p'>) {
  return <p className={`hero-eyebrow ${className}`} {...props}><span className="hero-eyebrow-logo" aria-hidden="true"><img src="/logo&favicon/Flamee.png" width="1058" height="266" alt="" /></span><span>{children}</span></p>
}

export function Brand() {
  return <a href="#dau-trang" className="brand" aria-label="Flamee — Về đầu trang">
    <span className="brand-symbol" aria-hidden="true"><img src="/logo&favicon/Flamee.png" width="1058" height="266" alt="" /></span>
    <span className="brand-wordmark" aria-hidden="true"><img src="/logo&favicon/Flamee.png" width="1058" height="266" alt="" /></span>
  </a>
}
