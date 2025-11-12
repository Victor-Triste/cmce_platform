import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';

// Ajusta los paths relativos según la ubicación de cada frontend
const root = __dirname;

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools() // solo en desarrollo
  ],

  resolve: {
    alias: {
      '@': path.resolve(root, './src'),
      '@cmce/utils': path.resolve(root, '../../packages/utils/src'),
      '@cmce/ui': path.resolve(root, '../../packages/ui/src'),
      '@cmce/types': path.resolve(root, '../../packages/types/src'),
      '@cmce/config': path.resolve(root, '../../packages/config/src')
    }
  },

  server: {
    port: root.includes('website') ? 5173 : 5174,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // backend FastAPI
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1d4ed8', // azul marino
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
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          antd: ['ant-design-vue']
        }
      }
    }
  }
});


