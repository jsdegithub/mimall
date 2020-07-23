<template>
  <div id="app">
    <router-view></router-view>  <!-- <router-view></router-view>里的内容将由根路由对应的组件决定 -->
  </div>
</template>

<script>
import storage from './storage/index.js'
export default {
  mounted(){
    // storage.setItem('a', 1);
    // storage.clear('a', 'user');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

