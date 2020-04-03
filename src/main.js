import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')