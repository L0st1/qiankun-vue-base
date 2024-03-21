<template>
  <nav>
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/app-vue-hash/">app1</router-link> | -->
    <!-- <router-link to="/app-vue-history/">app2</router-link> | -->
    <router-link to="/app-vue3">app-vue3</router-link> |
    <a href="/about">a标签跳转</a>
    <el-button @click="routerReplace">点击跳转</el-button>
  </nav>
  <div id="appContainer"></div>
  <router-view />
</template>
<script setup lang="ts">
import { watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 主应用点击 router-link 进行跳转时，无异常
// 进入子应用，点击子应用的 router-link 后，再次点击主应用的 router-link 不会发生跳转——
// 这是因为点击子应用路由后，浏览器的history发生了变更，但主应用路由实例并未得到通知，所以再使用router-link发动变更时会出错
// 使用a标签不会，但a标签会触发重新导航（影响用户体验，与现在前端路由理念相悖）

// 解决如下：
const routerReplace = () => {
  router.replace("/app-vue3");
};
</script>
<style lang="scss">
#base-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
