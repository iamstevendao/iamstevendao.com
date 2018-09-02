import './config/circle.yml'; // Import circle config to ignore gh-pages branch (workaround)

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
