import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
// export default defineConfig({
//   root: "./src",
//   plugins: [react()]
// })

export default {
  rollupOptions: {
    input: 'src/main.ts',
    format: 'system',
    preserveEntrySignatures: true
  },
  plugins: [reactRefresh()],
}