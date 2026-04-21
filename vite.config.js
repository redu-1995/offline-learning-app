import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // This helps the app work offline immediately
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Offline Learning App',
        short_name: 'LearnApp',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // You'll need an icon later, but this is fine for now
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})