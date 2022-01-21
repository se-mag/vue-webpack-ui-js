import { createRouter, createWebHashHistory } from 'vue-router';
import App from "../App.vue";
import Blank from '../layouts/partials/Blank.vue';
import Brand from '../layouts/partials/Brand.vue';
import Login from '../pages/Login.vue';
import Navigation from '../layouts/partials/Navigation.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
  {
    path: '/',
    // name: 'App',
    components: {
      default: App,
      banner: Brand,
      navigation: Navigation,
    },
    children: [
      { path: '', name: 'Dashboard', component: Dashboard },
    ]
  },
  {
    path: '/auth',
    // name: 'App',
    components: {
      default: App,
      banner: Brand,
      navigation: Blank,
    },
    children: [
      { path: 'login', name: 'Login', component: Login },
    ]},

  { path: '/:pathMatch(.*)', component: () => '../pages/NotFound.vue' }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
