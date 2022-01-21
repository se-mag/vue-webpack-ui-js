import { createApp } from 'vue';
import { store } from './store';
import { router } from './router';

import App from './App.vue';
import './assets/sass/main.scss';

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#root');
