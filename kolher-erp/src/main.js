import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
// 请求地址
axios.defaults.baseURL =''


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
