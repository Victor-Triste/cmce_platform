<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Button, Drawer, Menu, Divider } from 'ant-design-vue'
import { MenuOutlined } from '@ant-design/icons-vue'
import BaseButton from '@cmce/ui/components/BaseButton.vue'


const route = useRoute()
const drawerVisible = ref(false)

const openDrawer = () => drawerVisible.value = true
const closeDrawer = () => drawerVisible.value = false

const menuItems = [
  { label: 'Inicio', to: '/', name: 'Home' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros', name: 'About' },
  { label: 'Servicios', to: '/servicios', name: 'Services' },
  { label: 'Directorio Médico', to: '/directorio-medico', name: 'MedicalTeam' },
  { label: 'Contacto', to: '/contacto', name: 'Contact' }
]

// Para cerrar el drawer al navegar (mobile)
const handleNavigation = () => {
  closeDrawer()
}

// Para saber qué item está activo
const isActiveRoute = (routeName: string) => {
  return route.name === routeName
}
</script>

<template>
  <nav
    class="bg-[#202b6d] text-white shadow-md border-b border-blue-800"
    role="navigation"
    aria-label="Menú principal"
  >
    <div class="container mx-auto px-6 h-16 flex justify-between items-center">

      <!-- MENÚ DESKTOP -->
      <div class="hidden md:flex items-center space-x-8">

        <router-link 
          v-for="item in menuItems"
          :key="item.label"
          :to="item.to"
          class="text-white! hover:text-blue-200 transition-colors font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1"
          :class="{ 'text-blue-200 font-semibold': isActiveRoute(item.name) }"
        >
          {{ item.label }}
        </router-link>

      </div>

      <!-- MENÚ MOBILE ICON -->
      <Button
        class="md:hidden! text-white"
        type="text"
        aria-label="Abrir menú"
        @click="openDrawer"
      >
        <MenuOutlined class="text-2xl" />
      </Button>

      <!-- BOTÓN SOLICITAR CITA -->
      <BaseButton
        type="primary"
        shape="round"
        class="hidden md:inline-flex"
        @click="$router.push('/citas')"
      >
        Solicitar Cita
      </BaseButton>

    </div>

    <!-- DRAWER MOBILE -->
    <Drawer
      :visible="drawerVisible"
      placement="left"
      @close="closeDrawer"
      title="Centro Médico Costa Esmeralda"
      :bodyStyle="{ padding: '0' }"
      class="md:hidden"
    >

      <Menu mode="inline" class="border-none text-base font-medium">

        <Menu.Item
          v-for="item in menuItems"
          :key="item.label"
        >
          <router-link
            :to="item.to"
            class="block py-2 px-4 hover:bg-blue-50 hover:text-blue-800 transition-colors"
            :class="{ 'bg-blue-50 text-blue-800': isActiveRoute(item.name) }"
            @click="handleNavigation"
          >
            {{ item.label }}
          </router-link>
        </Menu.Item>

      </Menu>

      <Divider />

      <div class="px-4 py-4">
        <BaseButton 
          type="primary" 
          shape="round" 
          block
          @click="() => { $router.push('/citas'); closeDrawer(); }"
        >
          Solicitar Cita
        </BaseButton>
      </div>

    </Drawer>

  </nav>
</template>

<style scoped>
/* Mejor accesibilidad: resaltado al navegar con teclado */
:deep(a:focus-visible) {
  outline: 2px solid white;
  outline-offset: 2px;
}

/* Estilos para router-link activo */
:deep(.router-link-active) {
  font-weight: 600;
}
</style>

