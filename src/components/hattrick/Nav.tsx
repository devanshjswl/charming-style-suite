import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#turf', label: 'Sports' },
  { href: '#stats', label: 'Stats' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink/60 border-b border-border'
          : 'bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(7,8,10,0.6)' : 'transparent' }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: 'var(--sunset)', boxShadow: '0 0 16px var(--sunset)' }}
          />
          <span className="font-display text-lg tracking-[0.22em] uppercase">Hattrick</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.22em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 hover:border-foreground/60 text-xs tracking-[0.22em] uppercase transition-colors"
        >
          Book a Pitch
        </a>
      </div>
    </motion.header>
  )
}