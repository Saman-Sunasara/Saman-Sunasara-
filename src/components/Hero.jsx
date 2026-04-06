import { motion } from 'framer-motion'
import { Github, Linkedin, Sparkles } from 'lucide-react'
import { socialLinks } from '../data/portfolio'
import { HeroShowcase } from './HeroShowcase'

const titleWords = ['Intelligent', 'Immersive', 'High-Impact']

export function Hero() {
  return (
    <section id="home" className="relative px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(105,240,255,0.16),transparent_58%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-accent shadow-[0_0_35px_rgba(105,240,255,0.08)] backdrop-blur-xl"
          >
            <Sparkles size={14} />
            AI-Powered Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="mt-8 font-display text-5xl font-semibold leading-[0.92] text-white sm:text-7xl"
          >
            Saman
            <span className="block bg-gradient-to-r from-white via-accent to-rose bg-clip-text text-transparent">
              Sunasara
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            AI/ML Engineer and Full-Stack Developer crafting <span className="text-white">{titleWords[0]}</span>,{' '}
            <span className="text-white">{titleWords[1]}</span>, and{' '}
            <span className="text-white">{titleWords[2]}</span> digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300 shadow-glass backdrop-blur-2xl"
          >
            I build interfaces that feel cinematic, intelligent systems that feel useful, and products that feel ready for the real world.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-violet px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-950 shadow-[0_12px_35px_rgba(105,240,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/10"
            >
              Request Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.label === 'GitHub' ? Github : Linkedin
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-white"
                >
                  <Icon size={18} className="text-accent transition group-hover:scale-110" />
                  {link.label}
                </a>
              )
            })}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(105,240,255,0.14),transparent_62%)] blur-3xl" />
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  )
}
