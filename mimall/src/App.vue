<template>
  <div id="app">
    <router-view></router-view>  <!-- <router-view></router-view>里的内容将由根路由对应的组件决定 -->
  </div>
</template>

<script>
import storage from './storage/index.js'
export default {
  data() {
    return {
      res:{}
    }
  },
  mounted(){
    /* this.axios.get('/user/login').then(res => {
      this.res=res;
    }); */
  }
}
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/button.scss';
</style>

