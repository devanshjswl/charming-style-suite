import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} id="about" className="relative py-32 md:py-44 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute -right-40 top-10 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full" style={{ background: 'radial-gradient(circle, var(--turf-green) 0%, transparent 65%)' }} />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: 'var(--turf-glow)' }} />
              <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/60">01 — About</span>
            </div>
            <h2 className="font-display uppercase text-5xl md:text-6xl leading-[0.95] tracking-tight">
              A new home<br />for the games.
            </h2>
          </motion.div>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="text-2xl md:text-3xl leading-snug text-foreground/90 text-balance"
          >
            Hattrick was built for the players who treat 8&nbsp;PM like kickoff —
            or first ball — and espresso like a halftime ritual. Stadium-grade
            artificial turf for football and cricket, ICC-spec nets, and a cafe
            that doesn't know the difference between a midfielder, a top-order
            bat, and a regular.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { k: 'Dual Sport', v: 'FIFA-spec football turf and ICC-grade cricket pitch & nets under one roof.' },
              { k: 'Floodlit', v: 'LED stadium floodlighting tuned for true bounce, true flight, true atmosphere.' },
              { k: 'Cafe Culture', v: 'Specialty coffee, post-match plates, and a soundtrack that gets it.' },
            ].map((item, i) => (
              <motion.div
                key={item.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6"
              >
                <div className="text-[11px] tracking-[0.28em] uppercase text-foreground/50 mb-3">{item.k}</div>
                <p className="text-foreground/85 text-sm leading-relaxed">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}