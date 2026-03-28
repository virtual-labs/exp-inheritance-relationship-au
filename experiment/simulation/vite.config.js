import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function stripLeadingUnderscores(name) {
  const s = String(name ?? 'chunk').replace(/^_+/, '')
  return s || 'chunk'
}

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: (chunkInfo) =>
          `js/${stripLeadingUnderscores(chunkInfo.name)}-[hash].js`,
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          const ext = name.split('.').pop()?.toLowerCase() || ''

          if (ext === 'css') {
            return 'css/[name]-[hash][extname]'
          }

          const imageAndVideoExts = [
            'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif', 'ico',
            'mp4', 'webm', 'ogg', 'mov', 'm4v'
          ]

          if (imageAndVideoExts.includes(ext)) {
            return 'images/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})