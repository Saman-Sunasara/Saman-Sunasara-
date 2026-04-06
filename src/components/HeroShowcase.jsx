import { motion } from 'framer-motion'
import { BrainCircuit, BriefcaseBusiness, Cpu, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: BrainCircuit,
    label: 'AI Systems',
    value: 'Federated learning, CNNs, LSTMs, privacy-aware model thinking, and practical ML delivery.',
  },
  {
    icon: Cpu,
    label: 'Full-Stack Build',
    value: 'React, Node.js, frontend systems, APIs, and product workflows that are ready to scale.',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Working Style',
    value: 'Fast iteration, premium UI taste, and a focus on making technical products feel intuitive.',
  },
]

export function HeroShowcase() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-3xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(105,240,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(124,92,255,0.18),transparent_32%)]" />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/10" />
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Current Focus</p>
            <h3 className="mt-3 font-display text-2xl text-white">AI plus product engineering</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
              Building intelligent web experiences that balance technical depth, visual polish, and real-world usability.
            </p>
          </div>
          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent sm:flex">
            <Sparkles size={24} />
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5"
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
