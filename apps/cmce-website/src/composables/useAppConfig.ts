import { ref, watch } from 'vue';
import type { Locale } from 'ant-design-vue/es/locale';
import esES from 'ant-design-vue/es/locale/es_ES';
import enUS from 'ant-design-vue/es/locale/en_US';

export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';

const THEME_KEY = 'app-theme';
const LANGUAGE_KEY = 'app-language';

// Estado global compartido
const theme = ref<Theme>((localStorage.getItem(THEME_KEY) as Theme) || 'light');
const language = ref<Language>((localStorage.getItem(LANGUAGE_KEY) as Language) || 'es');

export function useAppConfig() {
  const antLocales: Record<Language, Locale> = {
    es: esES,
    en: enUS,
  };

  // Aplicar tema al DOM
  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Inicializar tema
  applyTheme(theme.value);

  // Observar cambios de tema
  watch(theme, (newTheme) => {
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  });

  // Observar cambios de idioma
  watch(language, (newLanguage) => {
    localStorage.setItem(LANGUAGE_KEY, newLanguage);
  });

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  const setLanguage = (lang: Language) => {
    language.value = lang;
  };

  return {
    theme,
    language,
    toggleTheme,
    setLanguage,
    antLocale: () => antLocales[language.value],
  };
}