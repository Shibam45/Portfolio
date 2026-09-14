import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// IMPORTANT: Replace 'Portfolio-Website' below with your EXACT GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // GitHub repo name at https://github.com/Shibam45/Portfolio
  server: {
    port: 3000,
    open: false
  }
})
