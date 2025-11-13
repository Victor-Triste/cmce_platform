import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools()
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@cmce/utils': fileURLToPath(new URL('../../packages/utils/src', import.meta.url)),
      '@cmce/ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
      '@cmce/types': fileURLToPath(new URL('../../packages/types/src', import.meta.url)),
      '@cmce/config': fileURLToPath(new URL('../../packages/config/src', import.meta.url))
    }
  },

  server: {
    port: 5174,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    fs: {
      allow: ['..', '../packages']
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1d4ed8',
          'border-radius-base': '8px'
        }
      }
    }
  },

  optimizeDeps: {
    exclude: ['@cmce/utils', '@cmce/ui', '@cmce/config', '@cmce/types']
  },

  build: {
    sourcemap: false,
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          antd: ['ant-design-vue']
        }
      }
    }
  }
})

