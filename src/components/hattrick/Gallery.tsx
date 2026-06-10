import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const imgs = [
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80', label: 'Night Kickoff', span: 'md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80', label: 'Stadium Bowl', span: '' },
  { src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80', label: 'First Touch', span: '' },
  { src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80', label: 'Floodlit Pitch', span: 'md:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1556476049-2c1a7a5d4f8b?auto=format&fit=crop&w=1200&q=80', label: 'After Match', span: '' },
  { src: 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1200&q=80', label: 'Cafe Window', span: '' },
]

export function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} id="gallery" className="relative py-32 md:py-44 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: 'var(--turf-glow)' }} />
              <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/60">04 — Gallery</span>
            </div>
            <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-2xl">
              Moments<br />on the turf.
            </h2>
          </div>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-5">
          {imgs.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a]/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-[11px] tracking-[0.28em] uppercase text-white/90">
                {img.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}