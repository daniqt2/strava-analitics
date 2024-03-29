import Vue from 'vue';
import VueRouter from 'vue-router';

import activities from '../components/activities.vue';
import login from '../components/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/login',
    component: login,
    name: 'login',
    meta: { login: true }
  },
  {
    path: '/myStrava',
    name: 'myStrava',
    component: activities
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
