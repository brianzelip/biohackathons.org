import VueRouter from 'vue-router';

import TheHomePage from './components/TheHomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHomePage
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
