<script setup lang="ts">
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, FacebookFilled, InstagramFilled, WhatsAppOutlined } from '@ant-design/icons-vue'
import { Row, Col, Divider, Typography, Space, TypographyTitle, TypographyText } from 'ant-design-vue'

</script>

<template>
  <footer class="bg-[#202b6d] text-white py-10 px-6 md:px-16 text-center sm:text-justify">
    <Row :gutter="[32, 32]" class="mb-8">
      <!-- Columna 1: Información -->
      <Col :xs="24" :md="8">
        <TypographyTitle :level="4" class="text-white!  mb-2">CMCE</TypographyTitle>
        <TypographyText class="text-gray-300! text-sm leading-relaxed">
          Comprometidos con la salud, brindamos atención médica de calidad,
          ética y calidez humana al servicio de la comunidad.
        </TypographyText>
      </Col>

      <!-- Columna 2: Enlaces importantes -->
      <Col :xs="24" :md="8">
        <TypographyTitle :level="5" class="text-white! mb-3">Enlaces importantes</TypographyTitle>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400! hover:text-white!">Solicitar cita</a></li>
          <li><a href="#" class="text-gray-400! hover:text-white!">Directorio médico</a></li>
          <li><a href="#" class="text-gray-400! hover:text-white!">Servicios</a></li>
          <li><a href="#" class="text-gray-400! hover:text-white!">Sobre nosotros</a></li>
        </ul>
      </Col>

      <!-- Columna 3: Contáctanos -->
      <Col :xs="24" :md="8">
        <TypographyTitle :level="5" class="text-white! mb-3">Contáctanos</TypographyTitle>
        <Space direction="vertical" size="small" class="text-gray-300 text-sm">
          <div><MailOutlined class="mr-2" /> contacto@hospitalprueba.mx</div>
          <div><PhoneOutlined class="mr-2" /> +52 (958) 123 4567</div>
          <div><EnvironmentOutlined class="mr-2" /> Av. Salud #123, Puerto Escondido, Oaxaca, México</div>
        </Space>
      </Col>
    </Row>

    <Divider class="bg-gray-300" />

    <!-- Sección inferior -->
    <div class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
      <!-- Redes sociales -->
      

      <!-- Derechos reservados y enlaces -->
      <div>
        <TypographyText class="text-white! block mb-1">©2025 CMCE SA de CV. Todos los derechos reservados.</TypographyText>
        <div class="space-x-4">
          <a href="#" class="hover:underline! text-gray-400! hover:text-white!">Declaración de uso de datos</a>
          <a href="#" class="hover:underline! text-gray-400! hover:text-white!">Términos y condiciones</a>
        </div>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all" aria-label="WhatsApp">
          <WhatsAppOutlined class="text-xl text-green-400" />
        </a>
        <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all" aria-label="Facebook">
          <FacebookFilled class="text-xl text-blue-400" />
        </a>
        <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all" aria-label="Instagram">
          <InstagramFilled class="text-xl text-pink-400" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.2px;
}
</style>


