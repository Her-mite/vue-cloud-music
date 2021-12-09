import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import infiniteScroll from "vue-infinite-scroll";


import "./assets/css/base.css"
import router from '@/router/index.js'
import store from './store/index'

import { request } from "./network/request"; 


const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$request=request
app.use(infiniteScroll)
app.use(router)
app.use(store)
app.mount('#app')