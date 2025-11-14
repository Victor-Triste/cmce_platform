<script setup lang="ts">
import { Typography } from 'ant-design-vue'
import {
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined
} from '@ant-design/icons-vue'

const icons = {
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined
} as const

const props = defineProps<{
  icon: keyof typeof icons
  title: string
  value: string
  link?: string | null
}>()

const { Text, Link } = Typography
</script>

<template>
  <div class="flex items-center space-x-2">
    <component :is="icons[icon]" class="text-blue-600 dark:text-blue-300 text-xl" />

    <div>
      <Text strong class="text-gray-500 dark:text-gray-400 block">{{ title }}</Text>

      <template v-if="link">
        <Link :href="link" class="text-blue-600 dark:text-blue-300 font-bold">
          {{ value }}
        </Link>
      </template>

      <template v-else>
        <Text class="text-blue-600 dark:text-blue-300 font-bold">{{ value }}</Text>
      </template>
    </div>
  </div>
</template>


