<template>
  <div class="w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
    <iframe
      :title="title"
      :src="src"
      class="h-80 w-full border-0 md:h-[420px]"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Ubicación en mapa',
})
</script>

