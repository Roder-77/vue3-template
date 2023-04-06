import { createApp } from 'vue';
import { createPinia } from 'pinia';
import BootstrapVue3 from 'bootstrap-vue-3';

import App from './App.vue';
import router from './router';
import './style.css';

import customizePrototype from './plugins/customizePrototype';
import globalListener from './plugins/globalListener';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// icon font
import 'virtual:svg-icons-register';
import svgIcon from './components/common/SvgIcon.vue';

const pinia = createPinia();

createApp(App)
    .use(BootstrapVue3)
    .use(pinia)
    .use(router)
    .use(customizePrototype)
    .use(globalListener)
    .component('svg-icon', svgIcon)
    .mount('#app');
