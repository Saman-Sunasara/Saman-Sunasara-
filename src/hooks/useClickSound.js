import { useEffect, useRef } from 'react'

export function useClickSound() {
  const audioContextRef = useRef(null)

  useEffect(() => {
    function getContext() {
      if (audioContextRef.current) return audioContextRef.current
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) return null
      audioContextRef.current = new AudioContextClass()
      return audioContextRef.current
    }

    function playClickSound() {
      const context = getContext()
      if (!context) return

      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(620, context.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(420, context.currentTime + 0.045)
      gain.gain.setValueAtTime(0.0001, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.03, context.currentTime + 0.01)
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.07)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start()
      oscillator.stop(context.currentTime + 0.08)
    }

    function handlePointerDown(event) {
      const target = event.target
      if (!(target instanceof HTMLElement)) return
      if (!target.closest('button, a, [data-click-sound]')) return
      playClickSound()
    }

    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    return () => window.removeEventListener('pointerdown', handlePointerDown)
  }, [])
}
