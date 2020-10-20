import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store/store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './styles/mainStyles.css';
import '~antd/dist/antd.css';
Vue.use(Antd);
// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
import './assets/tailwind.css';

Vue.config.productionTip = false;
// Vue.use(Vuetify);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
