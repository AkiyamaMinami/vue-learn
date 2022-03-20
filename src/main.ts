import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router) // 执行了router.install
  .mount('#app')
