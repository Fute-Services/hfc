import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Strip stray debug output from production bundles. Lint also blocks console.log
  // in source, this is the safety net.
  esbuild: {
    drop: ['console', 'debugger'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id)) return 'vendor-react'
          if (/[\\/]node_modules[\\/](@mui|@emotion)[\\/]/.test(id)) return 'vendor-mui'
          return 'vendor'
        },
      },
    },
    // The per-tower datasets are ~120k lines of polygon coordinates each. They are
    // already split into their own lazily-loaded chunks, so a large chunk here is
    // expected rather than a problem to fix.
    chunkSizeWarningLimit: 900,
  },
})
