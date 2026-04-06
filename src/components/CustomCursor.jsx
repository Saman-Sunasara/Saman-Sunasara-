import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 250 })
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 250 })

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX - 10)
      mouseY.set(event.clientY - 10)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-accent/60 bg-accent/20 mix-blend-screen backdrop-blur-sm lg:block"
      style={{ x: cursorX, y: cursorY }}
    />
  )
}
