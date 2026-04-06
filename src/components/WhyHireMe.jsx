import { motion } from 'framer-motion'
import { Brain, Briefcase, Rocket, ShieldCheck } from 'lucide-react'
import { whyHireMe } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const icons = [Brain, Briefcase, Rocket, ShieldCheck]

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Hire Me"
          title="A builder who likes solving difficult problems clearly."
          description="I am most effective where thoughtful engineering, fast learning, and real-world product thinking need to meet in one place."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyHireMe.map((item, index) => {
            const Icon = icons[index]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.35)] backdrop-blur-2xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
