import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroVideo from '../../assets/hero-turf.mp4.asset.json'

// Cinematic turf footage (CDN)
const VIDEO_SRC = heroVideo.url
const VIDEO_FALLBACK = '/videos/hero.mp4'

const POSTER =
  'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1920&q=80'

export function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hattrick hero"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink"
      style={{ backgroundColor: 'var(--ink)' }}
    >
      {/* Video layer with parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          <source src={VIDEO_FALLBACK} type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,8,10,0.55) 0%, rgba(7,8,10,0.15) 35%, rgba(7,8,10,0.55) 70%, rgba(7,8,10,0.95) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background:
            'radial-gradient(70% 50% at 50% 60%, rgba(255,107,26,0.18), transparent 60%)',
        }}
      />
      {/* Floodlight bloom */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(255, 240, 200, 0.18), transparent 65%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10 max-w-[1400px] mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="w-8 h-px"
            style={{ background: 'var(--sunset)' }}
          />
          <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/80">
            Turf • Cafe • Community
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display uppercase text-balance text-[18vw] md:text-[10vw] leading-[0.85] tracking-tight text-white"
          style={{ textShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
        >
          Football.
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #ffffff 0%, var(--sunset-soft) 60%, var(--sunset) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Cricket. Culture.
          </span>
        </motion.h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-md text-foreground/75 text-base md:text-lg"
          >
            A floodlit turf for football and cricket — built where stadium
            energy meets neighborhood ritual. Kick off, take guard, stay for
            the espresso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="#visit"
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full overflow-hidden"
              style={{ background: 'var(--sunset)', color: '#0a0a0a' }}
            >
              <span className="relative z-10 text-xs tracking-[0.24em] uppercase font-semibold">
                Book a Pitch
              </span>
              <span className="relative z-10 w-2 h-2 rounded-full bg-ink" />
            </a>
            <a
              href="#turf"
              className="text-xs tracking-[0.24em] uppercase text-foreground/80 hover:text-foreground border-b border-foreground/30 pb-1"
            >
              Explore the Turf →
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--foreground), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
