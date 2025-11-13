import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@cmce/ui/base.css'
import 'ant-design-vue/dist/reset.css';

import App from './App.vue'
import router from './router'
import { formatDate } from '@cmce/utils'
console.log(formatDate(new Date().toDateString()))

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
