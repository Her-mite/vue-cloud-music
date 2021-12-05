import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import "./assets/css/base.css"

import router from '@/router/index.js'

const app = createApp(App)
installElementPlus(app)
app.use(router)
app.mount('#app')