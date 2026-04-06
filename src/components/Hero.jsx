import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import { profile, socialLinks } from '../data/portfolio'
import { HeroShowcase } from './HeroShowcase'

const heroCopy = {
  headline: 'Building Intelligent Systems That Solve Real-World Problems',
  subtext:
    'I design and develop AI-driven solutions and scalable web applications with a focus on performance, usability, and real-world impact.',
}

export function Hero() {
  return (
    <section id="home" className="relative px-4 pb-28 pt-12 sm:px-6 sm:pt-20 lg:pb-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_15%_0%,rgba(105,240,255,0.14),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(244,114,182,0.12),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="relative w-[72px] shrink-0 sm:w-[84px]"
            >
              <div className="rounded-[1.35rem] bg-gradient-to-br from-accent via-sky-300 to-rose p-[1.5px] shadow-[0_0_26px_rgba(105,240,255,0.18)]">
                <div className="overflow-hidden rounded-[calc(1.35rem-1.5px)] bg-slate-950/90 p-1.5">
                  <img
                    src={profile.profileImage}
                    alt="Portrait of Saman Sunasara"
                    className="aspect-square w-full rounded-[1rem] object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Saman Sunasara</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-accent">{profile.title}</p>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: 'easeOut' }}
            className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.9] text-white sm:text-7xl"
          >
            {heroCopy.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {heroCopy.subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-sky-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_12px_35px_rgba(105,240,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(105,240,255,0.12)]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
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
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: 'easeOut' }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle,rgba(105,240,255,0.14),transparent_42%)] blur-3xl" />
          <div className="lg:pb-6">
            <HeroShowcase />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
