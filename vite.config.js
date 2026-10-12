import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite abrir la carpeta dist desde cualquier ruta o hosting estático
export default defineConfig({
  base: './',
  plugins: [react()],
})
