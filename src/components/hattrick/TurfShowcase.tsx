import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Mesh, Group } from 'three'

function Ball() {
  const ref = useRef<Mesh>(null)
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.6
      ref.current.rotation.x += dt * 0.25
    }
  })
  return (
    <mesh ref={ref} position={[0, 0.6, 0]} castShadow>
      <sphereGeometry args={[0.9, 64, 64]} />
      <meshStandardMaterial color="#f5f5f4" roughness={0.35} metalness={0.05} />
    </mesh>
  )
}

function TurfField() {
  const group = useRef<Group>(null)
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.08
  })
  return (
    <group ref={group}>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.4, 0]} receiveShadow>
        <planeGeometry args={[7, 4.5]} />
        <meshStandardMaterial color="#0f5132" roughness={1} />
      </mesh>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          rotation-x={-Math.PI / 2}
          position={[-3 + i * 1.2 + 0.6, -0.39, 0]}
        >
          <planeGeometry args={[0.6, 4.5]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#16a34a' : '#0f5132'} roughness={1} />
        </mesh>
      ))}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.385, 0]}>
        <planeGeometry args={[0.04, 4.5]} />
        <meshStandardMaterial color="#f5f5f4" />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.385, 0]}>
        <ringGeometry args={[0.85, 0.9, 64]} />
        <meshStandardMaterial color="#f5f5f4" />
      </mesh>

      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.6}>
        <Ball />
      </Float>

      {[[-3.4, -2.2], [3.4, -2.2], [-3.4, 2.2], [3.4, 2.2]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.6, z]}>
          <cylinderGeometry args={[0.04, 0.04, 2.2, 8]} />
          <meshStandardMaterial color="#2a2f35" />
        </mesh>
      ))}

      {/* Cricket stumps at center for dual-sport feel */}
      {[-0.12, 0, 0.12].map((x, i) => (
        <mesh key={`stump-${i}`} position={[x, 0.05, 1.4]}>
          <cylinderGeometry args={[0.025, 0.025, 0.9, 12]} />
          <meshStandardMaterial color="#f5f5f4" />
        </mesh>
      ))}
      {[-0.06, 0.06].map((x, i) => (
        <mesh key={`bail-${i}`} position={[x, 0.52, 1.4]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.14, 8]} />
          <meshStandardMaterial color="#e7d9b5" />
        </mesh>
      ))}
    </group>
  )
}

export function TurfShowcase() {
  return (
    <section id="turf" className="relative py-32 md:py-44 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: 'var(--sunset)' }} />
              <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/60">02 — Football & Cricket</span>
            </div>
            <h2 className="font-display uppercase text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Two sports.<br />One stadium<br />
              <span style={{ color: 'var(--turf-glow)' }}>grade surface.</span>
            </h2>
            <p className="mt-6 text-foreground/75 text-lg leading-relaxed max-w-md">
              60mm FIFA Quality Pro fibre for football, ICC-grade matting and
              run-ups for cricket — shock-pad sub-base, true bounce, true flight.
              Built for 7-a-side, 5-a-side, box cricket, and the occasional
              Sunday final.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/75">
              {['7 a-side football pitch', '5 a-side split pitch', 'Box cricket arena', 'ICC-spec practice nets', 'All-weather drainage', 'LED stadium lighting'].map(
                (s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--turf-glow)' }} />
                    {s}
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="md:col-span-7 order-1 md:order-2 relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden border border-border"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 40%, rgba(22,163,74,0.18), transparent 70%), linear-gradient(180deg, #0b0d10, #07080a)',
          }}
        >
          <Canvas shadows camera={{ position: [4, 3.2, 5.5], fov: 38 }} dpr={[1, 1.8]}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.35} />
              <directionalLight
                position={[6, 8, 4]}
                intensity={1.4}
                color={'#ffe6b8'}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <directionalLight position={[-6, 5, -4]} intensity={0.6} color={'#9be7a8'} />
              <TurfField />
              <ContactShadows position={[0, -0.4, 0]} opacity={0.55} scale={10} blur={2.5} far={4} />
              <Environment preset="night" />
            </Suspense>
          </Canvas>
          <div className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase text-foreground/60">
            Live 3D preview
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.28em] uppercase text-foreground/60">
            FIFA Quality Pro · 60mm
          </div>
        </motion.div>
      </div>
    </section>
  )
}