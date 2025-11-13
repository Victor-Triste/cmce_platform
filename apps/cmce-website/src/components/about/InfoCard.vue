<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.03] cursor-default"
    role="region"
    aria-label="Información institucional"
  >
    <!-- Imagen de fondo -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${image})` }"
      aria-hidden="true"
    ></div>

    <!-- Overlay oscuro para mejorar contraste -->
    <div class="absolute inset-0 bg-black/10"></div>

    <!-- Contenido -->
    <div class="relative z-10 flex flex-col justify-center items-center text-center text-white p-6 md:p-8">
      <h2 class="text-2xl md:text-3xl font-semibold mb-3">
        {{ title }}
      </h2>
      <p class="text-base md:text-lg leading-relaxed max-w-2xl">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Efecto suave al cargar la imagen (opcional) */
div[aria-hidden="true"] {
  filter: brightness(0.8);
  transition: filter 0.4s ease;
}
div[aria-hidden="true"]:hover {
  filter: brightness(0.7);
}
</style>
