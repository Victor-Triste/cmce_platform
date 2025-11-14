<template>
  <!-- ===========================
        Sección superior: CONTACTO
  ============================ -->
  <HeaderSection
    title="Contacto"
    background="/images/sobrenosotros.jpg"
    ;overlayOpacity="0.7"
  />

  <!-- ===========================
          MAPA CENTRADO
  ============================ -->
  <section class="w-full flex justify-center bg-white py-10">
    <div class="w-full max-w-5xl">
      <MapLocation
        address="Centro Médico Costa Esmeralda Puerto Escondido Oaxaca"
        class="rounded-xl overflow-hidden shadow-lg"
      />
    </div>
  </section>

  <!-- ===========================
          CUADROS DE CONTACTO
  ============================ -->
  <section class="w-full py-20 px-8 md:px-20 bg-white">
    <h2 class="text-center text-3xl md:text-4xl font-bold text-[#0b1a35] mb-12">
      Contacto
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

      <!-- Emergencia -->
      <div class="rounded-xl p-8 bg-[#cfe0ff] shadow-md hover:shadow-lg transition-all">
        <div class="text-[#0b1a35] mb-4">
          <!-- ICONO EXACTO QUE USAS -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.265.353-.739.5-1.153.35a12.035 12.035 0 01-7.143-7.143c-.15-.414-.003-.888.35-1.153l1.293-.96c.39-.293.563-.8.417-1.173L7.963 3.1A1.125 1.125 0 006.872 2.25H5.25A2.25 2.25 0 003 4.5v2.25z" />
          </svg>
        </div>

        <h3 class="font-bold text-[#0b1a35] uppercase mb-3">Emergencia</h3>

        <p class="text-[#3da9fc] font-medium">
          (+52) 954 954 9549 <br />
          (+52) 954 954 9549
        </p>
      </div>

      <!-- Ubicación -->
      <div class="rounded-xl p-8 bg-[#0b1a35] text-white shadow-md hover:shadow-lg transition-all">
        <div class="mb-4">
          <!-- ICONO EXACTO -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>

        <h3 class="font-bold uppercase mb-3">Ubicación</h3>

        <p>
          Cuarta Nte. 303,<br />
          Centro, 70839<br />
          Puerto Escondido, Oax.
        </p>
      </div>

      <!-- Correo -->
      <div class="rounded-xl p-8 bg-[#cfe0ff] shadow-md hover:shadow-lg transition-all">
        <div class="text-[#0b1a35] mb-4">
          <!-- ICONO EXACTO -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v.24a2.25 2.25 0 01-1.07 1.92l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 013 6.99V6.75z"/>
          </svg>
        </div>

        <h3 class="font-bold text-[#0b1a35] uppercase mb-3">Correo</h3>

        <p class="text-[#0b1a35]">
          cmce2025@gmail.com <br />
          cmce2026@gmail.com
        </p>
      </div>

      <!-- Horario -->
      <div class="rounded-xl p-8 bg-[#cfe0ff] shadow-md hover:shadow-lg transition-all">
        <div class="text-[#0b1a35] mb-4">
          <!-- ICONO EXACTO -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 class="font-bold text-[#0b1a35] uppercase mb-3">Horario</h3>

        <p class="text-[#0b1a35]">
          24 horas <br />
          Todos los días
        </p>
      </div>
    </div>
  </section>

  <!-- ===========================
            FORMULARIO
  ============================ -->
  <section class="w-full px-8 md:px-20 pb-20 bg-white">
    <div class="max-w-5xl mx-auto bg-[#0b1a35] text-white p-10 rounded-2xl shadow-lg">
      <form class="space-y-6">

        <!-- Nombre + Correo -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-2 font-semibold">Nombre</label>
            <input type="text"
              class="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label class="block mb-2 font-semibold">Correo electrónico</label>
            <input type="email"
              class="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>

        <!-- Sujeto -->
        <div>
          <label class="block mb-2 font-semibold">Sujeto</label>
          <input type="text"
            class="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <!-- Mensaje -->
        <div>
          <label class="block mb-2 font-semibold">Mensaje</label>
          <textarea
            class="w-full p-3 rounded-lg h-40 bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        </div>

        <!-- Botón -->
        <button
          class="w-full bg-[#cfe0ff] text-[#0b1a35] font-semibold py-3 rounded-lg hover:bg-[#b8cffc] transition-all">
          Enviar
        </button>

      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderSection from '@/components/about/HeaderSection.vue'
import MapLocation from '@/components/about/MapLocation.vue'
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
