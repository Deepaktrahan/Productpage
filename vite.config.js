timport { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Productpagereact/', // Replace 'PRODUCTPAGE' with your repository name
})
