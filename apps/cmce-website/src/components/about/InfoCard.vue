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
    class="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-700 hover:scale-[1.02] cursor-default"
    role="region"
    aria-label="Sección informativa institucional"
  >
    <!-- Imagen de fondo con desenfoque -->
    <div
      class="absolute inset-0 bg-cover bg-center blur-sm scale-105 transition-all duration-700 group-hover:blur-md"
      :style="{ backgroundImage: `url(${image})` }"
      aria-hidden="true"
    ></div>

    <!-- Capa de oscurecimiento -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0b1a35]/80 to-[#0b1a35]/90 opacity-90"></div>

    <!-- Contenido -->
    <div class="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-8 md:px-12 md:py-10">
      <h2
        class="text-2xl md:text-3xl font-bold mb-4 tracking-wide drop-shadow-md"
      >
        {{ title }}
      </h2>
      <p
        class="text-base md:text-lg leading-relaxed max-w-2xl text-gray-200 drop-shadow-sm"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Mejora visual del texto y animación al pasar el ratón */
.group:hover h2 {
  color: #a3c9ff;
  transition: color 0.3s ease;
}
</style>
