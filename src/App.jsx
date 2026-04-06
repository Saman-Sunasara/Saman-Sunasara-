import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { About } from './components/About'
import { AmbientBackground } from './components/AmbientBackground'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useClickSound } from './hooks/useClickSound'

const Chatbot = lazy(() => import('./components/Chatbot').then((module) => ({ default: module.Chatbot })))

function App() {
  const [loading, setLoading] = useState(true)
  useClickSound()

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1450)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base text-white">
      <AmbientBackground />
      <CustomCursor />
      {loading && <Loader />}
      <div className="relative z-10">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </motion.main>
      </div>
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  )
}

export default App
