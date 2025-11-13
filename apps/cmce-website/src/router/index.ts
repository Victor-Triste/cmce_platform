import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue'),
      },
      {
        path: 'sobre-nosotros',
        name: 'About',
        component: () => import('@/pages/AboutPage.vue'),
      },
      {
        path: 'contacto',
        name: 'Contact',
        component: () => import('@/pages/ContactPage.vue'),
      },
      {
        path: 'equipo-medico',
        name: 'MedicalTeam',
        component: () => import('@/pages/MedicalTeamPage.vue'),
      },
      {
        path: 'servicios',
        name: 'Services',
        component: () => import('@/pages/ServicesPage.vue'),
      },
      {
        path: 'citas',
        name: 'Appointments',
        component: () => import('@/pages/AppointmentPage.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFound.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
