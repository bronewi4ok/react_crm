import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/shared/assets/icons/')],
      symbolId: '[dir]-[name]',
      customDomId: 'svg-sprite',
      inject: 'body-last',
    }),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
