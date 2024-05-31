<template>
  <NavView></NavView>
  <div id="appContainer"></div>
  <BaseAside></BaseAside>
  <router-view />
</template>
<script setup lang="ts">
import NavView from "@/views/NavView.vue";
import BaseAside from "@/views/BaseAside.vue";
// 主应用点击 router-link 进行跳转时，无异常
// 进入子应用，点击子应用的 router-link 后，再次点击主应用的 router-link 不会发生跳转—— 因为在子应用发生路由跳转时，是基于子应用的router-base跳转
// 使用a标签不会，但a标签会触发重新导航（影响用户体验，与现在前端路由理念相悖），但可以为其绑定click事件并使用History API

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
  display: grid;
	grid-template-rows: repeat(6, 1fr);
	grid-template-columns: repeat(4, 1fr);
	gap: 0;
}
.base-nav {
  grid-area: 1 / 1 / 2 / 7;
  border-bottom: 1px solid violet;
}
#appContainer {
  width: calc(100vw - 500px);
  height: 100%;
  grid-area: 2 / 1 / 7 / 4;
}
.base-aside {
  min-width: 499px;
  height: 100%;
  grid-area: 2 / 4 / 7 / 5;
  border-left: 1px solid violet;
}
</style>
