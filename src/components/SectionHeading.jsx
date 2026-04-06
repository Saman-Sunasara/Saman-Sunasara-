import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-accent shadow-[0_0_28px_rgba(105,240,255,0.08)] backdrop-blur-xl">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  )
}
