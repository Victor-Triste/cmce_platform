<template>
  <div class="w-full bg-white">

    <!-- ===========================
      Sección superior: Sobre Nosotros
    ============================ -->
    <section class="w-full overflow-hidden">
      <!-- Encabezado -->
       <HeaderSection
      title="Sobre nosotros"
      background="/images/sobrenosotros.jpg"
      overlayOpacity="0.7"
    />

      <!-- Contenido informativo -->
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-8 md:px-20"
      >
        <!-- Imagen -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/doctora.jpeg"
            alt="Doctora en consultorio"
            class="rounded-lg shadow-xl object-cover w-[90%] md:w-[80%]"
          />
        </div>

        <!-- Texto -->
        <div class="w-full md:w-1/2 text-gray-700">
          <p class="uppercase text-[#3da9fc] font-semibold tracking-wide mb-2">
            Bienvenidos al Centro Médico Costa Esmeralda
          </p>
          <h2
            class="text-3xl md:text-4xl font-extrabold text-[#0b1a35] leading-tight mb-6"
          >
            El mejor cuidado para tu salud
          </h2>

          <!-- Lista de beneficios -->
          <div class="grid grid-cols-2 gap-x-8 gap-y-3 mb-6 text-base text-gray-700">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-[#3da9fc] rounded-full"></span>
              <span>Atención médica de calidad</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-[#3da9fc] rounded-full"></span>
              <span>Profesionales certificados</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-[#3da9fc] rounded-full"></span>
              <span>Infraestructura moderna</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-[#3da9fc] rounded-full"></span>
              <span>Cuidado personalizado</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-[#3da9fc] rounded-full"></span>
              <span>Tecnología avanzada</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-[#3da9fc] rounded-full"></span>
              <span>Compromiso humano</span>
            </div>
          </div>

          <!-- Descripción -->
          <p class="leading-relaxed text-justify mb-3">
            Nuestra historia Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Quisque placerat scelerisque tortor ornare ornare. Quisque
            placerat scelerisque tortor ornare ornare Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
          <p class="leading-relaxed text-justify text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in.
          </p>
        </div>
      </div>
    </section>

    <!-- ===========================
      Sección inferior: Misión, Visión y Valores
    ============================ -->
    <section class="mt-10 px-8 md:px-20 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard
          title="Misión"
          description="Brindar atención médica de calidad mediante la innovación, la empatía y el compromiso con nuestros pacientes."
          image="/images/img1.jpeg"
        />
        <InfoCard
          title="Visión"
          description="Ser un hospital líder en atención médica, reconocido por la excelencia y la innovación tecnológica."
          image="/images/img2.jpeg"
        />
        <InfoCard
          title="Valores"
          description="Compromiso, ética, respeto, empatía y responsabilidad social son los pilares de nuestro servicio."
          image="/images/img2.jpeg"
        />
        
      </div>
    </section>
  </div>
  <!-- ===========================
  Sección de Contacto
=========================== -->
<section class="w-full py-20 px-8 md:px-20 bg-white">
  <h2
    class="text-center text-3xl md:text-4xl font-bold text-[#0b1a35] mb-12"
  >
    Contacto
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

    <!-- Emergencia -->
    <div
      class="rounded-xl p-8 bg-[#cfe0ff] shadow-md hover:shadow-lg transition-all"
    >
      <div class="text-[#0b1a35] mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.265.353-.739.5-1.153.35a12.035 12.035 0 01-7.143-7.143c-.15-.414-.003-.888.35-1.153l1.293-.97c.39-.293.563-.8.417-1.173L7.963 3.102A1.125 1.125 0 006.872 2.25H5.25A2.25 2.25 0 003 4.5v2.25z" />
        </svg>
      </div>

      <h3 class="font-bold text-[#0b1a35] uppercase mb-3">Emergencia</h3>

      <p class="text-[#3da9fc] font-medium">
        (+52) 954 954 9549 <br />
        (+52) 954 954 9549
      </p>
    </div>

    <!-- Ubicación -->
    <div
      class="rounded-xl p-8 bg-[#0b1a35] text-white shadow-md hover:shadow-lg transition-all"
    >
      <div class="mb-4">
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
    <div
      class="rounded-xl p-8 bg-[#cfe0ff] shadow-md hover:shadow-lg transition-all"
    >
      <div class="text-[#0b1a35] mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 013 6.993V6.75" />
        </svg>
      </div>

      <h3 class="font-bold text-[#0b1a35] uppercase mb-3">Correo</h3>

      <p class="text-[#0b1a35]">
        cmce2025@gmail.com <br />
        cmce2026@gmail.com
      </p>
    </div>

    <!-- Horario -->
    <div
      class="rounded-xl p-8 bg-[#cfe0ff] shadow-md hover:shadow-lg transition-all"
    >
      <div class="text-[#0b1a35] mb-4">
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

</template>

<script setup lang="ts">
import InfoCard from '@/components/about/InfoCard.vue'
import HeaderSection from '@/components/about/HeaderSection.vue'
</script>

<style scoped>
section {
  scroll-margin-top: 80px; /* mejora UX con menús fijos */
}
</style>
