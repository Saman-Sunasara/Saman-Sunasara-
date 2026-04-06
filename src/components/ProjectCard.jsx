import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

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
    rotateYRaw.set(((x / rect.width) - 0.5) * 7)
    rotateXRaw.set(-((y / rect.height) - 0.5) * 7)
  }

  function resetTilt() {
    rotateXRaw.set(0)
    rotateYRaw.set(0)
  }

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(105,240,255,0.14), transparent 68%)`

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-3xl"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: spotlight }} />
      <div className="relative overflow-hidden rounded-t-[2rem] border-b border-white/10 bg-slate-950/55 p-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:38px_38px] opacity-40" />
        <div className="relative">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">{project.previewLabel}</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Project Snapshot</p>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-200">
                  {project.previewPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Outcome</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{project.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">{project.stats}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={() => onExplain(project.title)}
            className="rounded-full border border-white/10 bg-white/[0.06] p-3 text-slate-200 transition duration-300 hover:border-accent/40 hover:text-accent"
            aria-label={`Explain ${project.title}`}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent/35"
          >
            <Code2 size={16} />
            View Code
          </a>
          <button
            type="button"
            onClick={() => onExplain(project.title)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-sky-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_10px_30px_rgba(105,240,255,0.18)] transition duration-300 hover:-translate-y-0.5"
          >
            <Sparkles size={16} />
            Quick Summary
          </button>
        </div>
        {(loading || explanation) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-3xl border border-accent/20 bg-slate-950/55 p-4 text-sm leading-7 text-slate-200"
          >
            {loading ? 'Preparing a quick breakdown...' : explanation}
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}
