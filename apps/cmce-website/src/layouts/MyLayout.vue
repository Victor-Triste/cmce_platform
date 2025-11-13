<template>
  <div class="flex flex-col min-h-screen">
    <main
      class="grow bg-white text-gray-900 dark:bg-neutral-950 dark:text-white transition-colors duration-900"
    >
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '@cmce/ui/components/MyFooter.vue'

// import { onMounted } from 'vue'
// import { useTheme } from '@/composables/useTheme'

// const { initTheme } = useTheme()

// onMounted(() => {
//   initTheme()
// })
</script>