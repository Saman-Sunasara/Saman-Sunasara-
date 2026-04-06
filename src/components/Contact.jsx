import { motion } from 'framer-motion'
import { Download, Mail, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Open to internships, collaborations, and meaningful product work."
          description="If you are building something in AI, web, or product engineering, I would be happy to connect."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(2,6,23,0.5)] backdrop-blur-3xl sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <Mail size={28} />
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">Direct Contact</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 block font-display text-2xl text-white transition hover:text-accent sm:text-4xl"
              >
                {profile.email}
              </a>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
                <Phone size={16} className="text-accent" />
                {profile.phone}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-sky-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950"
              >
                <Send size={16} />
                Start a Conversation
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:border-accent/40 hover:bg-white/10"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
