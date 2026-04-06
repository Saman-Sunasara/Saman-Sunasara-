import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export function ProjectCard({ project, onExplain, explanation, loading, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateXRaw = useMotionValue(0)
  const rotateYRaw = useMotionValue(0)
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 18, mass: 0.4 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 18, mass: 0.4 })

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
    rotateYRaw.set(((x / rect.width) - 0.5) * 10)
    rotateXRaw.set(-((y / rect.height) - 0.5) * 10)
  }

  function resetTilt() {
    rotateXRaw.set(0)
    rotateYRaw.set(0)
  }

  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(105,240,255,0.18), transparent 70%)`

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.01 }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-3xl"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: spotlight }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.08]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">{project.stats}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.08] p-3 text-accent shadow-[0_0_24px_rgba(105,240,255,0.12)]">
            <Sparkles size={18} />
          </div>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onExplain(project.title)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-violet px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950 shadow-[0_10px_30px_rgba(105,240,255,0.2)] transition duration-300 hover:-translate-y-0.5"
          >
            View Project
            <ArrowUpRight size={16} />
          </button>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
            Offline AI Explainer
          </span>
        </div>
        {(loading || explanation) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-3xl border border-accent/20 bg-slate-950/55 p-4 text-sm leading-7 text-slate-200"
          >
            {loading ? 'Thinking through the best summary...' : explanation}
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}
