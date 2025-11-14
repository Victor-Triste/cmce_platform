<template>
  <div
    class="flex flex-col h-full bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
  >
    <img
      :src="doctor.image"
      :alt="doctor.name"
      class="w-full h-72 object-cover object-top shrink-0"
    />

    <div class="text-center">
      <div class="p-6 bg-blue-100 dark:bg-blue-900/40 grow">
        <p class="text-sm text-gray-600 dark:text-gray-300">{{ doctor.name }}</p>
        <h2 class="text-lg font-bold text-gray-800 dark:text-gray-100 mt-1">
          {{ doctor.specialty }}
        </h2>
      </div>

      <a
        class="block w-full bg-primary text-white py-3 font-semibold tracking-wider text-sm hover:bg-opacity-90 transition-colors duration-300 shrink-0"
        :href="doctor.url"
      >
        CMCE
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  doctor: {
    name: string;
    specialty: string;
    image: string;
    url: string;
  };
}>();
</script>

