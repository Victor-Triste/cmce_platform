<template>
  <div class="flex items-center gap-4">

    <!-- Toggle de tema -->
    <Button 
      type="text" 
      @click="toggleTheme"
      class="flex items-center justify-center"
    >
      <template #icon>
        <component :is="themeIcon" class="w-5 h-5" />
      </template>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAppConfig } from '@/composables/useAppConfig';
import { Button } from 'ant-design-vue';
import { ManOutlined, SoundOutlined } from '@ant-design/icons-vue';
// Iconos (puedes usar @ant-design/icons-vue o heroicons)


const { theme, toggleTheme } = useAppConfig();


const themeIcon = computed(() => 
  theme.value === 'dark' ? SoundOutlined : ManOutlined
);


</script>