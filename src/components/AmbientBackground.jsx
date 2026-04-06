import { motion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 7 + 9) % 100}%`,
  top: `${(index * 13 + 11) % 100}%`,
  duration: 8 + (index % 6),
  delay: index * 0.3,
}))

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent/60 shadow-[0_0_18px_rgba(105,240,255,0.7)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
