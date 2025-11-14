<template>
  <ConfigProvider :theme="themeConfig">
    <Layout class="min-h-screen bg-gray-50 dark:bg-[#0d1a3d] transition-colors duration-500">
      <MyHeader />
      <!-- <ThemeSwitcher /> -->
      
      <LayoutContent class="flex-1 transition-all duration-300"
        :style="{
          paddingTop: headerHeight + 'px'
        }">
        <router-view />
      </LayoutContent>

      <Footer />
    </Layout>
  </ConfigProvider>
</template>


<script lang="ts" setup>
import { computed } from 'vue';

import Footer from '@cmce/ui/components/MyFooter.vue'
import MyHeader from '@/components/MyHeader.vue';
import { Layout, LayoutContent } from 'ant-design-vue';
import { ConfigProvider, theme } from 'ant-design-vue';
import { useAppConfig } from '@/composables/useAppConfig';
import { useHeaderHeight } from '@/composables/useHeaderHeight'

const { headerHeight } = useHeaderHeight()

// import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

const { theme: appTheme } = useAppConfig();

const themeConfig = computed(() => ({
  algorithm: appTheme.value === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
}));


</script>