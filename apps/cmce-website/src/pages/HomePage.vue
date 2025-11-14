<template>
    <!-- Sección hero con fondo gris claro y altura mínima -->
  <div class="relative bg-gray-100 min-h-[600px] overflow-hidden">
    
    <!-- Patrón de fondo decorativo con líneas verticales -->
    <!-- 
      Crea un efecto visual sutil que simula un ambiente médico/hospitalario
      usando un gradiente lineal repetitivo
    -->
    <div class="absolute inset-0 opacity-10">
      <div class="h-full w-full" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(0,0,0,0.1) 100px);"></div>
    </div>

    <!-- Contenedor principal del contenido -->
    <div class="container mx-auto px-4 py-4 md:py-6 relative z-10">
      <!-- Grid de dos columnas en pantallas medianas y grandes -->
      <div class="grid md:grid-cols-2 gap-8 items-center">
        
        <!-- Lado Izquierdo - Contenido de Texto -->
        <div class="space-y-6">
          
          <!-- Overlay azul claro con mensaje promocional -->
          <!-- 
            Este elemento tiene una rotación sutil (-rotate-1) para darle
            un aspecto más dinámico y llamativo
          -->
          <div class="bg-[#60a5fa] p-6 rounded-lg shadow-lg transform -rotate-1 relative z-10">
            <p class="text-[#1e3a8a] font-medium leading-relaxed text-base md:text-lg">
              En CMCE, tu salud y comodidad son nuestra prioridad. ¡Próximamente estaremos en una nueva ubicación para seguir ofreciéndote el mejor servicio!
            </p>
          </div>

          <!-- Texto CMCE grande -->
          <!-- 
            Las letras se muestran individualmente para permitir mejor control
            del espaciado y tamaño responsivo
          -->
          <div class="space-y-2 mt-4">
            <div class="flex items-center gap-1 md:gap-2">
              <span class="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a8a]">C</span>
              <span class="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a8a]">M</span>
              <span class="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a8a]">C</span>
              <span class="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a8a]">E</span>
            </div>
          </div>

          <!-- Cita inspiracional -->
          <!-- 
            Muestra una cita filosófica sobre la importancia de la salud
            para reforzar el mensaje del centro médico
          -->
          <div class="max-w-md mt-6">
            <p class="text-gray-700 italic text-base md:text-lg leading-relaxed">
              "La salud no lo es todo pero sin ella, lo demás no es nada."
            </p>
            <p class="text-gray-600 mt-2 text-sm md:text-base">- A. Schopenhauer</p>
          </div>
        </div>

        <!-- Lado Derecho - Imagen del Doctor -->
        <!-- 
          Muestra una imagen profesional del doctor para generar confianza
          y cercanía con los pacientes.
          Fallback automático: si la imagen no se carga, muestra un placeholder.
          Esto asegura que siempre haya algo visible, mejorando la UX.
        -->
        <div class="relative">
          <div class="relative z-10">
            <img
              src="/images/img1.jpeg"
              alt="Doctor CMCE"
              class="w-full h-auto rounded-lg shadow-2xl object-cover"
              style="max-height: 500px;"
              onerror="this.src='https://via.placeholder.com/600x500/1e3a8a/ffffff?text=Doctor+CMCE'"
            />
          </div>
        </div>
      </div>

      <!-- Botones de Especialidades en la parte inferior -->
      <!-- 
        Estos botones permiten a los usuarios filtrar o navegar a servicios
        específicos según la especialidad médica que buscan.
        Implementados únicamente con utilidades Tailwind para evitar dependencias extra.
      -->
      <div class="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
        <button
          v-for="specialty in specialties"
          :key="specialty.id"
          type="button"
          class="group flex items-center gap-3 rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md transition-all duration-200 min-w-[190px] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          :class="specialty.classes"
          @click="handleSpecialtyClick(specialty.id)"
        >
          <!-- Icono simple construido solo con Tailwind/SVG -->
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white group-hover:bg-white/30 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.66-5.33-4-8-4Z"
              />
            </svg>
          </span>
          <span>{{ specialty.label }}</span>
        </button>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

/**
 * Inicialización del router de Vue Router
 * Se usa para la navegación programática a la página de servicios
 */
const router = useRouter()

/**
 * Definición de las especialidades médicas disponibles
 * 
 * Cada especialidad contiene:
 * - id: identificador único usado para filtrar
 * - label: texto que se muestra en el botón
 * - type: tipo de botón de Ant Design (primary, default, etc.)
 * - class: clases CSS personalizadas para colores y estilos
 * 
 * Los colores están alineados con la paleta del sitio:
 * - Azul oscuro (#1e3a8a): color principal
 * - Azul claro (#60a5fa): color secundario
 * - Azul medio (#3b82f6): color de hover
 */
const specialties = [
  {
    id: 'general',
    label: 'Médicos Generales',
    classes:
      'bg-[#1e3a8a] text-white hover:bg-[#162861] focus-visible:ring-[#60a5fa] focus-visible:ring-offset-[#1e3a8a]',
  },
  {
    id: 'traumatologia',
    label: 'Traumatología',
    classes:
      'bg-[#60a5fa] text-[#0f172a] hover:bg-[#3b82f6] focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-[#60a5fa]',
  },
  {
    id: 'otras',
    label: 'Otras Áreas',
    classes:
      'bg-[#2563eb] text-white hover:bg-[#1e3a8a] focus-visible:ring-[#93c5fd] focus-visible:ring-offset-[#2563eb]',
  },
]

const handleSpecialtyClick = (specialtyId: string) => {
  router.push({ path: '/directorio-medico', query: { especialidad: specialtyId } })
}
</script>
