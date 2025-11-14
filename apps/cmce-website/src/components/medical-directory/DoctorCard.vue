<!-- components/DoctorCard.vue -->
<template>
  <div
    class="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
  >
    <img
      :alt="name"
      :src="image"
      class="w-full h-72 object-cover object-top"
    />

    <div class="text-center">
      <div class="p-6 bg-blue-100 dark:bg-blue-900/40">
        <p class="text-sm text-gray-600 dark:text-gray-300">
          {{ name }}
        </p>

        <h2 class="text-lg font-bold text-gray-800 dark:text-gray-100 mt-1">
          {{ specialty }}
        </h2>
      </div>

      <a-button
        type="primary"
        block
        class="py-3 font-semibold tracking-wider text-sm"
        :href="link"
      >
        CMCE
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  specialty: string
  image: string
  link?: string
}>()
</script>
