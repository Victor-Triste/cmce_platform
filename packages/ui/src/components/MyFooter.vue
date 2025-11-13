<template>
  <footer class="bg-neutral-200 dark:bg-neutral-900">
    <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

      <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-900 dark:text-gray-400">
        © {{ currentYear }} - All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>