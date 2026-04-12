import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy definitivo Vercel
// Detecta o ambiente
const isProd = process.env.NODE_ENV === 'production';
const isVercel = !!process.env.VERCEL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Usa '/TC-cine/' apenas em build de produção para GitHub (não Vercel).
  // No desenvolvimento local ou na Vercel, usa '/'
  base: (isProd && !isVercel) ? '/TC-cine/' : '/',
  server: {
    host: true,
    port: 5173
  }
})
