import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A stack tuned for modern intelligence and modern interfaces."
          description="Core strengths across AI engineering, full-stack systems, and experience design, presented as modular capabilities rather than a static list."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-100 shadow-glass backdrop-blur-xl transition hover:border-accent/40 hover:text-accent"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
