<!-- pages/MedicalTeamPage.vue -->
<template>
  <div class="w-full">

    <!-- Imagen de portada -->
    <HeaderBanner
      title="Nuestros doctores"
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpZNWTGbdMV78BuiI3VIAocCdhj1xelhdQAQm5_-NoOFEzmInBFRiEsJcxZzcsf4PdOaEuIC5ue4_4ctT-Yba4Cy6-Q6qBeK_63nP0lnoVbOWX12aM5pDvXy91XwKPqKZPAOiHjeAbgujzrmw5LA_U8ZFBEI7QlLPXUGb2vyIhBk4ALjCMCLEiHQwYbBhDq4ZUo00J8hdUut7l-qoRowEqcIAsXdbPjZyRZENAQ2aNJHUxmBiTIY314YVwgpoZZ5Ke-b4YR8ZrF1mt"
    />

    <!-- Cards de doctores -->
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <DoctorCard
          name="Dr. Jorge Pablo Cuevas Díaz"
          specialty="TRAUMATOLOGÍA Y ORTOPEDIA"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBDis7IYlejAvwfHIN-rcTH_rdX1oPe6yA7PkzXlepCpEwVu4AI4sesyW37HO11eQQHiz-h3GGB87jrecxPgWB5hd1J_akJ6OQ3WMqKAt7lu-vkylK1T7KSUCQ1sguhHANY7jDYibZi_7Uj7iN32YkTDBdRBAXN3d9IE3gNoYyOS0z_h3igHY8WpCjJcXdnZyzjR5KID6SwZM-L7LCQF5FZfORsI6D84CIQE0hTK60fx5YaO9PwOgtQOdqRBMm2qRthQUsHkXOWWa1o"
          link="#"
        />

        <DoctorCard
          name="Dr. Argenis Mata Hernández"
          specialty="TRAUMATOLOGÍA Y ORTOPEDIA"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDujbzCRgzXbE7o24rjPlL2ECzNjZNC3u6hJG4-HpQY0YZT6D61ovxvGu7LT4fOoc7zdCeeZTpb2gPlPEGgt2bqcpj5nOansaBRB40_WTgfnEo4P0WJY3j0FRiDurVvJk8L3NhnbvEV9-VNvaGGoLdLcYbtklgMEMq5JKUSdBLQaD7tdBQiFjQHi7n9l6GRyfWNG-aO52mRS4Tn3wjvPkXZ9eHV18NnL8Bba-UAfNHr2RqB1p4EL-nPVRaQU5QpAGZVpoVAVMwll7OF"
        />

        <DoctorCard
          name="Dr. José Francisco Ortiz Estrada"
          specialty="RAUMATOLOGÍA Y MÉDICO INTERNISTA"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAMm0zGHRofHaokIpBAw-Lei4_ZHWARUUuUA0XPItB60w-Zkauhl907pzMZ-s_Nsoz1ri9ErNtGaEq_NwFNufOM3_r9hFn9D4-4Ym8aN9K3YMjOViMxtxtgjbN4zKdBHkZpsuR9jLLRKAhzN73BL6_XkLphlwJUZTa_kouw_4b2wgP3fqh7MEoei8C6FOfaZdyWQTVK1-EYk13UE7IxuzY6VgS75hHxlcYT8XiD5TOzF6yHftD6zHrNxgCcJipLmLKJmq3Id9YNpfbL"
        />

        <!-- Agregar aquí tus cards restantes -->

      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import HeaderBanner from '@/components/HeaderBanner.vue'
import DoctorCard from '@/components/medical-directory/DoctorCard.vue';
</script>
