import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
// import env from './env.js'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

const mock=false;
if(mock){
  require('./mock/api.js');
}

// axios.defaults.baseURL='https://www.easy-mock.com/mock/5f19d125e90b07073a7cce17/mimall';
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
// axios.defaults.baseURL=env.baseURL;

axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
