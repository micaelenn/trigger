import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "popup",
    rollupOptions: {
      output: {
        entryFileNames: `popup.js`,
        chunkFileNames: `popup.js`,
        assetFileNames: `popup.[ext]`,
      },
    },
  },
})
