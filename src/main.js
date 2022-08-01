import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';

import customizePrototype from './utils/customizePrototype';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .use(customizePrototype)
    .mount('#app');
