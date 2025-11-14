import { ref, onMounted, onUnmounted } from 'vue'

export function useHeaderHeight() {
  const headerHeight = ref(0)
  let observer: ResizeObserver | null = null

  onMounted(() => {
    const header = document.querySelector('header')
    if (!header) return

    // Guardamos la altura inicial
    headerHeight.value = header.offsetHeight

    // Observamos cambios de tamaño (modo responsive, dark mode, texto más grande, etc)
    observer = new ResizeObserver(() => {
      headerHeight.value = header.offsetHeight
    })

    observer.observe(header)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return {
    headerHeight
  }
}
