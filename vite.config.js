import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PRODUCTPAGE/', // Replace 'PRODUCTPAGE' with your repository name
})