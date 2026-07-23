import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // relative — works at twospaceneedles.org AND mounted under 2spaceneedles.com/game/
  plugins: [react()],
})
