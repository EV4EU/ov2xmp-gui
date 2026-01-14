import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

// pinia store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from '@/router';
app.use(router);

// main app css
import '@/assets/css/app.css';

//vue-meta
import { createHead } from '@vueuse/head';
const head = createHead();
app.use(head);

// set default settings
import appSetting from '@/app-setting';
appSetting.init();

//vue-i18n
import i18n from '@/i18n';
app.use(i18n);

// popper (needed for notifications dropdown)
import Popper from 'vue3-popper';
app.component('Popper', Popper);

app.mount('#app');
