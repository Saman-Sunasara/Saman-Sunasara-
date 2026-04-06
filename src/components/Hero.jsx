import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import { profile, socialLinks } from '../data/portfolio'
import { HeroShowcase } from './HeroShowcase'

const titleWords = ['clear', 'useful', 'well-built']

export function Hero() {
  return (
    <section id="home" className="relative px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(105,240,255,0.12),transparent_58%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-200 backdrop-blur-xl"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
            className="mt-8 font-display text-5xl font-semibold leading-[0.92] text-white sm:text-7xl"
          >
            {profile.name.split(' ')[0]}
            <span className="block bg-gradient-to-r from-white via-slate-200 to-accent bg-clip-text text-transparent">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {profile.title} focused on building systems that feel <span className="text-white">{titleWords[0]}</span>,{' '}
            <span className="text-white">{titleWords[1]}</span>, and <span className="text-white">{titleWords[2]}</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-400"
          >
            {profile.education}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-sky-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_12px_35px_rgba(105,240,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
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
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(105,240,255,0.12),transparent_62%)] blur-3xl" />
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  )
}
