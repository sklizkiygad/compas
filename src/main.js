// import {  createApp } from 'vue'
import { createApp } from "vue/dist/vue.esm-bundler";
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')
