import { motion } from 'framer-motion'

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-base"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          className="h-24 w-24 rounded-full border border-accent/20 border-t-accent"
        />
        <div className="absolute inset-0 flex items-center justify-center font-display text-xs uppercase tracking-[0.4em] text-white">
          SS
        </div>
      </div>
    </motion.div>
  )
}
