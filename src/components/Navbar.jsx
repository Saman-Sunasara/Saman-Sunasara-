import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Why Hire Me', href: '#why-hire-me' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.42)] backdrop-blur-3xl">
        <a href="#home" className="font-display text-sm uppercase tracking-[0.35em] text-white sm:text-base">
          Saman Sunasara
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition duration-300 hover:bg-white/5 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumePath}
          download
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent shadow-[0_0_28px_rgba(105,240,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/20"
        >
          <Download size={14} />
          Resume
        </a>
      </div>
    </motion.header>
  )
}
