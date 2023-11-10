import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import GUI from '../lib/dynamic-ui.umd';
// import GUI from '../packages/index.js';
// import { Table } from './packages/index.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(GUI);
// Vue.component('g-table', Table);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
