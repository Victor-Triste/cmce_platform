import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { formatDate } from '@cmce/utils'
console.log(formatDate(new Date()))

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
