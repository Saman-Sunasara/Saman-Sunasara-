import { motion } from 'framer-motion'
import { BrainCircuit, BriefcaseBusiness, Cpu, GraduationCap } from 'lucide-react'
import { profile } from '../data/portfolio'

const highlights = [
  {
    icon: BrainCircuit,
    label: 'AI / ML',
    value: 'Federated learning, computer vision, LSTMs, TensorFlow, PyTorch, and practical model workflows.',
  },
  {
    icon: Cpu,
    label: 'Engineering',
    value: 'React, Node.js, Django, MongoDB, REST APIs, and full project delivery from idea to deployment.',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Project Focus',
    value: 'Real systems for privacy-aware AI, emotion tracking, forecasting, and client-facing product builds.',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: profile.education,
  },
]

export function HeroShowcase() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-3xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(105,240,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(124,92,255,0.12),transparent_32%)]" />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/10" />
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Profile Snapshot</p>
          <h3 className="mt-3 font-display text-2xl text-white">Project-driven builder with AI depth</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">{profile.objective}</p>
        </motion.div>

        <div className="mt-6 grid gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32 + index * 0.08 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/45 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
