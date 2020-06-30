<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/destination">目的地</router-link>
    <router-link to="/freetravel">自由行</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
