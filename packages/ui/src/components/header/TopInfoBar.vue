<script setup lang="ts">
import ContactItem from "./ContactItem.vue"

import {
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined
} from '@ant-design/icons-vue'
import { Tooltip } from 'ant-design-vue'
</script>

<template>
  <div class=" text-gray-900 dark:text-white shadow-sm">

    <div class="container mx-auto px-4">

      <!-- ============================
           🔹 MÓVIL (compacto)
           Visible sólo en pantallas < md
      ============================ -->
      <div class="flex items-center justify-between py-1 md:hidden">

        <!-- LOGO -->
        <img
          src="/images/logo.jpeg"
          alt="Logo"
          class="h-15 w-auto object-contain"
        />

        <!-- ÍCONOS compactos -->
        <div class="flex items-center gap-4">

          <!-- Emergencia -->
          <Tooltip placement="bottom">
            <template #title>
              <span class="font-semibold">Emergencia:</span> (+52) 954 954 9549
            </template>

            <a href="tel:+529549549549">
              <PhoneOutlined class="text-xl hover:text-blue-600 transition" />
            </a>
          </Tooltip>

          <!-- Horario -->
          <Tooltip placement="bottom">
            <template #title>
              <span class="font-semibold">Horario:</span> 24 Horas, Todos los días
            </template>

            <ClockCircleOutlined class="text-xl hover:text-blue-600 transition" />
          </Tooltip>

          <!-- Ubicación -->
          <Tooltip placement="bottom">
            <template #title>
              <span class="font-semibold">Ubicación:</span> 70839, Centro
            </template>

            <EnvironmentOutlined class="text-xl hover:text-blue-600 transition" />
          </Tooltip>

        </div>
      </div>

      <!-- ============================
           🔹 DESKTOP / TABLET (full)
           Visible en ≥ md
      ============================ -->
      <div class="hidden md:flex items-center justify-between py-2">

        <!-- LOGO -->
        <img
          src="/images/logo.jpeg"
          class="h-20 2xl:h-25 w-auto object-contain"
          alt="Logo"
        />

        <!-- Contact Items completos -->
        <div class="flex gap-10 items-center">

          <ContactItem
            icon="PhoneOutlined"
            title="EMERGENCIA"
            value="(+52) 954 954 9549"
            link="tel:+529549549549"
          />

          <ContactItem
            icon="ClockCircleOutlined"
            title="HORARIO"
            value="24 Horas, Todos los días"
          />

          <ContactItem
            icon="EnvironmentOutlined"
            title="UBICACIÓN"
            value="70839, Centro"
          />

        </div>

      </div>

    </div>
  </div>
</template>



