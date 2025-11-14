<template>
  <div
    class="relative w-full h-[220px] md:h-[260px] flex items-center justify-center bg-cover bg-center"
    :style="`background-image: url(${background});`"
  >
    <!-- Fondo oscuro -->
    <div class="absolute inset-0" :style="`background: rgba(11, 26, 53, ${overlayOpacity});`"></div>

    <!-- Título -->
    <h1 class="relative text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
      {{ title }}
    </h1>

    <!-- Línea inferior -->
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[6px] bg-[#3da9fc] w-1/3 rounded-t-lg"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  background: string
  overlayOpacity?: number
}

const props = withDefaults(defineProps<Props>(), {
  overlayOpacity: 0.7,
})
</script>
