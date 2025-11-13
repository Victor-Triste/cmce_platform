<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Button } from 'ant-design-vue'
import type { ButtonProps } from 'ant-design-vue'
// import { LoadingOutlined } from '@ant-design/icons-vue'

// Extendemos las props nativas de Ant Design
interface Props extends /* @vue-ignore */ ButtonProps {
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'middle',
  loading: false,
  disabled: false,
  ghost: false,
  danger: false,
  block: false,
  shape: 'default',
  htmlType: 'button',
})

const emit = defineEmits(['click'])

function handleClick(e: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <Button
    :type="type"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    :ghost="ghost"
    :danger="danger"
    :block="block"
    :shape="shape"
    :html-type="htmlType"
    :href="href"
    :target="target"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <template v-if="icon" #icon>
      <component :is="icon" />
    </template>
    <slot />
  </Button>
</template>




