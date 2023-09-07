import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //import router to work with

createApp(App).use(router).mount('#app') //add 'use' to work with router
