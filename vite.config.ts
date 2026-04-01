import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'figma-asset-resolver',
      enforce: 'pre',
      resolveId(source) {
        if (!source.startsWith('figma:asset/')) {
          return null
        }

        // Map Figma's virtual asset imports to the local exported asset files.
        return path.resolve(__dirname, './src/assets', source.replace('figma:asset/', ''))
      },
    },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
