import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Obtén el directorio actual
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  
  {
    name: 'app/typescript-parser-options',
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
         project: ['./tsconfig.app.json'], 
        extraFileExtensions: ['.vue'] 
      }
    }
  },
  {
    name: 'app/config-files',
    files: ['*.config.{ts,js,mts,mjs}', 'eslint.config.ts'],
    languageOptions: {
      parserOptions: {
        project: null, 
      }
    }
  }
)
