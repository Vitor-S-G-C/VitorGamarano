import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/componentes',
      '@pages': '/src/page',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@types': '/src/types',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'vendor-utils': ['react-icons', 'react-slick', 'slick-carousel'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Força usar o esbuild nativo e evita depender de terser no build do Vercel
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
})
