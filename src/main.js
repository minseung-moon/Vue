import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store';

createApp(App)
  .use(router) // 플러그인
  .use(store)
  .mount('#app')