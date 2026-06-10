import { motion } from 'framer-motion'

export function FinalCTA() {
  return (
    <section id="visit" className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 50%, rgba(255,107,26,0.18), transparent 60%), radial-gradient(40% 60% at 80% 30%, rgba(22,163,74,0.18), transparent 60%)',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-[11px] tracking-[0.32em] uppercase text-foreground/60 mb-6">
            05 — Visit Hattrick
          </div>
          <h2 className="font-display uppercase text-balance text-[14vw] md:text-[9vw] leading-[0.85] tracking-tight">
            See you<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--sunset-soft), var(--sunset))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>under the lights.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-foreground/70 text-lg">
            Open daily until midnight. Walk in, book a pitch, grab a flat white.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
              style={{ background: 'var(--sunset)', color: '#0a0a0a' }}
            >
              <span className="text-xs tracking-[0.24em] uppercase font-semibold">Book a Pitch</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/30 hover:border-foreground/70 transition-colors"
            >
              <span className="text-xs tracking-[0.24em] uppercase">Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}