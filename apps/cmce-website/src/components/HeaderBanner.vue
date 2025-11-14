<!-- components/HeaderBanner.vue -->
<template>
  <div
    class="relative h-64 md:h-80 bg-cover bg-center"
    :style="`background-image: url('${image}')`"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="absolute inset-x-0 bottom-0">
      <div class="relative h-20 flex items-center justify-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white z-10">
          {{ title }}
        </h1>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
}>()
</script>
