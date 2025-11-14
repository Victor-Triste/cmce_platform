<template>
  <div class="w-full flex justify-center my-10">
    <div
      class="w-full max-w-[1100px] bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
    >
      <div class="w-full h-[500px]">
        <iframe
          :src="mapUrl"
          class="w-full h-full border-0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
          aria-label="Mapa de Google mostrando la ubicación"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  address: string
}

const props = defineProps<Props>()

// Mapa sin API key (modo embed simple)
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  props.address
)}&output=embed`
</script>
