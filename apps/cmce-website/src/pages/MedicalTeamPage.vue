<template>
  <div class="w-full">

    <!-- Header -->
     <HeaderSection
      title="Nuestros Especialistas"
      background="/images/directorio_medico.png"
      :overlayOpacity="0.7"
    />

    <!-- Contenido -->
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Swiper
          :modules="swiperModules"
          v-bind="swiperOptions"
          class="mySwiper"
        >
          <SwiperSlide v-for="doctor in doctors" :key="doctor.name" class="my-1 h-auto!">
             <DoctorCard
          :key="doctor.name"
          :doctor="doctor" class="w-full h-full"
        />
          </SwiperSlide>
        </Swiper>


    </main>
  </div>
</template>

<script setup lang="ts">
// import PageHeader from '@/components/PageHeader.vue';
import DoctorCard from '@/components/medical-directory/DoctorCard.vue';
import HeaderSection from '@/components/about/HeaderSection.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { swiperOptions } from '@/constants/medicalSwiperOptions';
import { ref, onMounted, computed } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/grid';

import { Pagination, Grid, Autoplay } from 'swiper/modules'

const isDesktop = ref(false);

onMounted(() => {
  isDesktop.value = window.innerWidth >= 768;
  
  window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 768;
  });
});

const swiperModules = computed(() => {
  return isDesktop.value 
    ? [Pagination, Grid, Autoplay]
    : [Pagination, Autoplay];
});

const doctors = [
  {
    name: "Dr. Jorge Pablo Cuevas Díaz",
    specialty: "TRAUMATOLOGÍA Y ORTOPEDIA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDis7IYlejAvwfHIN-rcTH_rdX1oPe6yA7PkzXlepCpEwVu4AI4sesyW37HO11eQQHiz-h3GGB87jrecxPgWB5hd1J_akJ6OQ3WMqKAt7lu-vkylK1T7KSUCQ1sguhHANY7jDYibZi_7Uj7iN32YkTDBdRBAXN3d9IE3gNoYyOS0z_h3igHY8WpCjJcXdnZyzjR5KID6SwZM-L7LCQF5FZfORsI6D84CIQE0hTK60fx5YaO9PwOgtQOdqRBMm2qRthQUsHkXOWWa1o",
    url: "#",
  },
  {
    name: "Dr. Argenis Mata Hernández",
    specialty: "TRAUMATOLOGÍA Y ORTOPEDIA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDujbzCRgzXbE7o24rjPlL2ECzNjZNC3u6hJG4-HpQY0YZT6D61ovxvGu7LT4fOoc7zdCeeZTpb2gPlPEGgt2bqcpj5nOansaBRB40_WTgfnEo4P0WJY3j0FRiDurVvJk8L3NhnbvEV9-VNvaGGoLdLcYbtklgMEMq5JKUSdBLQaD7tdBQiFjQHi7n9l6GRyfWNG-aO52mRS4Tn3wjvPkXZ9eHV18NnL8Bba-UAfNHr2RqB1p4EL-nPVRaQU5QpAGZVpoVAVMwll7OF",
    url: "#",
  },
  {
    name: "Dr. José Francisco Ortiz Estrada",
    specialty: "RAUMATOLOGÍA Y MEDICO INTERNISTA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMm0zGHRofHaokIpBAw-Lei4_ZHWARUUuUA0XPItB60w-Zkauhl907pzMZ-s_Nsoz1ri9ErNtGaEq_NwFNufOM3_r9hFn9D4-4Ym8aN9K3YMjOViMxtxtgjbN4zKdBHkZpsuR9jLLRKAhzN73BL6_XkLphlwJUZTa_kouw_4b2wgP3fqh7MEoei8C6FOfaZdyWQTVK1-EYk13UE7IxuzY6VgS75hHxlcYT8XiD5TOzF6yHftD6zHrNxgCcJipLmLKJmq3Id9YNpfbL",
    url: "#",
  },
  {
    name: "Dra. Daniela Carrasco Santiago",
    specialty: "MÉDICO GENERAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCib0CKqVeBYYQTwoMm4Xav5X0ZxLXf3Zos2WJNFggWF6cBLXfnymtx1INaPEHwIe_YC1i0kJ49R9IqtMqaJrp3M_-jZtcbtgq5wRV08hOl0FnfNOU75-dZGGAfAbaucoEmrQjDA226r6PxviLurjdG1mR-skl8b8hzIAX9116YVPsKsMOjrh2IXp1iymOaADyLWHBjy5GUw7x4csy-r0yGvn4FbINGjcMaW381TNcsYc5Uxzjm4Xh3oXTJSkyPSq22ARWS68adEfrM",
    url: "#",
  },
  {
    name: "Dr. Mauro Jarquín Martínez",
    specialty: "MÉDICO GENERAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCukbYXuOQ2XSXO1HBQhK0Uk1shJwT1W6Kr-xlLHOpkgCxKKloW5kn6UmmYlZbgiVMK-JnhjLHS69z5T1kliTSL9ddoOJ9pvc9VlGn_l-4QnxxJXR9wmHlBqzeX3Dx4uGF6GBv36sggNVmf5eS3kmzlqdQWjPLfAsfW8V7dSsKLXwLF92DbKcZoWwFBXmHvpsABellenSvhqak0wnrObkqTPWVMwnE65euu6UxxxVpo01D1DCg6oZ7EeUXKWYm2a52Vny_P_SsHzosG",
    url: "#",
  },
  {
    name: "Dra. Isabel Verónica López Ruiz",
    specialty: "MÉDICO GENERAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqcRUJGudBz_oJPTvvEX1zOIFDQHTC64e9qnZr6Cy-0YW2WQniVrqyyhuj9ok7r06JoQegQDY2cWhvgAY2HM74ln_QwgPQ91_edtoveeI4vRmeKDb920anZBHTU6UayuiXMzElmLDsgfBekJBWpDfG9Cg5cSz34tyEaUL8jpm5Dtw8V8HxxZQyxa9xOfcwkHRYtOz1fCWn68-yqmTRfZ9WJNYbMlkvs9TteXi9caT2E4nhj9bVVpdjxREBcFuKYPeiONopaNuthax",
    url: "#",
  },{
    name: "Dra. Daniela Carrasco Santiago",
    specialty: "MÉDICO GENERAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCib0CKqVeBYYQTwoMm4Xav5X0ZxLXf3Zos2WJNFggWF6cBLXfnymtx1INaPEHwIe_YC1i0kJ49R9IqtMqaJrp3M_-jZtcbtgq5wRV08hOl0FnfNOU75-dZGGAfAbaucoEmrQjDA226r6PxviLurjdG1mR-skl8b8hzIAX9116YVPsKsMOjrh2IXp1iymOaADyLWHBjy5GUw7x4csy-r0yGvn4FbINGjcMaW381TNcsYc5Uxzjm4Xh3oXTJSkyPSq22ARWS68adEfrM",
    url: "#",
  },
  {
    name: "Dr. Mauro Jarquín Martínez",
    specialty: "MÉDICO GENERAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCukbYXuOQ2XSXO1HBQhK0Uk1shJwT1W6Kr-xlLHOpkgCxKKloW5kn6UmmYlZbgiVMK-JnhjLHS69z5T1kliTSL9ddoOJ9pvc9VlGn_l-4QnxxJXR9wmHlBqzeX3Dx4uGF6GBv36sggNVmf5eS3kmzlqdQWjPLfAsfW8V7dSsKLXwLF92DbKcZoWwFBXmHvpsABellenSvhqak0wnrObkqTPWVMwnE65euu6UxxxVpo01D1DCg6oZ7EeUXKWYm2a52Vny_P_SsHzosG",
    url: "#",
  },
  {
    name: "Dra. Isabel Verónica López Ruiz",
    specialty: "MÉDICO GENERAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqcRUJGudBz_oJPTvvEX1zOIFDQHTC64e9qnZr6Cy-0YW2WQniVrqyyhuj9ok7r06JoQegQDY2cWhvgAY2HM74ln_QwgPQ91_edtoveeI4vRmeKDb920anZBHTU6UayuiXMzElmLDsgfBekJBWpDfG9Cg5cSz34tyEaUL8jpm5Dtw8V8HxxZQyxa9xOfcwkHRYtOz1fCWn68-yqmTRfZ9WJNYbMlkvs9TteXi9caT2E4nhj9bVVpdjxREBcFuKYPeiONopaNuthax",
    url: "#",
  },
];
</script>

