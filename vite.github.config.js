import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config specifically for GitHub Pages deployment
// Output goes to /docs so GitHub Pages can serve it (Pages supports / or /docs on main branch)
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // GitHub Pages serves at shibam45.github.io/Portfolio/
  build: {
    outDir: 'docs'    // GitHub Pages source: /docs folder on main branch
  },
  server: {
    port: 3000,
    open: false
  }
})
