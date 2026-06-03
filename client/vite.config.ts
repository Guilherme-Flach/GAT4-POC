import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias: {
      '@gat4/shared': path.resolve(__dirname, '../shared/src'),
    },
    dedupe: ['zod'],
  },
})
