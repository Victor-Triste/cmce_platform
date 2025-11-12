import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { formatDate } from '@cmce/utils'
console.log(formatDate(new Date()))

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
