import './config/circle.yml'; // Circle CI config to ignore gh-pages branch (workaround)
import './config/robot.txt'; // For Google bot to crawl the web

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
