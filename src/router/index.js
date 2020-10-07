import Vue from 'vue';
import VueRouter from 'vue-router';

import myAccount from '../components/home.vue';
import login from '../components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: login
  },
  {
    path: '/myStrava',
    name: 'login',
    component: myAccount
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
