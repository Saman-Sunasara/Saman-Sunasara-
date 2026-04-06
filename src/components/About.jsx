import { motion } from 'framer-motion'
import { certifications, profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A grounded builder with a strong bias toward real projects."
          description="My work is centered on practical AI/ML systems and modern full-stack development, with an emphasis on building things that solve real problems and communicate clearly."
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(2,6,23,0.5)] backdrop-blur-3xl sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-accent/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-lg leading-8 text-slate-200">{profile.objective}</p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                I enjoy building across the full stack, but I am especially drawn to AI systems where privacy,
                usability, and performance all matter at once. That includes federated learning, computer vision,
                predictive modeling, and modern web apps that are cleanly engineered.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-xs uppercase tracking-[0.35em] text-accent">Education</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{profile.education}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-xs uppercase tracking-[0.35em] text-accent">Certifications</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                  {certifications.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
