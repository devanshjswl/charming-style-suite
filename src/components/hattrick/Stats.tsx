import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const items = [
  { value: 7200, suffix: 'm²', label: 'Of Premium Turf' },
  { value: 36000, suffix: 'lx', label: 'Stadium Floodlight' },
  { value: 14, suffix: 'k+', label: 'Matches & Overs Played' },
  { value: 98, suffix: '%', label: 'Player Return Rate' },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const mv = useMotionValue(0)
  const display = useTransform(mv, (v) =>
    to >= 1000 ? Math.round(v).toLocaleString() : Math.round(v).toString(),
  )

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] })
      return controls.stop
    }
  }, [inView, mv, to])

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      <span className="ml-1 text-2xl md:text-3xl" style={{ color: 'var(--sunset)' }}>{suffix}</span>
    </span>
  )
}

export function Stats() {
  return (
    <section id="stats" className="relative py-32 md:py-44 border-y border-border overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px" style={{ background: 'var(--sunset)' }} />
          <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/60">03 — In Numbers</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="font-display uppercase text-5xl md:text-7xl leading-none tracking-tight text-white">
                <Counter to={it.value} suffix={it.suffix} />
              </div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-foreground/55">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}