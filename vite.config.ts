import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import injectPreload from 'unplugin-inject-preload/vite'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    injectPreload({
      files: [
        {
          outputMatch: /lato-(regular|bold)-[a-z-0-9]*\.woff2$/,
          attributes: {
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
        },
      ],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/shared/assets/icons/')],
      symbolId: '[name]',
      customDomId: 'svg-sprite',
      inject: 'body-first',
    }),
    visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@sentry')) return 'monitoring'
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) return 'vendor-redux'
          if (id.includes('@radix-ui') || id.includes('radix-ui')) return 'vendor-ui'
          if (id.includes('motion') || id.includes('framer-motion')) return 'vendor-animation'

          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router-dom/')
          ) {
            return 'vendor-react'
          }

          if (id.includes('zod') || id.includes('react-hook-form') || id.includes('@hookform'))
            return 'vendor-forms'
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
