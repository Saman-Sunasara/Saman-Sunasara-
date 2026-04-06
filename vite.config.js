import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three-core'
          }

          if (id.includes('@react-three') || id.includes('@react-spring') || id.includes('/maath/')) {
            return 'three-react'
          }

          if (id.includes('node_modules/framer-motion')) {
            return 'motion'
          }

          return undefined
        },
      },
    },
  },
})
