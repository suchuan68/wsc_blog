// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import { serverUrl } from '@/lib/api'


Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.prototype.$url = serverUrl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
