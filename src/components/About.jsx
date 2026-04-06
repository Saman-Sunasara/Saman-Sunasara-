import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligence into every layer of the product."
          description="I design modern systems that combine machine learning, immersive interfaces, and scalable web engineering into experiences that feel both technically sharp and emotionally intuitive."
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(2,6,23,0.5)] backdrop-blur-3xl sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-accent/10" />
          <div className="absolute -right-20 top-0 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-lg leading-8 text-slate-200">
                My work sits at the intersection of AI/ML, full-stack development, and product experience.
                From federated learning pipelines to polished SaaS interfaces, I build systems that solve
                meaningful problems while still feeling premium and human-centered.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                I enjoy translating deep technical complexity into elegant interactions, whether that means
                deploying real-time computer vision, crafting predictive models, or shaping frontend systems
                with motion, depth, and clarity.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ['Focus', 'AI systems, immersive web experiences, full-stack products'],
                ['Strength', 'Turning advanced engineering into clear, engaging user value'],
                ['Style', 'Fast iteration, elegant execution, future-facing design'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <p className="text-xs uppercase tracking-[0.35em] text-accent">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
