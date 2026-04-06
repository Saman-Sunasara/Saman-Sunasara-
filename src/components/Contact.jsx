import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s turn ambitious ideas into something unforgettable."
          description="For collaborations, product builds, AI systems, or modern web experiences, reach out and let’s create something that feels ahead of the curve."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_30px_90px_rgba(2,6,23,0.5)] backdrop-blur-3xl sm:p-12"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
            <Mail size={28} />
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">Direct Email</p>
          <a
            href="mailto:samansunasara5@gmail.com"
            className="mt-4 block font-display text-2xl text-white transition hover:text-accent sm:text-4xl"
          >
            samansunasara5@gmail.com
          </a>
          <a
            href="mailto:samansunasara5@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-violet px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-950"
          >
            Start a Conversation
            <Send size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
