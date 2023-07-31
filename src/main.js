import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import router from './router';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faCircleUser, faXmarkCircle)
const pinia = createPinia();

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount('#app')
