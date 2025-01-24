import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// reset style
import '@/styles/common.scss'
import { lazyPlugin } from './directives'

// 测试接口函数
// import { getCategoryAPI } from './api/testAPI'
// getCategoryAPI().then(res => {
//   console.log(res)
// })

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
// app.use(ElementPlus)
app.use(lazyPlugin)
app.mount('#app')
