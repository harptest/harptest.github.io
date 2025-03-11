import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: 'https://harptest.github.io/', // 👈 Must match your GitHub repository name!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Ensures build output goes to 'dist' folder
  },
  assetsInclude: ['**/*.JPG'],
})
