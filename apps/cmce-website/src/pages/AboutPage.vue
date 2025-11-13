<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <InfoCard
      title="Misión"
      description="Brindar atención médica de calidad, humanismo y tecnología avanzada al servicio de nuestros pacientes."
      image="/images/img1.jpeg"
    />
    <InfoCard
      title="Visión"
      description="Ser el hospital líder en atención médica, innovación y formación de profesionales de la salud."
      image="/images/img1.jpeg"
    />
    <InfoCard
      title="Valores"
      description="Compromiso, ética, respeto, empatía y responsabilidad social son los pilares de nuestro servicio."
      image="/images/img2.jpeg"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from '@/components/about/InfoCard.vue'
</script>
