<script setup lang="ts">
import TopInfoBar from '@cmce/ui/components/header/TopInfoBar.vue'
import MainNavbar from './MainNavbar.vue'
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white">
    <TopInfoBar />
    <MainNavbar />
  </header>
</template>
