import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index.js'

import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
// import env from './env.js'

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.prototype.$message = Message;

Vue.config.productionTip = false

const mock = false;
if (mock) {
  require('./mock/api.js');
}

// axios.defaults.baseURL='https://www.easy-mock.com/mock/5f19d125e90b07073a7cce17/mimall';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// axios.defaults.baseURL=env.baseURL;

axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject();
  } else {
    return Promise.reject(res);
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
