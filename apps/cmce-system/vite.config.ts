import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import path from "path";

// Configuración optimizada para entorno corporativo
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],

  resolve: {
    alias: {
  "@": fileURLToPath(new URL("./src", import.meta.url)),
  "@cmce/utils": path.resolve(__dirname, "../../packages/utils/src"),
  "@cmce/ui": path.resolve(__dirname, "../../packages/ui/src"),
  "@cmce/types": path.resolve(__dirname, "../../packages/types/src"),
  "@cmce/config": path.resolve(__dirname, "../../packages/config/src")
}
  },

  server: {
    port: 5174, // distinto al website
    open: true,
    proxy: {
      // Ejemplo: redirigir llamadas al backend FastAPI
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // Personaliza los colores principales de Ant Design
          "primary-color": "#1d4ed8", // azul Tailwind (azul marino)
          "border-radius-base": "8px"
        }
      }
    }
  },

  optimizeDeps: {
    exclude: [
      "@ui",
      "@utils",
      "@types",
      "@config"
    ]
  },

  build: {
    sourcemap: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue", "vue-router", "pinia"],
          antd: ["ant-design-vue"]
        }
      }
    }
  }
});

