import { motion } from 'framer-motion'
import { BrainCircuit, BriefcaseBusiness, Cpu, GraduationCap } from 'lucide-react'
import { profile } from '../data/portfolio'

const highlights = [
  {
    icon: BrainCircuit,
    label: 'AI Systems',
    value: 'Federated learning, computer vision, forecasting, and model delivery for practical use cases.',
  },
  {
    icon: Cpu,
    label: 'Engineering',
    value: 'React, Node.js, Django, MongoDB, and API-driven full-stack development.',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Execution',
    value: 'Project-driven work with attention to performance, clarity, and business usefulness.',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: profile.education,
  },
]

export function HeroShowcase() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-3xl">
      <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/45 p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Profile Snapshot</p>
        <h3 className="mt-3 font-display text-2xl text-white">Clean execution with real-world focus</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{profile.objective}</p>
      </div>
      <div className="mt-4 grid gap-3">
        {highlights.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.26 + index * 0.08 }}
              className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/45 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{item.value}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
