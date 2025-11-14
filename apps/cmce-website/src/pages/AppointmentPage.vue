<template>
    <main class="flex-1">
      <section class="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-[minmax(0,1fr)_320px] md:px-10 lg:px-16">
        <div class="space-y-6 rounded-3xl border border-[#e1e7ff] bg-white p-6 shadow-lg">
          <h1 class="text-3xl font-serif font-semibold text-[#1c2660]">Solicitar una cita</h1>
          <p class="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>

          <form class="grid gap-4 text-sm text-white">
            <div class="grid gap-2 sm:grid-cols-2">
              <input type="text" placeholder="Nombre" :class="inputClass" />
              <select :class="inputClass">
                <option hidden>Género</option>
                <option>Femenino</option>
                <option>Masculino</option>
                <option>Otro</option>
              </select>
            </div>
            <div class="grid gap-2 sm:grid-cols-2">
              <input type="email" placeholder="Correo" :class="inputClass" />
              <input type="tel" placeholder="Num. Telefónico" :class="inputClass" />
            </div>
            <div class="grid gap-2 sm:grid-cols-2">
              <select :class="inputClass">
                <option hidden>Día</option>
                <option>Lunes a Viernes</option>
                <option>Sábado</option>
              </select>
              <select :class="inputClass">
                <option hidden>Hora</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 PM</option>
                <option>12:00 AM</option>
                <option>01:00 AM</option>
                <option>02:00 PM</option>
                <option>03:00 AM</option>
                <option>04:00 AM</option>
                <option>05:00 PM</option>
                <option>06:00 PM</option>
                <option>07:00 PM</option>
              </select>
            </div>
            <div class="grid gap-2 sm:grid-cols-2">
              <select :class="inputClass">
                <option hidden>Doctor</option>
                <option>Dr. Pérez</option>
                <option>Dra. López</option>
              </select>
              <select :class="inputClass">
                <option hidden>Departamento</option>
                <option>Medicina General</option>
                <option>Pediatría</option>
                <option>Traumatología</option>
              </select>
            </div>
            <textarea rows="4" placeholder="Mensaje" :class="[inputClass, 'resize-none']"></textarea>

            <button type="button" class="w-full rounded-md bg-[#8eaef8] py-3 text-center text-sm font-semibold uppercase text-[#0b1a35]">
              Enviar
            </button>
          </form>
        </div>

        <aside class="rounded-3xl bg-[#1c2660] p-8 text-white shadow-lg">
          <h2 class="font-serif text-3xl">Horarios</h2>
          <ul class="mt-6 space-y-3 text-sm">
            <li v-for="day in schedule" :key="day.label" class="flex justify-between text-blue-100">
              <span class="uppercase">{{ day.label }}</span>
              <span>{{ day.hours }}</span>
            </li>
          </ul>
          <div class="mt-10 border-t border-white/20 pt-6 text-sm">
            <p class="text-blue-100">Emergencia</p>
            <p class="text-xl font-semibold">(+52) 954 954 9549</p>
          </div>
        </aside>
      </section>

      <section class="container mx-auto px-4 pb-12 md:px-10 lg:px-16">
        <LocationMap :src="mapSrc" title="Mapa Consultorios médicos Costa Esmeralda" />
      </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@cmce/ui/components/MyFooter.vue'
import LocationMap from '@/components/LocationMap.vue'

const schedule = [
  { label: 'Lunes', hours: '09:00 AM - 07:00 PM' },
  { label: 'Martes', hours: '09:00 AM - 07:00 PM' },
  { label: 'Miércoles', hours: '09:00 AM - 07:00 PM' },
  { label: 'Jueves', hours: '09:00 AM - 07:00 PM' },
  { label: 'Viernes', hours: '09:00 AM - 07:00 PM' },
  { label: 'Sábado', hours: '09:00 AM - 07:00 PM' },
  { label: 'Domingo', hours: '09:00 AM - 07:00 PM' },
]

const mapSrc = ref(
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.836054144895!2d-97.07469272421051!3d15.865211744866036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f7ec21f34635%3A0xb9092fd1b014c525!2sConsultorios%20M%C3%A9dicos%20Costa%20Esmeralda!5e0!3m2!1ses-419!2smx!4v1763115131801!5m2!1ses-419!2smx'
)

const inputClass =
  'rounded-md border border-[#1c2660] bg-[#1c2660] px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-1 focus:ring-white'
</script>
